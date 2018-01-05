import React, { Component } from 'react';
import axios from 'axios';
import dictionaryObj from './dictionary';
import OutfitList from './outfitList';
import images from '../scripts/weatherImgs';
// import Main from './Main';
import '../styles/Nav.css';

const imagesArray = [
  { name: 'clear sky', fileLocation: './weatherPic/clear-sky.jpeg' },
  { name: 'few clouds', fileLocation: './weatherPic/few-clouds.jpeg' },
  {
    name: 'scattered clouds',
    fileLocation: './weatherPic/scattered-clouds.jpeg'
  },
  { name: 'broken clouds', fileLocation: './weatherPic/broken-clouds.jpeg' },
  { name: 'shower rain', fileLocation: './weatherPic/shower-rain.jpeg' },
  { name: 'rain', fileLocation: './weatherPic/rain.jpeg' },
  { name: 'thunderstorm', fileLocation: './weatherPic/thunderstorm.jpeg' },
  { name: 'snow', fileLocation: './weatherPic/snow.jpeg' },
  { name: 'mist', fileLocation: './weatherPic/mist.jpeg' }
];
// console.log(images);
// const imageIndex = images.findIndex(image => image.name === weatherDescription);
// if (imageIndex !== -1) {
//   let fileLocation = images.splice(imageIndex.fileLocation, 1); //file location for background
// }

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: { display: 'none' },
      zipcode: '90210',
      weatherDescription: '',
      clothes: [],
      weatherBackgroundImg: { backgroundImage: "url("+ images.brokenClouds + ")" }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModel = this.openModel.bind(this);
    this.closeModel = this.closeModel.bind(this);
  }

  convert = num => {
    /**
     * 1 sunny
     * 2 rainy
     * 3 snowy
     * 4 foggy
     * 5 extreme
     */
    let result = num.toString()[0];
    console.log(result);
    switch (result) {
      case '2':
      case '3':
      case '5':
        return 'rain';
      case '6':
        return 'snow';
      case '7':
        return 'mist';
      case '8':
        return 'clear sky';
      case '9':
        return 'extreme';
      default:
        return 'clear sky';
    }
    return result;
  };

  getImage = name => {
    console.log('get image was called');
    console.log(name);
    let imageIndex = imagesArray.findIndex(
      image => image.name === this.state.weatherDescription
    );
    if (imageIndex !== -1) {
      let image = imagesArray.splice(imageIndex.fileLocation, 1); //file location for background
      image = { backgroundImage: `url(${image[0].fileLocation})` };
      this.setState({ weatherBackgroundImg: image });
    } else {
      name = this.convert(name);
      console.log(name);
      this.setState({ weatherDescription: name });
      let imageIndex = imagesArray.findIndex(image => name === image.name);
      if (imageIndex !== -1) {
        let image = imagesArray.splice(imageIndex.fileLocation, 1); //file location for background
        image = { backgroundImage: `url(${image[0].fileLocation})` };
        console.log(image);
        this.setState({ weatherBackgroundImg: image });
      }
    }
  };

  handleChange(event) {
    this.setState({ zipcode: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.zipcode);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${
          this.state.zipcode
        }&APPID=dd0500a24d177cd2e0ee784ff1a34a81`
      )
      .then(response => {
        if (response.data.weather.length < 2) {
          this.setState({
            weatherDescription: response.data.weather[0].description
          });
          this.getImage(response.data.weather[0].id);
          console.log('only one thing ' + response.data.weather[0].id);
        } else {
          this.setState({
            weatherDescription: response.data.weather[1].description
          });
          this.getImage(response.data.weather[1].id);
        }
      })

      .catch(function(error) {
        console.log(error);
      });
    event.preventDefault();
  }

  openModel() {
    this.setState({ showModal: { display: 'block' } });
  }

  closeModel() {
    this.setState({ showModal: { display: 'none' } });
  }

  componentDidMount() {
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = event => {
      console.log(event.target);
      if (event.target.className === 'middle') {
        this.setState({ showModal: { display: 'none' } });
      }
    };
  }

  render() {
    return (
      <div className="wrapper" style={this.state.weatherBackgroundImg}>
        <div>
          <button onClick={this.openModel} id="bars-btn">
            <i className="fas fa-bars" />
          </button>
          {/* <div id="myModal" className="modal" style={this.state.showModal}>
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <div className="modal-content">
                    <h3>Choose location</h3>
                    <span className="close" onClick={this.closeModel}>
                      &times;
                    </span>
                    <form onSubmit={this.handleSubmit}>
                      <label className="form-group">
                        Zipcode:
                        <input
                          className="form-field"
                          type="text"
                          value={this.state.zipcode}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label className="form-group">
                        Gender:
                        <select className="form-field">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </label>
                      <input
                        className="form-field modal-form-btn"
                        type="submit"
                        value="Save"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <OutfitList />
      </div>
    );
  }
}

export default Nav;

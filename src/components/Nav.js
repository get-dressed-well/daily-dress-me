import React, { Component } from 'react';
import axios from 'axios';
import OutfitList from './outfitList';
import Display from './Display';
import images from '../scripts/weatherImgs';
// import Main from './Main';
import '../styles/Nav.css';

const imagesArray = [
  { name: 'clear sky', fileLocation: images.clearSky },
  { name: 'few clouds', fileLocation: images.fewClouds },
  {
    name: 'scattered clouds',
    fileLocation: images.scatteredClouds
  },
  { name: 'broken clouds', fileLocation: images.brokenClouds },
  { name: 'shower rain', fileLocation: images.showerRain },
  { name: 'rain', fileLocation: images.rain },
  { name: 'thunderstorm', fileLocation: images.thunderstorm },
  { name: 'snow', fileLocation: images.snow },
  { name: 'mist', fileLocation: images.mist }
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: { display: 'none' },
      zipcode: '08401',
      weatherDescription: '',
      temperature: '',
      cityName: '',
      clothes: [],
      weatherBackgroundImg: { backgroundImage: `url(${images.clearSky})` }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  convert = num => {
    let result = num.toString()[0];
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
  };

  getImage = name => {
    let imageIndex = imagesArray.indexOf(name);
    if (imageIndex !== -1) {
      let image = imagesArray.find(image => {
        return image.name === this.state.weatherDescription;
      }); //file location for background
      image = { backgroundImage: `url(${image.fileLocation})` };
      this.setState({ weatherBackgroundImg: image });
    } else {
      name = this.convert(name);
      this.setState({ weatherDescription: name });
      let imageIndex = imagesArray.findIndex(
        image => image.name === this.state.weatherDescription
      );
      if (imageIndex !== -1) {
        let image = imagesArray.find(image => {
          return image.name === this.state.weatherDescription;
        }); //file location for background
        image = { backgroundImage: `url(${image.fileLocation})` };
        this.setState({ weatherBackgroundImg: image });
      }
    }
  };

  handleChange(event) {
    this.setState({ zipcode: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ weatherDescription: '' });
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=${
          this.state.zipcode
        }&APPID=dd0500a24d177cd2e0ee784ff1a34a81`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          cityName: response.data.name,
          temperature:
            Math.round(response.data.main.temp * (9 / 5) - 459.67) + '°'
        });
        if (response.data.weather.length < 2) {
          this.setState({
            weatherDescription: response.data.weather[0].description
          });
          this.getImage(response.data.weather[0].id);
        } else {
          this.setState({
            weatherDescription: response.data.weather[1].description
          });
          this.getImage(response.data.weather[1].id);
        }
        this.closeModal();
      })

      .catch(function(error) {
        console.log(error);
      });
    event.preventDefault();
  }

  openModal() {
    this.setState({ showModal: { display: 'block' } });
  }

  closeModal() {
    this.setState({ showModal: { display: 'none' } });
  }
  conditionalRender() {}
  componentDidMount() {
    this.openModal();
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = event => {
      if (event.target.className === 'middle') {
        this.setState({ showModal: { display: 'none' } });
      }
    };
    if (this.state.temperature === '') {
    }
  }

  render() {
    return (
      <div className="wrapper" style={this.state.weatherBackgroundImg}>
        <div>
          <button onClick={this.openModal} id="bars-btn">
            <i className="fas fa-bars" />
          </button>
          <div id="myModal" className="modal" style={this.state.showModal}>
            <div className="outer">
              <div className="middle">
                <div className="inner">
                  <div className="modal-content">
                    <h3>Choose location</h3>
                    <span className="close" onClick={this.closeModal}>
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
          </div>
        </div>
        {this.state.temperature ? (
          <div
            style={{
              display: 'flex',
              flexFlow: 'column',
              alignItems: 'center'
            }}
          >
            <Display
              temperature={this.state.temperature}
              location={this.state.cityName}
              weatherDescription={this.state.weatherDescription}
            />
            <OutfitList temperature={this.state.temperature} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Nav;

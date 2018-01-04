import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Nav.css';


const images = [
  { name: 'clear sky', fileLocation: './weatherPic/clear-sky.jpeg' }, 
  { name: 'few clouds', fileLocation: './weatherPic/few-clouds.jpeg' },
  { name: 'scattered clouds', fileLocation: './weatherPic/scattered-clouds.jpeg' },
  { name: 'broken clouds', fileLocation: './weatherPic/broken-clouds.jpeg' },
  { name: 'shower rain', fileLocation: './weatherPic/shower-rain.jpeg' },
  { name: 'rain', fileLocation: './weatherPic/rain.jpeg' },
  { name: 'thunderstorm', fileLocation: './weatherPic/thunderstorm.jpeg' },
  { name: 'snow', fileLocation: './weatherPic/snow.jpeg' },
  { name: 'mist', fileLocation: './weatherPic/mist.jpeg' }
  ]

  const imageIndex = images(image => image.name === weatherDescription);
if (imageIndex !== -1) {
  let fileLocation = images.splice(imageIndex.fileLocation,1); //file location for background
}

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: { display: 'none' },
      zipcode: '90210'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModel = this.openModel.bind(this);
    this.closeModel = this.closeModel.bind(this);
  }

  handleChange(event) {
    this.setState({ zipcode: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.zipcode);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/zip=${
          this.state.zipcode
        }&APPID={APIKEY}`
      )
      .then(function(response) {
        console.log(response);
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
      <div>
        <button onClick={this.openModel} id="bars-btn">
          <i className="fas fa-bars" />
        </button>
        <div id="myModal" className="modal" style={this.state.showModal}>
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
        </div>
      </div>
    );
  }
}

export default Nav;

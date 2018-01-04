import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: { display: 'none' },
      zipcode: '90210',
      weatherDescription: '',
      clothes: []
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
        `http://api.openweathermap.org/data/2.5/weather?zip=${
          this.state.zipcode
        }&APPID=dd0500a24d177cd2e0ee784ff1a34a81`
      )
      .then(response => {
        if (response.data.weather.length < 2) {
          this.setState({ weatherDescription: 'response.data.weather[0].id' });
        } else {
          response.data.weather.forEach(id => {
            console.log(id.id);
          });
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

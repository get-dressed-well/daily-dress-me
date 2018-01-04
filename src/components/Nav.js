import React, { Component } from 'react';
import '../styles/Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {zipcode: '90210'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({zipcode: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + typeof this.state.zipcode);
    event.preventDefault();
  }

  componentDidMount() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("bars-btn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
  }

  render() {
    return (
      <div>
        <button id="bars-btn"><i className="fas fa-bars"></i></button>
        <div id="myModal" className="modal">
        <div className="outer">
        <div className="middle">
        <div className="inner">
          <div className="modal-content">
            <h3>Choose location</h3>
            <span className="close">&times;</span>
              <form onSubmit={this.handleSubmit} >
              <label className="form-group">
                Zipcode:
                <input className="form-field" type="text" value={this.state.zipcode} onChange={this.handleChange}/>
              </label>
              <label className="form-group">
                Gender:
                <select className="form-field">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>
              <input className="form-field" type="submit" value="Save" />
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

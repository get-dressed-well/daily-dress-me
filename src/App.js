import React, { Component } from 'react';
import Nav from './components/Nav';
//import Main from './components/Main';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <Main /> */}
      </div>
    );
  }
}

export default App;

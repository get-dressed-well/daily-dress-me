import React, { Component } from 'react';
import Nav from './components/Nav';
import OutfitsPage from './components/OutfitsPage';
//import Main from './components/Main';
import './styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {/* <OutfitsPage /> */}
        {/* <Main /> */}
      </div>
    );
  }
}

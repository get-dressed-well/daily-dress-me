import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';

const fs = require('fs');

let savedCities = null;

const readCities = () => {
  // cache posts after reading them once
  if (!savedCities) {
    const contents = fs.readFileSync('city.list.json', 'utf8');
    savedCities = JSON.parse(contents);
  }
  return savedCities;
};
readCities().then(() => {
  console.log('here are the cities list' + savedCities);
});

const zip = '08401';

axios
  .get(
    `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&APPID=dd0500a24d177cd2e0ee784ff1a34a81`
  )
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

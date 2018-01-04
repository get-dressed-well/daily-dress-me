import axios from 'axios';

const zip = '08401';
const description = '';

axios
  .get(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&APPID=dd0500a24d177cd2e0ee784ff1a34a81`
  )
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

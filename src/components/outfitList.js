import React from 'react';

import Outfit from './outfit.js';

import coldOutfits from '../data/cold-weather-outfits.js';
import warmWeatherOutfit from '../data/warm-weather-outfits.js';

class OutfitList extends React.Component {
  mapOutfitsArray() {
<<<<<<< HEAD
    let temp = parseInt(this.props.temperature,10);
    let outfitList;

    if(temp > 66) {
=======
    let temp = parseInt(this.props.temperature, 10);
    let outfitList;

    if (temp > 66) {
>>>>>>> adf297c4ece9859605db60f41e081a56c2a746ae
      outfitList = warmWeatherOutfit;
    } else {
      outfitList = coldOutfits;
    }

    return outfitList.map((outfit, index) => {
      return (
        <div key={index}>
<<<<<<< HEAD
          <p>Cold Weather Style {index + 1} Outfit</p>
=======
          <p>Outfit Suggestion {index + 1}</p>
>>>>>>> adf297c4ece9859605db60f41e081a56c2a746ae
          <Outfit clothes={outfit.clothes} />
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{ width: '80%', padding: '10px' }}>
        {this.mapOutfitsArray()}
      </div>
    );
  }
}

export default OutfitList;

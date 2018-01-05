import React from 'react';

import Outfit from './outfit.js';

import coldOutfits from '../data/cold-weather-outfits.js';
import warmWeatherOutfit from '../data/warm-weather-outfits.js';

class OutfitList extends React.Component {
  mapOutfitsArray() {
    let temp = parseInt(this.props.temperature, 10);
    let outfitList;

    if (temp > 66) {
      outfitList = warmWeatherOutfit;
    } else {
      outfitList = coldOutfits;
    }

    return outfitList.map((outfit, index) => {
      return (
        <div key={index}>
          <p>Outfit Suggestion {index + 1}</p>
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

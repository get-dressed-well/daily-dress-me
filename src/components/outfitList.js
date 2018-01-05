import React from 'react';

import Outfit from './outfit.js';

import coldOutfits from '../data/cold-weather-outfits.js';
import warmWeatherOutfit from '../data/warm-weather-outfits.js';

class OutfitList extends React.Component {
  mapOutfitsArray() {
    let temp = parseInt(this.props.temperature,10);
    let outfitList;

    if(temp > 60) {
      outfitList = warmWeatherOutfit;
    } else {
      outfitList = coldOutfits;
    }

    return outfitList.map((outfit, index) => {
      return (
        <div key={index}>
          <p>Cold Weather Style {index + 1} Outfit</p>
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

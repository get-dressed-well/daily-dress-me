import React from 'react';

import Outfit from './outfit.js';

import coldOutfits from '../data/cold-weather-outfits.js';
import warmOutfits from '../data/warm-weather-outfits.js';

class OutfitList extends React.Component {

  mapOutfitsArray() {
    return coldOutfits.map((outfit, index) => {
      return (
        <div key={index}>
          <p>Outfit {index + 1}</p>
          <Outfit clothes={outfit.clothes}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{width:"80%", padding: "10px"}}>
        {this.mapOutfitsArray()}
      </div>
    );
  }
}

export default OutfitList;

import React from 'react';

import Outfit from './outfit.js';

import coldOutfits from '../data/cold-weather-outfits.js';

class OutfitList extends React.Component {

  mapOutfitsArray() {
    return coldOutfits.map((outfit, index) => {
      return (
        <div>
          <Outfit key={index} clothes={outfit.clothes}/>
          <p>Test {index}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.mapOutfitsArray()}
      </div>
    );
  }
}

export default OutfitList;

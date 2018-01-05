import React from 'react';

import Outfit from './outfit.js';

import coldOutfits from '../data/cold-weather-outfits.js';

class OutfitList extends React.Component {

  mapOutfitsArray() {
    return coldOutfits.map((outfit, index) => {
      return (
        <div key={index}>
          <p>Outfit {index}</p>
          <Outfit clothes={outfit.clothes}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{width:"80%"}}>
        {this.mapOutfitsArray()}
      </div>
    );
  }
}

export default OutfitList;

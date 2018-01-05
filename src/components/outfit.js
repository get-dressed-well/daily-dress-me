import React from 'react';

import cItem from './cItem.js';

class Outfit extends React.Component {

  mapClothesArray() {
    return this.props.clothes.map((item, index) => {
      return (
        <div>
          <cItem cItem={item}/>
          <p>Test {index}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.mapClothesArray()}
      </div>
    );
  }
}

export default Outfit;

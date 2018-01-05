import React from 'react';

import Item from './Item.js';

class Outfit extends React.Component {

  mapClothesArray() {
    return this.props.clothes.map((item, index) => {
      return (
        <div key={index}>
          <Item cItem={item}/>
          <p>Clothing item {index}</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{border: "1px solid black"}}>
        {this.mapClothesArray()}
      </div>
    );
  }
}

export default Outfit;

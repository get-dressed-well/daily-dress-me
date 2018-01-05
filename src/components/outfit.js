import React from 'react';

import Item from './Item.js';

class Outfit extends React.Component {

  mapClothesArray() {
    return this.props.clothes.map((item, index) => {
      return (
        <div key={index}>
          <Item cItem={item}/>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{border: "1px solid black", padding: "10px", backgroundColor: "rgba(255, 255, 255, 0.6)", borderRadius: "10px"}}>
        {this.mapClothesArray()}
      </div>
    );
  }
}

export default Outfit;

import React, { Component } from 'react';
import OutfitList from './outfitList';
export default class OutfitsPage extends Component {
  render() {
    return(
    <div style={{display: "flex", flexFlow: "column", alignItems: "center"}}>
      <OutfitList />
    </div>
    );
  }
}
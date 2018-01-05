import React, {
  Component
} from 'react';
import OutfitList from './outfitList';
import Display from './Display.js';
export default class OutfitsPage extends Component {
  render() {
    return (
      <div style={{display: "flex", flexFlow: "column", alignItems: "center", background: "#2a68cc"}}>
      {/* Pass Props of temperature and location to display. */}
      <Display />

      {/* Pass the appropriate outfits for the weather to OutfitList*/}
      <OutfitList />
    </div>
    );
  }
}

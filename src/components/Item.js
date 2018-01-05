import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <div style={{display: "flex", padding: "10px", height: "200px", borderRadius: "10px", background: "#ffffff", boxShadow: "2px 3px #888888"}}>
        {/* <img src={require(this.props.cItem.image)}> */}
        <div style={{width: "100px", height: "100%", border: "1px solid black"}}></div>
        <div style={{display: "flex", flexFlow: "column", alignItems: "left"}}>
          <p style={{color: "#fdfdfd", fontFamily: "sans-serif"}}>{this.props.cItem.name}</p>
          <p style={{color: "#fdfdfd", fontFamily: "sans-serif"}}>{this.props.cItem.company}</p>
          <p style={{color: "#fdfdfd", fontFamily: "sans-serif"}}>{this.props.cItem.description}</p>
        </div>
        <p style={{color: "#fdfdfd", fontFamily: "sans-serif"}}><a href={this.props.cItem.link}>more</a></p>
      </div>
    );
  }
}

export default Item;

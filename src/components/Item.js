import React from 'react';

class Item extends React.Component {
  render() {
    console.log(this.props.cItem.image)
    return (
      <div style={{display: "flex", padding: "10px", height: "200px", borderRadius: "10px", background: "#ffffff", boxShadow: "2px 3px #888888", marginBottom: "10px"}}>
        <img style={{width:"200px"}} src={this.props.cItem.image} />
        {/* <div style={{width: "100px", height: "100%", border: "1px solid black"}}></div> */}
        <div style={{display: "flex", flexFlow: "column", alignItems: "left", marginLeft: "20px"}}>
          <p style={{color: "#2a68cc"}}>{this.props.cItem.name}</p>
          <p style={{color: "#2a68cc"}}>{this.props.cItem.company}</p>
          <p style={{color: "#2a68cc"}}>{this.props.cItem.description}</p>
        </div>
        <p style={{color: "#2a68cc"}}><a href={this.props.cItem.link}>more</a></p>
      </div>
    );
  }
}

export default Item;

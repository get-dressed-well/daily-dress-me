import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        {/* <img></img> */}
        <div style={{width: "100px"}}></div>
        <p>{this.props.cItem._id}</p>
        <p>{this.props.cItem.type}</p>
        <p>{this.props.cItem.name}</p>
        <p>{this.props.cItem.description}</p>
        <p>{this.props.cItem.company}</p>
        <a href={this.props.cItem.link}>source</a>
      </div>
    );
  }
}

export default Item;

const woolJacket = {
  _id: 1,
  type: "jacket",
  name: "Melton Wool-Blend Coat",
  description: "A timeless car coat, beautifully crafted in a luxurious wool blend from Mario Bellucci, one of Italy's finest mills.",
  link: "http://bananarepublic.gap.com/browse/product.do?cid=1090112&pcid=1016720&vid=1&pid=795677032",
  image: "./cold-weather/woolCoat.png",
  price: 300.00,
  company: "Banana Republic",
  materials: ["80% virgin wool", "20% nylon"],
  care: "Dry clean only",
  status: "Imported",
}

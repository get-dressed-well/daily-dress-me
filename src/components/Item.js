<<<<<<< HEAD
class Item extends React.Component {
  render() {
    return (
      <div style={{display: "flex", padding: "10px", height: "200px", borderRadius: "10px", background: "rgba((255, 255, 255, 0.5)", boxShadow: "2px 3px #888888", marginBottom: "10px"}}>
        <img style={{width:"200px"}} src={this.props.cItem.image} />
=======
import React from 'react';

class Item extends React.Component {
  render() {
    return (
>>>>>>> 17225e6247006827fc328e29e8dbe812fa47cee7
      <div
        style={{
          display: 'flex',
          padding: '10px',
          height: '200px',
          borderRadius: '10px',
          background: 'rgba((255, 255, 255, 0.5)',
          boxShadow: '2px 3px #888888',
          marginBottom: '10px',
          justifyContent: 'space-between'
        }}
<<<<<<< HEAD
      
        <img style={{ width: '200px' }} src={this.props.cItem.image} alt="" />
        {/* <div style={{width: "100px", height: "100%", border: "1px solid black"}}></div> */}
        <div style={{display: "flex", flexFlow: "column", alignItems: "left", marginLeft: "20px"}}>
          <p style={{color: "#2a68cc"}}>{this.props.cItem.name}</p>
          <p style={{color: "#2a68cc"}}>{this.props.cItem.company}</p>
          <p style={{color: "#2a68cc"}}>{this.props.cItem.description}</p>
=======
      >
        <img style={{ width: '200px' }} src={this.props.cItem.image} alt="" />
        {/* <div style={{width: "100px", height: "100%", border: "1px solid black"}}></div> */}
>>>>>>> 17225e6247006827fc328e29e8dbe812fa47cee7
        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'left',
            marginLeft: '20px'
          }}
<<<<<<< HEAD
        
=======
        >
>>>>>>> 17225e6247006827fc328e29e8dbe812fa47cee7
          <p style={{ color: '#2a68cc' }}>{this.props.cItem.name}</p>
          <p style={{ color: '#2a68cc' }}>{this.props.cItem.company}</p>
          <p style={{ color: '#2a68cc' }}>{this.props.cItem.description}</p>
        </div>
<<<<<<< HEAD
        <p style={{color: "#2a68cc"}}><a href={this.props.cItem.link}>more</a></p>
=======
>>>>>>> 17225e6247006827fc328e29e8dbe812fa47cee7
        <p style={{ color: '#2a68cc' }}>
          <a href={this.props.cItem.link}>more</a>
        </p>
      </div>
    );
  }
}
<<<<<<< HEAD
 
export default Item;
=======

export default Item;
>>>>>>> 17225e6247006827fc328e29e8dbe812fa47cee7

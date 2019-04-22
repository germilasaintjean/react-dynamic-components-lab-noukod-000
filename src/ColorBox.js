import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div className="color-box" style={{opacity:this.props.opacity}}>
        {this.props.opacity > 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/>:""}
=======
      <div className="color-box" style="opacity: 1;">
      <div className="color-box" style="opacity: 0.9;">
      <div className="color-box" style="opacity: 0.8;">
        {/* your conditional code here! */}
>>>>>>> e4a9c567efbe481505fceb6c3835153e99bc31a0
      </div>
    )
  }

}

import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
  	super(props);
  	this.handleClick = this.handleClick.bind(this);
  }	
  handleClick(item) {
  	this.props.onBtnPress(item);
  }
  render() {
  	let length = this.props.data.buttons.length;
    let data = this.props.data.buttons;
    let result = data.map((item, index) => {
      return (<div className="buttonClass" onClick={this.handleClick.bind(this, item)}>{item}</div>);
              });
    return (
      <div className="pBtns">
        {result}
      </div>
    );
  }
}

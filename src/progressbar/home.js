import React, { Component } from 'react';
import ProgressLevel from './ProgressLevel/home';
import ProgressBtn from './ProgressBtn/home';
import ProgressDd from './ProgressDd/home';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.bars,
      ddValue: 0
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.setDDValue = this.setDDValue.bind(this);
  } 
 
  setDDValue(ddValue) {
    this.setState({ddValue: ddValue});
  }
  handleBtnClick(value) {
    let data = this.state.data;
    let resultData = [];
    let ddValue = this.state.ddValue;
    data.forEach(function(item, key) {
        if(ddValue == key) {
          var addValue = item + value;
        } else {
          var addValue = item;
        }
        resultData.push(addValue);
    });
    this.setState({data: resultData});
  }
  render() {
    return (
      <div className="container">
        <div className="Plevel">
          <ProgressLevel data={this.state.data} limit={this.props.data.limit}/>
        </div>
        <div className="menus">
          <ProgressDd data={this.state.data} onDDChange={this.setDDValue}/>
          <ProgressBtn data={this.props.data} onBtnPress={this.handleBtnClick}/>
        </div>
      </div>
    );
  }
}

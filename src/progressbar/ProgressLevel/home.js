import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    let length = this.props.data.length;
    let data = this.props.data;
    let limit = this.props.limit;

    let result = data.map((item, index) => {
      let limitValue = (item * 100 / limit).toFixed();
      let barLength = limitValue < 0 ? 0 : limitValue > 100 ? 100 + '%' : limitValue + '%';
      let color = limitValue > 100 ? 'red' : '#6aafc7';
      return (<div className="progressCollection">
              <div className="progreesLevel">{limitValue < 0 ? 0 : limitValue} %</div>
              <div className="bgColor" style={{'width':  barLength, 'backgroundColor': color}}></div>
              </div>);
              });
    return (
      <div>
        {result}
      </div>
    );
  }
}

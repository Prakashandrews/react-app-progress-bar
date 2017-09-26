import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
   }
   handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onDDChange(event.target.value);
   }
   render() {
    let length = this.props.data.length;
    let data = this.props.data;
    let result = data.map((item, index) => {
    let value = '#Progress '+ (index + 1);
      return (<option value={index} >{value}</option>);
    });

    return (
      <div className="dropDown" >
       <select onChange={this.handleChange} value={this.state.value}>
          {result}
		    </select>
      </div>
    );
  }
}

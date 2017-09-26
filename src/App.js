import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from '../src/progressbar/home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressbar: {}
    };
  }
  componentDidMount() {
    let url = 'http://pb-api.herokuapp.com/bars';
    fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({progressbar: responseJson});
        })
        .catch((error) => {
          
       });

  }
  render() {
    let value = Object.keys(this.state.progressbar).length;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {value > 0 && <ProgressBar data={this.state.progressbar}/>}
      </div>
    );
  }
}

export default App;

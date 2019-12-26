import React, { Component } from 'react'
import Circle from './Circle'
import './App.css';

export class App extends Component {

  constructor(){
    super();
    this.state = ({
      hour: 1,
      minute: 1,
      second: 1
    })
  }

  componentWillMount(){
    setInterval(() => {
      let time = new Date();

      this.setState({
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
      })
    }, 1000);
  }

  render() {
    return (
      <div className="app">
        <div className="text">TIME WAITS FOR NONE</div>
        <Circle type="HR" r ="120" act={this.state.hour}/>
        <Circle type="MIN" r ="180" act={this.state.minute}/>
        <Circle type="S" r ="260" act={this.state.second}/>
      </div>
    )
  }
}

export default App

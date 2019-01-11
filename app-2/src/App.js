import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
  super()
  this.state = {
    arr: ["Hi", "Hello", "Hola", "Salam"]
  }
  }
  
  render() {
    return (
      <div className="App">
        <p> {this.state.arr[0]} </p>
        <p> {this.state.arr[1]} </p>
        <p> {this.state.arr[2]} </p>
        <p> {this.state.arr[3]} </p>

      </div>
    );
  }
}

export default App;

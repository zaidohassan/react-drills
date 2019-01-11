import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }


  }
  
  update(val){
    this.setState({text: val})
  }

  
  render() {
    return (
      <div className="App">
         <input onChange={((e) => this.update(e.target.value))} type= '' />
         <p> {this.state.text }</p>
        
      </div> 
    );
  }
}

export default App;

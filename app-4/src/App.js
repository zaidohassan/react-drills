import React, { Component } from 'react';
import './App.css';
import Login from './Component/login'

class App extends Component {
    constructor(){
      super()
      this.state = {
        user: " ",
        pass: ''
        
      }

      this.username = this.username.bind(this)
      this.password = this.password.bind(this)
      this.alert = this.alert.bind(this)
      
    }
 
  username(val){
      this.setState({user: val})
  }

  password(val){
    this.setState({pass: val})
  }
 
 
 alert(){
   alert(this.state.user + " " + this.state.pass)
 }
 
  render() {
    return (
      <div className="App">
        <input onChange={((e) => this.username(e.target.value))} type= 'text' />
      
    
        <input onChange={((e) => this.password(e.target.value))} type= 'text' 
        />


        <Login 
            update = {this.alert}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Image1 from './Component/image1'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {
        picture: "https://www.google.com/search?q=mustang+shelby+gt500&source=lnms&tbm=isch&sa=X&ved=0ahUKEwibnvHw3ubfAhVSEawKHS5WDlgQ_AUIDigB&biw=1920&bih=970#imgrc=or1w75hwDVlGeM:"
    }
  }
  
  render() {
    return (
      <div className="App">
      <Image1 
      update = {this.state.picture}
      />
      </div>
    );
  }
}

export default App;

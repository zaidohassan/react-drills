import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
      super();
  
      this.state = {
        filteredFood: '',
        foods: [
          "spaghetti",
          "ice cream",
          "sushi",
          "bologna",
          "cheese"
        ]
      }
    }
  

update(val){
    this.setState({filteredFood: val})
}
  //user inputs name to find
  // input automatically filters through array
  // word will show on bottom of input screen

  render() {
    let foodFilter = this.state.foods.filter((e,i) => {
    return e.includes(this.state.filteredFood) 
    }).map((e,i) => {
      return <h2 key={ i }>{ e }</h2>
    })

    console.log(foodFilter);
    
  
    return (
      <div className="App">
        <input onChange={((e) => this.update(e.target.value))} type= 'text' />
        {foodFilter}
        </div>
        
        
    );
  }
}


export default App;

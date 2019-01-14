import React, { Component } from 'react';
import Todolist from './Component/todolist'; 
import './App.css';



class App extends Component {
  constructor(){
    super()
    this.state ={
        str: '',
        arr: []
    }

  
    this.handleTask = this.handleTask.bind(this);
  }

  
addList(val){
  this.setState({str: val})
}

handleTask(){
    let newArr = this.state.arr.map((e,i) => e)
    newArr.push(this.state.str)
    this.setState({arr: newArr})
}
//   this.setState( {
//   list: [...this.state.arr, this.state.str ], 
//   str: '' 
// });
// }



// user inputs data
// user clicks button
// when i click add or button, it will take that string and it to the list of array 
// then display each string on one line


  render() {
    
    let arr1 = this.state.arr.map((e,i) => {
        return ( 
        <Todolist key={i} task={ e }/>
    )
  })

    return (
      <div className="App">
        <h1> My to-do list:</h1>
    <div> 
    <input 
    value= {this.state.str} 
    placeholder= "Enter New Task"
    onChange={(e) => this.addList(e.target.value)} />
    
    <button onClick={this.handleTask}> Add </button> 
        </div>
 
    <br />

    { arr1 }

       </div> 
      
       
    );
  }
}

export default App;

  

      

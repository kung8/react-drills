import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      list : [
        "spaghetti",
        "ice cream",
        "sushi",
        "bologna",
        "cheese"
      ]
    }

  }

    
    
  
  

  render() {
    let foods = this.state.list.map((food,i)=>{
      return <h2 key={i}>{food}</h2>
      
    })

    return (
      <div className="App">
          {foods}
      </div>
    );
  }
}

export default App;

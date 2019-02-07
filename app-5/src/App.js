import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image'

class App extends Component {
  constructor (){
    super ()
    this.state = {
      imgUrl:"https://via.placeholder.com/150"

    }

  }
  render() {
    return (
      <div className="App">
        <Image picture={this.state.imgUrl}/>
      </div>
    );
  }
}

export default App;

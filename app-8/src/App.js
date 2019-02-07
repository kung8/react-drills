import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor (){
    super()
    this.state = {
        films:[]
    }
  }
componentDidMount () {
  axios.get("https://swapi.co/api/people/1/").then(response =>{
  console.log(response)
  this.setState({
      films:response.data.films
  })
  console.log(this.state.films)
  })  
}

// putFilms () {
// axios.put("https://swapi.co/api/people/1/").then(response=>{
//   console.log(response)
//   this.setState({
//     films:response.data.films
//     })
//   })
// }
  render() {
    // let {films} = this.state
    // console.log(this.state)
    let starWarsFilms = this.state.films.map((movie,i)=>{
        return (<h2 key={i}>{movie}</h2>)
    })


    return (
      <div className="App">
          <h1>Films:</h1>
          {starWarsFilms}
      </div>
    );
  }
}

export default App;

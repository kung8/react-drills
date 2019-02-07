import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userInput:"",
            tasks:[]
        }
    }

    handleInput (value) {
        console.log(value)
        this.setState ({
            userInput:value
        })
    }

    addTask = () => {
        this.setState ({
            tasks: [...this.state.tasks,this.state.userInput],
            userInput: ''
        })
    }

    render() {
        let tasks = this.state.tasks.map((item,index)=>{
            return (
                <Todo key={index} task={item}/>
                )
        })
        return (
            <div className="App">
                <h1>My To-Do List</h1>                    
                    <input 
                        value={this.state.userInput} 
                        placeholder="Enter New Chore" 
                        onChange={(e)=>this.handleInput(e.target.value)}/>
                        
                    <button onClick={this.addTask}>Add Task</button>
                    
                    <br/>
                    {tasks}
            </div>
        );
    }
}
          
          export default App;

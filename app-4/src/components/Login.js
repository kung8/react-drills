import React, { Component } from 'react';

class Login extends Component {
  constructor () {
    super()
    this.state = {
        username: "",
        password: "",
    }
  }
    storeUsername (value) {
        this.setState ({
            username:value
        })
    }
    
    storePassword (value) {
        this.setState ({
            password:value
        })
    }

    alertFn (){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }


    render() {
    return (
      <div className="App">
        <input onChange={(e)=>{this.storeUsername(e.target.value)}}/>
        <input onChange={(e)=>{this.storePassword(e.target.value)}}/>
        <button onClick={()=>this.alertFn()}>Login</button>
      </div>
    );
  }
}

export default Login;

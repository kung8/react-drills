import React, { Component } from 'react';

export function Image (props) {
  
    return (
      <div className="App">
       <img src={props.picture}/>
      </div>
    );
  }


export default Image;

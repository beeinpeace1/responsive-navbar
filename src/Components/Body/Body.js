import React, { Component } from 'react';
import './Body.css';
import Header from './../../ComponentSL/Header/Header';
import Todos from './Todo/Todos';

class Body extends Component {
  render() {
    return (
      <div className="container-body">
        <Header/>
        <Todos/>
      </div>
    );
  }
}

export default Body;

import React, { Component } from 'react';
import './Body.css';
import Header from './../../ComponentSL/Header/Header';
import Todos from './Todo/Todos';

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

class Body extends Component {

  render() {
    return (
      <div className="container-body">
        <ScrollToTopOnMount/>  
        <Header/>
        <Todos/>
      </div>
    );
  }
}

export default Body;

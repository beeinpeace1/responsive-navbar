import React, { Component } from 'react';
import './Body.css';
import Header from './Header';

class Body extends Component {
  render() {
    return (
      <div className="container-body">
        <Header/>
        body
      </div>
    );
  }
}

export default Body;

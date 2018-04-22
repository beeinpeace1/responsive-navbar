import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="text-container animated fadeIn">
            <h3>Le Todo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, laborum!</p>
        </div>
      </div>
    );
  }
}

export default Header;

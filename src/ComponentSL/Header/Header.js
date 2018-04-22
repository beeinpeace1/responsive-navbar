import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="text-container animated fadeIn">
            <h3>The Best Todo App</h3>
            <p>Welcome! <br/> Explore all new world class todo app. </p>
        </div>
      </div>
    );
  }
}

export default Header;

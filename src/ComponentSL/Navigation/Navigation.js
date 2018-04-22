import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
    <nav className="navigation-holder">
      <div className="small-only">
        <span>
          <a href="#" onClick={(e)=>{
            e.preventDefault();
            document.getElementsByClassName('nav-side')[0].classList.toggle('nav-side-toggle');
          }}><i className="octicon octicon-grabber"></i></a>
        </span>  
      </div>
      <div className="navigation">
        <div className="nav-left">
          <span>Le Todo</span>
        </div>
        <div className="nav-right">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>
      <div className="nav-side">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
    </nav>
    <div className="pushtop"></div>
    </div>
  )
};

export default Navigation;
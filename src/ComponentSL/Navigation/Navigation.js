import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
    <nav className="navigation-holder">
      <div className="small-only">
        <span>
          <i className="octicon octicon-grabber" onClick={(e)=>{
            document.getElementsByClassName('nav-side')[0].classList.toggle('nav-side-toggle');
          }}></i>
        </span>  
      </div>
      <div className="navigation">
        <div className="nav-left">
          <span> <i className="octicon octicon-checklist"></i> Le Todo</span>
        </div>
        <div className="nav-right">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="nav-side">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
    </nav>
    <div className="pushtop"></div>
    </div>
  )
};

export default Navigation;
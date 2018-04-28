import React, { Component } from 'react';
import Navigation from '../ComponentSL/Navigation/Navigation';
import About from '../ComponentSL/About/About';
import Contact from '../ComponentSL/Contact/Contact';
import Body from '../Components/Body/Body';
import { Route } from 'react-router-dom';

import './Layout.css';

class Layout extends Component {

  render() {
    return (
      <div className="container-main">
        <Navigation/>
        <Route exact path="/" component={Body} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Layout;

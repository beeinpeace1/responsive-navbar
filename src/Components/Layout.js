import React, { Component } from 'react';
import Navigation from '../ComponentSL/Navigation/Navigation';
import About from '../ComponentSL/About/About';
import Contact from '../ComponentSL/Contact/Contact';
import Body from '../Components/Body/Body';
import NotFound from '../ComponentSL/404/404';
import { Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './Layout.css';

class Layout extends Component {

  render() {
    return (
      <div className="container-main">
        <Navigation />
        <Route render={( { location } ) => {
            return (
              <TransitionGroup>
                <CSSTransition timeout={300} key={location.key} classNames="fade">
                  <Switch location={location}>
                    <Route exact path="/" component={Body} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )
        }} />
      </div>
    );
  }
}

export default Layout;

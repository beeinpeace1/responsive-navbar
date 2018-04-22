import React, { Component } from 'react';
import Navigation from '../ComponentSL/Navigation/Navigation';
import Body from '../Components/Body/Body';

import './Layout.css';

class Layout extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-main">
        <Navigation/>
        <Body/>
      </div>
    );
  }
}

export default Layout;

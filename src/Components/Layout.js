import React, { Component } from 'react';
import Navigation from '../ComponentSL/Navigation/Navigation';

import './Layout.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-main">
        <Navigation/>  
      </div>
    );
  }
}

export default App;

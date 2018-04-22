import React, { Component } from 'react';
import './Todos.css';
import Todo from './Todo';

class Todos extends Component {
  render() {
    return (
      <div className="Todos-Container">
        <div className="todos-row">
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/>
          <Todo/>
        </div>
      </div>
    );
  }
}

export default Todos;

import React, { Component } from 'react';
import './Todos.css';
import Todo from './Todo';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.updateTodo = this.updateTodo.bind(this);
  }

  state = {
    todos: [{
      title: "Todo Item 1",
      body: "loem ipsum data bodu adu idu",
      completed: false
    },{
      title: "Todo Item 2",
      body: "loem ipsum data bodu adu idu",
      completed: true
    }],
  };

  updateTodo(e, i, t) {
    e.preventDefault();
    switch(t){
      case 'completed':
        const todos = this.state.todos;
        todos[i].completed = !todos[i].completed
        this.setState({
          todos: todos
        })
      break;
      default:
        console.log("sds");
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="Todos-Container">
        <div className="todos-row">
          {this.state.todos.map((object, index)=>{
            return <Todo 
            id={index} 
            key={object.title + index} 
            title={object.title} 
            body={object.body} 
            updateTodo={this.updateTodo}
            completed={object.completed}
            />
          })}
        </div>
      </div>
    );
  }
}

export default Todos;

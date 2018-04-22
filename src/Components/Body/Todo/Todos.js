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
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
      completed: false
    }, {
      title: "Todo Item 2",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
      completed: true
    }, {
      title: "Todo Item 3",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
      completed: true
    },
    {
      title: "Todo Item 4",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
      completed: true
    },
    {
      title: "Todo Item 5",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
      completed: true
    },
    {
      title: "Todo Item 6",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
      completed: true
    }],
  };

  updateTodo(e, i, t) {
    e.preventDefault();
    switch (t) {
      case 'completed':
        const todos = this.state.todos;
        todos[i].completed = !todos[i].completed
        this.setState({
          todos: todos
        })
        break;
      case 'removetodo':
        const removed = this.state.todos.filter((o, idx) => idx !== i)
        this.setState({
          todos: removed
        })
      break;
      default:
        console.log("Default");
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="Todos-Container">
        <h3 className="list-of-todos">
          List of Todos
        </h3>
        <div className="todos-row">
          {this.state.todos.map((object, index) => {
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

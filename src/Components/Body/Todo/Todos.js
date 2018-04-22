import React, { Component } from 'react';
import './Todos.css';
import Todo from './Todo';
import AddTodo from './AddTodo'
var loremIpsum = require('lorem-ipsum')

class Todos extends Component {
  constructor(props) {
    super(props);
    this.updateTodo = this.updateTodo.bind(this);
  }

  state = {
    todos: [],
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
      case 'addtodo':
        const oldTodo = this.state.todos;
        oldTodo.push(i);
        this.setState({
          todos: oldTodo
        })
        break;
      default:
        console.log("Default");
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(e => e.json())
    .then(res => {
      this.setState({
        todos: res.map(o => Object.assign({}, {body: loremIpsum()}, o))
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <AddTodo updateTodo={this.updateTodo} />
        <div className="Todos-Container">
          <h3 className="list-of-todos">
            <span>List of Todos</span>
            <i className="octicon octicon-plus" onClick={(e) => {
              document.querySelector('.AddTodo').classList.remove('AddTodoShow');
            }}></i>
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
      </div>
    );
  }
}

export default Todos;

import React, { Component } from 'react';
import './Todos.css';
import Todo from './Todo';
import AddTodo from './AddTodo'

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

  render() {
    return (
      <div>
        <AddTodo updateTodo={this.updateTodo}/>
        <div className="Todos-Container">
          <h3 className="list-of-todos">
            <span>List of Todos</span>
            <i className="octicon octicon-plus" onClick={(e)=>{
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

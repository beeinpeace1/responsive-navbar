import React, { Component } from 'react';
import './AddTodo.css';

class AddTodo extends Component {
    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    state = {
        todo: {
            title: "",
            body: "",
            completed: false
        }
    };

    handleChange() {
        let obj = Object.assign({}, this.state.todo, { title: this.refs.title.value, body: this.refs.desc.value})
        this.setState({
            todo: obj,
        })
    }

    updateTodo(e){
        this.setState({
            todo: Object.assign({}, {title: '', body: ''})
        })

        this.props.updateTodo(e, Object.assign({}, this.state.todo), 'addtodo');
        document.querySelector('.AddTodo').classList.remove('fadeIn');
        document.querySelector('.AddTodo').classList.add('fadeOut');
        document.querySelector('.AddTodo').classList.add('AddTodoShow');
        document.querySelector('.AddTodo').classList.remove('fadeOut');
        document.querySelector('.AddTodo').classList.add('fadeIn');
    }

    render() {
        return (
            <div className="AddTodo AddTodoShow animated fadeIn">
                <div className="heading">
                    <h3>Add Todo:</h3>
                    <i className="octicon octicon-x" onClick={(e)=>{
                        document.querySelector('.AddTodo').classList.remove('fadeIn');
                        document.querySelector('.AddTodo').classList.add('fadeOut');
                        document.querySelector('.AddTodo').classList.add('AddTodoShow');
                        document.querySelector('.AddTodo').classList.remove('fadeOut');
                        document.querySelector('.AddTodo').classList.add('fadeIn');
                    }}></i>
                </div>
                <div className="inputs">
                    <input type="text" name="todo_title" id="todo_title" placeholder="Title" ref="title" value={this.state.todo.title} onChange={this.handleChange}/>
                    <input type="text" name="todo_desc" id="todo_desc" placeholder="Description" ref="desc" value={this.state.todo.body} onChange={this.handleChange}/>
                    <input type="button" value="Add" id="add_todo" onClick={this.updateTodo}/>
                </div>
            </div>
        );
    }
}

export default AddTodo;

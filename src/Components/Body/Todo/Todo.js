import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render() {
        return (
            <div className="Todo-Container">
                <div className="Todo-Container-Top">
                    <h3>Todo Item 1</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="Todo-Container-Bottom">
                    <i title="completed" className="octicon octicon-check" onClick={(e)=>{
                        e.preventDefault();
                        e.target.parentNode.parentNode.classList.toggle('completed');
                    }}></i>
                    <i title="delete" className="octicon octicon-x"></i>
                </div>
            </div>
        );
    }
}

export default Todo;

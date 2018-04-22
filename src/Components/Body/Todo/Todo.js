import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render() {
        return (
            <div className={"Todo-Container " + (this.props.completed ? "completed" : "") }>
                <div className="Todo-Container-Top">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.body}</p>
                </div>
                <div className="Todo-Container-Bottom">
                    <i title="completed" className="octicon octicon-check" onClick={(e)=>{
                        this.props.updateTodo(e, this.props.id, 'completed');
                    }}></i>
                    <i title="delete" className="octicon octicon-x" onClick={(e)=>{
                        this.props.updateTodo(e, this.props.id, 'removetodo');
                    }}></i>
                </div>
            </div>
        );
    }
}

export default Todo;

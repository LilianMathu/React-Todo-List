import React, { Component } from 'react'
import PropTypes from "prop-types";

class TodoItem extends Component {
    getStyle = ()=> {
        if(this.props.todo.completed){
            return {
                textDecoration: "line-through"
            }
        } else {
            return {
                textDecoration: "none"
            }
        }
    }
    render() {
        return (
            <div style={ this.getStyle() }>
                <h1>{ this.props.todo.title }</h1>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;

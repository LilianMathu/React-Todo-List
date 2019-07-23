/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class Todos extends Component {
    render() {
      return this.props.todos.map((todo)=> (
          <TodoItem key={todo.id} todo={ todo } markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
      ));
    }
  }

{ /* Todos is the name of the class. todos is the prop name */ }

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
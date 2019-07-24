import React, { Component } from "react";
import Todos from "./Components/Todos";
import Header from "./Components/layout/header";
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Make dinner",
        completed: false
      },
      {
        id: 2,
        title: "walk the dog",
        completed: true
      },
      {
        id: 3,
        title: "Buy groceries",
        completed: true
      },
    ]
  }
  // Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
           { /*toggle state*/ }
          todo.completed = !todo.completed   
        }
        return todo;
      })
    })
  }

  // deleteTodo
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;

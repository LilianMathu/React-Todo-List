import React, { Component } from "react";
import Todos from "./Components/Todos";
import Header from "./Components/layout/header";
import AddTodo from "./Components/addTodo";
import "./App.css";
import uuid from "uuidv4";
class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Make dinner",
        completed: false
      },
      {
        id: uuid(),
        title: "walk the dog",
        completed: true
      },
      {
        id: uuid(),
        title: "Buy groceries",
        completed: true
      }
    ]
  };
  // Toggle complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // deleteTodo
  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //add todo
  addTodo = (id, title) => {
    const newTodo = {
      id: uuid(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos], newTodo})
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;

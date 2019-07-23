import React, { Component } from 'react';
import Todos from "./Components/Todos";

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

  markComplete = ()=> {
    console.log("hello");
}

  render() { 
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;

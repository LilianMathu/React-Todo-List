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
        completed: false
      },
    ]
  }
  render() { 
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;

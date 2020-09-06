import React from 'react';
import './App.css';

import AddTodo from './components/AddTodo';
import TodoBody from './components/TodoBody';
import SideFeatures from './components/SideFeatures';

function App() {
 
  return (
    <div className="App">
      <div className="todo-app">
        <h1 className="title">REDUX - REACT TODO</h1>
        <AddTodo />
        <SideFeatures />
        <TodoBody />
      </div>
    </div>
  );
}

export default App;

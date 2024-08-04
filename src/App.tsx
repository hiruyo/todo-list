import React from 'react';
import './App.css';
import TodoList from "./List/TodoList";
import TodoInput from "./Input/TodoInput";
import TodoHeader from "./Header/TodoHeader";
import Divider from "./Divider/Divider";
import TodoTools from './Tools/TodoListTools';

function App() {
  return (
    <main className="App">
      <TodoHeader />
      <TodoInput />
      <TodoTools />
      <Divider />
      <TodoList />
    </main>
  );
}

export default App;

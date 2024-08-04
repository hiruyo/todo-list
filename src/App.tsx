import React, {useCallback, useState} from 'react';
import './App.css';
import TodoList from "./List/TodoList";
import TodoInput from "./Input/TodoInput";
import TodoHeader from "./Header/TodoHeader";
import Divider from "./Divider/Divider";
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';



export type TodoType = {
  id: number
  text:string
  isChecked: boolean
}

function App() {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTextChange = (text:string) => {
    setText(text)
  }

  const handleSubmit = useCallback(() => {
    setTodos(todos.concat({
      id: Date.now(),
      text,
      isChecked: false
    }))
    setText('');
  }, [todos, text])

  const handleToggleClick = useCallback((id:number) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          isChecked: !todo.isChecked
        }
      }

      return todo
    })

    setTodos(newTodos)
  },[todos])

  const handleRemoveClick = useCallback((id:number) => {
   
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })

    setTodos(newTodos)
  },[todos])

  return (
    <main className="App">
      <TodoHeader count={todos.filter(todo => !todo.isChecked).length}/>
      <TodoInput text={text} onTextChange={handleTextChange} onSubmit={handleSubmit}/>
      <TodoListArea todoCount={todos.length}>
        <TodoListTools />
        <Divider />
        <TodoList todos={todos} onToggleClick={handleToggleClick} onRemoveClick={handleRemoveClick}/>
      </TodoListArea>
    </main>
  );
}

export default App;

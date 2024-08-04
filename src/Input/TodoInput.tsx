import React, {ChangeEvent, FormEvent} from "react";
import css from './TodoInput.module.css';
import { RiChatNewLine } from "react-icons/ri";
import {useInputTodoDispatch, useInputTodoState, useTodoDispatch} from "../Todo/TodoProvider";

const TodoInput = () => {
  const todoDispatch = useTodoDispatch();
  const inputState = useInputTodoState();
  const inputDispatch = useInputTodoDispatch();

  const handleInputChanged = (e:ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: 'change',
      payload: e.target.value
    })
  }

  const handleSubmit = (e:FormEvent) => {
   
    e.preventDefault();

    todoDispatch({
      type: 'add',
      payload: { text: inputState.text }
    })
    inputDispatch({
      type: 'clear'
    })
  }

  return (
    <section className={css.container}>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <input className={css.input} value={inputState.text} onChange={handleInputChanged} placeholder="해야할 Todo"/>
        <button type='submit' className={css.enter} disabled={!inputState.text}><RiChatNewLine/></button>
      </form>
    </section>
  )
}

export default TodoInput

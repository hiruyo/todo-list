import React from "react";
import css from './TodoInput.module.css';
import { RiChatNewLine } from "react-icons/ri";

const TodoInput = () => {
  return (
    <section className={css.container}>
      <form className={css.formContainer}>
        <input className={css.input} value={''} placeholder="해야할 Todo"/>
      </form>
      <button className={css.enter}><RiChatNewLine/></button>
    </section>
  )
}

export default TodoInput

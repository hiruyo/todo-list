import css from './TodoList.module.css'
import TodoItem from "../ListItem/TodoItem";
import {useCallback} from "react";

type TodoListProps = {
  todos: {
    id: number
    text:string
    isChecked: boolean
  }[]
  onToggleClick: (id: number) => void
  onRemoveClick: (id: number) => void
}

const TodoList = (props:TodoListProps) => {
  const handleToggleClick = useCallback((id:number) => {
    props.onToggleClick(id)
  }, [props])

  const handleRemoveClick = useCallback((id:number) => {
    props.onRemoveClick(id)
  }, [props])

  return (
    <section>
    <ol className={css.container}>
      {
        props.todos.map((todo) => {
          return (
            <TodoItem key={todo.id} id={todo.id} text={todo.text} isChecked={todo.isChecked}
                      onToggleClick={handleToggleClick}
                      onRemoveClick={handleRemoveClick} />
          )
        })
      }
    </ol>
    </section>
  )
}

export default TodoList

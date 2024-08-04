import css from './TodoItem.module.css'
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosRemoveCircleOutline } from 'react-icons/io'

interface TodoItemProps {
    text: string
}

const TodoItem = (props:TodoItemProps) => {
  const isChecked = true;
  return (
    <li className={css.container}>
      <BsCheckCircle className={isChecked ? css.checkedCircleIcon : css.unCheckedCircleIcon}/>
      <span> {props.text}</span>
      <IoIosRemoveCircleOutline className={css.removeIcon}/>
    </li>
  )
}

export default TodoItem

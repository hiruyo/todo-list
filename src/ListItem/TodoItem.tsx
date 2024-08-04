import css from './TodoItem.module.css'
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosRemoveCircleOutline } from 'react-icons/io'

type TodoItemProps = {
  key: number | string
  id: number
  text: string
  isChecked: boolean
  onToggleClick: (id: number) => void
  onRemoveClick: (id: number) => void
}

const TodoItem = (props:TodoItemProps) => {
  return (
    <li className={css.container}>
      <BsCheckCircle className={props.isChecked ? css.checkedCircleIcon : css.unCheckedCircleIcon}
                     onClick={() => props.onToggleClick(props.id)}/>
      <span className={props.isChecked ? css.strikethrough : ''}>{props.text}</span>
      <IoIosRemoveCircleOutline className={css.removeIcon} onClick={() => props.onRemoveClick(props.id)}/>
    </li>
  )
}

export default TodoItem

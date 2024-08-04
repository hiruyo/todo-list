import styles from './TodoListTools.module.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";


const TodoListTools = () => {
    return (
        <section className={styles.container}>
            <button className={styles.button}><IoIosCheckmarkCircleOutline className ={styles.checkAllIcon}/> 전체 완료</button>
            <button className={[styles.button, styles.removeAllButton].join(' ')}>
                <MdDelete className ={styles.removeAllIcon}/>전체 삭제</button>
        </section>
    )
}

export default TodoListTools
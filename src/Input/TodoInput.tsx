import { RiChatNewLine } from "react-icons/ri";
import './TodoInput.css'
const TodoInput = () => {
    return (
        <section className={'container'}>
            <form className={'formContainer'}>
                <input className={'input'}/>
            </form>
            <button><RiChatNewLine/></button>
        </section>
    )
}

export default TodoInput
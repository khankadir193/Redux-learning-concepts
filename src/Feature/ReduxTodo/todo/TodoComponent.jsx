import { useDispatch, useSelector } from "react-redux";
import { addItem } from '../TodoSlice/todoSlice';
import { useState } from "react";
import './todoStyles.css'
const TodoExample = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch();
    const todoValue = useSelector((state) => state.todoState.todos)


    const handleAdd = (e) => {
        dispatch(addItem(value));
        setValue('');
    }

    return (
        <div className="todo-container">
            <div className="todo-subcontainer">
                <input type="text" placeholder="type your text here.." onChange={(e) => setValue(e.target.value)} value={value} />
                <button onClick={handleAdd}>AddItem</button>
            </div>

            {
                todoValue.map((item) => {
                    return (
                        <div className="todo-item">
                            <span>{item.text}</span>
                            <button>Delete</button>
                        </div>
                    )
                })
            }
            {/* <p>{JSON.stringify(todoValue)}</p> */}
        </div>
    );
}
export default TodoExample;
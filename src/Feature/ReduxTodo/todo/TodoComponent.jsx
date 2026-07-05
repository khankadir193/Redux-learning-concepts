import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from '../TodoSlice/todoSlice';
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

    const handleDelete = (id) => {
        console.log('handle delete....',id)
        dispatch(deleteItem(id))

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
                        <div className="todo-item" key={item.id}>
                            <span>{item.text}</span>
                            <button onClick={()=>handleDelete(item.id)}>Delete</button>
                        </div>
                    )
                })
            }
            {/* <p>{JSON.stringify(todoValue)}</p> */}
        </div>
    );
}
export default TodoExample;
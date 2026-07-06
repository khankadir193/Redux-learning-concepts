import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, editTodo, toggleTodo } from '../TodoSlice/todoSlice';
import { useState } from "react";
import './todoStyles.css'
const TodoExample = () => {
    const [value, setValue] = useState('');
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState('');
    const [editId, setEditId] = useState(null);

    const dispatch = useDispatch();
    const todoValue = useSelector((state) => state.todoState.todos)


    const handleAdd = (e) => {
        dispatch(addItem(value));
        setValue('');
    }

    const handleDelete = (id) => {
        // console.log('handle delete....',id)
        dispatch(deleteItem(id))

    };

    const handleCheckbox = (id) => {
        dispatch(toggleTodo(id));
    }

    const handleUpdate = () => {
        setEdit(false);
        dispatch(editTodo({
            id: editId,
            text: editText
        }))
    };

    const handleChange = (e) => {
        console.log('e...', e.target.value);
        setEditText(e.target.value);
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
                            <input type="checkbox" checked={item.completed} onChange={() => handleCheckbox(item.id)} />
                            {
                                editId === item.id && edit ? <input type="text" placeholder="update your text" value={editText} onChange={(e) => handleChange(e)} />
                                    : <span>{item.text}</span>
                            }
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                            {edit ? <button onClick={handleUpdate}>Update</button> :
                                <button onClick={() => {
                                    setEdit(true),
                                        setEditId(item.id)
                                    setEditText(item.text)
                                }}>Edit</button>
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}
export default TodoExample;
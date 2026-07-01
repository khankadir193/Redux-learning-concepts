import { useDispatch, useSelector } from "react-redux";
import { addItem } from '../TodoSlice/todoSlice';
import { useState } from "react";

const TodoExample = () => {
    const [value,setValue] = useState('');

    const dispatch = useDispatch();
    const todoValue = useSelector((state)=> state.todoState.todos)


    const handleAdd = (e) => {
        dispatch(addItem(value));
        setValue('');
    }

    return (
        <div>
            <input type="text" placeholder="type your text here.." onChange={(e)=> setValue(e.target.value)} value={value}/>
            <button onClick={handleAdd}>AddItem</button>
            <p>{JSON.stringify(todoValue)}</p>
        </div>
    );
}
export default TodoExample;
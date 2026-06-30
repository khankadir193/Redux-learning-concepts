import { useDispatch, useSelector } from "react-redux";
import {increment,decrement} from '../CounterSlice/counterSlice'

const CounterComponent = ()=>{
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h4>Redux Counter</h4>
            <p>{count}</p>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
        </div>
    )
};
export default CounterComponent;
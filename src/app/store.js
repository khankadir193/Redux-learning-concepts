import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Feature/ReduxCounter/CounterSlice/counterSlice';
import todoSlice from '../Feature/ReduxTodo/TodoSlice/todoSlice';

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todoState:todoSlice
    }
});

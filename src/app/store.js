import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Feature/ReduxCounter/CounterSlice/counterSlice';

export const store = configureStore({
    reducer:{
        counter:counterReducer
    }
});

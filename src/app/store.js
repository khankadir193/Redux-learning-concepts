import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Feature/ReduxCounter/CounterSlice/counterSlice';
import todoSlice from '../Feature/ReduxTodo/TodoSlice/todoSlice';
import themeSlice from "../Feature/ThemeToggle/ThemeToggleSlice/themeSlice";
import profileSlice from '../Feature/UserProfile/ProfileSlice/profileSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todoState:todoSlice,
        toggleTheme:themeSlice,
        profileData:profileSlice
    }
});

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addItem: (state, action) => {
            console.log('state..',state.todos,'\n','action...',action);

            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
        }
    }
});
export const { addItem } = todoSlice.actions;
export default todoSlice.reducer;
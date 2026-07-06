import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {
        addItem: (state, action) => {
            // console.log('state..', state.todos, '\n', 'action...', action);

            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            })
        },
        deleteItem: (state, action) => {
            console.log('id.....for delete item for redux', action);
            // const newItem = [...state.todos];
            // console.log('newItem...',newItem);
            // const result = newItem.filter((item)=>(
            //     item.id !== id
            // ));
            // console.log('delete filter redux....',result);
            const id = action.payload;
            state.todos = state.todos.filter(
                item => item.id !== id
            );
        }
    }
});
export const { addItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
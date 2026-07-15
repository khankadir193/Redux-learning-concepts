import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profile: {
            name: '',
            email: '',
            age: ''
        }
    },
    reducers: {
        updateProfile: (state, action) => {
            console.log(state, 'state', action, 'action');
            state.profile = action.payload;
        },
        resetProfile:()=>{
            state.profile = {};
        }
    }
});

export const { updateProfile ,resetProfile} = profileSlice.actions;
export default profileSlice.reducer;

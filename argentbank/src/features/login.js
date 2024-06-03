import { createSlice } from '@reduxjs/toolkit';

const connectSlice = createSlice({
    name: 'login',
    initialState: false,
    reducers: {
        set: (state, action) => {
            return action.payload;
        },
    },
});

const { actions, reducer } = connectSlice;

export const { set } = actions;

export default reducer;

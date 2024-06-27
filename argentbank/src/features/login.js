import { createSlice } from '@reduxjs/toolkit';

const connectSlice = createSlice({
    name: 'login',
    initialState: {
        connected: false,
        token: null,
    },
    reducers: {
        setConnected: (draft, action) => {
            draft.connected = action.payload;
        },
        setToken: (draft, action) => {
            draft.token = action.payload;
        },
    },
});

const { actions, reducer } = connectSlice;

export const { setConnected, setToken, getToken } = actions;

export default reducer;

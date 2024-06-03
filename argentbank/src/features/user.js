import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        firstName: '',
        lastName: '',
        userName: '',
    },
    reducers: {},
});

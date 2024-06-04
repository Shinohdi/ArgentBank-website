import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login.js';
import userReducer from '../features/user.js';

export default configureStore({
    reducer: {
        login: loginReducer,
        user: userReducer,
    },
});

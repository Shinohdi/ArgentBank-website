import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/login.js';

export default configureStore({
    reducer: {
        login: loginReducer,
    },
});

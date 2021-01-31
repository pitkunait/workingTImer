import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { timerReducer } from './reducers';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
});

const store = configureStore({
    reducer: {
        timer: timerReducer,
    },
    middleware: customizedMiddleware,
});

export default store;

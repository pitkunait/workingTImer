import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { timerReducer } from './reducers';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
});

const reducers = combineReducers({
    timer: timerReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: customizedMiddleware,
});

export default store;

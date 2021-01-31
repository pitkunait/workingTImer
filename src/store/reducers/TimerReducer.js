import { createReducer } from '@reduxjs/toolkit';
import Category from '../../data/Category';

const initialState = {
    categories: [new Category('Time With Nikita')],
    selectedCategory: null,
};

const timerReducer = createReducer(initialState, {
    ADD_CATEGORY: (state, action) => {
        state.categories.push(action.payload);
    },
    REMOVE_CATEGORY: (state, action) => {
        state.categories.splice(action.payload, 1);
    },
    SELECT_CATEGORY: (state, action) => {
        if (state.categories[action.payload]) {
            state.selectedCategory = action.payload;
        }
    },
    START_SELECTED_TIMER: (state) => {
        if (state.selectedCategory !== null) {
            state.categories[state.selectedCategory].startTimer();
        }
    },
    STOP_SELECTED_TIMER: (state) => {
        if (state.selectedCategory !== null) {
            state.categories[state.selectedCategory].stopTimer();
        }
    },
    RESTORE_OBJECTS: (state, action) => {
        state.categories = state.categories.map((i) => Category.fromObject(i));
        state.categories.forEach((i) => {
            i.timer && i.startTimer();
        });
    },
    TICK_TIMER: (state) => {
        state.categories = [...state.categories];
    },
});

export default timerReducer;

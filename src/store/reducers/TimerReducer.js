import { createSlice } from '@reduxjs/toolkit';
import Category from '../../data/Category';

const initialState = {
    categories: [new Category('Time With Nikita')],
    selectedCategory: null,
};

const timerReducer = createSlice({
    name: 'Times',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        removeCategory: (state, action) => {
            state.categories.splice(action.payload, 1);
        },
        selectCategory: (state, action) => {
            if (state.categories[action.payload]) {
                state.selectedCategory = action.payload;
            }
        },
        startSelectedTimer: (state) => {
            if (state.selectedCategory !== null) {
                state.categories[state.selectedCategory].startTimer();
            }
        },
        stopSelectedTimer: (state) => {
            if (state.selectedCategory !== null) {
                state.categories[state.selectedCategory].stopTimer();
            }
        },
        restoreProject: (state, action) => {
            state.categories = state.categories.map((i) =>
                Category.fromObject(i),
            );
            state.categories.forEach((i) => {
                i.timer && i.startTimer();
            });
        },
        tickTimer: (state) => {
            state.categories = [...state.categories];
        },
    },
});

export default timerReducer.reducer;
export const {
    addCategory,
    removeCategory,
    selectCategory,
    restoreProject,
    startSelectedTimer,
    stopSelectedTimer,
    tickTimer,
} = timerReducer.actions;

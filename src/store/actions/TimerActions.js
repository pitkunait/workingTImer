import { createAction } from '@reduxjs/toolkit';

export const addCategory = createAction('ADD_CATEGORY');
export const removeCategory = createAction('REMOVE_CATEGORY');
export const selectCategory = createAction('SELECT_CATEGORY');

export const startSelectedTimer = createAction('START_SELECTED_TIMER');
export const stopSelectedTimer = createAction('STOP_SELECTED_TIMER');
export const tick = createAction('TICK_TIMER');

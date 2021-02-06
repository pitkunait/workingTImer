import { createSlice } from '@reduxjs/toolkit';

const egUser = {
    name: 'Vasja',
    timeSpent: 0,
};

const initialState = {
    users: [egUser],
    selectedUser: null,
};

const UserReducer = createSlice({
    name: 'User',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            state.users.splice(action.payload, 1);
        },
        selectUser: (state, action) => {
            if (state.users[action.payload]) {
                state.selectedUser = action.payload;
            }
        },
    },
});

export default UserReducer.reducer;
export const { addUser, removeUser, selectUser } = UserReducer.actions;

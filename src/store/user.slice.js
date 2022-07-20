import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
  },
  reducers: {
    login(state, { payload }) {
      state.currentUser = payload.user;
    },
    signUp(state, { payload }) {
      state.currentUser = payload;
    },
    logOut(state, action) {
      state.currentUser = null;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

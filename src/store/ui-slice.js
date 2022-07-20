import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isSignInFormVisible: false,
    isSignUpFormVisible: false,
    isLoading: false,
  },
  reducers: {
    toggleSignInFormStatus(state) {
      state.isSignInFormVisible = !state.isSignInFormVisible;
    },
    toggleSignUpFormStatus(state) {
      state.isSignUpFormVisible = !state.isSignUpFormVisible;
    },
    showNotification(state, action) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

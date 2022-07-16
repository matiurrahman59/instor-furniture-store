import { createSlice } from '@reduxjs/toolkit';

const categories = createSlice({
  name: 'category',
  initialState: {
    categoriesMap: {},
  },
  reducers: {
    replaceCategoriesMap(state, action) {
      state.categoriesMap = action.payload;
    },
  },
});

export const categoriesActions = categories.actions;
export default categories.reducer;

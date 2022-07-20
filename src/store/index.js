import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart.slice';
import categoriesReducer from './categories.slice';
import userReducer from './user.slice';
import uiReducer from './ui-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoriesReducer,
    user: userReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

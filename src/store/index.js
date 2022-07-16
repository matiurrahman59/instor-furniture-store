import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart.slice';
import categoriesReducer from './categories.slice';

const store = configureStore({
  reducer: { cart: cartReducer, category: categoriesReducer },
});

export default store;

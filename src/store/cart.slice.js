import { createSlice } from '@reduxjs/toolkit';

// const updateCartItems = (items) => {
//   const newQuantity = items.reduce(
//     (total, cartItem) => total + cartItem.quantity,
//     0
//   );
//   const newTotal = items.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   );
//   return {
//     newQuantity,
//     newTotal,
//   };
// };

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

      ////////////////////// not working
      // const { totalQuantity, totalPrice } = updateCartItems(state.items);
      // console.log(totalQuantity, totalPrice);
      // state.totalQuantity = totalQuantity;
      // state.totalPrice = totalPrice;
      ///////////////////////////////////

      // update cartItems
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }

      // update cartItems
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
    clearItemFromCart(state, action) {
      const item = action.payload;
      state.totalQuantity = state.totalQuantity - item.quantity;
      state.totalPrice = state.totalPrice - item.price;
      state.items = state.items.filter((cartItem) => cartItem.id !== item.id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

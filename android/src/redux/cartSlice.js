// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {}  // { [productId]: { product, quantity } }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const prod = action.payload;
      if (state.items[prod.id]) {
        state.items[prod.id].quantity++;
      } else {
        state.items[prod.id] = { product: prod, quantity: 1 };
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
    },
    increment: (state, action) => {
      state.items[action.payload].quantity++;
    },
    decrement: (state, action) => {
      const entry = state.items[action.payload];
      if (entry.quantity > 1) {
        entry.quantity--;
      } else {
        delete state.items[action.payload];
      }
    },
    clearCart: (state) => {
      state.items = {};
    }
  }
});

export const { addToCart, removeFromCart, increment, decrement, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

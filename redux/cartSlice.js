import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: {},
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment(state, action) {
      state.data = action.payload;
    },
    decrement(state, action) {
      state.data = action.payload;
    },
    addToCart(state, action) {
      state.data = action.payload;
    },
  },
});

export const {increment, decrement, addToCart} = cartSlice.actions;

export default cartSlice.reducer;

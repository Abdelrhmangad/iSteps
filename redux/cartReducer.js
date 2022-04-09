import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  showCart: false,
  items: [],
  total: 0,
};

const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      state.showCart = !state.showCart;
    },
    addToCart: (state, action) => {
      const isItemExist = state.items.find((item) => item.name === action.payload.name);
      if (isItemExist) {
        state.showCart = true;
      } else {
        state.items.push(action.payload);
        state.showCart = true;
      }
    },
    clearCart: (state, action) => {
      state.showCart = false;
      state.items = [];
    },
  },
});

export default globalDataSlice.reducer;
export const { toggleCart, addToCart, clearCart } = globalDataSlice.actions;

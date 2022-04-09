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
        isItemExist.quantity += 1;
        state.showCart = true
      } else {
        state.items.push(action.payload);
        state.total += parseFloat(action.payload.price);
        state.showCart = true
      }
    },
    removeFromCart: (state, action) => {
      const { name, price, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.name === name);
      state.items.splice(index, 1);
      state.total -= parseFloat(price);
    },
    updateCart: (state, action) => {
      const { name, quantity, price } = action.payload;
      const index = state.items.findIndex((item) => item.name === name);
      if (state.cart.items[index].quantity === 1 && quantity === -1) {
        state.items.splice(index, 1);
        state.total -= parseFloat(price);
      } else {
        state.items[index].quantity = state.items[index].quantity + quantity;
        state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      }
    },
    emptyCart: (state, action) => {
      state.showCart = false;
      state.items = [];
    },
  },
});

export default globalDataSlice.reducer;
export const { toggleCart, addToCart, emptyCart, removeFromCart, updateCart } =
  globalDataSlice.actions;

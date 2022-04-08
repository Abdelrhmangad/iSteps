import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  toggleCart: false,
  items: [],
  total: 0,
};

const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      state.toggleCart = !state.toggleCart;
    },
    addToCart: (state, action) => {
      const isItemExist = state.items.find((item) => item.id === action.payload.id);
      if (isItemExist) {
        isItemExist.quantity += 1;
        // isItemExist.price = isItemExist.price * isItemExist.quantity;
      } else {
        state.items.push(action.payload);
        state.total += parseFloat(action.payload.price);
      }
    },
    removeFromCart: (state, action) => {
      const { id, price, quantity } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      state.items.splice(index, 1);
      state.total -= parseFloat(price);
    },
    updateCart: (state, action) => {
      const { id, quantity, price } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (state.cart.items[index].quantity === 1 && quantity === -1) {
        state.items.splice(index, 1);
        state.total -= parseFloat(price);
      } else {
        state.items[index].quantity = state.items[index].quantity + quantity;
        state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
      }
    },
    emptyCart: (state, action) => {
      state.cart = {
        items: [],
      };
    },
  },
});

export default globalDataSlice.reducer;
export const { toggleCart, addToCart, emptyCart, removeFromCart, updateCart } =
  globalDataSlice.actions;

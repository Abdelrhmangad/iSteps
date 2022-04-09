import { createSlice } from "@reduxjs/toolkit";
import { products } from "components/data";

const DEFAULT_ORDER = "asc";

const initialState = {
  products: products,
  activePage: 1,
  numberOfProductsToDisplay: 6,
  productsToBeDisplayed: [],
  sortKey: "price",
  sortOrder: "asc", //asc | desc
};

const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    updateActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    setProductsCountToBeDisplayed: (state, action) => {
      state.numberOfProductsToDisplay = action.payload;
    },
    updateProductsToBeDisplayed: (state, action) => {
      state.productsToBeDisplayed = state.products.slice(
        (state.activePage - 1) * state.numberOfProductsToDisplay,
        state.activePage * state.numberOfProductsToDisplay
      );
    },
    sortProductsInStore: (state, action) => {
      let sortKey = action.payload.sortKey;
      state.productsToBeDisplayed.sort((a, b) => {
        if (a[sortKey] > b[sortKey]) return state.sortOrder === DEFAULT_ORDER ? 1 : -1;
        if (a[sortKey] < b[sortKey]) return state.sortOrder === DEFAULT_ORDER ? -1 : 1;
      });
      state.sortKey = action.payload.sortKey;
    },
    toggleSortingOrder: (state, action) => {
      let sortKey = state.sortKey;
      let newSortOrder = state.sortOrder === "desc" ? "asc" : "desc";
      state.productsToBeDisplayed.sort((a, b) => {
        if (a[sortKey] > b[sortKey]) return newSortOrder === DEFAULT_ORDER ? 1 : -1;
        if (a[sortKey] < b[sortKey]) return newSortOrder === DEFAULT_ORDER ? -1 : 1;
      });
      state.sortOrder = newSortOrder;
    },
  },
});

export default globalDataSlice.reducer;
export const {
  updateActivePage,
  setProductsCountToBeDisplayed,
  updateProductsToBeDisplayed,
  sortProductsInStore,
  toggleSortingOrder,
} = globalDataSlice.actions;

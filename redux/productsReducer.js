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
  filteringCategories: [],
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
      state.products.sort((a, b) => {
        if (a[sortKey] > b[sortKey]) return newSortOrder === DEFAULT_ORDER ? 1 : -1;
        if (a[sortKey] < b[sortKey]) return newSortOrder === DEFAULT_ORDER ? -1 : 1;
      });
      state.sortOrder = newSortOrder;
    },
    filterProductsWithCategory: (state, action) => {
      function updateStoreData(newData) {
        state.products = newData;
        state.productsToBeDisplayed = newData.slice(
          (state.activePage - 1) * state.numberOfProductsToDisplay,
          state.activePage * state.numberOfProductsToDisplay
        );
      }
      // todo: add category to be filtered with to an array and check if it exists remove it, if not add it
      const filteredProducts = [];
      if (action.payload.type) {
        //* to filter with checked categories only
        state.filteringCategories.push(action.payload.category);
        products.map((eachProd) => {
          state.filteringCategories.map((eachCat) => {
            if (eachProd.category == eachCat) {
              filteredProducts.push(eachProd);
            }
          });
        });
        updateStoreData(filteredProducts);
      } else {
        //* to filter with categories in state only without the unchecked category
        const categoryIndex = state.filteringCategories.indexOf(action.payload.category);
        state.filteringCategories.splice(categoryIndex, 1);
        if (state.filteringCategories.length > 0) {
          products.map((eachProd) => {
            state.filteringCategories.map((eachCat) => {
              if (eachProd.category == eachCat) {
                filteredProducts.push(eachProd);
              }
            });
          });
          updateStoreData(filteredProducts);
        } else {
          //* to reset products, if no filters are added
          updateStoreData(products);
        }
      }
    },
    clearFiltering: (state, action) => {
      state.filteringCategories = [];
      state.products = products;
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
  filterProductsWithCategory,
  clearFiltering,
} = globalDataSlice.actions;

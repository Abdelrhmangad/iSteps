import React, { useState } from "react";
import Image from "next/image";
import SortArrow from "@/images/sortArrows.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  sortProductsInStore,
  toggleSortingOrder,
  updateProductsToBeDisplayed,
} from "redux/productsReducer";

export default function SortProducts() {
  const sortingData = useSelector((state) => state.products);
  const dispatch = useDispatch();
  function sortProducts(e) {
    dispatch(sortProductsInStore({ sortKey: e.target.value, sortOrder: sortingData.sortOrder }));
  }
  return (
    <div className="filtersHeader sm-hidden">
      <span>
        <Image
          className="pointer"
          src={SortArrow}
          alt="sort arrow"
          onClick={() => {
            dispatch(toggleSortingOrder());
            dispatch(updateProductsToBeDisplayed());
          }}
        />
        <span className="sortBy">Sort by</span>
      </span>
      <select className="selectMenu" name="sort" id="sort" onChange={(e) => sortProducts(e)}>
        <option defaultValue={0}>select</option>
        <option value="price">Price</option>
        <option value="name">Alphabet</option>
      </select>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Image from "next/image";
import NextArr from "@/images/nextArr.svg";
import PrevArr from "@/images/prevArr.svg";
import { useDispatch, useSelector } from "react-redux";
import { updateActivePage, updateProductsToBeDisplayed } from "redux/productsReducer";

export default function Paginator() {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.products);
  const [paginationPages, setPaginationPages] = useState(5);
  var paginationCounters = [];
  for (var i = 1; i < paginationPages; i++) {
    paginationCounters.push(
      <span
        className={`pageNumber ${productsState.activePage == i ? "active" : ""}`}
        onClick={() => dispatch(updateActivePage(i))}
        key={i}>
        {i}
      </span>
    );
  }
  
  useEffect(() => {
    dispatch(updateProductsToBeDisplayed());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsState.activePage]);
  //todo: make pagination counter as a state and compatiple always change on products length
  useEffect(() => {
    setPaginationPages(
      Math.ceil(productsState.products.length / productsState.numberOfProductsToDisplay) + 1
    );
  }, [productsState.numberOfProductsToDisplay, productsState.products.length]);
  return (
    <div className="paginationContainer">
      <div className="content">
        {productsState.activePage > 1 ? (
          <span
            className="prev"
            onClick={() => dispatch(updateActivePage(productsState.activePage - 1))}>
            <Image src={PrevArr} width={15} height={15} alt="prev arrow" />
          </span>
        ) : null}
        {paginationCounters}
        {paginationCounters.length > productsState.activePage ? (
          <span
            className="next"
            onClick={() => dispatch(updateActivePage(productsState.activePage + 1))}>
            <Image src={NextArr} width={15} height={15} alt="prev arrow" />
          </span>
        ) : null}
      </div>
    </div>
  );
}

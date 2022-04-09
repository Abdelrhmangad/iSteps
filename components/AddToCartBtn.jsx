import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/cartReducer";

export default function AddToCartBtn({ productToBeAdded }) {
  const dispatch = useDispatch();
  return (
    <button className="btn addToCartBtn" onClick={() => dispatch(addToCart(productToBeAdded))}>
      Add to Cart
    </button>
  );
}

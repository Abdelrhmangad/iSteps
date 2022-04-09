import React from "react";
import Image from "next/image";
import CloseIcon from "@/images/closeIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, toggleCart } from "redux/cartReducer";

export default function CartDropDown() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="cartDropDown">
      <span className="pointer" onClick={() => dispatch(toggleCart())}>
        <Image width={15} height={15} src={CloseIcon} alt="close cart icon" />
      </span>
      <div className="cartContent">
        {cart.items.length ? (
          cart.items.map((item, index) => (
            <div className="cartItem-card" key={index}>
              <div className="cartItem-info">
                <p className="cartItem-name">{item.name}</p>
                <p className="cartItem-price">${item.price}</p>
              </div>
              <div className="cartItem-img">
                <Image
                  src={item.image.src}
                  alt="product img"
                  layout="intrinsic"
                  width={120}
                  height={80}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Your cart is empty</p>
        )}
      </div>
      <button className="btn cartClearBtn" onClick={() => dispatch(clearCart())}>
        Clear
      </button>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Logo from "@/images/logo.svg";
import CartIcon from "@/images/cartIcon.svg";
import CartDropDown from "./CartDropDown";
import { toggleCart } from "redux/cartReducer";

export default function NavBar() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("cart", cart);
  return (
    <nav className="pageNav">
      <Image src={Logo} alt="logo" />
      <div className="nav-right">
        <button className="cartIconBtn btn" onClick={() => dispatch(toggleCart())}>
          <Image src={CartIcon} alt="cart icon" />
        </button>
        {cart.items.length ? <span className="cartCount">{cart.items.length}</span> : null}
      </div>
      {cart.showCart ? <CartDropDown /> : null}
    </nav>
  );
}

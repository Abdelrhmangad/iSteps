import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import Logo from "@/images/logo.svg";
import CartIcon from "@/images/cartIcon.svg";

export default function NavBar() {
  return (
    <nav className="pageNav">
      <Image src={Logo} alt="logo" />
      <Image src={CartIcon} alt="cart icon" />
    </nav>
  );
}

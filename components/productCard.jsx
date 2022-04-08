import React from "react";
import Image from "next/image";
import ProductImg from "@/images/imgFive.png";
import ProductImg4 from "@/images/imgFour.png";
import ProductImg6 from "@/images/imgSix.png";
import AddToCartBtn from "./AddToCartBtn";

export default function ProductCard() {
  return (
    <div className="productCard">
      <div className="productImg position-relative">
        <span className="badge position-absolute">Best Seller</span>
        <Image src={ProductImg} alt="product img" layout="intrinsic" width={300} height={400} />
        <div className="actionBtn position-absolute">
          <AddToCartBtn />
        </div>
      </div>
      <p className="productInfo">
        <span className="category">Glass</span>
        <span className="productName">Reinforced</span>
        <span className="productPrice">$33.78</span>
      </p>
    </div>
  );
}

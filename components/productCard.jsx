import React from "react";
import Image from "next/image";
import ProductImg from "@/images/imgFive.png";
import ProductImg4 from "@/images/imgFour.png";
import ProductImg6 from "@/images/imgSix.png";
import AddToCartBtn from "./AddToCartBtn";

export default function ProductCard({ product }) {
  console.log("display product", product);
  return (
    <div className="productCard">
      <div className="productImg position-relative">
        {product.bestseller ? <span className="badge position-absolute">Best Seller</span> : null}
        <Image
          src={product.image.src}
          alt="product img"
          layout="intrinsic"
          width={300}
          height={400}
        />
        <div className="actionBtn position-absolute">
          <AddToCartBtn productToBeAdded={product} />
        </div>
      </div>
      <p className="productInfo">
        <span className="category">{product.category}</span>
        <span className="productName">{product.name}</span>
        <span className="productPrice">${product.price}</span>
      </p>
    </div>
  );
}

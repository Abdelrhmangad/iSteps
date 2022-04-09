import React from "react";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import shimmer, { toBase64 } from "./shimmerPlaceholder/shimmer";

export default function ProductCard({ product }) {
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
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
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

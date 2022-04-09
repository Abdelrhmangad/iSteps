import Image from "next/image";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import { products } from "./data";
import shimmer, { toBase64 } from "./shimmerPlaceholder/shimmer";

export default function ProductDetailsHeader() {
  const featuredProduct = products.find((product) => product.featured);
  return (
    <div className="productDetails">
      <h1 className="productTitle bold">{featuredProduct.name}</h1>
      <AddToCartBtn productToBeAdded={featuredProduct} />
      <div className="productBanner">
        <span className="featuredBadge">Featured</span>
        <Image
          src={featuredProduct.image.src}
          alt={featuredProduct.image.alt}
          layout="responsive"
          objectFit="contain"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(100, 100))}`}
        />
      </div>
      <div className="description-container">
        <div className="suggestedProducts">
          <h4>Materials people also use</h4>
          <div className="productsIThumbnails d-flex">
            {featuredProduct.details.recommendations.map((each, index) => (
              <Image
                key={index}
                src={each.src}
                alt="product img"
                width={120}
                height={180}
                objectFit="cover"
              />
            ))}
          </div>
          <p className="brief">
            <span className="title bold">Details</span>
            <span>Weight: {featuredProduct.details.weight}g/m2</span>
            <span>Thickness: {featuredProduct.details.thickness}cm</span>
          </p>
        </div>
        <div className="productDescription">
          <h3>About the Recycled Plastic</h3>
          <span className="category sm-hidden">{featuredProduct.category}</span>
          <p className="description">{featuredProduct.details.description}</p>
        </div>
      </div>
    </div>
  );
}

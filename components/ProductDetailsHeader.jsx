import Image from "next/image";
import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import ProductImg from "@/images/headerBanner.png";
import ImgOne from "@/images/imgOne.png";
import ImgTwo from "@/images/imgTwo.png";
import ImgThree from "@/images/imgThree.png";

export default function ProductDetailsHeader() {
  return (
    <div className="productDetails">
      <h1 className="productTitle bold">Recycled Plastic</h1>
      <AddToCartBtn />
      <div className="productBanner">
        <span className="featuredBadge">Featured</span>
        <Image src={ProductImg} alt="product img" layout="responsive" objectFit="contain" />
      </div>
      <div className="description-container">
        <div className="suggestedProducts">
          <h4>Materials people also use</h4>
          <div className="productsIThumbnails d-flex">
            <Image src={ImgOne} alt="product img" layout="intrinsic" objectFit="contain" />
            <Image src={ImgTwo} alt="product img" layout="intrinsic" objectFit="contain" />
            <Image src={ImgThree} alt="product img" layout="intrinsic" objectFit="contain" />
          </div>
          <p className="brief">
            <span className="title bold">Details</span>
            <span>Weight: 2340g/m2</span>
            <span>Thickness: 3cm</span>
          </p>
        </div>
        <div className="productDescription">
          <h3>About the Recycled Plastic</h3>
          <span className="category sm-hidden">Plastic</span>
          <p className="description">
            Plastic recycling is the reprocessing of plastic waste into new and useful products.
            When performed correctly, this can reduce dependence on landfill, conserve resources and
            protect the environment from plastic pollution and greenhouse gas emissions...
          </p>
        </div>
      </div>
    </div>
  );
}

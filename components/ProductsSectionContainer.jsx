import React, { useEffect, useState } from "react";
import Image from "next/image";
import SortArrow from "@/images/sortArrows.svg";
import FilterIcon from "@/images/filterIcon.svg";
import ProductCard from "./productCard";
import CloseIcon from "@/images/closeIcon.svg";
import { filtersData } from "./data";
import Paginator from "./paginator";
import { useDispatch, useSelector } from "react-redux";
import { setProductsCountToBeDisplayed } from "redux/productsReducer";
import SortProducts from "./SortProducts";

export default function ProductsSectionContainer() {
  const [mobileFilters, toggleMobileFilters] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window == "object" && window.innerWidth < 768) {
      setIsMobileView(true);
      dispatch(setProductsCountToBeDisplayed(4));
    } else {
      setIsMobileView(false);
      dispatch(setProductsCountToBeDisplayed(6));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const filteredProducts = useSelector((state) => state.products.productsToBeDisplayed);

  return (
    <div className="productsSection">
      <SortProducts />
      <div
        className="filtersHeader sm-show pointer"
        onClick={() => toggleMobileFilters(!mobileFilters)}>
        <Image src={FilterIcon} alt="sort icon" width={25} height={25} />
      </div>
      <div className="productsContainer-section">
        <aside className="filtersContainer">
          <h5>Materials</h5>
          {filtersData["materilaFilters"].map((filter, index) => (
            <div key={index} className="checkboxContainer">
              <input type="checkbox" id={filter.value} value={filter.value} name="materials" />
              <label htmlFor={filter.value}>{filter.filterLabel}</label>
            </div>
          ))}
          <hr className="sectionsSeparater" />
          <h5>Price range</h5>
          {filtersData["priceRangeFilters"].map((filter, index) => (
            <div key={index} className="checkboxContainer">
              <input
                type="radio"
                id={filter.label}
                value={filter.lowerVal}
                name="priceRange"
                onChange={(e) => console.log(e.target.value)}
              />
              <label htmlFor={filter.label}>{filter.label}</label>
            </div>
          ))}
        </aside>
        <div className={`mobileFiltersContainer ${mobileFilters && isMobileView ? "" : "hide"}`}>
          <div className="mobileFilters-content">
            <div className="mobileFilters-header">
              <h5>Filter</h5>
              <button className="closeBtn btn" onClick={() => toggleMobileFilters(false)}>
                <Image src={CloseIcon} alt="close icon" width={25} height={25} />
              </button>
            </div>
            {filtersData["materilaFilters"].map((filter, index) => (
              <div key={index} className="checkboxContainer">
                <input type="checkbox" id={filter.value} value={filter.value} name="materials" />
                <label htmlFor={filter.value}>{filter.filterLabel}</label>
              </div>
            ))}
            <hr className="sectionsSeparater" />
            <h5>Price range</h5>
            {filtersData["priceRangeFilters"].map((filter, index) => (
              <div key={index} className="checkboxContainer">
                <input
                  type="radio"
                  id={filter.label}
                  value={filter.lowerVal}
                  name="priceRange"
                  onChange={(e) => console.log(e.target.value)}
                />
                <label htmlFor={filter.label}>{filter.label}</label>
              </div>
            ))}
            <div className="mobileFilterActions">
              <button className="btn clear">Clear</button>
              <button className="btn save">Save</button>
            </div>
          </div>
        </div>
        <div className="productsContainer">
          {filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Paginator />
    </div>
  );
}

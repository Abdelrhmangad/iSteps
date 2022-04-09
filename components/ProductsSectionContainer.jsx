import React, { useEffect, useState } from "react";
import Image from "next/image";
import SortArrow from "@/images/sortArrows.svg";
import FilterIcon from "@/images/filterIcon.svg";
import ProductCard from "./productCard";
import NextArr from "@/images/nextArr.svg";
import PrevArr from "@/images/prevArr.svg";
import CloseIcon from "@/images/closeIcon.svg";
import { filtersData, products } from "./data";

export default function ProductsSectionContainer() {
  const [mobileFilters, toggleMobileFilters] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    if (typeof window == "object" && window.innerWidth < 768) {
      setIsMobileView(true);
      setNumberOfProductsToDisplay(4);
    } else {
      setIsMobileView(false);
      setNumberOfProductsToDisplay(6);
    }
  }, []);

  const [productsData, setProductsData] = useState(products);
  //todo: set active page number as a state
  const [activePage, setActivePage] = useState(1);
  //todo: set the number of products to be shown on the page as a state
  const [numberOfProductsToDisplay, setNumberOfProductsToDisplay] = useState(6);
  useEffect(() => {
    //todo: slice products from page number * numbers of products to be shown on the page to page number * numbers of products to be shown on the page + numbers of products to be shown on the page
    const productsToDisplay = products.slice(
      (activePage - 1) * numberOfProductsToDisplay,
      activePage * numberOfProductsToDisplay
    );
    setProductsData(productsToDisplay);
  }, [activePage, numberOfProductsToDisplay]);

  const [paginationPages, setPaginationPages] = useState(5);
  var paginationCounters = [];
  for (var i = 1; i < paginationPages; i++) {
    paginationCounters.push(
      <span
        className={`pageNumber ${activePage == i ? "active" : ""}`}
        onClick={() => setActivePage(i)}
        key={i}>
        {i}
      </span>
    );
  }
  //todo: make pagination counter as a state and compatiple always change on products length
  useEffect(() => {
    setPaginationPages(Math.ceil(products.length / numberOfProductsToDisplay) + 1);
    console.log("|paginationPages", Math.ceil(products.length / numberOfProductsToDisplay));
  }, [numberOfProductsToDisplay]);
  return (
    <div className="productsSection">
      <div className="filtersHeader sm-hidden">
        <span>
          <Image src={SortArrow} alt="sort arrow" />
          <span className="sortBy">Sort by</span>
        </span>
        <select className="selectMenu" name="sort" id="sort">
          <option value="">Select</option>
          <option value="">Price</option>
          <option value="">Alphabet</option>
        </select>
      </div>
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
          {productsData.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="paginationContainer">
        <div className="content">
          {activePage > 1 ? (
            <span className="prev" onClick={() => setActivePage(activePage - 1)}>
              <Image src={PrevArr} width={15} height={15} alt="prev arrow" />
            </span>
          ) : null}
          {paginationCounters}
          {paginationCounters.length > activePage ? (
            <span className="next" onClick={() => setActivePage(activePage + 1)}>
              <Image src={NextArr} width={15} height={15} alt="prev arrow" />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

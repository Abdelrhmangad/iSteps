import React from "react";
import Image from "next/image";
import SortArrow from "@/images/sortArrows.svg";
import FilterIcon from "@/images/filterIcon.svg";
import ProductCard from "./productCard";
import NextArr from "@/images/nextArr.svg";
import PrevArr from "@/images/prevArr.svg";
import { filtersData } from "./data";

export default function ProductsSectionContainer() {
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
      <div className="filtersHeader sm-show">
        <Image src={FilterIcon} alt="sort icon" width={25} height={25} />
      </div>
      <div className="productsContainer-section">
        <aside className="filtersContainer">
          <h5>Materials</h5>
          {filtersData["materilaFilters"].map((filter) => (
            <div key={filter.value} className="checkboxContainer">
              <input type="checkbox" id={filter.value} value={filter.value} name="materials" />
              <label htmlFor={filter.value}>{filter.filterLabel}</label>
            </div>
          ))}
          <hr className="sectionsSeparater" />
          <h5>Price range</h5>
          {filtersData["priceRangeFilters"].map((filter) => (
            <div key={filter.value} className="checkboxContainer">
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
        <div className="productsContainer">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="paginationContainer">
        <div className="content">
          <span className="prev">
            <Image src={PrevArr} width={15} height={15} alt="prev arrow" />
          </span>
          {/* pages numbers */}
          <span className="pageNumber">1</span>
          <span className="pageNumber active">2</span>
          <span className="pageNumber">3</span>
          <span className="next">
            <Image src={NextArr} width={15} height={15} alt="prev arrow" />
          </span>
        </div>
      </div>
    </div>
  );
}

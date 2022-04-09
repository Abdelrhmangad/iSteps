import FeaturedImg from "../public/images/headerBanner.png";
import ImgOne from "../public/images/imgOne.png";
import ImgTwo from "../public/images/imgTwo.png";
import ImgThree from "../public/images/imgThree.png";
import ImgSeven from "../public/images/imgSeven.png";
import imgSix from "../public/images/imgSix.png";
import imgFour from "../public/images/imgFour.png";

export const products = [
  {
    name: "Reinforced",
    category: "glass",
    price: 33.78,
    currency: "USD",
    image: {
      src: ImgSeven,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Wave",
    category: "steel",
    price: 120.21,
    currency: "USD",
    image: {
      src: ImgTwo,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Shape",
    category: "steel",
    price: 101,
    currency: "USD",
    image: {
      src: ImgSeven,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "Reinforced",
    category: "glass",
    price: 33.78,
    currency: "USD",
    image: {
      src: ImgSeven,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Pastel",
    category: "glass",
    price: 101.2,
    currency: "USD",
    image: {
      src: imgSix,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "Wave",
    category: "steel",
    price: 120.21,
    currency: "USD",
    image: {
      src: ImgTwo,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Shape",
    category: "steel",
    price: 101,
    currency: "USD",
    image: {
      src: ImgSeven,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "Pastel",
    category: "glass",
    price: 101.2,
    currency: "USD",
    image: {
      src: imgSix,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "Red",
    category: "brick",
    price: 101.2,
    currency: "USD",
    image: {
      src: imgFour,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Pastel",
    category: "glass",
    price: 101.2,
    currency: "USD",
    image: {
      src: imgSix,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "Red",
    category: "brick",
    price: 101.2,
    currency: "USD",
    image: {
      src: imgFour,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Shape",
    category: "steel",
    price: 93.89,
    currency: "USD",
    image: {
      src: ImgOne,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "Wave",
    category: "steel",
    price: 120.21,
    currency: "USD",
    image: {
      src: ImgTwo,
      alt: "",
    },
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Shape",
    category: "steel",
    price: 101,
    currency: "USD",
    image: {
      src: ImgSeven,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "new product",
    category: "steel",
    price: 202,
    currency: "USD",
    image: {
      src: ImgSeven,
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "Recycled Plastic",
    category: "plastic",
    price: 101,
    currency: "USD",
    image: {
      src: FeaturedImg,
      alt: "Recycled Plastic",
    },
    bestseller: false,
    featured: true,
    details: {
      weight: 2340,
      thickness: 2,
      description:
        "Plastic recycling is the reprocessing of plastic waste into new and useful products. When performed correctly, this can reduce dependence on landfill, conserve resources and protect the environment from plastic pollution and greenhouse gas emissions...",
      recommendations: [
        {
          src: ImgOne,
          alt: "",
        },
        {
          src: ImgThree,
          alt: "",
        },
        {
          src: ImgTwo,
          alt: "",
        },
      ],
    },
  },
];

export const filtersData = {
  materilaFilters: [
    {
      filterLabel: "Glass",
      value: "glass",
    },
    {
      filterLabel: "Concrete",
      value: "concrete",
    },
    {
      filterLabel: "Brick",
      value: "brick",
    },
    {
      filterLabel: "Steel",
      value: "steel",
    },
    {
      filterLabel: "Carbon Fiber",
      value: "carbon fiber",
    },
    {
      filterLabel: "Copper",
      value: "copper",
    },
  ],
  priceRangeFilters: [
    {
      label: "Lower than $20",
      maxVal: 20,
      lowerVal: 0,
    },
    {
      label: "$20 - $100",
      maxVal: 100,
      lowerVal: 20,
    },
    {
      label: "$100 - $200",
      maxVal: 200,
      lowerVal: 100,
    },
    {
      label: "More than $200",
      maxVal: null,
      lowerVal: 200,
    },
  ],
};

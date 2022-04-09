const products = [
  {
    name: "Reinforced",
    category: "glass",
    price: 33.78,
    currency: "USD",
    image: {
      src: "",
      alt: "",
    },
    bestseller: true,
    featured: false,
    details: null,
  },
  {
    name: "Shape",
    category: "steel",
    price: 93.89,
    currency: "USD",
    image: "",
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
      src: "",
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
    image: "",
    bestseller: false,
    featured: false,
    details: null,
  },
  {
    name: "Recycled Plastic",
    category: "plastic",
    price: 101,
    currency: "USD",
    image: {
      src: "",
      alt: "",
    },
    bestseller: false,
    featured: true,
    details: {
      weight: 2340,
      thickness: 2,
      description: "",
      recommendations: [
        {
          src: "",
          alt: "",
        },
        {
          src: "",
          alt: "",
        },
        {
          src: "",

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
      value: "carbon-fiber",
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
      lowerVal: 0,
    },
  ],
};

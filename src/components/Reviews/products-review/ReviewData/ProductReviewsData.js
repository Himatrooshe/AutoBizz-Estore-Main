const ProductReviewsData = [
  {
    id: 1,
    username: "John Doe",
    country: { name: "United States", code: "US" },
    date: "2023-12-01",
    rating: 4,
    review: "Excellent communication and solutions.",
    productType: "products", // Added productType
  },
  {
    id: 2,
    username: "mtanner242",
    country: { name: "Canada", code: "CA" },
    date: "2 months ago",
    rating: 5,
    review: "Outstanding product!",
    productType: "products",
  },
  {
    id: 3,
    username: "Alice",
    country: { name: "United Kingdom", code: "GB" },
    date: "2023-12-15",
    rating: 4,
    review: "Great order sync tool!",
    productType: "products", // For the Orders product
  },
  {
    id: 4,
    username: "Bob",
    country: { name: "Australia", code: "AU" },
    date: "2023-12-20",
    rating: 5,
    review: "Simplified inventory management!",
    productType: "inventory", // For the Inventory product
  },
];
export default ProductReviewsData;

import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../Checkout/CartContext";
import { Link } from "react-router-dom";
import random from "../../assets/Product Image.png";
import CartAddedPop from "./CartAddedPop";
import ProductReviews from "../Reviews/products-review/ReviewData/ProductReviewsData";

const calculateReviewStats = (reviews, productType) => {
  const filteredReviews = reviews.filter(
    (review) => review.productType === productType
  );
  const totalReviews = filteredReviews.length;
  const totalRating = filteredReviews.reduce(
    (sum, review) => sum + review.rating,
    0
  );
  const averageRating = totalReviews === 0 ? 0 : totalRating / totalReviews;

  return {
    totalReviews,
    averageRating: averageRating.toFixed(1),
  };
};

const ProductCard = ({ productType }) => {
  const { addToCart } = useCart();
  const [popup, setPopup] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const products = {
    products: {
      id: 1,
      name: "Products Data Sync",
      price: 96,
      originalPrice: 120,
      image: random,
      description: `Automate your Shopify product data updates to Google Sheets every hour with our Products Data Sync appscript. No more manual exports; get real-time updates, clean formatting, and seamless integration. One-time purchase, lifetime simplicity..`,
      detailsEndpoint: "/product-data-sync-details",
    },
    orders: {
      id: 2,
      name: "Orders Data Sync",
      price: 128,
      originalPrice: 160,
      image: random,
      description: `Save time with our Orders Data Sync Google App Script that automatically updates Shopify order data in two different structures to Google Sheets every hour. Keep your orders organized with real-time syncing, formatting, and error-free automation. One-time purchase, lifetime convenience.`,
      detailsEndpoint: "/order-data-sync-details",
    },
    inventory: {
      id: 3,
      name: "Inventory Data Sync",
      price: 150,
      originalPrice: 180,
      image: random,
      description: `Streamline your inventory updates with our Inventory Data Sync appscript. This tool syncs your Shopify inventory data directly to Google Sheets every hour, ensuring accurate and up-to-date information. One-time purchase for hassle-free management.`,
      detailsEndpoint: "/inventory-data-sync-details",
    },
  };

  const product = products[productType];
  const { totalReviews, averageRating } = calculateReviewStats(
    ProductReviews,
    productType
  );

  const handleOrderNow = () => {
    addToCart(product);
    setPopup(true);
    setTimeout(() => setPopup(false), 10000);
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-3xl overflow-hidden shadow-lg bg-[#F5F8F9] p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
      <div>
        <Link to={product.detailsEndpoint}>
          <img
            className="w-full max-h-[300px] object-cover rounded-3xl"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <div className="flex space-x-2 mt-4">
          <span className="bg-[#26A668] text-white text-xs sm:text-sm font-medium px-2.5 py-0.5 rounded-full">
            Google Sheets
          </span>
          <span className="bg-[#97C04C] text-white text-xs sm:text-sm font-medium px-2.5 py-0.5 rounded-full">
            Shopify
          </span>
        </div>
        <Link to={product.detailsEndpoint}>
          <h2 className="mt-4 text-lg sm:text-xl font-bold hover:underline">
            {product.name}
          </h2>
        </Link>

        <div className="mt-4 text-justify">
          {!showFullDescription ? (
            <div className="relative">
              <p
                className="text-gray-600 text-sm sm:text-base font-semibold line-clamp-3"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 4,
                  overflow: "hidden",
                }}
              >
                {product.description}
              </p>
              <div
                className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#F5F8F9] via-[#F5F8F9]"
                style={{ opacity: 0.8 }}
              ></div>
            </div>
          ) : (
            <p className="text-gray-600 text-sm sm:text-base font-semibold">
              {product.description}
            </p>
          )}

          {!showFullDescription && (
            <div className="text-center mt-2">
              <Link
                to="/enterprise-custom-solution-details"
                className="flex justify-center items-center font-semibold hover:underline"
              >
                <span>See More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM13 12H16L12 16L8 12H11V8H13V12Z"></path>
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold text-[#1c5a7a]">
              ${product.price}
            </span>
            <span className="text-base sm:text-lg font-normal text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:mt-0">
            <div className="flex space-x-1">
              {"★"
                .repeat(Math.round(averageRating))
                .padEnd(5, "☆")
                .split("")
                .map((star, index) => (
                  <span
                    key={index}
                    className={`${
                      star === "★" ? "text-[#1c5a7a]" : "text-gray-400"
                    } text-sm sm:text-base md:text-lg`}
                  >
                    {star}
                  </span>
                ))}
            </div>

            <span className="text-[#1c5a7a] font-semibold text-xs">
              ({totalReviews})
            </span>
          </div>
        </div>

        <button
          onClick={handleOrderNow}
          className="relative mt-6 w-full bg-[#124966] text-white text-base sm:text-lg font-semibold py-3 sm:py-4 rounded-2xl flex justify-center items-center shadow-[0_4px_6px_rgba(18,73,102,0.2)] transition-transform transform duration-300 hover:scale-105 hover:shadow-[0_6px_10px_rgba(18,73,102,0.3)]"
        >
          <span className="flex items-center space-x-2">
            <span>Add to Cart</span>
            <FiShoppingCart className="text-white w- h-4 text-semibold" />
          </span>
        </button>
      </div>
      {popup && <CartAddedPop product={product} onClose={closePopup} />}
    </div>
  );
};

export default ProductCard;

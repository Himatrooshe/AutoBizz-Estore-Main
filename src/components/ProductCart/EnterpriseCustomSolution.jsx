import React, { useState } from "react";
import { Link } from "react-router-dom";
import random from "../../assets/Product Image.png";
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

const ProductCard = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const productType = "enterprise"; 
  const product = {
    name: "Enterprise Custom Solution",
    description: `
      We’re here to get to know your business, understand the systems you’re
      already using, and see how we can help make things better. Our focus
      is on learning about your needs, solving any challenges you’re facing,
      and finding ways to work together to achieve your goals. Whether it’s
      simplifying workflows, connecting your tools, or improving efficiency,
      we want to help you succeed.
    `,
    price: "$$$$",
  };

  const { totalReviews, averageRating } = calculateReviewStats(
    ProductReviews,
    productType
  );

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-3xl overflow-hidden shadow-lg bg-[#F5F8F9] p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
      <div>
        <Link to="/enterprise-custom-solution-details">
          <img
            className="w-full max-h-[300px] object-cover rounded-3xl"
            src={random}
            alt={product.name}
          />
        </Link>

        <div className="flex flex-wrap space-x-2 mt-4">
          <span className="bg-[#00EDD0] text-[#112A46] text-xs sm:text-sm font-medium px-2.5 py-0.5 rounded-full">
            Agnostic Tech Stack
          </span>
        </div>

        <Link to="/enterprise-custom-solution-details">
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
                className="flex justify-center items-center font-semibold hover:underline animate-float"
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
      <div className="mt-4 md:mt-auto">
        <div className="flex flex-wrap items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold text-[#1c5a7a]">
              {product.price}
            </span>
            <span className="text-base sm:text-lg font-normal text-gray-500 line-through">
              $$$
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
            <span className="text-[#1c5a7a] text-sm sm:text-base font-semibold">
              ({totalReviews})
            </span>
          </div>
        </div>
        <Link to="">
          <button className="relative mt-6 w-full bg-[#124966] text-white text-base sm:text-lg font-semibold py-3 sm:py-4 rounded-2xl flex justify-center items-center shadow-[0_4px_6px_rgba(18,73,102,0.2)] transition-transform transform duration-300 hover:scale-105 hover:shadow-[0_6px_10px_rgba(18,73,102,0.3)]">
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-white to-white filter">
              Book a free consultation
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

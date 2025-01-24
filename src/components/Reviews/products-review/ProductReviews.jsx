import React, { useState } from "react";
import CountryFlag from "react-country-flag";
import ProductReviewsData from "./ReviewData/ProductReviewsData";
import { FaSync } from "react-icons/fa";

const ProductReviews = ({ productType }) => {
  const filteredReviews = ProductReviewsData.filter(
    (review) => review.productType === productType
  );

  const [visibleReviews, setVisibleReviews] = useState(10);

  const handleShowMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 10);
  };

  return (
    <div>
      <h3 className="text-gray-800 font-bold text-xl mb-4">
        {filteredReviews.length > 0 ? "Customer Reviews" : "No Reviews Yet"}
      </h3>
      {filteredReviews.length === 0 ? (
        <p className="text-gray-600">Be the first to review this product!</p>
      ) : (
        filteredReviews.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="bg-transparent p-4 rounded-xl mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <img
                src={
                  review.image
                    ? review.image
                    : `https://ui-avatars.com/api/?name=${review.username}&background=DBEAFE&color=000&rounded=true`
                }
                alt={review.username}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-bold flex items-center space-x-2">
                  {review.username}
                  {review.repeatClient && (
                    <span className="flex items-center text-xs text-black pl-4">
                      <FaSync className="text-black w-3 h-3" />
                      <span className="ml-1">Repeat Client</span>
                    </span>
                  )}
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CountryFlag
                    countryCode={review.country.code}
                    svg
                    style={{
                      width: "1.2em",
                      height: "1.2em",
                    }}
                  />
                  <span>{review.country.name}</span>
                </div>
                <p>{review.date}</p>
              </div>
            </div>
            <div className="flex items-center mb-2">
              {"★"
                .repeat(review.rating)
                .padEnd(5, "☆")
                .split("")
                .map((star, idx) => (
                  <span
                    key={idx}
                    className={
                      star === "★" ? "text-yellow-500" : "text-gray-400"
                    }
                  >
                    {star}
                  </span>
                ))}
            </div>
            <p className="text-gray-700">{review.review}</p>
          </div>
        ))
      )}
      {visibleReviews < filteredReviews.length && (
        <button
          onClick={handleShowMoreReviews}
          className="mt-4  text-[#1c5a7a] py-2 px-4 font-semibold"
        >
          See More...
        </button>
      )}
    </div>
  );
};

export default ProductReviews;

import React from "react";
import CountryFlag from "react-country-flag";
import ProductReviews from "./ProductReviewsData";

const Review = () => {
  return (
    <div>
      <h3 className="text-gray-800 font-bold text-xl mb-4"></h3>
      {ProductReviews.length === 0 ? (
        <p className="text-gray-600"></p>
      ) : (
        ProductReviews.map((review) => (
          <div key={review.id} className="bg-transparent p-4 rounded-xl mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <img
                src={`https://ui-avatars.com/api/?name=${review.username}&background=DBEAFE&color=000&rounded=true`}
                alt={review.username}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-gray-800 font-bold">{review.username}</p>
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
    </div>
  );
};

export default Review;

import React from "react";
import { motion } from "framer-motion";
import CountryFlag from "react-country-flag";
import reviews from "./reviewData";

const TranslateWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ translateX: "0%" }}
      animate={{ translateX: "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-8"
    >
      {children}
    </motion.div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-2xl bg-white p-6 lg:py-8 lg:px-7"
      style={{ minWidth: "300px", maxWidth: "300px", height: "320px" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {[...Array(review.stars || 5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-[#FDB241]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-gray-500">{review.timeAgo}</span>
      </div>
      <blockquote className="flex-1 mt-4">
        <p className="text-sm leading-relaxed text-gray-900 font-pj">
          {review.review}
        </p>
      </blockquote>
      <div className="flex items-center mt-6">
        {review.image ? (
          <img
            className="flex-shrink-0 object-cover rounded-full w-11 h-11"
            src={review.image}
            alt={review.name}
          />
        ) : (
          <div className="flex-shrink-0 flex items-center justify-center rounded-full w-11 h-11 bg-gray-200 text-gray-700 font-bold">
            {review.name.charAt(0).toUpperCase()}
          </div>
        )}
        <div className="ml-4">
          <p className="text-base font-bold text-gray-900 font-pj">
            {review.name}
          </p>
          <div className="flex items-center space-x-2">
            <CountryFlag
              countryCode={review.country.code}
              svg
              style={{
                width: "1.5em",
                height: "1.5em",
              }}
            />
            <span className="text-sm font-pj text-gray-600">
              {review.country.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Review = () => {
  return (
    <section className="py-12 bg-[#DBEAFE] sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
            <div
              className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          {/* Fading Edges for All Sides */}
          {/* Left fade */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#DBEAFE] via-[#DBEAFE00] pointer-events-none"></div>
          {/* Right fade */}
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#DBEAFE] via-[#DBEAFE00] pointer-events-none"></div>
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#DBEAFE] via-[#DBEAFE00] pointer-events-none"></div>
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#DBEAFE] via-[#DBEAFE00] pointer-events-none"></div>

          <TranslateWrapper>
            {/* Repeat the reviews twice for smooth scrolling */}
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </TranslateWrapper>
        </div>
      </div>
    </section>
  );
};

export default Review;

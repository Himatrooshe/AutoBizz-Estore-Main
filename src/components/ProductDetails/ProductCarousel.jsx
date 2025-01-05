import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCart/ProductCard";
import EnterpriseCustomSolution from "../ProductCart/EnterpriseCustomSolution";

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const visibleProducts = isMobile
    ? [products[currentIndex]]
    : [
        products[currentIndex],
        products[(currentIndex + 1) % products.length],
      ];

  return (
    <div className="relative w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-4xl font-semibold">
          Check Out More of Our Templates
        </h1>
        <p className="text-gray-600 mt-2">
          View all our automation products that can help upgrade your digital reporting in minutes.
        </p>
      </div>

      {/* Product Cards */}
      <div className="flex items-center">
        {/* Navigation Button - Previous */}
        <button
          onClick={handlePrev}
          className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 mr-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#1c5a7a]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div
          className={`grid ${
            isMobile ? "grid-cols-1" : "grid-cols-2"
          } gap-6 w-full`}
        >
          {visibleProducts.map((product, index) => (
            <div key={index} className="flex justify-center">
              {product.type === "enterprise" ? (
                <EnterpriseCustomSolution />
              ) : (
                <ProductCard productType={product.type} />
              )}
            </div>
          ))}
        </div>

        {/* Navigation Button - Next */}
        <button
          onClick={handleNext}
          className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 ml-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#1c5a7a]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;

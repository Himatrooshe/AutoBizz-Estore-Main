import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Checkout/CartContext";
import ExpertBadge from "./ExpertBadge";
import Asses from "../../assets/A-1.png";

const ProductInfoCard = ({
  title,
  headerTitle,
  description,
  price,
  originalPrice,
  discount,
  linkTo,
  buttonLabel,
  features,
}) => {
  const { addToCart } = useCart();

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    const product = {
      title,
      price,
      originalPrice,
      discount,
    };
    addToCart(product);
  };

  return (
    <div className="w-full max-w-xl lg:sticky lg:top-16 px-4 sm:px-8 lg:px-0">
      {/* Breadcrumb */}
      <nav className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4 font-semibold">
        <Link to="/" className="text-gray-500 hover:text-[#1c5a7a] transition">
          Home
        </Link>{" "}
        / <span className="text-[#1c5a7a]">{title}</span>
      </nav>

      {/* Header Title */}
      <h1 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4">
        {headerTitle}
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-justify">
        {description}
      </p>

      {/* Badge */}
      <div className="mb-6">
        <ExpertBadge image={Asses} count={171} text="purchased the template" />
      </div>

      {/* Pricing Section */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md w-full max-w-md">
        <div className="flex flex-wrap items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
          <span className="text-xl sm:text-2xl font-bold text-[#1c5a7a]">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm sm:text-base">
              ${originalPrice}
            </span>
          )}
          {discount && (
            <span className="bg-red-500 text-white text-xs sm:text-sm font-semibold py-1 px-2 rounded">
              {discount}% off
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
          One-time payment
        </p>
        <div className="lg:flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleAddToCart}
            className="bg-[#1c5a7a] text-white py-2 sm:py-3 px-4 sm:px-8 rounded-xl hover:bg-blue-900 w-full sm:w-auto mb-6"
          >
            {buttonLabel}
          </button>
          <Link to={linkTo}>
            <button className="bg-gray-100 text-gray-500 py-2 sm:py-3 px-4 sm:px-8 rounded-xl hover:bg-gray-200 w-full sm:w-auto">
              Preview
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        {features.map((feature, index) => (
          <div key={index} className="p-4 flex items-center">
            <div className="p-2 bg-gray-100 rounded-xl text-blue-500 mr-3">
              {feature.icon}
            </div>
            <h3 className="font-bold text-sm text-gray-800">{feature.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfoCard;

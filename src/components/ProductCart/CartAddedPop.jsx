import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const CartAddedPop = ({ product, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8 w-[90%] max-w-[800px] h-auto max-h-[90%] shadow-lg text-center relative overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1c5a7a] mb-6">
          Item Added to Cart!
        </h2>
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-[300px] h-auto object-cover mx-auto rounded mb-4"
        />
        <p className="text-lg md:text-xl font-semibold">{product.name}</p>
        <p className="text-gray-500 text-sm md:text-base mt-2">
          Price: ${product.price}
        </p>
        <p className="text-gray-600 text-sm mt-4 px-4 md:px-6">
          {product.description}
        </p>

        {/* Buttons Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#1c5a7a] text-white rounded-lg font-semibold hover:bg-[#174a63] transition w-full md:w-auto"
          >
            Shop More Products
          </button>
          <Link
            to="/checkout"
            className="px-6 py-3 bg-[#26A668] text-white rounded-lg font-semibold hover:bg-[#1f8a55] transition w-full md:w-auto"
          >
            Go to Checkout
          </Link>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
};

export default CartAddedPop;

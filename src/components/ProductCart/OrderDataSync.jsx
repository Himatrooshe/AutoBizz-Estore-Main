import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../Checkout/CartContext";
import random from "../../assets/Product Image.png";

const ProductCard = () => {
  const { addToCart, cartCount } = useCart();
  const [popup, setPopup] = useState(false); // Add popup state here

  const product = {
    id: 2,
    name: "Orders Data Sync",
    price: 128,
    image: random,
  };

  const handleOrderNow = () => {
    addToCart(product);
    setPopup(true); // Show popup
    setTimeout(() => setPopup(false), 3000); // Hide popup after 3 seconds
  };

  return (
    <div className="4xl:w-[426px] h-[760px] md:w-[340px] rounded-[40px] shadow-lg bg-[#F5F8F9] p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
      <div>
        <Link to="/order-data-sync-details">
          <img
            className="w-full max-h-[300px] object-cover rounded-[30px]"
            src={product.image}
            alt={product.name}
          />
        </Link>
        <div className="flex space-x-2 mt-4">
          <span className="bg-[#97E15E] text-[#2B2B34] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
            Sheets
          </span>
          <span className="bg-[#309FFF] text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
            Looker Studio
          </span>
        </div>
        <Link to="/order-data-sync-details">
          <h2 className="mt-4 text-xl font-bold">{product.name}</h2>
        </Link>
        <p className="text-gray-600 text-sm mt-2 font-semibold">
          Save time with our Orders Data Sync Google App Script that
          automatically updates Shopify order data in two different structures
          to Google Sheets every hour. Keep your orders organized with real-time
          syncing, formatting, and error-free automation.
          <strong> One-Time Purchase, Lifetime Convenience</strong>
        </p>
      </div>
      <div className="mt-auto">
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1">
            <span className="text-[26px] font-bold text-[#1c5a7a]">
              ${product.price}
            </span>
            <span className="text-[20px] font-normal text-[#888] line-through">
              $160
            </span>
          </div>
        </div>
        <button
          onClick={handleOrderNow}
          className="mt-6 w-full bg-[#1c5a7a] text-white text-lg font-semibold py-4 rounded-[12px] flex justify-center items-center space-x-2 transition duration-300"
        >
          <span>Order Now</span>
          <div className="relative flex items-center">
            <FiShoppingCart size={15} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex justify-center items-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
        </button>

        {/* Popup */}
        {popup && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
            Product added to cart!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

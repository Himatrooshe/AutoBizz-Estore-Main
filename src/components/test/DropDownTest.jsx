




import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../Checkout/CartContext";
import { Link } from "react-router-dom";
import random from "../../assets/Product Image.png";

const ProductCard = () => {
  const { addToCart } = useCart();
  const [popup, setPopup] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const product = {
    id: 3,
    name: "Inventory Data Sync",
    price: 144,
    originalPrice: 180,
    image: random,
    description:`
      Automate your Shopify Inventory Data Sync using Google App Script.
      Sync stock levels, inventory locations, and product variants directly
      to Google Sheets every hour, eliminating the need for manual updates.
      One-Time Purchase, Lifetime Automation. Take control of your inventory
      and boost efficiency today!
    `,
    reviews: 25,
  };

  const handleOrderNow = () => {
    addToCart(product);
    setPopup(true);
    setTimeout(() => setPopup(false), 3000);
  };

  return (
    <div className="4xl:w-[380px] h-[700px] md:w-[340px] rounded-[40px] overflow-hidden shadow-lg bg-[#F5F8F9] p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
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

        {/* Description Section */}
        <div className="mt-4 text-justify">
          <p className={`text-gray-600 text-sm font-semibold`}>
            {product.description.split(" ").slice(0, 22).join(" ")}
          </p>
          {!showFullDescription && (
            <p
              className="text-gray-400 text-sm line-clamp-2 overflow-hidden fade-effect"
              style={{
                maxHeight: "36px",
                opacity: 0.5,
              }}
            >
              {product.description.split(" ").slice(20, 30).join(" ")}
            </p>
          )}
          {!showFullDescription && (
            <div className="text-justify mt-2 flex justify-center">
              <button
                className="flex items-center text-black-500 font-semibold hover:underline"
                onClick={() => setShowFullDescription(true)}
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
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1">
            <span className="text-[26px] font-bold text-[#1c5a7a]">
              ${product.price}
            </span>
            <span className="text-[20px] font-normal text-red-500">
              ${product.originalPrice}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z"
                    fill="#1c5a7a"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ))}
            </div>
            <span className="text-gray-500 text-sm">
              ({product.reviews})
            </span>
          </div>
        </div>

        <button
          onClick={handleOrderNow}
          className="mt-6 w-full bg-[#1c5a7a] text-white text-lg font-semibold py-4 rounded-[12px] flex justify-center items-center space-x-2 transition duration-300"
        >
          <span>Add to Cart</span>
          <FiShoppingCart size={15} />
        </button>

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


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { FiTrash2 } from "react-icons/fi";

// Payment Section Component
const PaymentSection = ({ total, paymentTest }) => {
  const [selectedPayment, setSelectedPayment] = useState("card"); // State for selected payment method

  return (
    <div className="bg-[#FCFEFF] p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Payment</h2>
        <div className="flex space-x-2 bg-[#E9F2FA] p-2 rounded-md">
          {/* Pay by Card Option */}
          <button
            className={`px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-300 font-bold 
              ${selectedPayment === "card" 
                ? "bg-white border border-[#1c5a7a] text-[#1c5a7a]" 
                : "text-gray-600 hover:bg-white hover:text-[#1c5a7a] hover:border hover:border-[#1c5a7a]"
              }`}
            onClick={() => setSelectedPayment("card")}
          >
            Pay by Card
          </button>

          {/* Pay by PayPal Option */}
          <button
            className={`px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-300 font-bold 
              ${selectedPayment === "paypal" 
                ? "bg-white border border-[#1c5a7a] text-[#1c5a7a]" 
                : "text-gray-600 hover:bg-white hover:text-[#1c5a7a] hover:border hover:border-[#1c5a7a]"
              }`}
            onClick={() => setSelectedPayment("paypal")}
          >
            Pay by PayPal
          </button>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-[#1C5A7A] mb-4"></div>

      {/* Conditionally Render Based on Selected Payment Method */}
      {selectedPayment === "card" ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number *
              </label>
              <input
                className="p-3 border border-[#1c5a7a] rounded-lg w-full"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Expiry *
              </label>
              <input
                className="p-3 border border-[#1c5a7a] rounded-lg w-full"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVC *
              </label>
              <input
                className="p-3 border border-[#1c5a7a] rounded-lg w-full"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <button
            className="mt-6 w-full bg-[#1c5a7a] text-white text-lg font-semibold py-4 rounded-lg"
            onClick={() => paymentTest(total.toFixed(2), "", "")}
          >
            Pay Now ${total.toFixed(2)}
          </button>
        </div>
      ) : (
        <div>
          <button
            className="mt-6 w-full bg-[#1c5a7a] text-white text-lg font-semibold py-4 rounded-lg"
            onClick={() => {
              console.log("Redirecting to PayPal...");
              // Add PayPal redirect or API call logic here
            }}
          >
            Proceed to PayPal
          </button>
        </div>
      )}
    </div>
  );
};

// Checkout Page Component
const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart();

  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  const paymentTest = (price, par1 = "", par2 = "") => {
    console.log("Processing payment with:", price, par1, par2);
  };

  return (
    <div className="bg-[#DBEAFE] min-h-screen flex justify-center items-center">
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#DBEAFE] rounded-lg">

        {/* Order Summary Section */}
        <div className="bg-[#FCFEFF] p-6 rounded-lg shadow-sm">
          <Link to="/" className="text-xs font-medium text-[#1c5a7a]">
            Back to Homepage
          </Link>
          <h2 className="text-2xl font-semibold mt-2 mb-4">Your Order Summary</h2>
          <div className="w-full h-[1px] bg-[#1C5A7A] mb-4"></div>

          <div className="space-y-3 font-semibold">
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-lg">
                  <span>{item.name}</span>
                  <div className="flex items-center space-x-4">
                    <p className="text-gray-400">${item.price.toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-gray-600 hover:text-red-500"
                      aria-label="Remove Item"
                    >
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            )}
            <div className="w-full h-[1px] bg-[#1C5A7A] mb-4"></div>
          </div>

          <div className="mt-6 space-y-2 font-medium">
            <div className="flex justify-between">
              <span className="text-lg font-medium">Subtotal</span>
              <p className="text-gray-400">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">VAT (15%)</span>
              <p className="text-gray-400">${vat.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold text-xl mt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Delivery Info and Payment Section */}
        <div className="space-y-6">
          <div className="bg-[#FCFEFF] p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Delivery Info</h2>
            <div className="w-full h-[1px] bg-[#1C5A7A] mb-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Delivery Info Form */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  className="p-3 border border-[#1c5a7a] rounded-lg w-full"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  className="p-3 border border-[#1c5a7a] rounded-lg w-full"
                  type="email"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address *
                </label>
                <input
                  className="p-3 border border-[#1c5a7a] rounded-lg w-full"
                  type="text"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City *
                </label>
                <input
                  className="p-3 border border-[#1c5a7a] rounded-lg w-full"
                  type="text"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State *
                </label>
                <input
                  className="p-3 border border-[#1c5a7a] rounded-lg w-full"
                  type="text"
                  placeholder=""
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Zip/Postal Code *
                </label>
                <input
                  className="p-3 border border-[#1c5a7a] rounded-lg w-full"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <PaymentSection total={total} paymentTest={paymentTest} />
        </div>
        <div>shipar chutiya</div>
      </div>
    </div>
  );
};

export default CheckoutPage;

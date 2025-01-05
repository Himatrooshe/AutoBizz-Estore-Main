import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { FiTrash2 } from "react-icons/fi";
import PaymentSection from "./PaymentSection";

const CheckoutPage = () => {
  const { cart, removeFromCart } = useCart();

  // Log cart state to check if name and price are correct
  console.log("Cart data in CheckoutPage:", cart);

  const subtotal = cart.reduce((total, item) => {
    const price = parseFloat(item.price); // Ensure price is a number
    return total + (Number.isNaN(price) ? 0 : price);
  }, 0);

  const total = subtotal;

  const paymentTest = (price, par1 = "", par2 = "") => {
    console.log("Processing payment with:", price, par1, par2);
  };

  return (
    <div className="bg-[#DBEAFE] min-h-screen flex justify-center items-center">
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#DBEAFE] rounded-lg">
        <div className="bg-[#FCFEFF] p-6 rounded-lg shadow-sm">
          <Link to="/" className="text-xs font-medium text-[#1c5a7a]">
            Back to Homepage
          </Link>
          <h2 className="text-2xl font-semibold mt-2 mb-4">Your Order Summary</h2>
          <div className="w-full h-[1px] bg-[#1C5A7A] mb-4"></div>

          <div className="space-y-3 font-semibold">
            {cart.length > 0 ? (
              cart.map((item, index) => {
                const price = parseFloat(item.price); // Ensure price is a number

                return (
                  <div key={index} className="flex justify-between items-center text-lg">
                    <span className="font-medium">{item.name || "Unnamed Item"}</span>
                    <div className="flex items-center space-x-4">
                      {/* Ensure price is a valid number */}
                      <p className="text-gray-400">${Number.isNaN(price) ? "N/A" : price.toFixed(2)}</p>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-gray-600 hover:text-red-500"
                        aria-label="Remove Item"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </div>
                  </div>
                );
              })
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
            <div className="flex justify-between font-bold text-xl mt-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#FCFEFF] p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Delivery Info</h2>
            <div className="w-full h-[1px] bg-[#1c5a7a] mb-4"></div>
          </div>

          <PaymentSection total={total} paymentTest={paymentTest} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

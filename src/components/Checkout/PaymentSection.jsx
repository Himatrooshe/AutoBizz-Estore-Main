import React, { useState } from "react";

const PaymentSection = ({ total, paymentTest }) => {
  const [selectedPayment, setSelectedPayment] = useState("stripe");

  return (
    <div className="bg-[#FCFEFF] p-6 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Payment</h2>
      </div>
      <div className="w-full h-[0.5px] bg-[#1C5A7A] mb-4"></div>

      <button
        className="w-full bg-[#1c5a7a] text-white text-lg font-semibold py-4 rounded-lg"
        onClick={() => {
          console.log("Redirecting to Stripe for payment...");
          paymentTest(total.toFixed(2), "Stripe", "");
        }}
      >
        Pay with Stripe
      </button>
    </div>
  );
};

export default PaymentSection;

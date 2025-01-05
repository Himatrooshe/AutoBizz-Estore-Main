import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-2xl flex items-center space-x-3">
      <span className="bg-white p-2 rounded-full text-blue-500 text-2xl">{icon}</span>
      <div>
        <p className="text-gray-600 font-bold">{title}</p>
        <p className="text-gray-600 font-semibold text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

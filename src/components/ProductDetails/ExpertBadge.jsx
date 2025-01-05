import React from "react";

const ExpertBadge = ({ image, count, text }) => {
  return (
    <div className="flex items-center mb-6">
      {/* Avatar Section */}
      <div className="flex -space-x-3">
        {[...Array(3)].map((_, index) => (
          <img
            key={index}
            src={image}
            className="w-10 h-10 rounded-full border-2 border-white"
            alt="Expert"
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="ml-4 text-gray-600">
        <p>
          <strong>{count} Experts</strong>
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ExpertBadge;

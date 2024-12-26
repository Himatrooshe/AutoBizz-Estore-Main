import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex md:flex-row flex-col items-center justify-evenly p-2 bg-[#DBEAFE] space-y-2">
      <div className="flex space-x-10 bg-white shadow-md rounded-2xl p-6 font-semibold">
        <button className="text-gray-600 hover:text-black">Popularity</button>
        <button className="text-gray-600 hover:text-black">Rating</button>
        <button className="text-gray-600 hover:text-black">New</button>
        <button className="text-gray-600 hover:text-black">Price</button>
      </div>

      <div className="relative md:w-[380px] md:h-[75px] w-[360px]">
        <div
          onClick={toggleDropdown}
          className="flex justify-between items-center bg-white rounded-2xl shadow-md px-4 py-4 cursor-pointer"
        >
          <span className="text-gray-800 font-medium">Categories</span>
          <div className="flex items-center bg-blue-100 rounded-full px-4 py-2">
            <span className="mr-28 text-gray-600">Select</span>
            <svg
              className={`w-4 h-4 ml-2 transform transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-0 mt-2 mr-6 w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Category 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Category 2
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Category 3
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Category 4
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

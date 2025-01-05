import React, { useState, useEffect } from "react";
import random from "../../assets/Product Image.png";
import Asses from "../../assets/A-1.png";
import { FiEdit, FiShare2, FiSettings, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import Faqs from "../FAQ/Faqs";
import ProductReviews from "../Reviews/products-review/ProductReviews";
import Details from "./DescriptionAndDetails/EnterpriseDetails"
import Description from "./DescriptionAndDetails/EnterpriseDecstiption";

const EnterpriseCustomSyncDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const images = [random, Asses, random];

  // Image carousel navigation
  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const getTabClass = (tab) =>
    `text-gray-600 font-bold py-2 px-4 ${
      activeTab === tab ? "text-blue-500 bg-[#E1F0F8] rounded-lg" : ""
    }`;

  return (
    <div className="flex justify-center bg-[#DBEAFE] py-20">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div>
          {/* Image Carousel */}
          <div className="relative lg:w-[850px] w-[370px] mx-auto">
            <img
              className="lg:w-[850px] w-[370px] lg:h-[510px] object-cover rounded-2xl"
              src={images[currentImage]}
              alt="Product"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={handlePrevImage}
            >
              ❮
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={handleNextImage}
            >
              ❯
            </button>
          </div>

          {/* Tab Section */}
          <div className="mt-6 lg:w-[850px]">
            <div className="bg-white p-4 rounded-2xl flex space-x-4 border-b-8 border-b-[#DBEAFE]">
              <button className={getTabClass("description")} onClick={() => setActiveTab("description")}>
                Description
              </button>
              <button className={getTabClass("details")} onClick={() => setActiveTab("details")}>
                Details
              </button>
              <button className={getTabClass("review")} onClick={() => setActiveTab("review")}>
                Review
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              {activeTab === "description" && <Description />}
              {activeTab === "details" && <Details />}
              {activeTab === "review" && <ProductReviews />}
            </div>
          </div>

          {/* FAQs */}
          <div className="lg:w-[850px] mt-6">
            <h1 className="text-4xl font-semibold">FAQs</h1>
            <p className="text-gray-600 mb-4">Can't find your question? Feel free to contact us!</p>
            <Faqs />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-[470px] lg:sticky lg:top-0 hidden lg:block">
          <nav className="text-sm text-gray-500 mb-4 font-semibold">
            <Link to="/" className="text-gray-500 hover:text-[#1c5a7a] transition">
              Home
            </Link>{" "}
            / Product Path /{" "}
            <span className="text-[#1c5a7a]">Enterprise Custom Solutions</span>
          </nav>

          <p className="text-gray-600 mb-6">
            Looking for a solution that fits your unique business needs? We specialize in creating{" "}
            <strong>customized automation</strong> for any platform—whether it's <strong>eCommerce</strong>,{" "}
            <strong>CRM</strong>, or <strong>PM tools</strong>. Let us design and build your streamlined process
            automation to optimize your operations and drive results.
          </p>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl font-bold text-[#1c5a7a]">$$$</span>
              <span className="text-gray-400 line-through">$$$</span>
              <span className="bg-red-500 text-white text-sm font-semibold py-1 px-2 rounded">??% off</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">One time payment</p>
            <div className="flex space-x-7">
              <Link to="/checkout">
                <button className="bg-[#1c5a7a] text-white py-5 px-16 rounded-xl hover:bg-blue-500">
                  Book a consultation
                </button>
              </Link>
              <button className="bg-gray-100 text-gray-500 py-5 px-16 rounded-xl hover:bg-gray-200">
                Preview
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-2">
            {[
              { icon: <FiEdit size={24} />, label: "Instant Edit Access" },
              { icon: <FiShare2 size={24} />, label: "Sharing Option" },
              { icon: <FiSettings size={24} />, label: "Instant Quick Setup" },
              { icon: <FiDownload size={24} />, label: "Downloadable Data" },
            ].map((item, index) => (
              <div key={index} className="p-4 flex items-center">
                <div className="p-2 bg-gray-100 rounded-xl text-blue-500 mr-3">{item.icon}</div>
                <h3 className="font-bold text-sm text-gray-800">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseCustomSyncDetails;

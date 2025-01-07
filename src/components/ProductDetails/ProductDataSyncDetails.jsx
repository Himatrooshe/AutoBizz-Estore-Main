import React, { useState } from "react";
import random from "../../assets/Product Image.png";
import Asses from "../../assets/A-1.png";
import { FiEdit, FiShare2, FiSettings, FiDownload } from "react-icons/fi";
import FeatureList from "./FeatureList";
import Faqs from "../FAQ/Faqs";
import ProductReviews from "../Reviews/products-review/ProductReviews";
import Description from "./DescriptionAndDetails/ProductDecstiption";
import Details from "./DescriptionAndDetails/ProductsDetails";
import ProductInfoCard from "./ProductInfoCard";
import ProductCarousel from "../ProductDetails/ProductCarousel";

const ProductDataSyncDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const images = [random, Asses, random];

  const handleNextImage = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);
  const handlePrevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  const getTabClass = (tab) =>
    `text-gray-600 font-bold py-2 px-4 ${
      activeTab === tab ? "text-blue-500 bg-[#E1F0F8] rounded-lg" : ""
    }`;

  const products = [
    { type: "orders" },
    { type: "inventory" },
    { type: "enterprise" },
  ];

  return (
    <div className="flex justify-center bg-[#DBEAFE] py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-[1400px] flex flex-col lg:flex-row lg:gap-8 gap-6 w-full">
        {/* Left Column */}
        <div className="w-full lg:flex-1">
          {/* Image Carousel */}
          <div className="relative w-full max-w-full lg:max-w-[850px]">
            <img
              className="w-full h-auto"
              src={images[currentImage]}
              alt="Product"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-[#e0f7ff] transition duration-200"
              onClick={handlePrevImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#1c5a7a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-[#e0f7ff] transition duration-200"
              onClick={handleNextImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#1c5a7a]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="block lg:hidden mt-6">
            <ProductInfoCard
              title="Products Data Sync"
              headerTitle="One-Time Purchase, Lifetime Simplicity"
              description={
                <>
                  Say goodbye to monthly subscriptions that drain your budget!
                  For just <strong>$96</strong>, our Google app script offers a
                  lifetime solution to keep your Shopify product data
                  synchronized with Google Sheets effortlessly.
                </>
              }
              price="96"
              originalPrice="120"
              discount="20"
              linkTo="/checkout"
              buttonLabel="Order Now"
              features={[
                { icon: <FiEdit />, label: "Edit Inventory" },
                { icon: <FiShare2 />, label: "Shareable Data" },
                { icon: <FiSettings />, label: "Automated Updates" },
                { icon: <FiDownload />, label: "Exportable Reports" },
              ]}
            />
          </div>

          {/* Feature List */}
          <div className="mt-6 w-full lg:max-w-[850px]">
            <div className="pb-4">
              <FeatureList />
            </div>

            {/* Tabs Section */}
            <div className="bg-white p-4 rounded-2xl flex flex-wrap justify-start gap-2 border-b-8 border-b-[#DBEAFE]">
              <button
                className={getTabClass("description")}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={getTabClass("details")}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={getTabClass("review")}
                onClick={() => setActiveTab("review")}
              >
                Review
              </button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md mt-4">
              {activeTab === "description" && <Description />}
              {activeTab === "details" && <Details />}
              {activeTab === "review" && <ProductReviews />}
            </div>
          </div>

          {/* FAQs */}
          <div className="w-full lg:max-w-[850px] mt-6">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              FAQs
            </h1>
            <p className="text-gray-600 mb-4">
              Can't find your question? Feel free to contact us!
            </p>
            <Faqs />
          </div>

          {/* Product Carousel */}
          <div className="mt-10">
            <ProductCarousel products={products} />
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden lg:block lg:w-[470px] lg:shrink-0">
          <ProductInfoCard
            title="Products Data Sync"
            headerTitle="One-Time Purchase, Lifetime Simplicity"
            description={
              <>
                Say goodbye to monthly subscriptions that drain your budget! For
                just <strong>$96</strong>, our Google app script offers a
                lifetime solution to keep your Shopify product data synchronized
                with Google Sheets effortlessly.
              </>
            }
            price="96"
            originalPrice="120"
            discount="20"
            linkTo="/checkout"
            buttonLabel="Order Now"
            features={[
              { icon: <FiEdit />, label: "Edit Inventory" },
              { icon: <FiShare2 />, label: "Shareable Data" },
              { icon: <FiSettings />, label: "Automated Updates" },
              { icon: <FiDownload />, label: "Exportable Reports" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDataSyncDetails;

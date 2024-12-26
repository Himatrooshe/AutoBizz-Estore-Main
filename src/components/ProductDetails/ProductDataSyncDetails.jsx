import React, { useState, useEffect } from "react";
import random from "../../assets/Product Image.png";
import Asses from "../../assets/A-1.png";
import { FiEdit, FiShare2, FiSettings, FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import OrderDataSync from "../ProductCart/OrderDataSync";
import InventoryDataSync from "../ProductCart/InventoryDataSync";
import EnterpriseCustomSolution from "../ProductCart/EnterpriseCustomSolution";
import Faqs from "../FAQ/Faqs";
import ProductReviews from "../Reviews/products-review/ProductReviews";

const ProductDataSyncDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [random, Asses, random];
  const [activeTab, setActiveTab] = useState("description");
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [productsToShow, setProductsToShow] = useState(2);

  const products = [
    <OrderDataSync />,
    <InventoryDataSync />,
    <EnterpriseCustomSolution />,
    <OrderDataSync />,
  ];

  // Handle resizing logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProductsToShow(1);
      } else {
        setProductsToShow(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevClick = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0
        ? products.length - productsToShow
        : prevIndex - productsToShow
    );
  };

  const handleNextClick = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex >= products.length - productsToShow
        ? 0
        : prevIndex + productsToShow
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex justify-center bg-[#DBEAFE] py-20">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-10">
        <div>
          <div className="relative lg:w-[850px] w-[370px] mx-auto">
            <img
              className="lg:w-[850px] w-[3700px] lg:h-[510px]  object-cover rounded-2xl"
              src={images[currentImage]}
              alt="Product"
            />

            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={handlePrev}
            >
              ❮
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={handleNext}
            >
              ❯
            </button>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="border border-gray-300 p-4 rounded-2xl flex items-center space-x-3">
              <span className="bg-white p-2 rounded-full text-green-500 text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <linearGradient
                    id="PTsiEfj2THKtO9xz06mlla_qrAVeBIrsjod_gr1"
                    x1="24"
                    x2="24"
                    y1="5"
                    y2="43"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#21ad64"></stop>
                    <stop offset="1" stop-color="#088242"></stop>
                  </linearGradient>
                  <path
                    fill="url(#PTsiEfj2THKtO9xz06mlla_qrAVeBIrsjod_gr1)"
                    d="M39,16v25c0,1.105-0.895,2-2,2H11c-1.105,0-2-0.895-2-2V7c0-1.105,0.895-2,2-2h17L39,16z"
                  ></path>
                  <path
                    fill="#61e3a7"
                    d="M28,5v9c0,1.105,0.895,2,2,2h9L28,5z"
                  ></path>
                  <path
                    fill="#107c42"
                    d="M39,16h-9c-0.473,0-0.917-0.168-1.257-0.444L39,27V16z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M32,23H16c-0.553,0-1,0.448-1,1v12c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V24	C33,23.448,32.553,23,32,23z M17,29h4v2h-4V29z M23,29h8v2h-8V29z M31,27h-8v-2h8V27z M21,25v2h-4v-2H21z M17,33h4v2h-4V33z M23,35	v-2h8v2H23z"
                  ></path>
                  <path
                    d="M32,22.5c0.827,0,1.5,0.673,1.5,1.5v12c0,0.827-0.673,1.5-1.5,1.5H16c-0.827,0-1.5-0.673-1.5-1.5V24 c0-0.827,0.673-1.5,1.5-1.5H32 M32,22H16c-1.103,0-2,0.897-2,2v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V24 C34,22.897,33.103,22,32,22L32,22z"
                    opacity=".05"
                  ></path>
                  <path
                    d="M32,23c0.553,0,1,0.448,1,1v12c0,0.552-0.447,1-1,1H16c-0.553,0-1-0.448-1-1V24c0-0.552,0.447-1,1-1	H32 M32,22.5H16c-0.827,0-1.5,0.673-1.5,1.5v12c0,0.827,0.673,1.5,1.5,1.5h16c0.827,0,1.5-0.673,1.5-1.5V24	C33.5,23.173,32.827,22.5,32,22.5L32,22.5z"
                    opacity=".07"
                  ></path>
                </svg>
              </span>
              <div>
                <p className="text-gray-600 font-bold ">Data source</p>
                <p className="text-gray-600 font-semibold text-sm">
                  Google Sheets
                </p>
              </div>
            </div>

            <div className="border border-gray-300 p-4 rounded-2xl flex items-center space-x-3">
              <span className="bg-white p-2 rounded-full text-blue-500 text-2xl">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.21 18.62C10.6706 18.5472 9.21846 17.8843 8.15514 16.7688C7.09181 15.6533 6.49905 14.1711 6.5 12.63C6.5 9.32 9.19 6.63 12.5 6.63C15.72 6.63 18.34 9.16 18.49 12.34L16.39 11.71C16.2266 11.0168 15.8809 10.3798 15.3889 9.86488C14.8968 9.34997 14.2761 8.97581 13.591 8.78109C12.9059 8.58637 12.1813 8.57815 11.4919 8.75728C10.8026 8.93641 10.1736 9.29639 9.67001 9.80001C9.16639 10.3036 8.80641 10.9326 8.62728 11.622C8.44814 12.3113 8.45636 13.036 8.65108 13.721C8.84581 14.4061 9.21996 15.0268 9.73488 15.5189C10.2498 16.0109 10.8868 16.3566 11.58 16.52L12.21 18.62ZM22.5 12.63C22.5 12.93 22.49 13.23 22.46 13.53L20.49 12.94C20.5 12.84 20.5 12.73 20.5 12.63C20.5 8.21 16.92 4.63 12.5 4.63C8.08 4.63 4.5 8.21 4.5 12.63C4.5 17.05 8.08 20.63 12.5 20.63C12.6 20.63 12.71 20.63 12.81 20.62L13.4 22.59C13.1 22.62 12.8 22.63 12.5 22.63C6.98 22.63 2.5 18.15 2.5 12.63C2.5 7.11 6.98 2.63 12.5 2.63C18.02 2.63 22.5 7.11 22.5 12.63ZM18.73 16.89L22.5 15.63L12.5 12.63L15.5 22.63L16.76 18.86L21.03 23.13L23.01 21.15L18.73 16.89Z"
                    fill="#55BAE7"
                  />
                </svg>
              </span>
              <div>
                <p className="text-gray-600 font-bold">One click setup</p>
                <p className="text-gray-600 font-semibold font-sm">
                  Easy to deploy
                </p>
              </div>
            </div>
            <div className="w-[400px] lg:sticky lg:top-0 lg:hidden mx-auto pl-3">
              <nav className="text-xs sm:text-sm text-gray-500 mb-4 font-semibold hidden lg:block">
                <Link
                  to="/"
                  className="text-gray-500 hover:text-[#1c5a7a] transition"
                >
                  Home
                </Link>{" "}
                / Product Path /{" "}
                <span className="text-[#1c5a7a]">Products Data Sync</span>
              </nav>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                One-Time Purchase, Lifetime Simplicity
              </h1>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Say goodbye to monthly subscriptions that drain your budget! For
                just <strong>$120</strong>, our Google app script offers a
                lifetime solution to keep your Shopify product data synchronized
                with Google Sheets effortlessly.
                <strong>Save Time and Boost Efficiency</strong>
              </p>

              <div className="flex flex-row items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex -space-x-3">
                  <img
                    src={Asses}
                    className="w-12 h-12 rounded-full border-2 border-white"
                    alt="Expert"
                  />
                  <img
                    src={Asses}
                    className="w-12 h-12 rounded-full border-2 border-white"
                    alt="Expert"
                  />
                  <img
                    src={Asses}
                    className="w-12 h-12 rounded-full border-2 border-white"
                    alt="Expert"
                  />
                </div>
                <div className=" text-gray-600 text-lg pb-4 ml-4">
                  <p>
                    <strong>171 Experts</strong>
                  </p>
                  <p>purchased the template</p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md">
                <div className="flex flex-row items-center space-y-4 mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-[#1c5a7a] text-left">
                    $120
                  </span>
                  <span className="text-gray-400 line-through mr-2 ml-2">
                    $150
                  </span>
                  <span className="bg-red-500 text-white text-sm font-semibold py-1 px-2 rounded">
                    20% off
                  </span>
                </div>
                <p className="text-lg text-gray-500 mb-6">One time payment</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-7">
                  <Link to="/checkout" className="w-full sm:w-auto">
                    <button className="bg-[#1c5a7a] w-full sm:w-auto text-white py-4 sm:py-5 px-8 sm:px-16 rounded-xl hover:bg-blue-500">
                      Order Now
                    </button>
                  </Link>
                  <button className="bg-gray-100 w-full sm:w-auto text-gray-500 py-4 sm:py-5 px-8 sm:px-16 rounded-xl hover:bg-gray-200">
                    Preview
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 pt-2">
                <div className="p-4 flex items-center">
                  <div className="p-2 bg-gray-100 rounded-xl text-blue-500 mr-3">
                    <FiEdit size={24} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-black">•</span>
                    <h3 className="font-bold text-sm text-gray-800">
                      Edit Access
                    </h3>
                  </div>
                </div>
                <div className="p-4 flex items-center">
                  <div className="p-2 bg-gray-100 rounded-xl text-blue-500 mr-3">
                    <FiShare2 size={24} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-black">•</span>
                    <h3 className="font-bold text-sm text-gray-800">
                      Sharing Option
                    </h3>
                  </div>
                </div>
                <div className="p-4 flex items-center">
                  <div className="p-2 bg-gray-100 rounded-xl text-blue-500 mr-3">
                    <FiSettings size={24} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-black">•</span>
                    <h3 className="font-bold text-sm text-gray-800">
                      Quick Setup
                    </h3>
                  </div>
                </div>
                <div className="p-4 flex items-center">
                  <div className="p-2 bg-gray-100 rounded-xl text-blue-500 mr-3">
                    <FiDownload size={24} />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-black">•</span>
                    <h3 className="font-bold text-sm text-gray-800">
                      Downloadable Data
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:w-[850px]">
            <div className="bg-white p-4 rounded-2xl flex space-x-4 border-b-8 border-b-[#DBEAFE]">
              <button
                className={`text-gray-600 font-bold py-2 px-4 ${
                  activeTab === "description"
                    ? "text-blue-500 bg-[#E1F0F8] rounded-lg"
                    : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`text-gray-600 font-bold py-2 px-4 ${
                  activeTab === "details"
                    ? "text-blue-500 bg-[#E1F0F8] rounded-lg"
                    : ""
                }`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={`text-gray-600 font-bold py-2 px-4 ${
                  activeTab === "review"
                    ? "text-blue-500 bg-[#E1F0F8] rounded-lg"
                    : ""
                }`}
                onClick={() => setActiveTab("review")}
              >
                Review
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              {activeTab === "description" && (
                <div>
                  <p className="text-gray-600">
                    <strong>Key Features You’ll Love:</strong>
                  </p>
                  <ul className="text-gray-600 pl-5">
                    <li>
                      ✔ <strong>Real-Time Data Syncing:</strong> Products data
                      are automatically synced to Google Sheets every hour, so
                      you’re always working with current information.
                    </li>
                    <li>
                      ✔ <strong>API Integration:</strong> Seamlessly connect
                      Shopify with Google Sheets for smooth and reliable data
                      transfer.
                    </li>
                    <li>
                      ✔ <strong>Data Cleanup & Formatting:</strong> Messy data?
                      Not anymore. Enjoy neatly formatted, ready-to-use data
                      without the extra work.
                    </li>
                    <li>
                      ✔ <strong>Source Code Included:</strong> Full access lets
                      you tweak and customize as you see fit.
                    </li>
                    <li>
                      ✔ <strong>Delivery within 2 Days:</strong> Quick
                      turnaround to get you up and running fast.
                    </li>
                    <li>
                      ✔ <strong>1 Revision Included:</strong> Fine-tune the
                      script to match your exact requirements.
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "details" && (
                <div>
                  <h3 className="text-gray-800 font-bold text-xl mb-4">
                    Perfect For:
                  </h3>
                  <ul className="text-gray-600 pl-5 space-y-2">
                    <li>
                      ✔ Shopify store owners who want real-time product tracking
                      without the hassle.
                    </li>
                    <li>
                      ✔ Anyone tired of manually exporting Shopify data into
                      Google Sheets!
                    </li>
                    <li>
                      ✔ Developers who need a reliable way to export Shopify
                      data automatically.
                    </li>
                    <li>
                      ✔ Entrepreneurs looking to automate Shopify workflows and
                      focus on growth.
                    </li>
                    <li>
                      ✔ Ecommerce store owners looking to create custom
                      dashboards in platforms like Google Sheets, Looker Studio,
                      Power BI, and more.
                    </li>
                  </ul>

                  <h3 className="text-gray-800 font-bold text-xl mt-6 mb-4">
                    How It Works:
                  </h3>
                  <ol className="text-gray-600 pl-5 list-decimal space-y-2">
                    <li>
                      We will contact you via the email address you provide and
                      request access to your store through our Shopify partner
                      account.
                    </li>
                    <li>
                      Next, we’ll set up the automation system in a Google Sheet
                      and send it to you.
                    </li>
                    <li>
                      Simply copy the Google Sheet, press the trigger button as
                      directed in the email, and voila you’ll have your
                      automated system ready to go!
                    </li>
                    <li>
                      Enjoy seamless, real-time Shopify exports and formatted
                      product data ready for analysis or reporting.
                    </li>
                  </ol>
                </div>
              )}
              {activeTab === "review" && <ProductReviews />}
            </div>
          </div>
          <div className="lg:w-[850px] mt-6">
            <h1 className="text-4xl font-semibold">FAQs</h1>
            <p className="text-gray-600 mb-4">
              Can't find your question? Feel free to contact us!
            </p>
            <Faqs />
            <div>
              <h1 className="text-4xl font-semibold text-gray-600 mt-4">
                Check out more of our templates
              </h1>
              <p className="mt-3">
                View all our automation products that can help upgrade your
                digital reporting in minutes.
              </p>
              <div className="relative flex items-center justify-center mt-6 w-full lg:w-[850px]">
                <button
                  className="absolute left-0 bg-white rounded-full p-2 shadow-lg"
                  onClick={handlePrevClick}
                >
                  &#8249;
                </button>
                <div className="flex space-x-4">
                  {products
                    .slice(
                      currentProductIndex,
                      currentProductIndex + productsToShow
                    )
                    .map((product, index) => (
                      <div key={index} className="max-w-md">
                        {product}
                      </div>
                    ))}
                </div>
                <button
                  className="absolute right-0 bg-white rounded-full p-2 shadow-lg"
                  onClick={handleNextClick}
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[470px] lg:sticky lg:top-0 hidden lg:block">
          <nav className="text-xs sm:text-sm text-gray-500 mb-4 font-semibold hidden lg:block">
            <Link
              to="/"
              className="text-gray-500 hover:text-[#1c5a7a] transition"
            >
              Home
            </Link>{" "}
            / Product Path /{" "}
            <span className="text-[#1c5a7a]">Products Data Sync</span>
          </nav>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            One-Time Purchase, Lifetime Simplicity
          </h1>
          <p className="text-gray-600 mb-6">
            Say goodbye to monthly subscriptions that drain your budget! For
            just <strong>$120</strong>, our Google app script offers a lifetime
            solution to keep your Shopify product data synchronized with Google
            Sheets effortlessly. <strong>Save Time and Boost Efficiency</strong>
          </p>
          <div className="flex items-center mb-6">
            <div className="flex -space-x-3">
              <img
                src={Asses}
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="Expert"
              />
              <img
                src={Asses}
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="Expert"
              />
              <img
                src={Asses}
                className="w-10 h-10 rounded-full border-2 border-white"
                alt="Expert"
              />
            </div>
            <div className="ml-4 text-gray-600">
              <p>
                <strong>171 Experts</strong>
              </p>
              <p>purchased the template</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-4xl font-bold text-[#1c5a7a]">$120</span>
              <span className="text-gray-400 line-through">$150</span>
              <span className="bg-red-500 text-white text-sm font-semibold py-1 px-2 rounded">
                20% off
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6">One time payment</p>
            <div className="flex space-x-7">
              <Link to="/checkout">
                <button className="bg-[#1c5a7a] text-white py-5 px-16 rounded-xl hover:bg-blue-500">
                  Order Now
                </button>
              </Link>
              <button className="bg-gray-100 text-gray-500 py-5 px-16 rounded-xl hover:bg-gray-200">
                Preview
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-2">
            <div className="p-4 flex items-center" style={{ width: "231px" }}>
              <div className="p-2 bg-gray-100 rounded-xl text-blue-500 mr-3">
                <FiEdit size={24} />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-black">•</span>
                <h3 className="font-bold text-sm text-gray-800">
                  Instant Edit Access
                </h3>
              </div>
            </div>
            <div className="p-4 flex items-center" style={{ width: "231px" }}>
              <div className="p-2 bg-gray-100 rounded-xl text-blue-500 mr-3">
                <FiShare2 size={24} />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-black">•</span>
                <h3 className="font-bold text-sm text-gray-800">
                  Sharing Option
                </h3>
              </div>
            </div>
            <div className="p-4 flex items-center" style={{ width: "231px" }}>
              <div className="p-2 bg-gray-100 rounded-xl text-blue-500 mr-3">
                <FiSettings size={24} />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-black">•</span>
                <h3 className="font-bold text-sm text-gray-800">
                  Instant Quick Setup
                </h3>
              </div>
            </div>
            <div className="p-4 flex items-center" style={{ width: "231px" }}>
              <div className="p-2 bg-gray-100 rounded-xl text-blue-500 mr-3">
                <FiDownload size={24} />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-black">•</span>
                <h3 className="font-bold text-sm text-gray-800">
                  Downloadable Data
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataSyncDetails;

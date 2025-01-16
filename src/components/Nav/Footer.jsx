import React from "react";
import { Link } from "react-router-dom";
import autobizzLogo from "../../assets/Logo for Dark BG.svg";
import FooterIcons from "./FooterIcons";
import thunder from "../../assets/Thunder 1.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#011223] text-white py-10 px-5 sm:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row lg:justify-between font-Jakarta items-center sm:items-start">
        <div className="mb-8 lg:mb-0 mr-4 text-center sm:text-left">
          <a href="/">
            <img
              src={autobizzLogo}
              alt="AutoBizz Logo"
              className="w-80 mb-4 mx-auto sm:mx-0"
            />
          </a>
          <h2 className="text-[46px] font-semibold mb-4 lg:text-4xl">
            We would love to hear from you
          </h2>
          <p className="text-sm mb-5">
            Feel free to reach us if you want to collaborate with us, or simply
            have a chat.
          </p>
          <button className="bg-[#1c5a7a] text-white font-Jakarta px-4 py-2 rounded-lg shadow-md text-sm font-medium hover:bg-[#7CBCF3] hover:text-white flex items-center gap-2 group mx-auto sm:mx-0">
            Free 30 Minutes Consultation<img src={thunder} alt="Thunder Icon" className="w-4 h-4" />
          </button>
          <p className="mt-5 text-sm">
            Don’t like the forms? Drop us a line via email.
          </p>
          <a
            href="mailto:info@autobizz.net"
            className="text-[#38EDCE] hover:underline text-md font-semibold"style={{
              color: "transparent",
              backgroundImage: "linear-gradient(90deg, #29ABE2, #38EDCE)",
              backgroundClip: "text",
            }}
          >
            support@autobizz.net
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:w-[55%] font-inter text-center sm:text-left">
          <div>
            <h3 className="font-medium text-base mb-4 text-[#D1E4F8] font-inter">
              AutoBizz
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">
                <Link
                  to="https://www.fiverr.com/neel_chowdhury"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our work
                </Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link
                  to="https://www.autobizz.net/#services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Services
                </Link>
              </li>

              <li className="hover:text-blue-400 cursor-pointer">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">Career</li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                <Link to="/privacy-and-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-m mb-4 text-[#D1E4F8]">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">
                Web Application Design & Development
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                UProcess Automation Solutions
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Custom ERP Systems
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                End-to-End Product Development
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Data Integration & Engineering
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Data Analytics Solutions
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Brand Identity Design
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Copywriting & SEO Optimization
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-base mb-4 text-[#D1E4F8]">Blogs</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">
                Authorizing App Script
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Gettinng Shopify API Credentials
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center">
        <p className="text-xs text-gray-500 order-3 sm:order-1">
          © 2023 - 2024 AutoBizz. All rights reserved.
        </p>
        <div className="order-2 my-5 sm:my-0">
          <FooterIcons />
        </div>
        <button
          onClick={scrollToTop}
          className="text-gray-400 hover:text-blue-400 text-sm order-1 sm:order-3"
        >
          Scroll to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;

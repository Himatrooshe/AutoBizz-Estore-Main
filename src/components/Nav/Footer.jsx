import React from "react";
import { Link } from 'react-router-dom';
import autobizzLogo from "../../assets/autobizz_new_logo.svg";
import FooterIcons from "./FooterIcons"; 

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#011223] text-white py-10 px-5 sm:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row lg:justify-between font-Jakarta items-center sm:items-start">
        {/* Left Section */}
        <div className="mb-8 lg:mb-0 mr-4 text-center sm:text-left">
          <img src={autobizzLogo} alt="AutoBizz Logo" className="w-80 mb-4 mx-auto sm:mx-0" />
          <h2 className="text-[46px] font-semibold mb-4 lg:text-4xl">
            We would love to hear from you
          </h2>
          <p className="text-sm mb-5">
            Feel free to reach us if you want to collaborate with us, or simply
            have a chat.
          </p>
          <button className="bg-[#7CBCF3] text-[#1B2533] font-Jakarta px-4 py-2 rounded-lg shadow-md text-sm font-medium hover:bg-[#1c5a7a] hover:text-white flex items-center gap-2 group mx-auto sm:mx-0">
            Free 30 Minutes Consultation
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-colors duration-300 fill-black group-hover:fill-white"
            >
              <path d="M8.69667 0.0403541C8.90859 0.131038 9.03106 0.354857 8.99316 0.582235L8.0902 6.00001H12.5C12.6893 6.00001 12.8625 6.10701 12.9472 6.27641C13.0319 6.4458 13.0136 6.6485 12.8999 6.80001L6.89997 14.8C6.76167 14.9844 6.51521 15.0503 6.30328 14.9597C6.09135 14.869 5.96888 14.6452 6.00678 14.4178L6.90974 9H2.49999C2.31061 9 2.13748 8.893 2.05278 8.72361C1.96809 8.55422 1.98636 8.35151 2.09999 8.2L8.09997 0.200038C8.23828 0.0156255 8.48474 -0.0503301 8.69667 0.0403541ZM3.49999 8.00001H7.49997C7.64695 8.00001 7.78648 8.06467 7.88148 8.17682C7.97648 8.28896 8.01733 8.43723 7.99317 8.5822L7.33027 12.5596L11.5 7.00001H7.49997C7.353 7.00001 7.21347 6.93534 7.11846 6.8232C7.02346 6.71105 6.98261 6.56279 7.00678 6.41781L7.66968 2.44042L3.49999 8.00001Z"></path>
            </svg>
          </button>

          <p className="mt-5 text-sm">
            Don’t like the forms? Drop us a line via email.
          </p>
          <a
            href="mailto:info@autobizz.net"
            className="text-[#38EDCE] hover:underline text-sm"
          >
            support@autobizz.net
          </a>
        </div>

        {/* Middle Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:w-[55%] font-inter text-center sm:text-left">
          {/* Column 1 */}
          <div>
            <h3 className="font-medium text-base mb-4 text-[#D1E4F8] font-inter">
              AutoBizz
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">Our work</li>
              <li className="hover:text-blue-400 cursor-pointer">Services</li>
              <li className="hover:text-blue-400 cursor-pointer">About Us</li>
              <li className="hover:text-blue-400 cursor-pointer">Career</li>
              <li className="hover:text-blue-400 cursor-pointer">
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
              <Link to="/privacy-and-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-medium text-m mb-4 text-[#D1E4F8]">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">
                Web App Design
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                UI/UX Design
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Process Automation Engineering
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Product Development
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Landing Page Design
              </li>
              <li className="hover:text-blue-400 cursor-pointer">Branding</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-medium text-base mb-4 text-[#D1E4F8]">Blogs</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 cursor-pointer">
                Business Process Automation
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Data Management & Optimization
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Data Visualization & Analytics
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Full Stack Web Development
              </li>
              <li className="hover:text-blue-400 cursor-pointer">
                Marketing Platform Technology
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center">
        {/* Left Section: All Rights Reserved Text */}
        <p className="text-xs text-gray-500 order-3 sm:order-1">
          © 2023 - 2024 AutoBizz. All rights reserved.
        </p>

        {/* Middle Section: Social Media Icons */}
        <div className="order-2 my-5 sm:my-0">
          <FooterIcons />
        </div>

        {/* Right Section: Scroll to Top Button */}
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

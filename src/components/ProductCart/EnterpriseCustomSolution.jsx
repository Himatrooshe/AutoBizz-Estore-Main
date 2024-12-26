import React from "react";
import { Link } from "react-router-dom";
import random from "../../assets/Product Image.png";

const ProductCard = () => {
  return (
    <div className="4xl:w-[426px] h-[760px] md:w-[340px] rounded-[40px] overflow-hidden shadow-lg bg-[#F5F8F9] p-6 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
      <div>
        <Link to="/enterprise-custom-solution-details">
          <img
            className="w-full max-h-[300px] object-cover rounded-[30px]"
            src={random}
            alt="Product"
          />
        </Link>

        <div className="flex space-x-2 mt-4">
          <span className="bg-[#97E15E] text-[#2B2B34] text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
            Sheets
          </span>
          <span className="bg-[#309FFF] text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
            Looker Studio
          </span>
        </div>
        <Link to="/enterprise-custom-solution-details">
          <h2 className="mt-4 text-xl font-bold">Enterprise Custom Solution</h2>
        </Link>
        <p className="text-gray-600 text-sm mt-2 font-semibold">
          We’re here to get to know your business, understand the systems you’re
          already using, and see how we can help make things better. Our focus
          is on learning about your needs, solving any challenges you’re facing,
          and finding ways to work together to achieve your goals. Whether it’s
          simplifying workflows, connecting your tools, or improving efficiency,
          we want to help you succeed.
        </p>
      </div>

      <div className="mt-auto">
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1">
            <span className="text-[26px] font-bold text-[#1c5a7a]">$$$</span>
            <span className="text-[20px] font-normal text-[#888] line-through">
              $$$
            </span>
          </div>

          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {/* SVG for rating stars */}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.97942 1.25171L6.9585 1.30199L5.58662 4.60039C5.54342 4.70426 5.44573 4.77523 5.3336 4.78422L1.7727 5.0697L1.71841 5.07405L1.38687 5.10063L1.08608 5.12475C0.820085 5.14607 0.712228 5.47802 0.914889 5.65162L1.14406 5.84793L1.39666 6.06431L1.43802 6.09974L4.15105 8.42374C4.23648 8.49692 4.2738 8.61176 4.24769 8.72118L3.41882 12.196L3.40618 12.249L3.32901 12.5725L3.25899 12.866C3.19708 13.1256 3.47945 13.3308 3.70718 13.1917L3.9647 13.0344L4.24854 12.861L4.29502 12.8326L7.34365 10.9705C7.43965 10.9119 7.5604 10.9119 7.6564 10.9705L10.705 12.8326L10.7515 12.861L11.0354 13.0344L11.2929 13.1917C11.5206 13.3308 11.803 13.1256 11.7411 12.866L11.671 12.5725L11.5939 12.249L11.5812 12.196L10.7524 8.72118C10.7263 8.61176 10.7636 8.49692 10.849 8.42374L13.562 6.09974L13.6034 6.06431L13.856 5.84793L14.0852 5.65162C14.2878 5.47802 14.18 5.14607 13.914 5.12475L13.6132 5.10063L13.2816 5.07405L13.2274 5.0697L9.66645 4.78422C9.55432 4.77523 9.45663 4.70426 9.41343 4.60039L8.04155 1.30199L8.02064 1.25171L7.89291 0.944609L7.77702 0.665992C7.67454 0.419604 7.32551 0.419604 7.22303 0.665992L7.10715 0.944609L6.97942 1.25171ZM7.50003 2.60397L6.50994 4.98442C6.32273 5.43453 5.89944 5.74207 5.41351 5.78103L2.84361 5.98705L4.8016 7.66428C5.17183 7.98142 5.33351 8.47903 5.2204 8.95321L4.62221 11.461L6.8224 10.1171C7.23842 9.86302 7.76164 9.86302 8.17766 10.1171L10.3778 11.461L9.77965 8.95321C9.66654 8.47903 9.82822 7.98142 10.1984 7.66428L12.1564 5.98705L9.58654 5.78103C9.10061 5.74207 8.67732 5.43453 8.49011 4.98442L7.50003 2.60397Z"
                    fill="#1c5a7a"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            ))}
          </div>
        </div>

        <Link to="/checkout">
          <button className="mt-6 w-full bg-[#1c5a7a] text-white text-lg font-semibold py-4 rounded-[12px] flex justify-center items-center space-x-2 transition duration-300">
            <span> Book a free consultation</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

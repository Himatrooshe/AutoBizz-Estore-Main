import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import autobizzLogo from "../../assets/autobizz_logo_1.png";
import { Link } from "react-router-dom";
import { useCart } from "../Checkout/CartContext";

const Header = () => {
  const { cart } = useCart(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    setShowCounter(cart.length > 0);
  }, [cart]);

  return (
    <header className="fixed w-full bg-[#ECF6FF20] backdrop-blur-sm z-10 lg:px-[55px] px-[55px]">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <Link to="/">
            <img
              src={autobizzLogo}
              alt="AutoBizz Logo"
              className="w-30 h-8 md:h-10 lg:h-12"
            />
          </Link>
        </div>

        <nav className="hidden lg-md:flex flex-grow justify-center space-x-6 lg:space-x-8">
          {["Home", "Our Services", "Portfolio", "Case Study", "About Us"].map(
            (item, index) => (
              <Link
                key={index}
                to={
                  item === "Home"
                    ? "/"
                    : item === "About Us"
                    ? "/about-us"
                    : `#${item.toLowerCase().replace(" ", "-")}`
                }
                className="text-black hover:text-blue-500"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg-md:flex items-center space-x-4">
          <Link to="/checkout">
            <button className="flex items-center space-x-1 text-[#1c5a7a] font-medium px-4 py-2 hover:text-blue-500 rounded-lg border border-[#1c5a7a] bg-[#fcfeff]">
              <span>Cart</span>
              <FiShoppingCart size={15} />
              {showCounter && (
                <span className="text-sm bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>
          <button className="flex items-center bg-[#1c5a7a] text-[#E1F0F8] px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Free Consultation
          </button>
        </div>

        <div className="flex lg-md:hidden items-center space-x-4">
          <Link to="/checkout">
            <button className="flex items-center space-x-2 text-[#1c5a7a] relative">
              <FiShoppingCart size={20} />
              {showCounter && (
                <span className="text-sm bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center ml-2">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#1c5a7a]"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg-md:hidden bg-[#ECF6FF20] backdrop-blur-sm mt-2">
          <ul className="space-y-4 pl-6 font-medium">
            {[
              "Home",
              "Our Services",
              "Portfolio",
              "Case Study",
              "About Us",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={
                    item === "Home"
                      ? "/"
                      : item === "About Us"
                      ? "/about-us"
                      : `#${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="block text-[#1C5A7A] hover:text-blue-500"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pl-6">
            <button className="flex items-center justify-center bg-[#1c5a7a] hover:bg-blue-600 text-white px-6 py-3 rounded-md transition">
              Free Consultation
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

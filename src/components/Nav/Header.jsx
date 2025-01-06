import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import autobizzLogo from "../../assets/AutoBizz Ecom Header Logo V1-1-20-20.svg";
import specialLogo from "../../assets/Logo for Dark BG.svg";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../Checkout/CartContext";

const Header = () => {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

  const location = useLocation();
  const specialRoutes = [
    "/about-us",
    "/privacy-and-policy",
    "/terms-and-conditions",
  ];
  const isSpecialPage = specialRoutes.includes(location.pathname);

  useEffect(() => {
    setShowCounter(cart.length > 0);
  }, [cart]);

  return (
    <header className="fixed w-full backdrop-blur-sm z-10 lg:px-[55px] px-[40px]">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <a href="/">
            <img
              src={isSpecialPage ? specialLogo : autobizzLogo}
              alt="Logo"
              className="w-30 h-8 md:h-10 lg:h-12"
            />
          </a>
        </div>

        <nav className="hidden lg-md:flex flex-grow justify-center space-x-6 lg:space-x-8 font-inter">
          {["Home", "Our Services", "Portfolio", "Case Study", "About Us"].map(
            (item, index) => (
              <Link
                key={index}
                to={
                  item === "Home"
                    ? "/"
                    : item === "About Us"
                    ? "/about-us"
                    : item === "Portfolio"
                    ? "https://www.fiverr.com/neel_chowdhury"
                    : item === "Our Services"
                    ? "https://www.autobizz.net/#services"
                    : `#${item.toLowerCase().replace(" ", "-")}`
                }
                target={
                  item === "Portfolio" || item === "Our Services"
                    ? "_blank"
                    : "_self"
                }
                className={`relative group ${
                  isSpecialPage ? "text-white" : "text-black"
                } hover:text-[#29ABE2]`}
              >
                {item.split("").map((char, charIndex) => (
                  <span
                    key={`${char}-${charIndex}`}
                    className="inline-block translate-y-0 group-hover:animate-text-scroll [animation-fill-mode:forwards]"
                    style={{ animationDelay: `${charIndex * 0.05}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg-md:flex items-center space-x-4">
          <Link to="/checkout">
            <button
              className={`flex items-center space-x-1 text-[#1c5a7a] border-[#1c5a7a] font-medium px-4 py-2 hover:text-blue-500 rounded-lg border bg-[#fcfeff]`}
            >
              <span>Cart</span>
              <FiShoppingCart size={15} />
              {showCounter && (
                <span className="text-sm bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>
          <button className="flex items-center bg-[#1c5a7a] text-[#E1F0F8] px-4 py-2 rounded-lg transition">
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
        <nav className="lg-md:hidden backdrop-blur-sm mt-2">
          <ul className="space-y-4 font-medium">
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
                      : item === "Portfolio"
                      ? "https://www.fiverr.com/neel_chowdhury"
                      : item === "Our Services"
                      ? "https://www.autobizz.net/#services"
                      : `#${item.toLowerCase().replace(" ", "-")}`
                  }
                  target={
                    item === "Portfolio" || item === "Our Services"
                      ? "_blank"
                      : "_self"
                  }
                  className={`block ${
                    isSpecialPage
                      ? "text-white hover:text-gray-300"
                      : "text-[#1C5A7A]"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button className="flex items-center justify-center bg-[#1c5a7a] hover:bg-blue-600 text-white px-6 py-3 rounded-md transition mb-4">
              Free Consultation
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

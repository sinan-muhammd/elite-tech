import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "./CartContext";
import { ShoppingBag, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const { cartCount, toggleCart } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled || !isHome ? "text-black" : "text-white";
  const bgColor = isScrolled || !isHome
    ? "bg-white shadow-lg py-4"
    : "bg-transparent py-6";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${bgColor}`}>
      
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex-1 flex items-center">
          <Link to="/" className={`text-2xl font-black ${textColor}`}>
            PHLOX
          </Link>
        </div>

        {/* EMPTY CENTER */}
        <div className="hidden md:flex flex-[2]"></div>

        {/* ICONS */}
        <div className="flex-1 flex items-center justify-end gap-6">

          <Link to="/login" className={`hidden sm:block ${textColor}`}>
            <User size={22} />
          </Link>

          <button onClick={toggleCart} className={`relative ${textColor}`}>
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button className={`md:hidden ${textColor}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </nav>

    </header>
  );
};

export default Navbar;
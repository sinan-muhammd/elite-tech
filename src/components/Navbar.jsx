// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { useSearch } from "./SearchContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { cartCount } = useCart();
  const { setSearchQuery } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);
  const userRole = localStorage.getItem("userRole"); // Check auth status

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
            ET
          </div>
          <div>
            <span className="text-2xl font-extrabold text-gray-900">
              Elite<span className="text-indigo-600">Tech</span>
            </span>
            <p className="text-xs text-gray-500 -mt-1">Electronics & Gadgets</p>
          </div>
        </Link>

        {/* SEARCH BAR DESKTOP */}
        <div className="hidden md:block w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleSearch}
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700">

          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>

          {userRole === "admin" && (
            <Link to="/addproduct" className="hover:text-indigo-600 transition">Add Product</Link>
          )}

          {/* CART BUTTON FIXED */}
          <Link to="/cart" className="relative flex items-center space-x-1 hover:text-indigo-600 transition">
            <span>🛒</span>
            <span>Cart</span>

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1.5">
                {cartCount}
              </span>
            )}
          </Link>

          {userRole ? (
            <Link to="/profile" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
              View Profile
            </Link>
          ) : (
            <Link to="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">
              Login
            </Link>
          )}
        </div>

        {/* MOBILE MENU BTN */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4">

          <input
            type="text"
            placeholder="Search products..."
            onChange={handleSearch}
            className="w-full border border-gray-300 rounded-full px-4 py-2"
          />

          <div className="flex flex-col space-y-3">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            {userRole === "admin" && (
              <Link to="/addproduct" onClick={() => setMenuOpen(false)}>Add Product</Link>
            )}
            <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>

            {userRole ? (
              <Link to="/profile" onClick={() => setMenuOpen(false)} className="bg-green-600 text-white py-2 rounded-full text-center">
                View Profile
              </Link>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)} className="bg-indigo-600 text-white py-2 rounded-full text-center">
                Login
              </Link>
            )}

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;

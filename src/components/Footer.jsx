// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 mt-20">
     
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

      
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">EliteTech</h2>
          <p className="text-sm leading-6">
            EliteTech offers premium products in Electronics, Fashion, Furniture,
            and more. Trusted, secure and fast delivery.
          </p>

          <div className="flex space-x-4 mt-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="facebook"
              className="w-6 h-6 cursor-pointer hover:opacity-80"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
              alt="instagram"
              className="w-6 h-6 cursor-pointer hover:opacity-80"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="twitter"
              className="w-6 h-6 cursor-pointer hover:opacity-80"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="youtube"
              className="w-6 h-6 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help & FAQs</li>
            <li className="hover:text-white cursor-pointer">Shipping Info</li>
            <li className="hover:text-white cursor-pointer">Return Policy</li>
            <li className="hover:text-white cursor-pointer">Track Order</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* SHOP CATEGORIES */}
       
<div>
  <h3 className="text-lg font-semibold text-white mb-4">Shop Categories</h3>

  <ul className="space-y-2 text-sm">

    <li className="hover:text-white cursor-pointer">
      <Link to="/products/electronics">Electronics</Link>
    </li>

    <li className="hover:text-white cursor-pointer">
      <Link to="/products/mobiles">Mobiles & Tablets</Link>
    </li>

    <li className="hover:text-white cursor-pointer">
      <Link to="/products/fashion">Fashion & Lifestyle</Link>
    </li>

    <li className="hover:text-white cursor-pointer">
      <Link to="/products/home">Home & Furniture</Link>
    </li>

    <li className="hover:text-white cursor-pointer">
      <Link to="/products/sports">Sports & Fitness</Link>
    </li>

  </ul>
</div>
        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-3">
            Subscribe for latest offers and updates.
          </p>

          <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-800 text-gray-300 outline-none"
            />
            <button className="bg-indigo-600 px-4 py-3 text-white text-sm hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-indigo-400 font-medium">EliteTech</span>.  
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

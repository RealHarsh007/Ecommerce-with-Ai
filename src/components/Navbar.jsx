import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTags, FaPercent, FaHome } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-full transition font-medium ${
      location.pathname === path
        ? "bg-yellow-400 text-black shadow-md"
        : "text-gray-700 hover:bg-yellow-200 hover:text-black"
    }`;

  return (
    <nav className="w-full bg-[#FFF7E6] shadow-md sticky top-0 z-50 border-b border-yellow-200">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 🧈 Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          UrbanX
        </Link>

        {/* 🧈 Menu */}
        <ul className="hidden md:flex gap-4 items-center">
          
          {/* HOME */}
          <Link to="/">
            <li className={linkClass("/")}>
              <FaHome /> Home
            </li>
          </Link>

          {/* COLLECTION */}
          <Link to="/collections">
            <li className={linkClass("/collections")}>
              <FaTags /> Collections
            </li>
          </Link>

          {/* SALE */}
          <Link to="/sale">
            <li className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition font-semibold">
              <FaPercent /> Sale
            </li>
          </Link>

        </ul>

        {/* 🧈 Icons */}
        <div className="flex items-center gap-5 text-xl text-gray-700">
          <span className="cursor-pointer hover:scale-110 transition">🔍</span>
          <span className="cursor-pointer hover:scale-110 transition">🛒</span>
          <span className="cursor-pointer hover:scale-110 transition">👤</span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
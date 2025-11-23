import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-light-neutral-100 backdrop-blur-md shadow-md sticky top-0 z-50 border border-light-neutral-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300"
        >
          <img
            src={Logo}
            alt="Logo image"
            className="h-16 w-40 object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="relative inline-block overflow-hidden text-gray-600 font-medium px-3 py-2 transition-all duration-300 hover:text-primary group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="relative inline-block overflow-hidden text-gray-600 font-medium px-3 py-2 transition-all duration-300 hover:text-primary group"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/recipes"
            className="relative inline-block overflow-hidden text-gray-600 font-medium px-3 py-2 transition-all duration-300 hover:text-primary group"
          >
            Recipes
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          {/* 
          <Link
            to="/contact"
            className="relative inline-block overflow-hidden text-gray-600 font-medium px-3 py-2 transition-all duration-300 hover:text-primary group"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link> */}
        </nav>
        <Link
          to="/"
          className="hidden md:block bg-primary text-light-neutral-0 px-6 py-3 rounded-xl hover:bg-secondary transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Browse Recipes
        </Link>
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-all"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6"></Menu>
        </button>
      </div>

      {/* Mobile Menu Conditional Rendering */}
      <div className="md:hidden bg-light-neutral-0 border-t border-light-neutral-200 shadow-sm">
        <nav className="flex flex-col space-y-2 p-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-primary transition-all text-left font-medium border-b border-transparent hover:border-primary pb-1"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-gray-700 hover:text-primary transition-all text-left font-medium border-b border-transparent hover:border-primary pb-1"
          >
            About
          </Link>

          <Link
            to="/recipes"
            className="text-gray-700 hover:text-primary transition-all text-left font-medium border-b border-transparent hover:border-primary pb-1"
          >
            Recipes
          </Link>

          {/* <Link
            to="/contact"
            className="text-gray-700 hover:text-primary transition-all text-left font-medium border-b border-transparent hover:border-primary pb-1"
          >
            Contact
          </Link> */}

          <Link
            to="/recipes"
            className="bg-primary text-light-neutral-0 px-6 py-3 rounded-xl mt-2 hover:bg-secondary transition-all duration-300 font-medium"
          >
            Browse Recipes
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;

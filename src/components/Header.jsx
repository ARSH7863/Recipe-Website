import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-light-neutral-100 backdrop-blur-md shadow-md sticky top-0 z-50 border border-light-neutral-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={handleCloseMenu}
          className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300"
        >
          <img src={Logo} alt="Logo" className="h-16 w-40 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {["Home", "About", "Recipes"].map((item, i) => (
            <Link
              key={i}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative inline-block text-gray-600 font-medium px-3 py-2 transition-all duration-300 hover:text-primary group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Link
          to="/recipes"
          className="hidden md:block bg-primary text-light-neutral-0 px-6 py-3 rounded-xl hover:bg-secondary transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Browse Recipes
        </Link>

        {/* Mobile Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-all"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMenuOpen ? <X /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-light-neutral-0 border-t border-light-neutral-200 shadow-sm overflow-hidden"
          >
            <nav className="flex flex-col space-y-2 p-4">
              {["Home", "About", "Recipes"].map((item, i) => (
                <Link
                  key={i}
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  onClick={handleCloseMenu}
                  className="text-gray-700 hover:text-primary transition-all text-left font-medium border-b border-transparent hover:border-primary pb-1"
                >
                  {item}
                </Link>
              ))}

              {/* FIXED - Added onClick to close menu */}
              <Link
                to="/recipes"
                onClick={handleCloseMenu}
                className="bg-primary text-light-neutral-0 px-6 py-3 rounded-xl mt-2 hover:bg-secondary transition-all duration-300 font-medium"
              >
                Browse Recipes
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;

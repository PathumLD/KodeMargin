import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../public/images/Logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <Link to="/">
            <img src={logo} alt="KodeMargin Logo" className="h-10" />
          </Link>
        </motion.div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-gray-800 hover:text-red-500 transition-all relative"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-red-500 transition-all relative"
          >
            About Us
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-red-500 transition-all relative"
          >
            About Us
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-red-500 transition-all relative"
          >
            About Us
          </Link>
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#FF6B35" }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all"
        >
          Let’s Talk
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
import React from "react";
import { motion } from "framer-motion";
import logo from "../../public/images/Logo.png"; // Replace with your logo

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
          <img src={logo} alt="KodeMargin Logo" className="h-10" />
        </motion.div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About Us", "Portfolio", "Contact Us"].map((link, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-[#000438] hover:text-[#FF0000] transition-all relative"
              whileHover={{ scale: 1.05, color: "#FF0000" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              {link}
              {/* Underline animation on hover */}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF0000]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, duration:0.05, backgroundColor: "#FF0000" }} // Soft orange on hover
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
          className="bg-[#FF0000] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#FF6B35] transition-all"
        >
          Let’s Talk
        </motion.button>
      </div>
    </header>
  );
};

export default Header;
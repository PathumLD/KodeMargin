import React from "react";
import { motion } from "framer-motion";

// Placeholder image from Unsplash (replace with your preferred image)
const heroImage = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div> {/* Overlay for better text readability */}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-white max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {/* Tagline */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Transforming Ideas into{" "}
          <span className="text-[#FF0000]">Digital Reality</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          We specialize in custom software development, graphic design, and digital
          solutions to elevate your brand.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#FF0000" }} // Soft orange on hover
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-[#FF0000] text-white px-6 py-3 rounded-lg font-semibold  transition-all"
          >
            View Our Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#000438] transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
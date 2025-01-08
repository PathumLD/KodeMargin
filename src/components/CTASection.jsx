import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#000438] mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false, amount: 0.5 }} // Trigger animation only once
        >
          Ready to Transform Your <span className="text-[#FF0000]">Business?</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-[#000438] max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false, amount: 0.5 }} // Trigger animation only once
        >
          Let’s collaborate to bring your ideas to life. Contact us today to get started on your next project.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#d12323" }} // Soft red on hover
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF0000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#d12323] transition-all"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1, // Faster duration
            ease: [0.25, 0.1, 0.25, 1], // Smooth easing
            type: "spring", // Spring animation
            stiffness: 100, // Higher stiffness for faster motion
            damping: 10, // Lower damping for less resistance
          }}
          viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is in view
        >
          Get a Free Consultation
        </motion.button>
      </div>
    </section>
  );
};

export default CTASection;
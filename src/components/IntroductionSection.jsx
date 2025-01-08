import React from "react";
import { motion } from "framer-motion";

// Icons for core services (replace with your preferred icons)
import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine } from "react-icons/fa";

const IntroductionSection = () => {
  // Data for core services
  const services = [
    {
      icon: <FaCode className="w-12 h-12 text-[#FF0000]" />,
      title: "Software Development",
      description: "We build custom software solutions tailored to your business needs.",
    },
    {
      icon: <FaPaintBrush className="w-12 h-12 text-[#FF0000]" />,
      title: "Graphic Design",
      description: "Creative designs that elevate your brand and captivate your audience.",
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-[#FF0000]" />,
      title: "Mobile App Development",
      description: "Innovative mobile apps for iOS and Android platforms.",
    },
    {
      icon: <FaChartLine className="w-12 h-12 text-[#FF0000]" />,
      title: "Digital Solutions",
      description: "Comprehensive digital strategies to drive growth and success.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#000438]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          Welcome to <span className="text-[#FF0000]">KodeMargin</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-center text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          At KodeMargin, we are passionate about transforming ideas into digital reality. Our team of experts specializes in custom software development, graphic design, and digital solutions to help businesses thrive in the digital age.
        </motion.p>

        {/* Icons/Visuals for Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-100 shadow-lg rounded-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.3, 
                ease: [0.25, 0.1, 0.25, 1], 
                type: "spring", 
                stiffness: 80, 
                damping: 50, 
              }}
              viewport={{ once: false }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#000438] mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
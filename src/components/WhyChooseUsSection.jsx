import React from "react";
import { motion } from "framer-motion";

// Icons for key differentiators (replace with your preferred icons)
import { FaUsers, FaCogs, FaLightbulb, FaHandshake } from "react-icons/fa";

const WhyChooseUsSection = () => {
  // Data for key differentiators
  const differentiators = [
    {
      icon: <FaUsers className="w-12 h-12 text-[#FF0000]" />,
      title: "Experienced Team",
      description: "Our team of experts brings years of experience in software development, design, and digital solutions.",
    },
    {
      icon: <FaCogs className="w-12 h-12 text-[#FF0000]" />,
      title: "Customized Solutions",
      description: "We tailor our solutions to meet your unique business needs, ensuring maximum efficiency and impact.",
    },
    {
      icon: <FaLightbulb className="w-12 h-12 text-[#FF0000]" />,
      title: "Innovative Approach",
      description: "We leverage the latest technologies and creative strategies to deliver cutting-edge solutions.",
    },
    {
      icon: <FaHandshake className="w-12 h-12 text-[#FF0000]" />,
      title: "Client-Centric Focus",
      description: "Your success is our priority. We work closely with you to achieve your goals and exceed expectations.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#FF0000]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.5 }} // Trigger animation only once
        >
          Why Choose <span className="text-[#000438]">KodeMargin?</span>
        </motion.h2>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.7, 
                ease: [0.25, 0.1, 0.25, 1], 
                type: "spring", 
                stiffness: 80, 
                damping: 50, 
              }}
              viewport={{ once: false, amount: 0.5 }} // Trigger animation only once
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#000438] mb-2">
                {item.title}
              </h3>
              <p className="text-[#000438]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
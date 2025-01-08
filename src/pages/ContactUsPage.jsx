import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer

const ContactUsPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <Header />

      {/* Contact Us Section */}
      <section className="py-28">
        <div className="container mx-auto px-4">
          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#000438] text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Let’s Build Something <span className="text-[#FF0000]">Amazing</span> Together
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-gray-50 p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#000438]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF0000]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#000438]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF0000]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#000438]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF0000]"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#000438]">
                    Project Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF0000]"
                    placeholder="Describe your project"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#FF6B35" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  type="submit"
                  className="w-full bg-[#FF0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Email */}
              <div className="flex items-center">
                <FaEnvelope className="w-6 h-6 text-[#FF0000] mr-4" />
                <div>
                  <p className="text-lg font-semibold text-[#000438]">Email</p>
                  <a
                    href="mailto:info@kodemargin.com"
                    className="text-[#000438] hover:text-[#FF0000] transition-all"
                  >
                    info@kodemargin.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center">
                <FaPhone className="w-6 h-6 text-[#FF0000] mr-4" />
                <div>
                  <p className="text-lg font-semibold text-[#000438]">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-[#000438] hover:text-[#FF0000] transition-all"
                  >
                    +123 456 7890
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center">
                <FaMapMarkerAlt className="w-6 h-6 text-[#FF0000] mr-4" />
                <div>
                  <p className="text-lg font-semibold text-[#000438]">Address</p>
                  <p className="text-[#000438]">123 KodeMargin Street, Tech City, TC 12345</p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000438] hover:text-[#FF0000] transition-all"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000438] hover:text-[#FF0000] transition-all"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#000438] hover:text-[#FF0000] transition-all"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
              </div>

              {/* Location Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-122.084249684332!3d37.42247637903282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807f4e8e7f9d%3A0x3b8d7c8b8b8b8b8b!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUsPage;
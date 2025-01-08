import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000438] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About KodeMargin */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FF0000]">About KodeMargin</h3>
            <p className="text-sm text-gray-300">
              KodeMargin is a leading provider of custom software development, graphic design, and digital solutions. We help businesses transform their ideas into digital reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#FF0000]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-[#FF0000] transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF0000] transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF0000] transition-all">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF0000] transition-all">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FF0000] ">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2 text-[#ffffff]" />
                <a href="mailto:info@kodemargin.com" className="hover:text-[#FF0000] transition-all">
                  info@kodemargin.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-2 text-[#ffffff]" />
                <a href="tel:+1234567890" className="hover:text-[#FF0000] transition-all">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-[#ffffff]" />
                <p>123 KodeMargin Street, Tech City, TC 12345</p>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FF0000]">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF0000] transition-all"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF0000] transition-all"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF0000] transition-all"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>

            {/* Newsletter Subscription */}
            <h3 className="text-xl font-bold mb-4 text-[#FF0000]">Subscribe to Our Newsletter</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-[#FF0000]"
              />
              <button
                type="submit"
                className="bg-[#FF0000] text-white px-4 py-2 rounded-r-lg hover:bg-[#FF6B35] transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-12 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400">
            © 2023 KodeMargin. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
const Footer = () => {
    return (
      <footer className="bg-[#000438] text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Quick Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <a href="/" className="hover:text-[#FF0000] transition duration-300">
              Home
            </a>
            <a href="/about" className="hover:text-[#FF0000] transition duration-300">
              About Us
            </a>
            <a href="/portfolio" className="hover:text-[#FF0000] transition duration-300">
              Portfolio
            </a>
            <a href="/contact" className="hover:text-[#FF0000] transition duration-300">
              Contact Us
            </a>
          </div>
  
          {/* Contact Information */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p>Email: info@kodemargin.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
  
          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://linkedin.com" className="hover:text-[#FF0000] transition duration-300">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" className="hover:text-[#FF0000] transition duration-300">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" className="hover:text-[#FF0000] transition duration-300">
              <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook.png" alt="Facebook" className="w-6 h-6" />
            </a>
          </div>
        </div>
  
        {/* Copyright Notice */}
        <div className="text-center mt-8">
          <p>© 2023 KodeMargin. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
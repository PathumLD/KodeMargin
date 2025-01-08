import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-[#F2F2F2]"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#000438] mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl text-[#000438] mb-8">
          Let’s collaborate to bring your ideas to life. Contact us today for a free consultation!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF0000] text-white px-8 py-3 rounded-md hover:bg-[#FF6B35] transition duration-300"
        >
          Get a Free Consultation
        </motion.button>
      </div>
    </motion.section>
  );
};

export default CTASection;
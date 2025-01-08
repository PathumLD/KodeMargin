import { motion } from "framer-motion";

const CustomSoftwareDevelopment = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-[#000438] mb-8">Custom Software Development</h1>
        <p className="text-xl text-[#000438] mb-8">
          At KodeMargin, we specialize in creating custom software solutions tailored to your unique business needs. Whether you need a robust enterprise application or a sleek SaaS platform, our team of experienced developers will deliver a solution that drives growth and efficiency.
        </p>
        <h2 className="text-3xl font-bold text-[#000438] mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-[#000438] mb-8">
          <li>Tailored software solutions for your business.</li>
          <li>Scalable and efficient applications.</li>
          <li>End-to-end development from concept to deployment.</li>
          <li>Ongoing support and maintenance.</li>
        </ul>
        <h2 className="text-3xl font-bold text-[#000438] mb-4">Why Choose Us?</h2>
        <p className="text-xl text-[#000438] mb-8">
          Our team of experts uses the latest technologies and best practices to ensure your software is reliable, scalable, and future-proof. We work closely with you to understand your needs and deliver a solution that exceeds your expectations.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF0000] text-white px-8 py-3 rounded-md hover:bg-[#FF6B35] transition duration-300"
        >
          Contact Us
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CustomSoftwareDevelopment;
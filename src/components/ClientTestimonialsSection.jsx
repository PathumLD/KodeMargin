import React from "react";
import { motion } from "framer-motion";

// Placeholder images for testimonials (replace with actual client photos)
import client1 from "../../public/images/client1.jpeg";
import client2 from "../../public/images/client2.jpeg";
import client3 from "../../public/images/client3.jpeg";

const ClientTestimonialsSection = () => {
  // Data for client testimonials
  const testimonials = [
    {
      photo: client1,
      name: "John Doe",
      quote: "KodeMargin transformed our business with their innovative software solutions. Highly recommended!",
    },
    {
      photo: client2,
      name: "Jane Smith",
      quote: "The team at KodeMargin is incredibly talented and professional. They delivered beyond our expectations.",
    },
    {
      photo: client3,
      name: "Michael Johnson",
      quote: "Their graphic design work is top-notch. Our brand has never looked better!",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#000438]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false, amount: 0.5 }} // Trigger animation only once
        >
          What Our <span className="text-[#FF0000]">Clients Say</span>
        </motion.h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                // delay: index * 0.15, 
                duration: 0.7, 
                ease: [0.25, 0.1, 0.25, 1], 
                type: "spring", 
                stiffness: 80, 
                damping: 10, 
              }}
              viewport={{ once: false, amount: 0.5 }} // Trigger animation only once
            >
              {/* Client Photo */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>

              {/* Client Name */}
              <h3 className="text-xl font-semibold text-[#000438] mb-2">
                {testimonial.name}
              </h3>

              {/* Client Quote */}
              <p className="text-[#000438] italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
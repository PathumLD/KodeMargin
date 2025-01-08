import { motion } from "framer-motion";

const ClientTestimonialsSection = () => {
  const testimonials = [
    {
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      quote: "KodeMargin delivered an outstanding website for our business. Highly recommended!",
    },
    {
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Jane Smith",
      quote: "Their team is professional, creative, and easy to work with. Great experience!",
    },
    {
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Mike Johnson",
      quote: "The mobile app they developed for us has been a game-changer. Thank you!",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#000438] mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-[#F2F2F2] rounded-lg shadow-md"
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold text-[#000438] mb-2">{testimonial.name}</h3>
              <p className="text-[#000438]">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ClientTestimonialsSection;
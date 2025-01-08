import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer

// Placeholder images for team members (replace with actual photos)
import teamMember1 from "../../public/images/client1.jpeg";
import teamMember2 from "../../public/images/client2.jpeg";
import teamMember3 from "../../public/images/client3.jpeg";

const AboutUsPage = () => {
  // Data for team members
  const teamMembers = [
    {
      photo: teamMember1,
      name: "John Doe",
      role: "CEO & Founder",
      bio: "John has over 10 years of experience in software development and digital transformation.",
    },
    {
      photo: teamMember2,
      name: "Jane Smith",
      role: "Creative Director",
      bio: "Jane specializes in graphic design and brand strategy, helping businesses stand out.",
    },
    {
      photo: teamMember3,
      name: "Michael Johnson",
      role: "Lead Developer",
      bio: "Michael is passionate about building scalable and innovative software solutions.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <Header />

      {/* Introduction Section */}
      <section className="py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#000438] mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Who <span className="text-[#FF0000]">We Are</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#000438] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            At KodeMargin, we are passionate about transforming ideas into digital reality. Our team of experts specializes in custom software development, graphic design, and digital solutions to help businesses thrive in the digital age.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-[#FF0000] mb-4">Our Mission</h3>
              <p className="text-lg text-[#000438]">
                To empower businesses with innovative software and design solutions that drive growth and success.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-[#FF0000] mb-4">Our Vision</h3>
              <p className="text-lg text-[#000438]">
                To be the go-to partner for businesses seeking transformative digital experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#000438] text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Meet <span className="text-[#FF0000]">Our Team</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-[#000438] mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-[#FF0000] mb-2">{member.role}</p>
                <p className="text-sm text-[#000438]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#000438] text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <span className="text-[#FF0000]">Why Work</span> With Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Experienced Team",
              "Customized Solutions",
              "Innovative Approach",
              "Client-Centric Focus",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-[#000438] mb-2">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUsPage;
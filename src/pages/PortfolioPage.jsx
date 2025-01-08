import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/Projects"; // Import projects data
import Header from "../components/Header"; // Import Header
import Footer from "../components/Footer"; // Import Footer

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for selected category

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="bg-white">
      {/* Header */}
      <Header />

      {/* Portfolio Section */}
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
            Our Work Speaks for Itself
          </motion.h2>

          {/* Project Categories */}
          <div className="flex justify-center gap-4 mb-12">
            {["All", "Software Development", "Graphic Design", "Web Design", "Mobile App Development"].map(
              (category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)} // Update selected category
                  className={`px-4 py-2  text-[#000438] rounded-lg hover:bg-[#FF0000] hover:text-white transition-all ${
                    selectedCategory === category ? "bg-[#FF0000] text-white" : "bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* Project Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, amount: 0.5 }}
                onClick={() => openModal(project)}
              >
                <img
                  src={project.coverImage}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#000438] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#FF0000] mb-2">{project.category}</p>
                  <p className="text-sm text-[#000438]">
                    <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto scrollbar-hide">
            <button
              onClick={closeModal}
              className="text-[#000438] hover:text-[#FF0000] transition-all float-right"
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold text-[#000438] mb-4">
              {selectedProject.name}
            </h3>
            <p className="text-lg text-[#000438] mb-4">
              {selectedProject.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project ${selectedProject.name} - Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              ))}
            </div>
            {selectedProject.video && (
              <div className="mt-4">
                <iframe
                  src={selectedProject.video}
                  title={selectedProject.name}
                  className="w-full h-64 rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#000438] mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#000438] max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Let’s collaborate to bring your ideas to life.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#FF6B35" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-[#FF0000] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#FF6B35] transition-all"
          >
            Contact Us Now
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioPage;
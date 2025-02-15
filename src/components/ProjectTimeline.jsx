import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    year: "2025", 
    title: "SMS Spam Detection", 
    description: "Developed an SMS spam detection model using NLP and Machine Learning. Used TF-IDF feature extraction and trained models to distinguish spam from legitimate messages.",
    link: "https://github.com/Aromal004/SMS-Spam-Detection.git" 
  },
  { 
    year: "2024", 
    title: "CareNexus", 
    description: "A Healthcare Management App enabling communication, appointment scheduling, and health tracking between patients and doctors. Built with ReactJS & Django.",
    link: "https://github.com/Aromal004/CareNexus.git" 
  },
  { 
    year: "2024", 
    title: "Movie Ticket Booking", 
    description: "A seamless Movie Ticket Booking System where users can browse movies, select showtimes, and book tickets. Powered by Django & PostgreSQL.",
    link: "https://github.com/Aromal004/TicketBooking.git" 
  },
  { 
    year: "2022", 
    title: "School Database Management System", 
    description: "Developed a database system for student records, employee details, and attendance tracking using Python & MySQL.",
    link: "https://github.com/Aromal004/School-DB-Management.git" 
  },
];

const ProjectTimeline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="Projects" className="flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6">
      {/* Title Animation */}
      <motion.h2 
        className="my-20 text-center text-3xl lg:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <div className="relative border-l-4 border-cyan-500 p-4 sm:p-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="mb-12 flex items-center relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Year - Adjusted position */}
            <motion.div 
              className="text-base sm:text-lg font-semibold absolute -left-24 sm:-left-28"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {project.year}
            </motion.div>

            {/* Timeline Dot */}
            <motion.div 
              className="w-4 h-4 bg-cyan-500 rounded-full absolute -left-[34px]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            ></motion.div>
            
            {/* Project Card */}
            <motion.div
              className="relative w-full sm:w-96 p-5 bg-black border-2 border-cyan-500 rounded-xl shadow-lg transition-transform"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{ scale: hoveredIndex === index ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
              
              {/* Show description and link only when hovered */}
              <motion.div 
                className="overflow-hidden"
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{
                  maxHeight: hoveredIndex === index ? "150px" : "0px",
                  opacity: hoveredIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <p className="mt-2 text-sm text-gray-300">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mt-3 text-cyan-400 underline text-sm"
                >
                  View on GitHub
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
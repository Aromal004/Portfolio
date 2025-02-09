import React from "react";
import { motion } from "framer-motion";

const projects = [
  { 
    year: "2025", 
    title: "SMS Spam Detection", 
    description: "Developed an SMS spam detection model using Natural Language Processing (NLP) and Machine Learning. Preprocessed text data, extracted key features using TF-IDF, and trained a classification model to distinguish spam from legitimate messages with high accuracy. Implemented using Python, Scikit-Learn, and NLTK.", 
    link: "https://github.com/Aromal004/SMS-Spam-Detection.git" 
  },
  { 
    year: "2024", 
    title: "CareNexus", 
    description: "A Healthcare Management Application designed to streamline patient care by enabling seamless communication, appointment scheduling, and health tracking between patients and doctors. Built using ReactJS for the frontend, Django for backend logic, and PostgreSQL for robust data management.", 
    link: "https://github.com/Aromal004/CareNexus.git" 
  },
  { 
    year: "2024", 
    title: "Movie Ticket Booking", 
    description: "A Movie Ticket Booking System that enables users to browse movies, select showtimes, and book tickets seamlessly. Built using Django for backend logic and PostgreSQL for efficient data management.", 
    link: "https://github.com/Aromal004/TicketBooking.git" 
  },
  { 
    year: "2022", 
    title: "School Database Management System", 
    description: "A School Database Management System developed to manage student records, employee details, and attendance tracking. Built using Python for the application logic and MySQL for robust and reliable data storage.", 
    link: "https://github.com/Aromal004/School-DB-Management.git" 
  },
];

const ProjectTimeline = () => {
  return (
    <div id="Projects" className="flex flex-col items-center justify-center min-h-screen lg:text-6xl text-white px-6">
      {/* Title Animation */}
      <motion.h2 
        className="my-20 text-center text-3xl lg:text-6xl lg:leading-normal tracking-tight font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Projects
      </motion.h2>

      <div className="relative border-l-4 border-cyan-500 p-6">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="mb-10 flex items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Year */}
            <motion.div 
              className="text-lg font-semibold absolute -left-16"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {project.year}
            </motion.div>
            
            {/* Timeline Dot */}
            <motion.div 
              className="w-4 h-4 bg-cyan-500 rounded-full absolute -left-2.5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            ></motion.div>
            
            {/* Project Card */}
            <motion.a
              href={project.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-96 p-4 bg-black border-2 border-cyan-500 rounded-xl shadow-lg transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <motion.div 
                className="absolute inset-0 border-2 border-cyan-500 rounded-xl blur-sm opacity-50"
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;

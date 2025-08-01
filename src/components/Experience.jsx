import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { experiences } from '../data/experience';

const Experience = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.5,
      boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -15,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      rotateY: 5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      opacity: 0.8,
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="Experience" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl hidden sm:block"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl hidden sm:block"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            My professional journey and the technologies I've worked with
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 origin-top"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Animated particles along timeline */}
            <motion.div
              className="absolute top-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{
                y: [0, "100vh", 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>

          <motion.div 
            className="space-y-12 sm:space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onMouseEnter={() => setSelectedIndex(index)}
                onMouseLeave={() => setSelectedIndex(null)}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot with Glow */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-20">
                  <motion.div 
                    className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-800 relative"
                    variants={dotVariants}
                    whileHover="hover"
                  >
                    {/* Pulsing glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-md"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 sm:ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8 lg:pr-12' : 'md:ml-auto md:pl-8 lg:pl-12'}`}>
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20 dark:border-gray-700/50 relative overflow-hidden group touch-manipulation"
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      variants={glowVariants}
                    />
                    
                    {/* Floating particles - Hidden on mobile for better performance */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full hidden sm:block"
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full hidden sm:block"
                      animate={{
                        y: [0, 8, 0],
                        opacity: [0.3, 0.8, 0.3]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header with enhanced animations */}
                      <div className="flex items-start justify-between mb-4 sm:mb-6">
                        <div className="flex-1">
                          <motion.h3 
                            className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3"
                            whileHover={{ 
                              color: "#8B5CF6",
                              scale: 1.02
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {experience.role}
                          </motion.h3>
                          <div className="flex items-center text-purple-600 dark:text-purple-400 mb-2 sm:mb-3">
                            <FaBriefcase className="mr-2 sm:mr-3 text-base sm:text-lg" />
                            <span className="font-semibold text-base sm:text-lg">{experience.company}</span>
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400">
                            <FaCalendarAlt className="mr-2 sm:mr-3 text-sm" />
                            <span className="text-xs sm:text-sm">{experience.year}</span>
                          </div>
                        </div>
                        
                        {/* Static icon */}
                        <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full ml-3">
                          <FaBriefcase className="text-white text-lg sm:text-xl" />
                        </div>
                      </div>

                      {/* Description with typewriter effect */}
                      <motion.p 
                        className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      >
                        {experience.description}
                      </motion.p>

                      {/* Technologies with enhanced animations */}
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ 
                              scale: 1.1,
                              y: -3
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-700 dark:text-purple-300 rounded-full font-medium cursor-pointer border border-purple-200 dark:border-purple-700 touch-manipulation"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 0.4, 
                              delay: techIndex * 0.1,
                              ease: "easeOut"
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-2xl sm:rounded-bl-3xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

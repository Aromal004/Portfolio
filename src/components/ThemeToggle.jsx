import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 sm:p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-500 dark:to-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation flex items-center justify-center hidden md:flex"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        {isDarkMode ? (
          <FaSun className="text-white text-lg sm:text-xl" />
        ) : (
          <FaMoon className="text-white text-lg sm:text-xl" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 
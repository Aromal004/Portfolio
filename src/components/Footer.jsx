import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Aromal004', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/aromal-rajeev', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/aromal', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center"
        >
          <p className="text-gray-300 text-sm sm:text-base">
            © {currentYear} Aromal AJ. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

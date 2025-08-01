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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
          {/* Brand Section
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Aromal AJ
            </h3>
            <p className="text-gray-300 mb-6">
              Full Stack Developer & ML Enthusiast passionate about creating innovative solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div> */}

          {/* Quick Links
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '#Home' },
                { name: 'About', href: '#About' },
                { name: 'Experience', href: '#Experience' },
                { name: 'Projects', href: '#Projects' },
                { name: 'Skills', href: '#Skills' },
                { name: 'Contact', href: '#Contact' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div> */}

          {/* Contact Info
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 Kerala, India</p>
              <p>📧 aromalaj9111@gmail.com</p>
              <p>📱 +91 956 271 7654</p>
            </div>
          </motion.div>
        </div> */}

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/20 mt-8 pt-8 text-center"
        >
          <p className="text-gray-300">
            © {currentYear} Aromal AJ. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

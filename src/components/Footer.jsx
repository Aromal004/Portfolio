import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-gray-300 py-8 px-6 mt-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Copyright */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm mb-4 md:mb-0"
        >
          © {new Date().getFullYear()} Aromal AJ. All Rights Reserved.
        </motion.p>

        {/* Right Section - Social Media Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex space-x-4 text-xl"
        >
          {[
            { href: "https://github.com/Aromal004", icon: <FaGithub /> },
            { href: "https://www.linkedin.com/in/aromal-a-j-46931a281/", icon: <FaLinkedin /> },
            // { href: "https://twitter.com/yourtwitter", icon: <FaTwitter /> },
            { href: "https://www.instagram.com/a.r_o.m.a.l/", icon: <FaInstagram /> },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
              transition={{ duration: 0.3 }}
              className="relative transition-all duration-300 hover:text-blue-500"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ProfileImage from "../assets/PIC.jpg"; // Ensure this path is correct

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 px-6" id="home">
      <motion.div 
        className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        
        {/* Profile Image Container */}
        <motion.div className="relative group" variants={fadeInUp}>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
            <motion.img
              src={ProfileImage}
              alt="Profile"
              className="rounded-full  shadow-xl w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div className="flex flex-col max-w-xl space-y-6 text-center md:text-left">
          <motion.div className="space-y-2" variants={fadeInUp}>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Aromal
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Software Engineer
            </h2>
          </motion.div>

          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed" 
            variants={fadeInUp}
          >
           I am Aromal A J, a passionate and dedicated Computer Science and Engineering student at TKM College of Engineering. With a strong foundation in software development, web technologies, and data management, I thrive on solving complex problems and creating innovative solutions. I have hands-on experience in full-stack development, having built end-to-end web applications using Django, ReactJS, PostgreSQL, and more.
          </motion.p>

          {/* Social Media Icons */}
          <motion.div 
            className="flex justify-center md:justify-start gap-6 pt-4"
            variants={fadeInUp}
          >
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/aromal-a-j-46931a281/", label: "LinkedIn" },
              { icon: FaGithub, href: "https://github.com/Aromal004", label: "GitHub" },
              { icon: FaInstagram, href: "https://www.instagram.com/a.r_o.m.a.l/", label: "Instagram" },
            //   { icon: FaTwitter, href: "https://twitter.com/aromal", label: "Twitter" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-3xl hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transform transition-all duration-300"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.div className="mt-6" variants={fadeInUp}>
            <motion.button
                className="inline-block rounded-[28px] border-2 border-gray-400 px-6 py-3 text-lg font-semibold text-white shadow-md transition-transform duration-300 hover:bg-blue-700 hover:scale-105 hover:border-blue-700"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf"; // Path to your resume in the public folder
                    link.download = "Aromal_AJ_Resume.pdf"; // File name when downloaded
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }}
                >
                Download Resume
            </motion.button>

          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

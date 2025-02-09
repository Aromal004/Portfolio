import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import ProfileImage from "../assets/PIC.jpg"; // Ensure this path is correct

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-24 px-6" id="home">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Profile Image Container */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
            <img
              src={ProfileImage}
              alt="Profile"
              className="rounded-full border-4 border-gray-300 shadow-xl w-full h-full object-cover transition duration-500 transform hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col max-w-xl space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hi, I'm Aromal
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Software Engineer
            </h2>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a software developer passionate about building innovative solutions.
            Always eager to learn and explore new technologies.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-6 pt-4">
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/aromal-a-j-46931a281/", label: "LinkedIn" },
              { icon: FaGithub, href: "https://github.com/aromal", label: "GitHub" },
              { icon: FaInstagram, href: "https://instagram.com/aromal", label: "Instagram" },
              { icon: FaTwitter, href: "https://twitter.com/aromal", label: "Twitter" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-3xl hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transform transition-all duration-300 hover:scale-110"
              >
                <social.icon />
              </a>
            ))}
          </div>

          {/* Call-to-Action Button */}
          <div className="mt-6">
            <a
              href="#contact-me"
              className="inline-block rounded-lg border-2 border-gray-400 px-6 py-3 text-lg font-semibold text-white shadow-md transition-transform duration-300 hover:bg-blue-700 hover:scale-105 hover:border-blue-700"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

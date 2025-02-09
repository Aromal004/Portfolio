import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/raviKumarLogo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // Highlight active section
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.clientHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full  bg-opacity-80 shadow-lg z-50 backdrop-blur-md">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="h-[4px] bg-blue-500 fixed top-0 left-0 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="flex items-center justify-between py-4 px-8">
        {/* Logo */}
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-lg">
          {[
            { name: "Home", href: "home" },
            { name: "Projects", href: "Projects" },
            { name: "Experience", href: "Experience" },
            { name: "Skills", href: "Skills" },
            { name: "Contact", href: "Contact" },
          ].map((link, index) => (
            <a
              key={index}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative transition-all duration-300 hover:text-blue-500 hover:scale-105 
              ${activeSection === link.href ? "text-blue-500" : "text-gray-300"}
              after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 
              hover:after:w-full`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col  bg-opacity-90 px-8 py-4 space-y-4">
          {[
            { name: "Home", href: "home" },
            { name: "Projects", href: "Projects" },
            { name: "Experience", href: "Experience" },
            { name: "Skills", href: "Skills" },
            { name: "Contact", href: "Contact" },
          ].map((link, index) => (
            <a
              key={index}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-lg transition-all duration-300 ${
                activeSection === link.href ? "text-blue-500" : "text-gray-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

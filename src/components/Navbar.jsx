import logo from "../assets/raviKumarlogo.webp";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full  shadow-lg z-50 backdrop-blur-md pt-4 pr-4">
      <div className="flex items-center justify-between py-4 px-8">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={50} height={33} alt="logo" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-lg">
          {[
            { name: "Home", href: "#home" },
            { name: "Projects", href: "#Projects" },
            { name: "Experience", href: "#Experience" },
            { name: "Skills", href: "#Skills" },
            { name: "Contact Me", href: "#Contact" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="relative text-gray-700 dark:text-gray-300 transition-all duration-300 hover:text-blue-500 hover:scale-105 
              after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 
              hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

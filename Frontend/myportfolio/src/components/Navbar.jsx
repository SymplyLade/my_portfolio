import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const DLogo = ({ className }) => (
  <svg
    className={className}
    width="50"
    height="50"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" stroke="url(#grad)" strokeWidth="4" fill="none" />
    <path
      d="M35 25 L60 25 C75 25, 75 50, 60 50 L35 50 M60 50 C75 50, 75 75, 60 75 L35 75"
      stroke="url(#grad)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8b5cf6" />
        <stop offset="0.5" stopColor="#ec4899" />
        <stop offset="1" stopColor="#f97316" />
      </linearGradient>
    </defs>
  </svg>
);


const LogoText = ({ className }) => (
  <svg
    className={className}
    width="160"
    height="40"
    viewBox="0 0 400 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="0"
      y="75"
      fontFamily="Poppins, sans-serif"
      fontWeight="700"
      fontSize="70"
      fill="url(#grad)"
    >
      SymplyLade
    </text>
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="400" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8b5cf6" />
        <stop offset="0.5" stopColor="#ec4899" />
        <stop offset="1" stopColor="#f97316" />
      </linearGradient>
    </defs>
  </svg>
);


const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
   
        <div className="flex items-center">
          <DLogo className="mr-2" />
          <LogoText className="h-10" />
        </div>


        <div className="flex items-center space-x-6">
          <Link to="/" className="hover:text-white transition text-white">Home</Link>
          <Link to="/about" className="hover:text-white transition text-white">About</Link>
          <Link to="/projects" className="hover:text-white transition text-white">Projects</Link>
          <Link to="/contact" className="hover:text-white transition text-white">Contact</Link>

          <div className="flex space-x-3 ml-4">
            <a href="https://github.com/SymplyLade" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition text-lg">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/gbemisola-victoria-458715382" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition text-lg">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/MirahJosh4" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition text-lg">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


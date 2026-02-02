// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaGithub, FaLinkedin, FaTwitter, FaBars, FaTimes } from "react-icons/fa";

// const DLogo = ({ className }) => (
//   <svg
//     className={className}
//     width="50"
//     height="50"
//     viewBox="0 0 100 100"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <circle cx="50" cy="50" r="48" stroke="black" strokeWidth="3" fill="none" />
//     <path
//       d="M35 25 L60 25 C75 25, 75 50, 60 50 L35 50 M60 50 C75 50, 75 75, 60 75 L35 75"
//       stroke="black"
//       strokeWidth="4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       fill="none"
//     />
//   </svg>
// );

// const LogoText = ({ className }) => (
//   <svg
//     className={className}
//     width="160"
//     height="40"
//     viewBox="0 0 400 100"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <text
//       x="0"
//       y="75"
//       fontFamily="Poppins, sans-serif"
//       fontWeight="700"
//       fontSize="60"
//       fill="black"
//     >
//       SymplyLade
//     </text>
//   </svg>
// );

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md w-full z-50">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
  
//         <div className="flex items-center">
//           <DLogo className="mr-2" />
//           <LogoText className="h-8" />
//         </div>

     
//         <div className="hidden md:flex items-center space-x-6">
//           <Link to="/" className="text-black hover:text-gray-700 transition">Home</Link>
//           <Link to="/about" className="text-black hover:text-gray-700 transition">About</Link>
//           <Link to="/projects" className="text-black hover:text-gray-700 transition">Projects</Link>
//           <Link to="/contact" className="text-black hover:text-gray-700 transition">Contact</Link>

     
//           <div className="flex space-x-4 text-lg">
//             <a href="https://github.com/SymplyLade" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
//               <FaGithub />
//             </a>
//             <a href="https://linkedin.com/in/gbemisola-victoria-458715382" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
//               <FaLinkedin />
//             </a>
//             <a href="https://twitter.com/MirahJosh4" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
//               <FaTwitter />
//             </a>
//           </div>
//         </div>

//         <div className="md:hidden text-black text-2xl" onClick={() => setOpen(!open)}>
//           {open ? <FaTimes /> : <FaBars />}
//         </div>
//       </div>


//       {open && (
//         <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-4">
//           <Link to="/" className="block text-black" onClick={() => setOpen(false)}>Home</Link>
//           <Link to="/about" className="block text-black" onClick={() => setOpen(false)}>About</Link>
//           <Link to="/projects" className="block text-black" onClick={() => setOpen(false)}>Projects</Link>
//           <Link to="/contact" className="block text-black" onClick={() => setOpen(false)}>Contact</Link>

//           <div className="flex space-x-4 text-lg mt-2">
//             <a href="https://github.com/SymplyLade" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
//               <FaGithub />
//             </a>
//             <a href="https://linkedin.com/in/gbemisola-victoria-458715382" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
//               <FaLinkedin />
//             </a>
//             <a href="https://twitter.com/MirahJosh4" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-700">
//               <FaTwitter />
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;





// import { useState } from "react";
// import { Link } from "react-router-dom";

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <nav className="bg-orange-50 shadow-md fixed w-full z-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <div className="shrink-0">
//             <img
//                src="C:\Users\user133\Desktop\Portfolio\Frontend\myportfolio\public\Gemini_Generated_Image_q0ho9vq0ho9vq0ho.png"
//               alt="Gbemisola Ololade Victoria Logo"
//               className="h-24 w-24 rounded-full object-cover"
//             />
//           </div>

//           <div className="hidden md:flex space-x-6">
//             <button
//               onClick={() => {
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//               }}
//               className="text-gray-700 hover:text-orange-600 cursor-pointer"
//             >
//               Home
//             </button>

//             <button
//               onClick={() => scrollToSection("about")}
//               className="text-gray-700 hover:text-orange-600 cursor-pointer"
//             >
//               About
//             </button>
//             <button
//               onClick={() => scrollToSection("projects")}
//               className="text-gray-700 hover:text-orange-600 cursor-pointer"
//             >
//               Projects
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="text-gray-700 hover:text-orange-600 cursor-pointer"
//             >
//               Contact
//             </button>
//             <Link
//               to="/admin"
//               className="text-gray-700 hover:text-orange-600 cursor-pointer"
//             >
//               Admin
//             </Link>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 focus:outline-none"
//             >
//               {isOpen ? "✖" : "☰"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden bg-orange-100 px-4 py-2 space-y-2">
//           <button
//             onClick={() => scrollToSection("hero")}
//             className="block text-gray-700 hover:text-orange-600 cursor-pointer"
//           >
//             Home
//           </button>
//           <button
//             onClick={() => scrollToSection("about")}
//             className="block text-gray-700 hover:text-orange-600 cursor-pointer"
//           >
//             About
//           </button>
//           <button
//             onClick={() => scrollToSection("projects")}
//             className="block text-gray-700 hover:text-orange-600 cursor-pointer"
//           >
//             Projects
//           </button>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="block text-gray-700 hover:text-orange-600 cursor-pointer"
//           >
//             Contact
//           </button>
//           <Link
//             to="/admin"
//             className="block text-gray-700 hover:text-orange-600 cursor-pointer"
//           >
//             Admin
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavBar;




// import { useState } from "react";
// import { Link } from "react-router-dom";

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsOpen(false); // close mobile menu
//   };

//   return (
//     <nav className="bg-orange-50 shadow-md fixed w-full z-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
          
//           {/* Logo */}
//           <div className="shrink-0">
//             <img
//               src="/Gemini_Generated_Image_q0ho9vq0ho9vq0ho.png" // ✅ public folder path
//               alt="Gbemisola Ololade Victoria Logo"
//               className="h-24 w-24 rounded-full object-cover"
//             />
//           </div>

//           {/* Desktop menu */}
//           <div className="hidden md:flex space-x-6">
//             <button
//               onClick={() => scrollToSection("hero")}
//               className="text-gray-700 hover:text-orange-600 cursor-pointer"
//             >
//               Home
//             </button>
//             <button
//               onClick={() => scrollToSection("about")}
//               className="text-gray-700 hover:text-orange-600 cursor-pointer"
//             >
//               About
//             </button>
//             <button
//               onClick={() => scrollToSection("projects")}
//               className="text-gray-700 hover:text-orange-600 cursor-pointer"
//             >
//               Projects
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="text-gray-700 hover:text-orange-600 cursor-pointer"
//             >
//               Contact
//             </button>
//             <Link
//               to="/admin"
//               className="text-gray-700 hover:text-orange-600 cursor-pointer"
//             >
//               Admin
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 focus:outline-none text-2xl"
//             >
//               {isOpen ? "✖" : "☰"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu dropdown */}
//       {isOpen && (
//         <div className="md:hidden bg-orange-100 px-4 py-2 space-y-2">
//           <button
//             onClick={() => scrollToSection("hero")}
//             className="block text-gray-700 hover:text-orange-600 cursor-pointer w-full text-left"
//           >
//             Home
//           </button>
//           <button
//             onClick={() => scrollToSection("about")}
//             className="block text-gray-700 hover:text-orange-600 cursor-pointer w-full text-left"
//           >
//             About
//           </button>
//           <button
//             onClick={() => scrollToSection("projects")}
//             className="block text-gray-700 hover:text-orange-600 cursor-pointer w-full text-left"
//           >
//             Projects
//           </button>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="block text-gray-700 hover:text-orange-600 cursor-pointer w-full text-left"
//           >
//             Contact
//           </button>
//           <Link
//             to="/admin"
//             className="block text-gray-700 hover:text-orange-600 cursor-pointer w-full text-left"
//           >
//             Admin
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default NavBar;



import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu after click
  };

  return (
    <nav className="bg-orange-50 shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="shrink-0">
            <img
              src="/Gemini_Generated_Image_q0ho9vq0ho9vq0ho.png"
              alt="Gbemisola Ololade Victoria Logo"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover mr-2"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Contact
            </button>
            <Link
              to="/admin"
              className="text-gray-700 hover:text-orange-600 cursor-pointer"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none text-2xl"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-orange-100 px-4 py-2 space-y-2">
          <button
            onClick={() => scrollToSection("hero")}
            className="block text-gray-700 hover:text-orange-600 cursor-pointer w-full text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block text-gray-700 hover:text-orange-600 cursor-pointer w-full text-left"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="block text-gray-700 hover:text-orange-600 cursor-pointer w-full text-left"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block text-gray-700 hover:text-orange-600 cursor-pointer w-full text-left"
          >
            Contact
          </button>
          <Link
            to="/admin"
            className="block text-gray-700 hover:text-orange-600 cursor-pointer w-full text-left"
          >
            Admin
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;


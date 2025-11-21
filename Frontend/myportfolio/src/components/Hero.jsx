// import React from "react";

// const Hero = () => {
//   return (
//     <section 
//       id="hero" 
//       className="bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 text-gray-900 min-h-screen flex items-center justify-center"
//       data-aos="fade-up"
//     >
//       <div className="text-center px-6">
//         <h1 className="text-5xl font-bold mb-4" data-aos="fade-down">
//           Hello, I'm Gbemisola
//         </h1>

//         <p className="text-xl mb-6" data-aos="fade-up">
//           Frontend and Backend Developer | I build clean, functional, and user-focused web apps.
//         </p>
//         <div data-aos="zoom-in">
//           <a 
//             href="about"
//             className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
//           >
//             Let's Get Started
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const messages = [
//   "Frontend and Backend Developer 💖",
//   "Building AI-Enhanced Web Applications 💖",
//   "Delivering Clean, Scalable, and User-Focused Solutions 💖",
//   "Integrating Predictive AI Features to Optimize Workflows 💖",
//   "Passionate about Creating Engaging and Interactive Experiences 💖"
// ];

// const longIntro = `
// Hello! I'm Gbemisola Ololade Victoria 💖, a Full-Stack Developer dedicated to crafting intelligent and scalable digital solutions.
// I integrate **AI-powered features** in my projects, including predictive functionalities, workflow optimizations, and enhanced user experience.

// I thrive in creating responsive, modern front-end interfaces using React and TailwindCSS, while designing robust backends with Python and Node.js.
// Explore my portfolio to witness creativity meet technical excellence.
// `;

// const Hero = () => {
//   const [typedText, setTypedText] = useState("");
//   const [msgIndex, setMsgIndex] = useState(0);

//   useEffect(() => {
//     let charIndex = 0;
//     const typeMessage = () => {
//       const currentMsg = messages[msgIndex];
//       setTypedText(currentMsg.slice(0, charIndex + 1));
//       charIndex++;
//       if (charIndex === currentMsg.length) {
//         setTimeout(() => {
//           charIndex = 0;
//           setMsgIndex((prev) => (prev + 1) % messages.length);
//         }, 2000);
//       } else {
//         setTimeout(typeMessage, 50);
//       }
//     };
//     typeMessage();
//   }, [msgIndex]);

//   // Scroll to Contact section
//   const scrollToContact = () => {
//     const contactSection = document.getElementById("contact");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Orbiting Hearts Positions
//   const hearts = [
//     { emoji: "💖", angle: 0 },
//     { emoji: "💘", angle: 90 },
//     { emoji: "💝", angle: 180 },
//     { emoji: "💗", angle: 270 }
//   ];

//   return (
//     <section 
//       id="hero" 
//       className="bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 text-gray-900 min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
//     >
//       {/* Orbiting Hearts */}
//       {hearts.map((heart, i) => (
//         <motion.div
//           key={i}
//           className="absolute text-2xl"
//           style={{ top: "50%", left: "50%", translateX: "-50%", translateY: "-50%" }}
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 20 + i * 2, ease: "linear" }}
//         >
//           <motion.span
//             className="absolute"
//             style={{
//               transform: `rotate(${heart.angle}deg) translateX(120px) rotate(-${heart.angle}deg)`
//             }}
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20 + i * 2, ease: "linear" }}
//           >
//             {heart.emoji}
//           </motion.span>
//         </motion.div>
//       ))}

//       <div className="relative z-10 text-center max-w-4xl">

//         {/* Profile Picture */}
//         <motion.div
//           className="relative mx-auto mb-6 w-44 h-44 rounded-full overflow-hidden shadow-lg border-4 border-green-700"
//           whileHover={{ scale: 1.1 }}
//           initial={{ scale: 0.9 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img
//             src="/IMG_9021.JPG"
//             alt="Gbemisola Ololade Victoria"
//             className="w-full h-full object-cover rounded-full"
//             onError={(e) => {
//               if (!e.currentTarget.dataset.fallback) {
//                 e.currentTarget.dataset.fallback = 'true';
//                 e.currentTarget.src = '/image.png';
//               }
//             }}
//           />
//           <motion.div
//             className="absolute inset-0 rounded-full border-4 border-pink-400 opacity-50"
//             animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
//             transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </motion.div>

//         {/* Main Heading */}
//         <motion.h1 
//           className="text-5xl font-bold mb-6"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Hello, I'm Gbemisola 💖
//         </motion.h1>

//         {/* Typing AI Messages */}
//         <motion.p
//           className="text-xl mb-6 font-semibold min-h-[1.5em]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           {typedText}
//           <span className="animate-pulse">|</span>
//         </motion.p>

//         {/* Long About Me Text */}
//         <motion.p
//           className="text-left text-gray-700 mb-8 whitespace-pre-line"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.2, delay: 1 }}
//         >
//           {longIntro}
//         </motion.p>

//         {/* Call to Action */}
//         <motion.div 
//           whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 0, 128, 0.6)" }}
//         >
//           <button
//             onClick={scrollToContact}
//             className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
//           >
//             Let's Get Started 💖
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const messages = [
  "Frontend and Backend Developer 💖",
  "Building AI-Enhanced Web Applications 💖",
  "Delivering Clean, Scalable, and User-Focused Solutions 💖",
  "Integrating Predictive AI Features to Optimize Workflows 💖",
  "Passionate about Creating Engaging and Interactive Experiences 💖"
];

const longIntro = `
Hello! I'm Gbemisola Ololade Victoria 💖, a Full-Stack Developer dedicated to crafting intelligent and scalable digital solutions.
I integrate **AI-powered features** in my projects, including predictive functionalities, workflow optimizations, and enhanced user experience.

I thrive in creating responsive, modern front-end interfaces using React and TailwindCSS, while designing robust backends with Python and Node.js.
Explore my portfolio to witness creativity meet technical excellence.
`;

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [hoverHint, setHoverHint] = useState("");

  useEffect(() => {
    let charIndex = 0;
    const typeMessage = () => {
      const currentMsg = messages[msgIndex];
      setTypedText(currentMsg.slice(0, charIndex + 1));
      charIndex++;
      if (charIndex === currentMsg.length) {
        setTimeout(() => {
          charIndex = 0;
          setMsgIndex((prev) => (prev + 1) % messages.length);
        }, 2000);
      } else {
        setTimeout(typeMessage, 50);
      }
    };
    typeMessage();
  }, [msgIndex]);

  return (
    <section 
      id="hero" 
      className="bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 text-gray-900 min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Orbiting Hearts */}
      {["💖", "💘", "💝", "💗"].map((heart, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{ top: "50%", left: "50%", translateX: "-50%", translateY: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20 + i * 2, ease: "linear" }}
        >
          <motion.span
            className="absolute"
            style={{
              transform: `rotate(${i * 90}deg) translateX(120px) rotate(-${i * 90}deg)`
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20 + i * 2, ease: "linear" }}
          >
            {heart}
          </motion.span>
        </motion.div>
      ))}

      <div className="relative z-10 text-center max-w-4xl">

        {/* Profile Picture */}
        <motion.div
          className="relative mx-auto mb-6 w-44 h-44 rounded-full overflow-hidden shadow-lg border-4 border-green-700"
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/IMG_9021.JPG"
            alt="Gbemisola Ololade Victoria"
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              if (!e.currentTarget.dataset.fallback) {
                e.currentTarget.dataset.fallback = 'true';
                e.currentTarget.src = '/image.png';
              }
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-pink-400 opacity-50"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello, I'm Gbemisola 💖
        </motion.h1>

        {/* Typing AI Messages */}
        <motion.p
          className="text-xl mb-6 font-semibold min-h-[1.5em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.p>

        {/* Long About Me Text */}
        <motion.p
          className="text-left text-gray-700 mb-8 whitespace-pre-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          {longIntro}
        </motion.p>

        {/* Let's Get Started Button */}
        <div className="relative inline-block">
          <motion.div
            onMouseEnter={() => setHoverHint("Learn more about me 💡")}
            onMouseLeave={() => setHoverHint("")}
          >
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 0, 128, 0.6)" }}
                className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Let's Get Started 💖
              </motion.button>
            </Link>
          </motion.div>

          {/* Hover Hint */}
          {hoverHint && (
            <motion.div
              className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-800 px-3 py-1 rounded shadow-md text-sm"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {hoverHint}
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Hero;



// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const messages = [
//   "Frontend and Backend Developer ",
//   "Building AI-Enhanced Web Applications ",
//   "Delivering Clean, Scalable, and User-Focused Solutions ",
//   "Integrating Predictive AI Features to Optimize Workflows ",
//   "Passionate about Creating Engaging and Interactive Experiences "
// ];

// const longIntro = `
// Hello! I'm Gbemisola Ololade Victoria, a Full-Stack Developer dedicated to crafting intelligent and scalable digital solutions.
// I integrate AI-powered features in my projects, including predictive functionalities, workflow optimizations, and enhanced user experience.

// I thrive in creating responsive, modern front-end interfaces using React and TailwindCSS, while designing robust backends with Python and Node.js.
// Explore my portfolio to witness creativity meet technical excellence.
// `;

// const Hero = () => {
//   const [typedText, setTypedText] = useState("");
//   const [msgIndex, setMsgIndex] = useState(0);
//   const [hoverHint, setHoverHint] = useState("");

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

//   return (
//     <section 
//       id="hero" 
//       className="bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50 text-gray-900 min-h-screen flex items-center justify-center relative px-6 py-10"
//     >
//       <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        
//         {/* LEFT — BIGGER SQUARE PROFILE */}
//         <div className="flex justify-center md:justify-start w-full md:w-1/3">
//           <motion.div
//             className="relative w-72 h-72 rounded-xl overflow-hidden shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             initial={{ scale: 0.95 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img
//               src="/IMG_9021.JPG"
//               alt="Gbemisola Ololade Victoria"
//               className="w-full h-full object-cover rounded-xl"
//               onError={(e) => {
//                 if (!e.currentTarget.dataset.fallback) {
//                   e.currentTarget.dataset.fallback = 'true';
//                   e.currentTarget.src = '/image.png';
//                 }
//               }}
//             />
//             <motion.div
//               className="absolute inset-0 rounded-xl border-4 border-pink-400 opacity-50"
//               animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//             />
//           </motion.div>
//         </div>

//         {/* RIGHT — TEXT CONTENT */}
//         <div className="w-full md:w-2/3 text-center md:text-left">
//           <motion.h1
//             className="text-5xl font-bold mb-6"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             Hello, I'm Gbemisola
//           </motion.h1>

//           <motion.p
//             className="text-xl mb-6 font-semibold min-h-[1.5em]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >
//             {typedText}
//             <span className="animate-pulse">|</span>
//           </motion.p>

//           <motion.p
//             className="text-gray-700 mb-8 whitespace-pre-line"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1.2, delay: 1 }}
//           >
//             {longIntro}
//           </motion.p>

//           <div className="relative inline-block">
//             <motion.div
//               onMouseEnter={() => setHoverHint("Learn more about me 💡")}
//               onMouseLeave={() => setHoverHint("")}
//             >
//               <Link to="/about">
//                 <motion.button
//                   whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 0, 128, 0.6)" }}
//                   className="bg-gradient-to-r from-purple-700 via-pink-600 to-orange-500 text-black px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
//                 >
//                   Let's Get Started
//                 </motion.button>
//               </Link>
//             </motion.div>

//             {hoverHint && (
//               <motion.div
//                 className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-800 px-3 py-1 rounded shadow-md text-sm"
//                 initial={{ opacity: 0, y: 5 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {hoverHint}
//               </motion.div>
//             )}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;




// import { useEffect, useState } from "react";
// import API_URL from "../config";

// function Hero() {
//   const defaultHero = {
//     title: "Hello, I'm Gbemisola Ololade V!",
//     subtitle:
//       "By day, I'm an AI Developer building intelligent, scalable solutions. By night, I'm an analyst of politics and governance, an occasional writer, and a public speaker on topics that matter. And if the world ever seems like it's coming to an end? Don't worry, that's when my sense of humor truly shines.",
//     image_url:
//       "C:\Users\user133\Desktop\Portfolio\Frontend\myportfolio\public\Gemini_Generated_Image_t7me1bt7me1bt7me.png",
//     view_button_text: "View Projects",
//     contact_button_text: "Contact Me",
//   };

//   const [hero, setHero] = useState(null);

//   useEffect(() => {
//     async function fetchHero() {
//       try {
//         const res = await fetch(`${API_URL}/api/hero`);
//         const data = await res.json();
//         if (data.length > 0) {
//           setHero(data[0]);
//         } else {
//           setHero(defaultHero);
//         }
//       } catch (err) {
//         console.error("Failed to fetch hero:", err);
//         setHero(defaultHero);
//       }
//     }
//     fetchHero();
//   }, []);

//   if (!hero) return <div>Loading...</div>;

//   return (
//     <section
//       id="hero"
//       className="min-h-screen pt-20 pb-12 md:pb-20 flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-orange-100 to-orange-50 px-6 md:px-20"
//     >
//       <div className="md:w-1/2 flex justify-center order-1 md:order-2 mb-10 md:mb-0">
//         <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
//           <img
//             src={hero.image_url}
//             alt={hero.title}
//             className="w-full h-full rounded-full shadow-lg "
//           />

//           <div
//             className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-orange-600 border-t-transparent animate-spin"
//             style={{ animation: "spin 8s linear infinite" }}
//           ></div>
//         </div>
//       </div>

//       <div className="md:w-1/2 flex flex-col justify-center order-2 md:order-1">
//         <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">
//           {hero.title}
//         </h1>

//         <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-xl">
//           {hero.subtitle}
//         </p>

//         <div className="flex space-x-4">
//           <a
//             href="#projects"
//             onClick={(e) => {
//               e.preventDefault();
//               document.getElementById("projects")?.scrollIntoView({
//                 behavior: "smooth",
//               });
//             }}
//             className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition"
//           >
//             {hero.view_button_text}
//           </a>

//           <a
//             href="#contact"
//             onClick={(e) => {
//               e.preventDefault();
//               document.getElementById("contact")?.scrollIntoView({
//                 behavior: "smooth",
//               });
//             }}
//             className="px-6 py-3 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition"
//           >
//             {hero.contact_button_text}
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;




import { useEffect, useState } from "react";
import API_URL from "../config";

function Hero() {
  // Default hero info
  const defaultHero = {
    title: "Hello, I'm Gbemisola Ololade V!",
    subtitle:
      "By day, I'm an AI Developer building intelligent, scalable solutions. By night, I'm an analyst of politics and governance, an occasional writer, and a public speaker on topics that matter. And if the world ever seems like it's coming to an end? Don't worry, that's when my sense of humor truly shines.",
    image_url: "/Gemini_Generated_Image_t7me1bt7me1bt7me.png", // ✅ Correct path
    view_button_text: "View Projects",
    contact_button_text: "Contact Me",
  };

  const [hero, setHero] = useState(null);

  useEffect(() => {
    async function fetchHero() {
      try {
        const res = await fetch(`${API_URL}/api/hero`);
        const data = await res.json();

        // Use API data if available
        if (data.length > 0) {
          setHero(data[0]);
        } else {
          setHero(defaultHero);
        }
      } catch (err) {
        console.error("Failed to fetch hero:", err);
        setHero(defaultHero);
      }
    }

    fetchHero();
  }, []);

  if (!hero) return <div>Loading...</div>;

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 pb-12 md:pb-20 flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-orange-100 to-orange-50 px-6 md:px-20"
    >
      {/* Hero Image */}
      <div className="md:w-1/2 flex justify-center order-1 md:order-2 mb-10 md:mb-0">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img
            src={hero.image_url}
            alt={hero.title}
            className="w-full h-full rounded-full shadow-lg"
          />
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-orange-600 border-t-transparent animate-spin"
            style={{ animation: "spin 8s linear infinite" }}
          ></div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="md:w-1/2 flex flex-col justify-center order-2 md:order-1">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-4">
          {hero.title}
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 mb-6 max-w-xl">
          {hero.subtitle}
        </p>

        <div className="flex space-x-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition"
          >
            {hero.view_button_text}
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-6 py-3 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 transition"
          >
            {hero.contact_button_text}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

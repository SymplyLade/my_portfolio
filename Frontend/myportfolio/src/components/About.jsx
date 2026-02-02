// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { FaFilePdf } from "react-icons/fa";
// import { motion } from "framer-motion";

// const skills = [
//   { name: "React", tip: "AI Suggestion: Use hooks and advanced state management for scalable UI.", level: 90, category: "Frontend" },
//   { name: "TailwindCSS", tip: "AI Suggestion: Rapidly design responsive layouts.", level: 85, category: "Frontend" },
//   { name: "JavaScript", tip: "AI Suggestion: Enhance dynamic functionality and AI-driven interactions.", level: 95, category: "Frontend" },
//   { name: "HTML", tip: "AI Suggestion: Semantic markup for SEO and accessibility.", level: 90, category: "Frontend" },
//   { name: "CSS", tip: "AI Suggestion: Smooth styling and animations.", level: 88, category: "Frontend" },
//   { name: "Python", tip: "AI Suggestion: Backend logic, APIs, data processing.", level: 85, category: "Backend" },
//   { name: "Backend", tip: "AI Suggestion: Build scalable server-side applications.", level: 83, category: "Backend" }
// ];

// const longIntro = `
// Hello! I'm Gbemisola Ololade Victoria, a Full-Stack Developer passionate about building intelligent and scalable digital solutions. 
// I integrate **AI-powered features** in my projects, including predictive functionalities, workflow optimizations, and enhanced user experience.

// I thrive in creating seamless, responsive front-end interfaces with React and TailwindCSS, combined with robust backends using Python and Node.js.
// Explore my portfolio to witness creativity meet technical excellence.
// `;

// const About = () => {
//   const [typedText, setTypedText] = useState("");
//   const [activeTip, setActiveTip] = useState("");

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });

  
//     let index = 0;
//     const interval = setInterval(() => {
//       setTypedText(longIntro.slice(0, index + 1));
//       index++;
//       if (index === longIntro.length) clearInterval(interval);
//     }, 20);
//     return () => clearInterval(interval);
//   }, []);

//   const groupedSkills = skills.reduce((acc, skill) => {
//     acc[skill.category] = acc[skill.category] || [];
//     acc[skill.category].push(skill);
//     return acc;
//   }, {});

//   const particleCount = 15;
//   const particles = Array.from({ length: particleCount }, (_, i) => {
//     const angle = (i / particleCount) * 360;
//     const radius = 80 + Math.random() * 30;
//     return { angle, radius, delay: Math.random() * 2 };
//   });

//   return (
//     <section id="about" className="py-20 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6 text-center">


//         <div className="relative w-44 h-44 mx-auto mb-6">
//           <motion.img
//             src="/IMG_9021.JPG"
//             alt="SymplyLade"
//             className="w-full h-full border-4 border-green-700 rounded-full object-cover shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             initial={{ rotate: 0 }}
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//             onError={(e) => {
//               if (!e.currentTarget.dataset.fallback) {
//                 e.currentTarget.dataset.fallback = 'true';
//                 e.currentTarget.src = '/image.png';
//               }
//             }}
//           />

//           <motion.div
//             className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-green-400 opacity-50"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//           />

          
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-full h-full border border-green-500 rounded-full"
//               style={{ top: 0, left: 0 }}
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 10 + i * 5, ease: "linear" }}
//             />
//           ))}

    
//           {particles.map((p, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-green-400 rounded-full"
//               style={{
//                 top: "50%",
//                 left: "50%",
//                 x: p.radius * Math.cos((p.angle * Math.PI) / 180),
//                 y: p.radius * Math.sin((p.angle * Math.PI) / 180)
//               }}
//               animate={{
//                 rotate: 360,
//                 x: [
//                   p.radius * Math.cos((p.angle * Math.PI) / 180),
//                   p.radius * Math.cos(((p.angle + 360) * Math.PI) / 180)
//                 ],
//                 y: [
//                   p.radius * Math.sin((p.angle * Math.PI) / 180),
//                   p.radius * Math.sin(((p.angle + 360) * Math.PI) / 180)
//                 ]
//               }}
//               transition={{ repeat: Infinity, duration: 12 + Math.random() * 8, ease: "linear", delay: p.delay }}
//             />
//           ))}

        
//           <motion.div
//             className="absolute bottom-0 right-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
//             whileHover={{ scale: 1.2, rotate: 10 }}
//             title="AI-integrated Developer"
//           >
        
//           </motion.div>
//         </div>

      
//         <motion.h2 
//           className="text-4xl font-bold mb-6"
//           data-aos="fade-up"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           About Me
//         </motion.h2>

    
//         <motion.p
//           className="mb-8 text-gray-700 whitespace-pre-line text-left"
//           data-aos="fade-up"
//           data-aos-delay="200"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           {typedText}
//         </motion.p>


//         <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up" data-aos-delay="400">
//           Skills & AI Insights
//         </h3>

//         {Object.keys(groupedSkills).map((category) => (
//           <div key={category} className="mb-6 text-left">
//             <h4 className="text-lg font-medium mb-3">{category}</h4>
//             <div className="flex flex-col gap-3">
//               {groupedSkills[category].map((skill, i) => (
//                 <div 
//                   key={i} 
//                   className="relative"
//                   onMouseEnter={() => setActiveTip(skill.tip)}
//                   onMouseLeave={() => setActiveTip("")}
//                 >
//                   <div className="flex justify-between mb-1">
//                     <span className="text-sm font-medium text-gray-700">{skill.name}</span>
//                     <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
//                   </div>
//                   <div className="w-full bg-gray-300 rounded-full h-4">
//                     <motion.div
//                       className="bg-green-500 h-4 rounded-full"
//                       initial={{ width: 0 }}
//                       animate={{ width: `${skill.level}%` }}
//                       transition={{ duration: 1.2, ease: "easeOut" }}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

 
//         {activeTip && (
//           <motion.div
//             className="mb-6 text-gray-700 italic bg-gray-100 p-3 rounded shadow-md max-w-md mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             💡 {activeTip}
//           </motion.div>
//         )}


//         <div className="flex justify-center gap-4 mt-8" data-aos="zoom-in" data-aos-delay="600">
//           <motion.a 
//             href="/SymplyLade_CV.pdf" 
//             download
//             className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition shadow-md"
//             whileHover={{ scale: 1.05 }}
//           >
//             <FaFilePdf className="text-xl"/>
//             Download CV
//           </motion.a>
//           <motion.a 
//             href="/SymplyLade_CV.pdf" 
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
//             whileHover={{ scale: 1.05 }}
//           >
//             <FaFilePdf className="text-xl"/>
//             View CV
//           </motion.a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default About;





// import { useState, useEffect } from "react";
// import API_URL from "../config";

// function About() {
//   const [aboutData, setAboutData] = useState({
//     content: "",
//     education: [],
//     image_url: "",
//   });

//   useEffect(() => {
//     fetch(`${API_URL}/api/about`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           const about = data[0];
//           setAboutData({
//             content: about.content || "",
//             education: about.education || [],
//             image_url: about.image_url || "",
//           });
//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <section
//       id="about"
//       className="min-h-screen flex flex-col md:flex-row md:items-start items-center bg-black px-6 md:px-20 py-12 md:py-20 gap-8 md:gap-12"
//     >
//       {/* Image Container */}
//       <div className="w-full md:w-1/2 flex justify-start">
//         <img
//           src={
//             aboutData.image_url ||
//             "https://lh3.googleusercontent.com/gg/AMW1TPrsLV7KEw-h1IaRqlwC9O8U3k5HYLTLFNFpEq_OQAOxI7fiGMyuHl63KsAaxV571YClJDLTCelq_cEjvB3PlAddLfpIbBTw6QAAwNQe06WKz3GfF4QNEwhIZPsd9iqM4d4aQ_1WJr_5M-f_3ZiteaoAiyx-gLXJUJq1Fab80pvYDdwCh5xVZ-hsgJpKqV4PYY7aa_XmVZ1lLLLj9cuId9dc92jDfBc36FJ6nsp5Bkd_kIrWX8jynbyZ2MwT2-RR7x_aOTrBYabmqD_z4YsmocbbAuhnue6HkY59GTDtiyvDomJqG_R8_8oAdPmcDwmFUupU4tBX_jgluaRkLmCJ8ED7=s1024-rj"
//           }
//           alt="Profile"
//           className="w-full max-w-xs md:w-80 lg:w-96 h-auto rounded-lg shadow-lg object-cover"
//         />
//       </div>

//       {/* Text Container */}
//       <div className="w-full md:w-1/2">
//         <h2 className="text-4xl font-bold text-orange-600 mb-4">About Me</h2>

//         <p className="text-gray-100 text-lg md:text-xl mb-6">
//           {aboutData.content ||
//             "I'm an AI Developer with a strong foundation in building intelligent, scalable systems and modern frontend solutions. My work blends engineering, design, and problem-solving across multiple layers of technology."}
//         </p>

//         <div>
//           <p className="text-orange-600 text-lg md:text-xl font-semibold mb-3">
//             Education
//           </p>

//           {aboutData.education.length > 0 ? (
//             <div className="space-y-4">
//               {aboutData.education.map((edu, index) => (
//                 <div key={index} className="text-gray-100">
//                   <p className="text-lg md:text-xl font-semibold">
//                     {edu.degree}
//                     {edu.field && (
//                       <span className="text-orange-300"> in {edu.field}</span>
//                     )}
//                   </p>
//                   <p className="text-md md:text-lg text-gray-300">
//                     {edu.institution}
//                   </p>
//                   <p className="text-sm md:text-md text-gray-400">
//                     {edu.startYear} - {edu.endYear || "Present"}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-100 text-lg md:text-xl">
//               B.Eng, Mechatronics Engineering{" "}
//               <span className="text-orange-300">(GMNSE)</span>
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;




// import { useState, useEffect } from "react";
// import API_URL from "../config";
// import profilePic from "../public/profile.jpg";
// function About() {
//   const [aboutData, setAboutData] = useState({
//     content: "",
//     education: [],
//     image_url: "",
//   });

//   useEffect(() => {
//     fetch(`${API_URL}/api/about`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           const about = data[0];
//           setAboutData({
//             content: about.content || "",
//             education: about.education || [],
//             image_url: about.image_url || "",
//           });
//         }
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <section
//       id="about"
//       className="min-h-screen flex flex-col md:flex-row md:items-start items-center bg-black px-6 md:px-20 py-12 md:py-20 gap-8 md:gap-12"
//     >
//       {/* Image Container */}
//       <div className="w-full md:w-1/2 flex justify-start">
//         <img
//           src={
//             aboutData.image_url ||
//             "https://lh3.googleusercontent.com/gg/AMW1TPrsLV7KEw-h1IaRqlwC9O8U3k5HYLTLFNFpEq_OQAOxI7fiGMyuHl63KsAaxV571YClJDLTCelq_cEjvB3PlAddLfpIbBTw6QAAwNQe06WKz3GfF4QNEwhIZPsd9iqM4d4aQ_1WJr_5M-f_3ZiteaoAiyx-gLXJUJq1Fab80pvYDdwCh5xVZ-hsgJpKqV4PYY7aa_XmVZ1lLLLj9cuId9dc92jDfBc36FJ6nsp5Bkd_kIrWX8jynbyZ2MwT2-RR7x_aOTrBYabmqD_z4YsmocbbAuhnue6HkY59GTDtiyvDomJqG_R8_8oAdPmcDwmFUupU4tBX_jgluaRkLmCJ8ED7=s1024-rj"
//           }
//           alt="Profile"
//           className="w-full max-w-xs md:w-80 lg:w-96 h-auto rounded-lg shadow-lg object-cover"
//         />
//       </div>

//       {/* Text Container */}
//       <div className="w-full md:w-1/2">
//         <h2 className="text-4xl font-bold text-orange-600 mb-4">About Me</h2>

//         <p className="text-gray-100 text-lg md:text-xl mb-6">
//           I am a graduate in Food Technology with a passion for technology and innovation. 
//           I am also a certified Occupational Safety and Health Professional (OSHP), Environmental Impact Assessment Professional (EIAP), 
//           and Health, Safety, and Environment Professional (HSEP) Level 1-3.  
//           As a Web and AI developer, I build intelligent, efficient, and scalable solutions, blending creativity, engineering, and problem-solving to deliver impactful projects.
//         </p>

//         <div>
//           <p className="text-orange-600 text-lg md:text-xl font-semibold mb-3">
//             Education
//           </p>

//           {aboutData.education.length > 0 ? (
//             <div className="space-y-4">
//               {aboutData.education.map((edu, index) => (
//                 <div key={index} className="text-gray-100">
//                   <p className="text-lg md:text-xl font-semibold">
//                     {edu.degree}
//                     {edu.field && (
//                       <span className="text-orange-300"> in {edu.field}</span>
//                     )}
//                   </p>
//                   <p className="text-md md:text-lg text-gray-300">
//                     {edu.institution}
//                   </p>
//                   <p className="text-sm md:text-md text-gray-400">
//                     {edu.startYear} - {edu.endYear || "Present"}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-100 text-lg md:text-xl">
//               HND in Food Technology{" "}
//               <span className="text-orange-300">(FPI)</span>
//             </p>
//           )}

//           {/* Certifications */}
//           <div className="mt-6">
//             <p className="text-orange-600 text-lg md:text-xl font-semibold mb-3">
//               Certifications
//             </p>
//             <ul className="list-disc list-inside text-gray-100 space-y-1">
//               <li>Occupational Safety and Health Professional (OSHP) Level 1-3</li>
//               <li>Environmental Impact Assessment Professional (EIAP) Level 1-3</li>
//               <li>Health, Safety, and Environment Professional (HSEP) Level 1-3</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

import { useState, useEffect } from "react";
import API_URL from "../config";

function About() {
  const [aboutData, setAboutData] = useState({
    content: "",
    education: [],
    image_url: "",
  });

  useEffect(() => {
    fetch(`${API_URL}/api/about`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const about = data[0];
          setAboutData({
            content: about.content || "",
            education: about.education || [],
            image_url: about.image_url || "",
          });
        }
      })
      .catch((err) => console.error("Failed to fetch about data:", err));
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row md:items-start items-center bg-black px-6 md:px-20 py-12 md:py-20 gap-8 md:gap-12"
    >
      {/* Image Container */}
      <div className="w-full md:w-1/2 flex justify-start">
        <img
          src={aboutData.image_url || "/profile.jpg"} // ✅ uses public/profile.jpg if no API image
          alt="Profile"
          className="w-full max-w-xs md:w-80 lg:w-96 h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl font-bold text-orange-600 mb-4">About Me</h2>

        <p className="text-gray-100 text-lg md:text-xl mb-6">
          I am a graduate in Food Technology with a strong passion for technology and innovation.
          I am also a certified Occupational Safety and Health Professional (OSHP), 
          Environmental Impact Assessment Professional (EIAP), and Health, Safety, and Environment Professional (HSEP) Levels 1-3.  
          As a Web and AI developer, I create intelligent, efficient, and scalable solutions, blending creativity, engineering, and problem-solving to deliver impactful projects.
        </p>

        <div>
          {/* Education */}
          <p className="text-orange-600 text-lg md:text-xl font-semibold mb-3">
            Education
          </p>
          {aboutData.education.length > 0 ? (
            <div className="space-y-4">
              {aboutData.education.map((edu, index) => (
                <div key={index} className="text-gray-100">
                  <p className="text-lg md:text-xl font-semibold">
                    {edu.degree}
                    {edu.field && (
                      <span className="text-orange-300"> in {edu.field}</span>
                    )}
                  </p>
                  <p className="text-md md:text-lg text-gray-300">{edu.institution}</p>
                  <p className="text-sm md:text-md text-gray-400">
                    {edu.startYear} - {edu.endYear || "Present"}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-100 text-lg md:text-xl">
              HND in Food Technology <span className="text-orange-300">(FPI)</span>
            </p>
          )}

          {/* Certifications */}
          <div className="mt-6">
            <p className="text-orange-600 text-lg md:text-xl font-semibold mb-3">
              Certifications
            </p>
            <ul className="list-disc list-inside text-gray-100 space-y-1">
              <li>Occupational Safety and Health Professional (OSHP) Level 1-3</li>
              <li>Environmental Impact Assessment Professional (EIAP) Level 1-3</li>
              <li>Health, Safety, and Environment Professional (HSEP) Level 1-3</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

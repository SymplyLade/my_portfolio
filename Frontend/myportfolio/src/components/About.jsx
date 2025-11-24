import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "React", tip: "AI Suggestion: Use hooks and advanced state management for scalable UI.", level: 90, category: "Frontend" },
  { name: "TailwindCSS", tip: "AI Suggestion: Rapidly design responsive layouts.", level: 85, category: "Frontend" },
  { name: "JavaScript", tip: "AI Suggestion: Enhance dynamic functionality and AI-driven interactions.", level: 95, category: "Frontend" },
  { name: "HTML", tip: "AI Suggestion: Semantic markup for SEO and accessibility.", level: 90, category: "Frontend" },
  { name: "CSS", tip: "AI Suggestion: Smooth styling and animations.", level: 88, category: "Frontend" },
  { name: "Python", tip: "AI Suggestion: Backend logic, APIs, data processing.", level: 85, category: "Backend" },
  { name: "Backend", tip: "AI Suggestion: Build scalable server-side applications.", level: 83, category: "Backend" }
];

const longIntro = `
Hello! I'm Gbemisola Ololade Victoria, a Full-Stack Developer passionate about building intelligent and scalable digital solutions. 
I integrate **AI-powered features** in my projects, including predictive functionalities, workflow optimizations, and enhanced user experience.

I thrive in creating seamless, responsive front-end interfaces with React and TailwindCSS, combined with robust backends using Python and Node.js.
Explore my portfolio to witness creativity meet technical excellence.
`;

const About = () => {
  const [typedText, setTypedText] = useState("");
  const [activeTip, setActiveTip] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

  
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(longIntro.slice(0, index + 1));
      index++;
      if (index === longIntro.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const groupedSkills = skills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const particleCount = 15;
  const particles = Array.from({ length: particleCount }, (_, i) => {
    const angle = (i / particleCount) * 360;
    const radius = 80 + Math.random() * 30;
    return { angle, radius, delay: Math.random() * 2 };
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">


        <div className="relative w-44 h-44 mx-auto mb-6">
          <motion.img
            src="/IMG_9021.JPG"
            alt="SymplyLade"
            className="w-full h-full border-4 border-green-700 rounded-full object-cover shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            onError={(e) => {
              if (!e.currentTarget.dataset.fallback) {
                e.currentTarget.dataset.fallback = 'true';
                e.currentTarget.src = '/image.png';
              }
            }}
          />

          <motion.div
            className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-green-400 opacity-50"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          />

          
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-full border border-green-500 rounded-full"
              style={{ top: 0, left: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10 + i * 5, ease: "linear" }}
            />
          ))}

    
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                x: p.radius * Math.cos((p.angle * Math.PI) / 180),
                y: p.radius * Math.sin((p.angle * Math.PI) / 180)
              }}
              animate={{
                rotate: 360,
                x: [
                  p.radius * Math.cos((p.angle * Math.PI) / 180),
                  p.radius * Math.cos(((p.angle + 360) * Math.PI) / 180)
                ],
                y: [
                  p.radius * Math.sin((p.angle * Math.PI) / 180),
                  p.radius * Math.sin(((p.angle + 360) * Math.PI) / 180)
                ]
              }}
              transition={{ repeat: Infinity, duration: 12 + Math.random() * 8, ease: "linear", delay: p.delay }}
            />
          ))}

        
          <motion.div
            className="absolute bottom-0 right-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            title="AI-integrated Developer"
          >
        
          </motion.div>
        </div>

      
        <motion.h2 
          className="text-4xl font-bold mb-6"
          data-aos="fade-up"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

    
        <motion.p
          className="mb-8 text-gray-700 whitespace-pre-line text-left"
          data-aos="fade-up"
          data-aos-delay="200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {typedText}
        </motion.p>


        <h3 className="text-2xl font-semibold mb-4" data-aos="fade-up" data-aos-delay="400">
          Skills & AI Insights
        </h3>

        {Object.keys(groupedSkills).map((category) => (
          <div key={category} className="mb-6 text-left">
            <h4 className="text-lg font-medium mb-3">{category}</h4>
            <div className="flex flex-col gap-3">
              {groupedSkills[category].map((skill, i) => (
                <div 
                  key={i} 
                  className="relative"
                  onMouseEnter={() => setActiveTip(skill.tip)}
                  onMouseLeave={() => setActiveTip("")}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-4">
                    <motion.div
                      className="bg-green-500 h-4 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

 
        {activeTip && (
          <motion.div
            className="mb-6 text-gray-700 italic bg-gray-100 p-3 rounded shadow-md max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            💡 {activeTip}
          </motion.div>
        )}


        <div className="flex justify-center gap-4 mt-8" data-aos="zoom-in" data-aos-delay="600">
          <motion.a 
            href="/SymplyLade_CV.pdf" 
            download
            className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <FaFilePdf className="text-xl"/>
            Download CV
          </motion.a>
          <motion.a 
            href="/SymplyLade_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <FaFilePdf className="text-xl"/>
            View CV
          </motion.a>
        </div>

      </div>
    </section>
  );
};

export default About;


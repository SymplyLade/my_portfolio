// import React, { useState, useEffect } from "react";
// import { projects as staticProjects } from "../data/projects";
// import ProjectCard from "./ProjectCard";

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [projects, setProjects] = useState(staticProjects);
//   const projectsPerPage = 2; // Number of projects to show per page

//   const nextPage = () => {
//     if (currentIndex + projectsPerPage < projects.length) {
//       setCurrentIndex(currentIndex + projectsPerPage);
//     }
//   };

//   const prevPage = () => {
//     if (currentIndex - projectsPerPage >= 0) {
//       setCurrentIndex(currentIndex - projectsPerPage);
//     }
//   };

//   const displayedProjects = projects.slice(
//     currentIndex,
//     currentIndex + projectsPerPage
//   );

//   return (
//     <section id="projects" className="py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
//           {displayedProjects.map((project) => (
//             <div key={project.id} data-aos="fade-up">
//               <ProjectCard project={project} />
//             </div>
//           ))}
//         </div>

//         {/* Pagination Buttons */}
//         <div className="flex justify-center gap-4 mt-8">
//           <button
//             onClick={prevPage}
//             disabled={currentIndex === 0}
//             className={`px-4 py-2 rounded bg-green-700 text-white hover:bg-green-800 transition ${
//               currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             Previous
//           </button>
//           <button
//             onClick={nextPage}
//             disabled={currentIndex + projectsPerPage >= projects.length}
//             className={`px-4 py-2 rounded bg-green-700 text-white hover:bg-green-800 transition ${
//               currentIndex + projectsPerPage >= projects.length
//                 ? "opacity-50 cursor-not-allowed"
//                 : ""
//             }`}
//           >
//             Next
//           </button>
//         </div>

//         {/* Page Info */}
//         <p className="mt-4 text-center text-gray-600">
//           Showing {currentIndex + 1} -{" "}
//           {Math.min(currentIndex + projectsPerPage, projects.length)} of{" "}
//           {projects.length} projects
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React, { useState } from "react";
import { projects as staticProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 2; // show 2 projects at a time

  const nextPage = () => {
    if (currentIndex + projectsPerPage < staticProjects.length) {
      setCurrentIndex(currentIndex + projectsPerPage);
    }
  };

  const prevPage = () => {
    if (currentIndex - projectsPerPage >= 0) {
      setCurrentIndex(currentIndex - projectsPerPage);
    }
  };

  const displayedProjects = staticProjects.slice(
    currentIndex,
    currentIndex + projectsPerPage
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="relative">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex} // triggers animation when index changes
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {displayedProjects.map((project) => (
                <div key={project.id}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevPage}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded bg-green-700 text-white hover:bg-green-800 transition ${
                currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={currentIndex + projectsPerPage >= staticProjects.length}
              className={`px-4 py-2 rounded bg-green-700 text-white hover:bg-green-800 transition ${
                currentIndex + projectsPerPage >= staticProjects.length
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              Next
            </button>
          </div>

          {/* Page Info */}
          <p className="mt-4 text-center text-gray-600">
            Showing {currentIndex + 1} -{" "}
            {Math.min(currentIndex + projectsPerPage, staticProjects.length)} of{" "}
            {staticProjects.length} projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

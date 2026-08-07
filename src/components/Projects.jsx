import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: "HeatWise: Geospatial Analytics & Visualization Platform",
    subtitle: "GIS Architecture & Machine Learning Predictions",
    shortDesc: "A high-performance geospatial platform streaming real-time environmental rasters and simulating urban heat mitigation.",
    longDesc: "HeatWise is a geospatial analytics platform designed to visualize and mitigate urban heat islands. It features a high-performance GIS tile-server architecture powered by FastAPI and Google Earth Engine to stream real-time environmental rasters (LULC, NDVI, NDBI). Additionally, it integrates a machine learning prediction engine to simulate and evaluate various urban heat mitigation strategies based on live weather patterns and satellite data.",
    techStack: ["Python", "FastAPI", "React", "Next.js", "TypeScript", "Scikit-learn", "Google Earth Engine", "Open-Meteo"],
    features: [
      "Engineered high-performance GIS tile-server streaming LULC, NDVI, and NDBI rasters.",
      "Real-time point-based analysis ML engine simulating local heat mitigation strategies.",
      "Integrated Open-Meteo API for real-time local weather forecasts and environmental calculations.",
      "Designed an intuitive interactive web interface using React/Next.js and TypeScript."
    ],
    links: {
      github: "https://github.com/manasvisharma2231/HeatWise",
      live: "https://heat-wise-live.vercel.app"
    },
    accentColor: "#ff2a2a"
  },
  {
    id: 2,
    title: "Valora: SOS Shield Network",
    subtitle: "Autonomous Biometric Safety & Real-time CV",
    shortDesc: "A biometric safety system utilizing computer vision and WebSockets to detect emergency distress gestures and broadcast evidence.",
    longDesc: "Valora is an autonomous emergency response network utilizing computer vision to detect emergency distress gestures in real-time. It runs on optimized YOLOv8 and MediaPipe models to recognize specific distress indicators with high precision. Once triggered, the system utilizes a custom Spatial-Temporal Hand-Locking algorithm integrated with WebSockets to broadcast live video and audio evidence directly to police terminals.",
    techStack: ["Python", "FastAPI", "React", "OpenCV", "MediaPipe", "YOLOv8", "WebSockets"],
    features: [
      "Real-time gesture recognition achieving high accuracy under varying light and angle conditions.",
      "Proprietary Spatial-Temporal Hand-Locking algorithm preventing false positives in motion tracking.",
      "Instant data streaming pipelines built with WebSockets for sub-second terminal notifications.",
      "Comprehensive local dashboard for security personnel and police operations."
    ],
    links: {
      github: "https://github.com/manasvisharma2231/HOF-Zenith",
      live: null
    },
    accentColor: "#fff"
  },
  {
    id: 3,
    title: "Apheresis Blood Bank System",
    subtitle: "High-Concurrency Healthcare Logistics",
    shortDesc: "A medical platform managing complex donor workflows, RESTful endpoints, and database scalability for critical requests.",
    longDesc: "Apheresis is a robust medical logistics platform designed to coordinate high-frequency blood donor workflows. Built with Java and Spring Boot, the platform streamlines medical requests, matching algorithms, and donor logging. It exposes secure, high-throughput REST APIs secured with JWT authentication and runs on optimized PostgreSQL query configurations, ensuring 99.9% availability for critical operations.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "React", "RESTful APIs", "JWT Auth"],
    features: [
      "Architected high-concurrency donor workflows reducing wait-times and dispatch lag.",
      "Secured all medical request endpoints using stateless JWT-based authentication tokens.",
      "Optimized database schema indexing and query structures to maintain 99.9% uptime.",
      "Reactive admin dashboard providing log tracking and automated notifications."
    ],
    links: {
      github: "https://github.com/manasvisharma2231/Apheresis",
      live: "http://3.108.228.20/"
    },
    accentColor: "#ff2a2a"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-[#0c0c0c] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#ff2a2a0a,transparent_40%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-left" data-aos="fade-up">
          <div className="inline-block border border-white/10 rounded-full px-5 py-1.5 text-xs text-white/60 font-bold tracking-widest uppercase mb-6 bg-white/5 backdrop-blur-md">
            Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 leading-none">
            Engineered <span className="text-[#ff2a2a]">Solutions</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            A showcase of systems, applications, and pipelines developed utilizing modern full-stack web technologies and algorithmic logic.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {projectsData.map((project, idx) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-3 flex flex-col group hover:border-[#ff2a2a]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,42,42,0.05)] cursor-pointer h-full"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Inner Cover */}
              <div className="relative aspect-[4/3] w-full rounded-[1.5rem] bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 overflow-hidden flex flex-col justify-between p-6 group">
                
                {/* Tech Badge Tag (Top) */}
                <div className="flex justify-between items-center w-full z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff2a2a] bg-[#ff2a2a]/10 px-3 py-1 rounded-full border border-[#ff2a2a]/20">
                    {project.techStack[0]}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Subtitle / Category (Bottom Overlay) */}
                <div className="z-10">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-white/50 mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-xl font-black text-white leading-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                    {project.title.split(":")[0]}
                  </h3>
                </div>

                {/* Grid Overlay Texture */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
                {/* Radial Glow on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,42,42,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <p className="text-white/75 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] text-white/40 px-1 py-0.5">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[200000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Dialog Card */}
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="bg-neutral-950 border border-white/10 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-[#ff2a2a] hover:text-white border border-white/10 hover:border-transparent flex items-center justify-center text-white transition-all duration-300 z-25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Cover Image Placeholder */}
              <div className="h-44 md:h-52 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 flex flex-col justify-end relative border-b border-white/5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#ff2a2a] mb-2">
                  {selectedProject.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
                  {selectedProject.title}
                </h3>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#ff2a2a1a,transparent_50%)] pointer-events-none"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
              </div>

              {/* Modal Body */}
              <div className="p-8 md:p-10 max-h-[60vh] overflow-y-auto">
                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold text-[#ff2a2a] tracking-widest mb-2">Abstract</h4>
                  <p className="text-white/80 text-sm leading-relaxed font-medium">
                    {selectedProject.longDesc}
                  </p>
                </div>

                {/* Key Achievements */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase font-bold text-[#ff2a2a] tracking-widest mb-3">Key Features & Metrics</h4>
                  <ul className="flex flex-col gap-2">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="text-white/70 text-xs leading-relaxed flex items-start gap-3 font-medium">
                        <span className="text-[#ff2a2a] mt-1 select-none">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack List */}
                <div className="mb-8">
                  <h4 className="text-xs uppercase font-bold text-white/55 tracking-widest mb-3">Technologies Leveraged</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="text-xs text-white/90 bg-white/5 border border-white/10 px-3 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <a 
                    href={selectedProject.links.github}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`px-6 py-3 rounded-full bg-white text-black font-bold text-sm text-center hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-lg ${
                      selectedProject.links.live ? "flex-1" : "w-full"
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                    Source Code
                  </a>
                  {selectedProject.links.live && (
                    <a 
                      href={selectedProject.links.live}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-sm text-center border border-white/10 transition-colors flex items-center justify-center gap-2"
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const academicData = [
  {
    type: "Research Project & Thesis",
    title: "Bengali Text Summarizer",
    desc: "A machine learning project utilizing Google's mT5 model to summarize Bangla text efficiently. This project combines cutting-edge NLP techniques and pre-trained transformer models.",
    impact: "State-of-the-art NLP mT5 sequence generation.",
    tech: ["Python", "mT5", "NLP"]
  },
  {
    type: "Research Project",
    title: "Autonomous Driving ML Model",
    desc: "A machine learning model for autonomous driving, enabling the car to navigate without human intervention. Showcases skills in computer vision and deep learning.",
    impact: "Real-time visual navigation inference.",
    tech: ["Python", "Computer Vision", "Deep Learning"]
  },
  {
    type: "Agricultural AI",
    title: "Agro-Sense AI",
    desc: "A machine learning model designed to detect crop diseases and recommend optimal fertilizer combinations based on soil conditions.",
    impact: "Precision agriculture detection algorithms.",
    tech: ["Python", "TensorFlow", "OpenCV"]
  }
];

export const AcademicAccordion = () => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Autoplay engine: 4 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % academicData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="w-full flex flex-col lg:flex-row gap-4 h-[750px] lg:h-[450px] mt-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {academicData.map((project, index) => {
        const isActive = active === index;

        return (
          <motion.div
            layout
            key={index}
            onClick={() => setActive(index)}
            className={`cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                ? "flex-[4] lg:flex-[6] bg-blue-500/5 border border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                : "flex-1 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 opacity-70 hover:opacity-100"
              } relative flex group`}
          >
            {/* Ambient Background Glow for Active Item */}
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />
            )}

            {/* Closed State Vertical/Horizontal Title Tab */}
            <div
              className={`absolute inset-0 p-6 flex lg:flex-col justify-end lg:justify-center items-center lg:items-center transition-opacity duration-500 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100 delay-200"
                }`}
            >
              {/* Using proper CSS writing-mode to stop text overflow cutoffs */}
              <h3
                className="hidden lg:block text-xl font-bold tracking-tight text-white/50 group-hover:text-blue-300 transition-colors"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                {project.title}
              </h3>
              <div className="lg:hidden w-full flex justify-between items-center bg-black/50 p-4 rounded-xl backdrop-blur-md border border-white/5 group-hover:border-blue-500/30 transition-colors">
                <span className="text-sm font-mono text-white/40 uppercase tracking-widest">{project.type}</span>
                <span className="text-white/60 font-bold truncate max-w-[60%]">{project.title}</span>
              </div>
            </div>

            {/* Open Active State Content */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="w-full h-full p-6 md:p-10 flex flex-col relative z-10"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] md:text-xs font-mono text-blue-400 uppercase tracking-widest border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                      {project.type}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 border border-white/10 shadow-inner">
                      <span className="font-mono text-xs">{"</>"}</span>
                    </div>
                  </div>

                  <h4 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-4 tracking-tight drop-shadow-md lg:w-3/4">
                    {project.title}
                  </h4>

                  <p className="text-white/60 leading-relaxed text-sm md:text-base lg:text-lg mb-8 max-w-xl group-hover:text-white/80 transition-colors">
                    {project.desc}
                  </p>

                  <div className="mt-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                    <div className="inline-flex items-center gap-3 border border-blue-500/20 rounded-full px-5 py-2.5 bg-blue-500/5 shadow-sm group-hover:border-blue-500/40 transition-colors">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] animate-pulse"></span>
                      <span className="text-xs font-mono text-white/80">{project.impact}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:gap-3 justify-end items-center">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs font-mono text-white/40 tracking-widest border border-white/10 px-3 py-1.5 bg-white/5 rounded backdrop-blur-sm group-hover:text-white/70 transition-colors shadow-sm">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        );
      })}
    </div>
  );
};

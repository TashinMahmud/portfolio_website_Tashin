"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { HackerText } from "@/components/ui/HackerText";
import { AcademicAccordion } from "@/components/sections/AcademicAccordion";

const academicData = [
  {
    type: "Research Project & Thesis",
    title: "Bengali Text Summarizer",
    desc: "A machine learning project utilizing Google's mT5 model to summarize Bangla text efficiently. This project combines cutting-edge NLP techniques and pre-trained transformer models.",
    impact: "State-of-the-art NLP mT5 sequence generation.",
    tech: ["Python", "mT5 Model", "NLP", "Machine Learning"]
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

export const Education = () => {
  // Magnetic Tilt Logic for the Core Degree Card
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], ["-4deg", "4deg"]);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width - 0.5;
    const relativeY = (e.clientY - top) / height - 0.5;
    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 perspective-[1500px]">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side: Context */}
        <motion.div 
          className="md:w-1/3 sticky top-32"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4 block">Foundations</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tighter text-white mb-4">
            <HackerText text="Academic " /> <br className="hidden md:block"/>
            <span className="text-white/40"><HackerText text="Background" /></span>
          </h2>
          <div className="w-16 h-1 bg-white/20 mb-8" />
        </motion.div>

        {/* Right Side: Education Content */}
        <div className="md:w-2/3 flex flex-col gap-12 w-full">
          
          {/* Holographic 3D Tilt Degree Card */}
          <motion.div
             ref={cardRef}
             onMouseMove={onMouseMove}
             onMouseLeave={onMouseLeave}
             style={{ rotateX, rotateY }}
             initial={{ opacity: 0, scale: 0.95, y: 40 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative w-full rounded-2xl group cursor-crosshair transform-gpu hover:scale-[1.02] transition-transform duration-500 ease-out"
          >
            {/* SVG Glowing Circuit Frame */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-20 rounded-2xl" 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
               <motion.rect
                  x="0" y="0" width="100" height="100" rx="16"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.8)"
                  strokeWidth="0.5"
                  className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "circInOut", delay: 0.2 }}
               />
               <motion.rect
                  x="0" y="0" width="100" height="100" rx="16"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.4)"
                  strokeWidth="0.2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
               />
            </svg>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden flex flex-col items-start gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              {/* Internal Sweep Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex justify-between items-start w-full gap-4 relative z-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2 group-hover:text-blue-400 transition-colors">
                    B.Sc. in Computer Science & Engineering
                  </h3>
                  <p className="text-blue-300/80 font-mono mt-2 text-sm md:text-md uppercase tracking-widest">
                    North South University (NSU)
                  </p>
                </div>
                
                <span className="text-[10px] md:text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/30 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  GRADUATED / 2025
                </span>
              </div>
            </div>
          </motion.div>

          {/* Academic Expanding Accordion Hover Section */}
          <AcademicAccordion />
          
        </div>
      </div>
    </section>
  );
};

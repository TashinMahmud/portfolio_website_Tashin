"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { featuredProjects } from "@/data/portfolio";
import { HackerText } from "@/components/ui/HackerText";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImpactBadge } from "@/components/ui/ImpactBadge";

export const CoverflowProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = featuredProjects.length;

  // Autoplay function
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <section id="projects" className="py-24 max-w-[100vw] overflow-hidden mx-auto relative z-10 w-full mb-32">
      {/* Ambience Backing Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <span className="text-blue-500 font-mono text-xs tracking-widest uppercase mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans tracking-tighter text-white mb-2">
            <HackerText text="Featured Projects" />
          </h2>
          <div className="w-16 h-1 bg-white/20 mt-6 mx-auto md:mx-0" />
        </motion.div>
      </div>

      {/* 3D Coverflow Container */}
      <div 
        className="relative h-[480px] md:h-[550px] w-full flex justify-center items-center perspective-[2000px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false}>
          {featuredProjects.map((project, index) => {
            // Calculate shortest distance in a loop
            let distance = index - activeIndex;
            if (distance > total / 2) distance -= total;
            if (distance < -total / 2) distance += total;

            // Only render items nearby to save DOM paints and prevent visual clutter
            if (Math.abs(distance) > 2) return null;

            const isCenter = distance === 0;

            // The absolute spacing logic
            const xOffset = distance * 65; // Each step shifts by 65% of card width
            const zIndex = 50 - Math.abs(distance);
            const scale = isCenter ? 1 : 1 - (Math.abs(distance) * 0.15); // Shrinks background cards
            // 3D Tilt
            const rotateY = isCenter ? 0 : (distance > 0 ? -25 : 25);
            // Visual fade
            const opacity = isCenter ? 1 : (Math.abs(distance) === 1 ? 0.4 : 0.1);
            const blurAmount = isCenter ? 0 : 5; 

            return (
              <motion.div
                key={project.title}
                initial={false}
                animate={{
                  x: `${xOffset}%`,
                  scale: scale,
                  rotateY: rotateY,
                  zIndex: zIndex,
                  opacity: opacity,
                  filter: `blur(${blurAmount}px)`,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1] // Custom snappy spring physics
                }}
                className={`absolute inset-0 m-auto w-[90vw] md:w-[650px] lg:w-[750px] h-fit md:h-[420px] origin-center ${
                  isCenter ? "cursor-auto" : "cursor-pointer"
                }`}
                onClick={() => {
                  if (!isCenter) setActiveIndex(index);
                }}
              >
                 <GlassCard 
                  hoverEffect={false} 
                  className={`w-full h-full flex flex-col p-6 sm:p-8 md:p-12 transition-all duration-500 overflow-hidden relative ${
                    isCenter 
                      ? 'border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.15)] bg-white/[0.04]' 
                      : 'border-white/5 bg-white/[0.01]'
                  }`}
                >
                  {/* Internal ambient glow for the active card */}
                  {isCenter && (
                    <div className="absolute top-0 right-0 -mr-24 -mt-24 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none" />
                  )}

                  <div className="flex justify-between items-center mb-6 z-10 w-full">
                    <span className={`text-[10px] md:text-sm font-mono uppercase tracking-widest border px-4 py-1.5 rounded-full transition-colors ${
                      isCenter ? 'border-blue-500/50 bg-blue-500/10 text-blue-400' : 'border-white/10 bg-white/5 text-white/50'
                    }`}>
                      {project.type}
                    </span>
                    {isCenter && (
                      <a href={project.demo || project.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10 hover:border-white/20">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    )}
                  </div>
                  
                  <h3 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 z-10 transition-colors duration-500 ${isCenter ? 'text-white' : 'text-white/40'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm md:text-base leading-relaxed mb-8 line-clamp-3 md:line-clamp-4 z-10 transition-colors duration-500 ${isCenter ? 'text-white/70' : 'text-white/30'}`}>
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-col md:flex-row gap-6 md:gap-4 md:items-center justify-between z-10">
                    <ImpactBadge text={project.impactMetric} />
                    
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                      {project.tech.map((tech) => (
                         <span key={tech} className={`text-xs font-mono px-3 py-1.5 rounded-full border transition-colors ${
                           isCenter ? 'text-blue-200 border-white/10 bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]' : 'text-white/20 border-white/5 bg-white/5'
                         }`}>
                           {tech}
                         </span>
                      ))}
                    </div>
                  </div>
                 </GlassCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Pagination Pills */}
      <div className="flex justify-center items-center gap-2 mt-8 md:mt-12 w-full max-w-xl mx-auto relative z-20">
        {featuredProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`transition-all duration-300 rounded-full h-1.5 md:h-2 ${
              activeIndex === i 
                ? 'w-8 md:w-12 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]' 
                : 'w-2 md:w-3 bg-white/20 hover:bg-white/40 hover:w-4'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

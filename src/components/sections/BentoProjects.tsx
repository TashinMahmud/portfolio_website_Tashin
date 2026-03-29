"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ImpactBadge } from "@/components/ui/ImpactBadge";
import { featuredProjects } from "@/data/portfolio";
import { HackerText } from "@/components/ui/HackerText";
import { InteractiveTiltCard } from "@/components/ui/InteractiveTiltCard";

export const BentoProjects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tighter text-white mb-4">
          <HackerText text="Execution " /><span className="text-white/40">&</span><span className="ml-2"><HackerText text="Architecture" /></span>
        </h2>
        <div className="w-16 h-1 bg-white/20" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">
        {featuredProjects.map((project, i) => {
          const patternIndex = i % 4;
          let colSpan = "col-span-12";
          if (patternIndex === 0) colSpan = "md:col-span-6 lg:col-span-8";
          else if (patternIndex === 1) colSpan = "md:col-span-6 lg:col-span-4";
          else if (patternIndex === 2) colSpan = "md:col-span-6 lg:col-span-5";
          else if (patternIndex === 3) colSpan = "md:col-span-6 lg:col-span-7";

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={colSpan}
            >
              <InteractiveTiltCard>
                <GlassCard 
                  hoverEffect 
                  className="h-full group flex flex-col p-8 md:p-10 select-none cursor-crosshair border-white/10"
                >
                  {/* Top Section */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">
                      {project.type}
                    </span>
                    
                    {/* Subtle code icon to imply tech focus */}
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-white/10 group-hover:text-white transition-colors"
                    >
                      <span className="font-mono text-xs">{"</>"}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed mb-8 max-w-xl group-hover:text-white/80 transition-colors">
                    {project.description}
                  </p>

                  {/* Bottom Section - Pushed to bottom of flex container */}
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="mb-4">
                      <ImpactBadge text={project.impactMetric} />
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-white/40 hover:text-white/80 transition-colors">
                          {t} 
                          <span className="text-white/20 ml-2 last:hidden">/</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </InteractiveTiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

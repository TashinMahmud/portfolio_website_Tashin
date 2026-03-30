"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { techStack as staticSkills, featuredProjects } from "@/data/portfolio";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { HackerText } from "@/components/ui/HackerText";

const MarqueeRow = ({ tools, reverse = false }: { tools: {name: string, category: string}[], reverse?: boolean }) => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const getProjectsForTool = (toolName: string) => {
    return featuredProjects.filter((p) => 
      p.tech.some(t => t.toLowerCase() === toolName.toLowerCase())
    ).length;
  };

  return (
    <div className="relative w-screen flex overflow-hidden group py-4">
      <motion.div
        className="flex gap-4 md:gap-6 whitespace-nowrap min-w-max pl-4 md:pl-6"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        {/* We use [1, 2] to duplicate the row to seamlessly loop */}
        {[1, 2].map((loopIndex) => (
          <div key={loopIndex} className="flex gap-4 md:gap-6">
            {tools.map((tool) => {
              const count = getProjectsForTool(tool.name);
              const isHovered = hoveredTool === tool.name;
              
              return (
                <div
                  key={`${loopIndex}-${tool.name}`}
                  onMouseEnter={() => setHoveredTool(tool.name)}
                  onMouseLeave={() => setHoveredTool(null)}
                  className="w-[280px] md:w-[320px] shrink-0"
                >
                  <GlassCard 
                    hoverEffect 
                    className={cn(
                      "p-6 h-full transition-all duration-500",
                      isHovered ? "border-white/30 bg-white/5 scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.1)] z-10 relative opacity-100" 
                      : "border-white/10 opacity-70 group-hover:opacity-30"
                    )}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xl md:text-2xl font-bold font-sans tracking-tight text-white/90">
                          {tool.name}
                        </span>
                        {count > 0 && (
                          <motion.span 
                            initial={false}
                            animate={{ opacity: isHovered ? 1 : 0.3, y: isHovered ? 0 : 5 }}
                            className="text-[10px] sm:text-xs font-mono text-white/40 border border-white/10 px-2 py-1 rounded"
                          >
                            Used in <span className="text-white font-bold">{count}</span> proj
                          </motion.span>
                        )}
                      </div>
                      <span className="text-[10px] md:text-xs font-mono text-white/30 uppercase tracking-widest">
                        {/* {tool.category} */}
                      </span>
                    </div>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const BentoTechStack = ({ skills: propSkills }: { skills?: { name: string; category: string }[] }) => {
  const allTools = propSkills ?? staticSkills;

  // Split into two robust rows for opposing scroll directions
  const half = Math.ceil(allTools.length / 2);
  const row1 = allTools.slice(0, half);
  const row2 = allTools.slice(half);

  return (
    <section id="stack" className="py-24 max-w-[100vw] overflow-hidden relative z-10 -ml-[50vw] left-1/2 w-[100vw]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 w-full text-left">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tighter text-white mb-4">
            <HackerText text="Current" /> <br className="hidden md:block"/>
            <span className="text-white/40"><HackerText text="Loadout" /></span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mb-8">
            A comprehensive arsenal of programming languages, machine learning architectures, and full-stack development tools I leverage to build state-of-the-art applications.
          </p>
          <div className="w-16 h-1 bg-white/20 mb-8" />
        </motion.div>
      </div>

      <div className="relative">
        <MarqueeRow tools={row1} />
        <MarqueeRow tools={row2} reverse />
      </div>
    </section>
  );
};

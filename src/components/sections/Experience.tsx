"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { HackerText } from "@/components/ui/HackerText";

const experienceData = [
  {
    role: "AI Agent and Automation Developer",
    company: "SoftVence",
    period: "Feb 2026 - Present",
    points: [
      "AI agent development and automation solutions.",
      "Building intelligent workflow automation systems.",
      "Integrating AI/ML models into production applications.",
    ]
  },
  {
    role: "Web Developer",
    company: "AVARICE DIGITAL",
    period: "2023 - Dec 2025",
    points: [
      "Website designing and development.",
      "WordPress development and customization.",
      "Frontend and backend application logic.",
    ]
  }
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position of this entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Map scroll progress to the height of the SVG glowing line
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // Map scroll progress to opacity for a smooth entry
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="experience" ref={containerRef} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side: Context */}
        <motion.div
          className="md:w-1/3 sticky top-32"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans tracking-tighter text-white mb-4">
            <HackerText text="Professional " /><br className="hidden md:block" />
            <span className="text-white/40"><HackerText text="Engagement" /></span>
          </h2>
          <div className="w-16 h-1 bg-white/20 mb-8" />
        </motion.div>

        {/* Right Side: Timeline with Scroll Physics */}
        <div className="md:w-2/3 relative pl-8 md:pl-12">

          {/* Static Timeline Track */}
          <div className="absolute left-[3px] md:left-[3px] top-6 bottom-6 w-[2px] bg-white/5 rounded-full" />

          {/* Animated Glowing Draw-Line Tracking Scroll */}
          <motion.div
            style={{ height, opacity }}
            className="absolute left-[3px] md:left-[3px] top-6 w-[2px] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] z-10 rounded-full"
          />

          <div className="flex flex-col gap-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                {/* Node Dot on Timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute -left-[37px] md:-left-[41px] top-6 w-4 h-4 rounded-full border-2 border-background bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)] z-20"
                />

                <GlassCard hoverEffect className="p-8 border-white/5 hover:border-white/10 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-white/60 font-sans mt-1">{exp.company}</p>
                    </div>

                    <span className="text-xs font-mono text-white/40 bg-white/5 px-3 py-1 rounded border border-white/10 shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-8 space-y-4">
                    {exp.points.map((point, i) => (
                      <div key={i} className="flex items-start text-white/50 group-hover:text-white/70 transition-colors">
                        <span className="mr-4 mt-1 font-mono text-blue-500/50">&gt;&gt;</span>
                        <p className="leading-relaxed text-sm md:text-base">{point}</p>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

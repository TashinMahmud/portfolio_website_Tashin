"use client";

import { motion } from "framer-motion";
import { HackerText } from "@/components/ui/HackerText";
import { AcademicAccordion } from "@/components/sections/AcademicAccordion";
import { GlassCard } from "@/components/ui/GlassCard";

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
          
          {/* Standard Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full shrink-0"
          >
            <GlassCard hoverEffect className="p-8 border-white/5 hover:border-white/10 group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    B.Sc. in Computer Science & Engineering
                  </h3>
                  <p className="text-white/60 font-sans mt-2 text-sm md:text-base">
                    North South University (NSU)
                  </p>
                </div>
                
                <span className="text-xs font-mono text-white/40 bg-white/5 px-3 py-1 rounded border border-white/10 shrink-0">
                  GRADUATED / 2025
                </span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Academic Expanding Accordion Hover Section */}
          <AcademicAccordion />
          
        </div>
      </div>
    </section>
  );
};

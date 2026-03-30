"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { HackerText } from "@/components/ui/HackerText";
import { AcademicAccordion } from "@/components/sections/AcademicAccordion";
import { useRef } from "react";

// 3D tilt card component for the university banner
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
    spotX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    spotX.set(50);
    spotY.set(50);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="relative group overflow-hidden rounded-2xl border border-white/10 hover:border-blue-500/40 bg-white/[0.02] transition-colors duration-500 p-8 cursor-default"
    >
      {/* Cursor spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: useTransform(
            [spotX, spotY],
            ([sx, sy]) => `radial-gradient(200px circle at ${sx}% ${sy}%, rgba(59,130,246,0.12), transparent 70%)`
          ),
        }}
      />

      {/* Animated scan-line sweep */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />

      {/* Corner accent — top-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-500/50 rounded-tl-xl"
      />
      {/* Corner accent — bottom-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-500/50 rounded-br-xl"
      />

      {/* Lift shadow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: useTransform(
            [x, y],
            ([mx, my]) => `${-(mx as number) * 20}px ${-(my as number) * 15}px 40px rgba(59,130,246,0.08)`
          ),
        }}
      />

      {/* Content lifted in Z */}
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

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
          
          {/* University Degree Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full shrink-0"
          >
            <TiltCard>
              <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  {/* Animated label */}
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2 block"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    Academic Credential
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors duration-300"
                  >
                    B.Sc. in Computer Science &amp; Engineering
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-white/50 font-sans mt-2 text-sm md:text-base"
                  >
                    North South University (NSU)
                  </motion.p>
                </div>

                {/* Animated badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
                  className="shrink-0"
                >
                  <span className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] transition-all duration-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    GRADUATED / 2025
                  </span>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Academic Expanding Accordion Hover Section */}
          <AcademicAccordion />
          
        </div>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import { HeroTerminal } from "./HeroTerminal";
import { HackerText } from "@/components/ui/HackerText";
import { useState, useEffect } from "react";

const TypewriterLoop = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseDelay = 3000;

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === text) {
      timer = setTimeout(() => setIsDeleting(true), pauseDelay);
    } else if (isDeleting && displayText === "") {
      timer = setTimeout(() => setIsDeleting(false), 500);
    } else {
      timer = setTimeout(() => {
        setDisplayText(prev =>
          isDeleting ? prev.slice(0, -1) : text.slice(0, prev.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse ml-1 inline-block w-3 md:w-4 h-8 md:h-10 align-middle bg-blue-500/80 shadow-[0_0_10px_rgba(59,130,246,0.6)]" style={{ marginTop: '-4px' }} />
    </span>
  );
};

type SiteConfig = {
  name?: string;
  subtitle?: string;
  bio?: string;
  terminal_version?: string;
  resume_url?: string;
};

export const HeroSection = ({ config }: { config?: SiteConfig }) => {
  const bio = config?.bio ?? "Software Developer and AI Engineer specializing in autonomous agents and intelligent automation. I bridge the gap between complex machine learning research and production-ready full-stack applications.";
  const subtitle = config?.subtitle ?? "AI Engineer & Automation Developer";
  const resumeUrl = config?.resume_url ?? "";
  // Split name: everything before last word = line 1, last word = line 2
  const fullName = config?.name ?? "Tashin Mahmud Khan";
  const nameParts = fullName.trim().split(" ");
  const nameLine2 = nameParts.length > 1 ? nameParts.pop()! : "";
  const nameLine1 = nameParts.join(" ") || fullName;
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Typography & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col relative z-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-8 md:mb-12"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
            <span className="text-xs font-mono text-white/60 tracking-widest uppercase">Available for integration</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter text-white mb-6 leading-[1.1]">
            <div className="flex items-center gap-4 mb-6 md:mb-8 relative">
              <div className="relative w-32 h-32 md:w-44 md:h-44">
                {/* Soft glow behind the cutout */}
                <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl -z-10 animate-pulse" />

                <img
                  src="/profile-picture.png"
                  alt="Tashin Mahmud Khan"
                  className="w-full h-full object-cover select-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  style={{
                    WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)',
                    maskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)'
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <HackerText text={nameLine1} />
              {nameLine2 && <HackerText text={nameLine2} />}
            </div>
            <span className="block text-white/40 mt-3 text-3xl md:text-5xl font-mono tracking-tight glow-text font-light h-[80px] md:h-[120px]">
              <TypewriterLoop text={subtitle} />
            </span>
          </h1>

          <p className="text-lg text-white/50 max-w-xl leading-relaxed mb-8">
            {bio}
          </p>

          <div className="flex gap-4">
            {resumeUrl ? (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-6 py-3 bg-white text-background font-medium tracking-tight rounded-full hover:scale-105 transition-transform duration-300"
              >
                Download Resume
              </a>
            ) : (
              <a href="#projects" className="px-6 py-3 bg-white text-background font-medium tracking-tight rounded-full hover:scale-105 transition-transform duration-300">
                Execute Portfolio
              </a>
            )}
            <a href="#contact" className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium tracking-tight rounded-full hover:bg-white/10 transition-colors duration-300">
              Initialize Contact
            </a>
          </div>
        </motion.div>

        {/* Right: The Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative"
        >
          {/* Subtle glow behind terminal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
          <HeroTerminal />
        </motion.div>
      </div>
    </section>
  );
};

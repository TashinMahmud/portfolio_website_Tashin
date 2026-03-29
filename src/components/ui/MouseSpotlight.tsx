"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export const MouseSpotlight = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Track mouse coordinates directly
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  // Smooth the mouse coordinates to make the light feel slightly trailing and "heavy"
  const springConfig = { damping: 40, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    // Set initial position
    cursorX.set(window.innerWidth / 2);
    cursorY.set(window.innerHeight / 2);

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  // Construct a reactive radial-gradient utilizing the smoothed X and Y motion values
  const background = useMotionTemplate`radial-gradient(1000px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.04), transparent 30%)`;

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-1000"
      style={{ background }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    />
  );
};

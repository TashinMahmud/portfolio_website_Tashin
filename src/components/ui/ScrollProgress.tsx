"use client";

import { motion, useScroll } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-blue-500 origin-left z-[100] shadow-[0_0_8px_rgba(59,130,246,0.8),0_0_16px_rgba(59,130,246,0.4)]"
    />
  );
};

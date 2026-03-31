"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "> BOOTING SYSTEM...",
  "> LOADING KERNEL MODULES...",
  "> MOUNTING EXPERIENCE DATA...",
  "> INITIALIZING AI INTERFACES...",
  "> CONNECTING TO NETWORK...",
  "> ALL SYSTEMS OPERATIONAL.",
];

export const LoadingScreen = () => {
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("booted")) {
      setVisible(false);
      return;
    }
    sessionStorage.setItem("booted", "true");
    setVisible(true);

    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
        setTimeout(() => setVisible(false), 1000);
      }
    }, 220);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[200] bg-[#020202] flex flex-col items-start justify-center px-8 md:px-24"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 4px)",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <span className="text-xs font-mono text-blue-500 tracking-[0.4em] uppercase">
              TASHIN.SYS — v2026.1
            </span>
          </motion.div>

          {/* Boot lines */}
          <div className="space-y-2 max-w-xl">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className={`font-mono text-sm tracking-wide ${
                  i === lines.length - 1 && i === BOOT_LINES.length - 1
                    ? "text-blue-400"
                    : i === lines.length - 1
                    ? "text-white"
                    : "text-white/30"
                }`}
              >
                {line}
                {i === lines.length - 1 && i < BOOT_LINES.length - 1 && (
                  <span className="inline-block w-2 h-4 bg-white/70 ml-1 animate-pulse align-middle" />
                )}
              </motion.p>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-12 w-64 h-[1px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              initial={{ width: "0%" }}
              animate={{ width: `${(lines.length / BOOT_LINES.length) * 100}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="fade"
          className="fixed inset-0 z-[200] bg-[#020202]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </AnimatePresence>
  );
};

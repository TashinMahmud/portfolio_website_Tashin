"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { name: "// OVERVIEW",   href: "#hero",       sectionId: "hero" },
  { name: "// PORTFOLIO",  href: "#projects",   sectionId: "projects" },
  { name: "// LOADOUT",    href: "#stack",      sectionId: "stack" },
  { name: "// EXPERIENCE", href: "#experience", sectionId: "experience" },
  { name: "// CONTACT",    href: "#contact",    sectionId: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.sectionId);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5" : "bg-transparent"
      )}
    >
      {/* Brand */}
      <Link href="#hero" className="flex items-center gap-3 group">
        <div className="bg-blue-500/10 border border-blue-500/30 p-2 rounded-lg text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:scale-105 transition-transform group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:border-blue-400/50">
          <Terminal size={18} strokeWidth={2} />
        </div>
        <span className="text-sm font-mono font-bold text-white tracking-widest group-hover:text-blue-400 transition-colors">TASHIN.SYS</span>
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-4">
        {links.map((link) => {
          const isActive = activeSection === link.sectionId;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-[11px] lg:text-xs font-mono font-medium transition-all tracking-widest px-3 py-2 rounded border",
                isActive
                  ? "text-blue-400 border-blue-500/30 bg-blue-500/10"
                  : "text-white/50 hover:text-white border-transparent hover:bg-white/5 hover:border-white/10"
              )}
            >
              {link.name}
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile spacer */}
      <div className="w-8 md:hidden" />
    </motion.header>
  );
};

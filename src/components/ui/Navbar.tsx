"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { name: "// OVERVIEW", href: "#hero" },
  { name: "// PORTFOLIO", href: "#projects" },
  { name: "// LOADOUT", href: "#stack" },
  { name: "// EXPERIENCE", href: "#experience" },
  { name: "// CONTACT", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        {links.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className="text-[11px] lg:text-xs font-mono font-medium text-white/50 hover:text-white transition-all tracking-widest px-3 py-2 rounded hover:bg-white/5 hover:border-white/10 border border-transparent"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      
      {/* Mobile nav offset width spacer */}
      <div className="w-8 md:hidden" />
    </motion.header>
  );
};

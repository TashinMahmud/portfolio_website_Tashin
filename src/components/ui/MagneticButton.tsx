"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  magneticStrength?: number;
  href?: string;
}

export const MagneticButton = ({ 
  children, 
  className, 
  magneticStrength = 0.2,
  href,
  ...props 
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring config for the magnetic pull
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    x.set((e.clientX - centerX) * magneticStrength);
    y.set((e.clientY - centerY) * magneticStrength);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const Component = href ? motion.a : motion.button;
  const componentProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : props;

  return (
    <Component
      ref={ref as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-sm font-medium tracking-tight bg-white text-background rounded-full transition-transform duration-300 active:scale-95 group",
        className
      )}
      {...componentProps as any}
    >
      <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
        {children}
      </span>
      {/* Subtle glow / shadow on hover overlay */}
      <div 
        className={cn(
          "absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100"
        )} 
      />
    </Component>
  );
};

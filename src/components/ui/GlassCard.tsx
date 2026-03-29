"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({
  children,
  className,
  hoverEffect = false,
  ...props
}: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "glass-panel rounded-2xl relative overflow-hidden",
        hoverEffect && "hover:bg-[rgba(255,255,255,0.06)] transition-colors duration-500",
        className
      )}
      {...props}
    >
      {/* Subtle top glare effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

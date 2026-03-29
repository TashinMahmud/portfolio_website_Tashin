"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

interface HackerTextProps {
  text: string;
  className?: string;
  speed?: number;
  loopDelay?: number;
}

export const HackerText = ({ text, className, speed = 30, loopDelay = 6000 }: HackerTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  useEffect(() => {
    if (!isInView) return;
    
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;
    
    const triggerAnimation = () => {
      let iteration = 0;
      clearInterval(intervalId);
      
      intervalId = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < Math.floor(iteration)) {
                return text[index]; // Resolve correct letter safely
              }
              if (text[index] === " ") return " "; // preserve spacing visually
              return CHARS[Math.floor(Math.random() * CHARS.length)]; // Scramble
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(intervalId);
          // Set it to loop repeatedly with the designated delay
          timeoutId = setTimeout(triggerAnimation, loopDelay);
        }

        iteration += 1 / 3; // Dictates how many frames pass before a letter resolves
      }, speed);
    };

    triggerAnimation();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isInView, text, speed, loopDelay]);

  return (
    <span ref={ref} className={`relative inline-block ${className || ''}`}>
      {/* Invisible baseline forces a strict bounding box width so the scrambling characters never push adjacent elements */}
      <span className="opacity-0 invisible whitespace-pre">{text}</span>
      {/* The animated scrambling text layered directly on top */}
      <span className="absolute inset-0 whitespace-pre text-left">{displayText}</span>
    </span>
  );
};

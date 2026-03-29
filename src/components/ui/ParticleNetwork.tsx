"use client";

import { useEffect, useRef } from "react";

export const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    // Track mouse coordinates for interactive connection lines
    const mouse = {
      x: -9999,
      y: -9999,
      radius: 180 // Activation radius for mouse connection
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseOut = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", setSize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        // Drawing a small dot
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        
        // Bounce off screen geometric bounds
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Move particle along its drift vector
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      if (!canvas) return;
      particlesArray = [];
      // Dynamic rendering count based on screen area to prevent mobile lag
      const numberOfNodes = (canvas.height * canvas.width) / 14000;
      
      for (let i = 0; i < numberOfNodes; i++) {
        const size = (Math.random() * 1.5) + 0.5;
        const x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        // Extremely slow drift
        const directionX = (Math.random() * 0.4) - 0.2;
        const directionY = (Math.random() * 0.4) - 0.2;
        
        // "Premium Blue" baseline nodes
        const color = "rgba(59, 130, 246, 0.4)"; 

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      
      connect();
    };

    const connect = () => {
      if (!ctx || !canvas) return;
      let opacityValue = 1;
      
      for (let a = 0; a < particlesArray.length; a++) {
        // Node-to-Node connections
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = dx * dx + dy * dy;

          // Connect if close enough
          if (distance < (canvas.width / 15) * (canvas.height / 15)) {
            opacityValue = 1 - (distance / 15000);
            if (opacityValue > 0) {
               ctx.strokeStyle = `rgba(59, 130, 246, ${opacityValue * 0.15})`;
               ctx.lineWidth = 0.5;
               ctx.beginPath();
               ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
               ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
               ctx.stroke();
            }
          }
        }
        
        // Node-to-Mouse connections (Interactive AI Vibe)
        if (mouse.x !== -9999) {
           const dx = particlesArray[a].x - mouse.x;
           const dy = particlesArray[a].y - mouse.y;
           const distance = dx * dx + dy * dy;
           
           if (distance < mouse.radius * mouse.radius) {
              const opacity = 1 - Math.sqrt(distance) / mouse.radius;
              // High intensity tracking beam
              ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.7})`; 
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.stroke();
           }
        }
      }
    };

    // Boot
    setSize();
    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-70" 
      aria-hidden="true"
    />
  );
};

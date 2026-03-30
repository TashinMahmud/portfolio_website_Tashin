"use client";

import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { HackerText } from "@/components/ui/HackerText";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 flex flex-col items-center justify-center text-center w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white mb-4 text-center">
          <HackerText text="Initialize " />
          <span className="text-white/40"><HackerText text="Network" /></span>
        </h2>
        <div className="w-16 h-1 bg-white/20 mb-6 mx-auto" />
        <p className="font-mono text-white/50 mb-16 max-w-lg mx-auto text-xs md:text-sm tracking-widest uppercase">
          &gt; Opening secure communication channels...
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6 w-full max-w-4xl mx-auto">
        {/* Phone */}
        <ContactItem 
          icon={<Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />}
          text="+8801816209396"
          href="tel:+8801816209396"
          delay={0.1}
        />
        
        {/* Email */}
        <ContactItem 
          icon={<Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />}
          text="tashinmahmud.official@gmail.com"
          href="mailto:tashinmahmud.official@gmail.com"
          delay={0.2}
        />
        
        {/* Location */}
        <ContactItem 
          icon={<MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />}
          text="Dhaka, Bangladesh"
          delay={0.3}
        />
        
        {/* GitHub */}
        <ContactItem 
          icon={<Github className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />}
          text="github.com/TashinMahmud"
          href="https://github.com/TashinMahmud"
          delay={0.4}
        />
        
        {/* LinkedIn */}
        <div className="md:col-span-2 flex justify-center mt-2">
          <ContactItem 
            icon={<Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />}
            text="linkedin.com/in/tashin-mahmud-khan"
            href="https://linkedin.com/in/tashin-mahmud-khan"
            delay={0.5}
            className="w-full md:w-auto md:pr-8" 
            containerClassName="w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  text, 
  href, 
  delay,
  className = "",
  containerClassName = ""
}: { 
  icon: React.ReactNode; 
  text: string; 
  href?: string; 
  delay: number;
  className?: string;
  containerClassName?: string;
}) => {
  const content = (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`flex items-center gap-4 md:gap-6 group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-blue-500/5 hover:border-blue-500/30 transition-all duration-300 w-full ${className}`}
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:border-blue-400/50 transition-all duration-300 shrink-0`}>
        {icon}
      </div>
      <span className="text-white/60 font-mono tracking-wide group-hover:text-blue-400 transition-colors text-xs md:text-sm text-left truncate text-ellipsis overflow-hidden break-normal">
        {text}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={href.startsWith('http') ? "_blank" : "_self"} 
        rel={href.startsWith('http') ? "noopener noreferrer" : ""}
        className={`block outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl ${containerClassName || 'w-full'}`}
      >
        {content}
      </a>
    );
  }

  return <div className={containerClassName || 'w-full'}>{content}</div>;
};

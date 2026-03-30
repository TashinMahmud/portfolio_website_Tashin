"use client";

import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 flex flex-col items-center justify-center text-center w-full z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white mb-4">
          Contact Information
        </h2>
        <p className="text-white/60 mb-16 max-w-lg mx-auto text-base md:text-lg">
          Let&apos;s connect and build something amazing together!
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-8 w-full max-w-4xl mx-auto">
        {/* Phone */}
        <ContactItem 
          icon={<Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />}
          text="+8801816209396"
          href="tel:+8801816209396"
          bgGradient="from-indigo-500 to-purple-500"
          delay={0.1}
        />
        
        {/* Email */}
        <ContactItem 
          icon={<Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />}
          text="tashinmahmud.official@gmail.com"
          href="mailto:tashinmahmud.official@gmail.com"
          bgGradient="from-teal-400 to-emerald-500"
          delay={0.2}
        />
        
        {/* Location */}
        <ContactItem 
          icon={<MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />}
          text="Dhaka, Bangladesh"
          bgGradient="from-fuchsia-500 to-pink-500"
          delay={0.3}
        />
        
        {/* GitHub */}
        <ContactItem 
          icon={<Github className="w-5 h-5 md:w-6 md:h-6 text-white" />}
          text="github.com/TashinMahmud"
          href="https://github.com/TashinMahmud"
          bgGradient="from-slate-700 to-slate-900"
          delay={0.4}
        />
        
        {/* LinkedIn */}
        <div className="md:col-span-2 flex justify-center">
          <ContactItem 
            icon={<Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white" />}
            text="linkedin.com/in/tashin-mahmud-khan"
            href="https://linkedin.com/in/tashin-mahmud-khan"
            bgGradient="from-blue-500 to-blue-700"
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
  bgGradient,
  delay,
  className = "",
  containerClassName = ""
}: { 
  icon: React.ReactNode; 
  text: string; 
  href?: string; 
  bgGradient: string;
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
      className={`flex items-center gap-4 md:gap-6 group p-2 rounded-2xl hover:bg-white/5 transition-colors duration-300 w-full ${className}`}
    >
      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${bgGradient} flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300 shrink-0`}>
        {icon}
      </div>
      <span className="text-white/80 group-hover:text-white transition-colors text-sm md:text-lg font-medium text-left truncate">
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
        className={`block outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl ${containerClassName || 'w-full'}`}
      >
        {content}
      </a>
    );
  }

  return <div className={containerClassName || 'w-full'}>{content}</div>;
};

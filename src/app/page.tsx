import { HeroSection } from "@/components/sections/HeroSection";
import { CoverflowProjects } from "@/components/sections/CoverflowProjects";
import { BentoTechStack } from "@/components/sections/BentoTechStack";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";

import { AmbientAurora } from "@/components/ui/AmbientAurora";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";
import { MouseSpotlight } from "@/components/ui/MouseSpotlight";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-white/20 selection:text-white relative">
      <AmbientAurora />
      <ParticleNetwork />
      <MouseSpotlight />
      
      {/* Minimal background noise/grid */}
      <div 
        className="fixed inset-0 opacity-[0.02] pointer-events-none z-0" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Top ambient glow */}
      <div className="fixed top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
      <div className="fixed top-0 inset-x-0 h-[500px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col gap-12 pb-24">
        <HeroSection />
        <CoverflowProjects />
        <Experience />
        <Education />
        <BentoTechStack />
        
        <ContactSection />
      </div>

      {/* Minimal footer */}
      <footer className="relative z-10 py-6 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-white/30 text-xs font-mono mb-4 md:mb-0">
          SYSTEM.READY // 2026 // TASHIN MAHMUD KHAN
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/TashinMahmud" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest">GitHub</a>
          <a href="https://www.linkedin.com/in/tashin-mahmud-khan/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}

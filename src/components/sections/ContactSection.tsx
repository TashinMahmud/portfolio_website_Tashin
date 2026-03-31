"use client";

import { Phone, Mail, MapPin, Github, Linkedin, Send, User } from "lucide-react";
import { motion } from "framer-motion";
import { HackerText } from "@/components/ui/HackerText";
import { useState } from "react";

type ContactConfig = {
  phone?: string;
  email?: string;
  location?: string;
  github?: string;
  linkedin?: string;
};

export const ContactSection = ({ contact }: { contact?: ContactConfig }) => {
  const phone    = contact?.phone    ?? "+8801816209396";
  const email    = contact?.email    ?? "tashinmahmud.official@gmail.com";
  const location = contact?.location ?? "Dhaka, Bangladesh";
  const github   = contact?.github   ?? "https://github.com/TashinMahmud";
  const linkedin = contact?.linkedin ?? "https://linkedin.com/in/tashin-mahmud-khan";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

      <div className="w-full max-w-4xl mx-auto">
        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-6 mb-16">
          <ContactItem icon={<Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />} text={phone} href={`tel:${phone}`} delay={0.1} />
          <ContactItem icon={<Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />} text={email} href={`mailto:${email}`} delay={0.2} />
          <ContactItem icon={<MapPin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />} text={location} delay={0.3} />
          <ContactItem icon={<Github className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />} text={github.replace("https://", "")} href={github} delay={0.4} />
          <div className="md:col-span-2 flex justify-center mt-2">
            <ContactItem icon={<Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />} text={linkedin.replace("https://", "")} href={linkedin} delay={0.5} className="w-full md:w-auto md:pr-8" containerClassName="w-full md:w-auto" />
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-left"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500/40 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-500/40 rounded-br-2xl" />

          <p className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Direct Transmission
          </p>

          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">&gt; MESSAGE DELIVERED ✓</p>
              <p className="text-white/40 text-xs font-mono">I&apos;ll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-2 font-mono flex items-center gap-1.5">
                    <User size={10} /> Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-2 font-mono flex items-center gap-1.5">
                    <Mail size={10} /> Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-2 font-mono">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="> Type your message here..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-xs font-mono border border-red-500/20 bg-red-500/5 rounded-lg px-3 py-2">
                  &gt; TRANSMISSION FAILED. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-300 hover:text-white rounded-lg text-xs font-mono font-bold tracking-widest uppercase transition-all disabled:opacity-50"
              >
                <Send size={12} />
                {status === "sending" ? "> TRANSMITTING..." : "> SEND TRANSMISSION"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const ContactItem = ({
  icon, text, href, delay, className = "", containerClassName = ""
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
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:border-blue-400/50 transition-all duration-300 shrink-0">
        {icon}
      </div>
      <span className="text-white/60 font-mono tracking-wide group-hover:text-blue-400 transition-colors text-xs md:text-sm text-left truncate text-ellipsis overflow-hidden break-normal">
        {text}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel={href.startsWith("http") ? "noopener noreferrer" : ""} className={`block outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl ${containerClassName || "w-full"}`}>
        {content}
      </a>
    );
  }
  return <div className={containerClassName || "w-full"}>{content}</div>;
};

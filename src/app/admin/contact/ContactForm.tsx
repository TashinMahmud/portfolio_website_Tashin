"use client";

import { useState } from "react";
import { updateSiteConfig } from "@/app/admin/actions";
import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";

type ContactConfig = {
  contact_phone?: string;
  contact_email?: string;
  contact_location?: string;
  contact_github?: string;
  contact_linkedin?: string;
};

const FIELDS = [
  { name: "contact_phone",    label: "Phone Number",    icon: Phone,    placeholder: "+8801816209396" },
  { name: "contact_email",    label: "Email Address",   icon: Mail,     placeholder: "you@email.com" },
  { name: "contact_location", label: "Location",        icon: MapPin,   placeholder: "Dhaka, Bangladesh" },
  { name: "contact_github",   label: "GitHub URL",      icon: Github,   placeholder: "https://github.com/username" },
  { name: "contact_linkedin", label: "LinkedIn URL",    icon: Linkedin, placeholder: "https://linkedin.com/in/username" },
] as const;

export function ContactForm({ config }: { config: ContactConfig | null }) {
  const [form, setForm] = useState({
    contact_phone:    config?.contact_phone    ?? "+8801816209396",
    contact_email:    config?.contact_email    ?? "tashinmahmud.official@gmail.com",
    contact_location: config?.contact_location ?? "Dhaka, Bangladesh",
    contact_github:   config?.contact_github   ?? "https://github.com/TashinMahmud",
    contact_linkedin: config?.contact_linkedin ?? "https://linkedin.com/in/tashin-mahmud-khan",
  });
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");
    // Pass only the contact fields — other fields will be ignored by the update
    // but we need to satisfy the type, so we include dummy values for required ones
    const result = await updateSiteConfig({
      name: "", subtitle: "", bio: "", terminal_version: "",
      ...form,
    });
    if (result.error) {
      setErrorMsg(result.error);
      setStatus("error");
    } else {
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {FIELDS.map(({ name, label, icon: Icon, placeholder }) => (
        <div key={name}>
          <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-2 flex items-center gap-2">
            <Icon size={11} /> {label}
          </label>
          <input
            type="text"
            name={name}
            value={form[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all font-mono"
          />
        </div>
      ))}

      {status === "error" && (
        <p className="text-red-400 text-xs border border-red-500/20 bg-red-500/5 rounded-lg px-3 py-2">&gt; ERROR: {errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "saving"}
        className="px-6 py-2.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-300 hover:text-white rounded-lg text-xs tracking-widest uppercase transition-all disabled:opacity-50"
      >
        {status === "saving" ? "> SAVING..." : status === "saved" ? "> SAVED ✓" : "> DEPLOY CHANGES"}
      </button>
    </form>
  );
}

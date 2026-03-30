"use client";

import { useState } from "react";
import { updateSiteConfig } from "@/app/admin/actions";

type Config = {
  name: string;
  subtitle: string;
  bio: string;
  terminal_version: string;
};

export function GeneralForm({ config }: { config: Config | null }) {
  const [form, setForm] = useState<Config>({
    name: config?.name ?? "Tashin Mahmud Khan",
    subtitle: config?.subtitle ?? "AI Engineer & Automation Developer",
    bio: config?.bio ?? "Software Developer and AI Engineer specializing in autonomous agents and intelligent automation.",
    terminal_version: config?.terminal_version ?? "v1.0.0",
  });
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");
    const result = await updateSiteConfig(form);
    if (result.error) {
      setErrorMsg(result.error);
      setStatus("error");
    } else {
      setStatus("saved");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Field label="Name" name="name" value={form.name} onChange={handleChange} />
      <Field label="Subtitle / Role" name="subtitle" value={form.subtitle} onChange={handleChange} />
      <Field label="Terminal Version String (e.g. v1.0.0)" name="terminal_version" value={form.terminal_version} onChange={handleChange} />

      <div>
        <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-2">Bio Paragraph</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all resize-none"
        />
      </div>

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

function Field({ label, name, value, onChange }: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-2">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
      />
    </div>
  );
}

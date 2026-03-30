"use client";

import { useState } from "react";
import { updateSiteConfig } from "@/app/admin/actions";
import { createClient } from "@/lib/supabase/client";
import { Upload, FileText, X } from "lucide-react";

type Config = {
  name: string;
  subtitle: string;
  bio: string;
  terminal_version: string;
  resume_url?: string;
};

export function GeneralForm({ config }: { config: Config | null }) {
  const [form, setForm] = useState<Config>({
    name: config?.name ?? "Tashin Mahmud Khan",
    subtitle: config?.subtitle ?? "AI Engineer & Automation Developer",
    bio: config?.bio ?? "Software Developer and AI Engineer specializing in autonomous agents and intelligent automation.",
    terminal_version: config?.terminal_version ?? "v1.0.0",
    resume_url: config?.resume_url ?? "",
  });
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.name.endsWith(".pdf")) {
      setUploadError("Only PDF files are allowed.");
      return;
    }

    setUploadError("");
    setUploading(true);

    const supabase = createClient();
    const fileName = `resume_${Date.now()}.pdf`;

    const { error } = await supabase.storage
      .from("resume")
      .upload(fileName, file, { upsert: true, contentType: "application/pdf" });

    if (error) {
      setUploadError(error.message);
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage.from("resume").getPublicUrl(fileName);
    setForm((prev) => ({ ...prev, resume_url: publicUrl }));
    setUploading(false);
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

      {/* Resume Upload */}
      <div>
        <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-2">Resume (PDF)</label>
        <div className="space-y-3">
          {/* Current file indicator */}
          {form.resume_url && (
            <div className="flex items-center gap-3 px-4 py-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
              <FileText size={14} className="text-blue-400 shrink-0" />
              <a href={form.resume_url} target="_blank" rel="noopener noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 font-mono truncate flex-1 underline underline-offset-2">
                {form.resume_url.split("/").pop()}
              </a>
              <button type="button" onClick={() => setForm((p) => ({ ...p, resume_url: "" }))}
                className="text-white/30 hover:text-red-400 transition-colors">
                <X size={13} />
              </button>
            </div>
          )}

          {/* Upload button */}
          <label className={`flex items-center gap-3 px-4 py-3 border border-dashed rounded-lg cursor-pointer transition-all ${
            uploading
              ? "border-blue-500/40 bg-blue-500/5 text-blue-300"
              : "border-white/10 hover:border-white/20 hover:bg-white/5 text-white/40 hover:text-white/70"
          }`}>
            <Upload size={14} />
            <span className="text-xs tracking-widest uppercase font-mono">
              {uploading ? "Uploading..." : form.resume_url ? "Replace PDF" : "Upload PDF"}
            </span>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              disabled={uploading}
              className="hidden"
            />
          </label>

          {uploadError && (
            <p className="text-red-400 text-xs border border-red-500/20 bg-red-500/5 rounded-lg px-3 py-2">
              &gt; ERROR: {uploadError}
            </p>
          )}
        </div>
      </div>

      {status === "error" && (
        <p className="text-red-400 text-xs border border-red-500/20 bg-red-500/5 rounded-lg px-3 py-2">&gt; ERROR: {errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "saving" || uploading}
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


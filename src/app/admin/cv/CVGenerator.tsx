"use client";

import { useEffect, useState } from "react";

type CVData = {
  name: string;
  title: string;
  bio: string;
  phone: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  experience: { role: string; company: string; period: string; points: string[] }[];
  projects: { title: string; description: string; tech: string[]; type?: string; github?: string; demo?: string }[];
  skills: { name: string; category: string }[];
};

export function CVGenerator({ data }: { data: CVData }) {
  const [status, setStatus] = useState<"idle" | "generating" | "ready" | "error">("idle");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const skillsByCategory: Record<string, string[]> = {};
  data.skills.forEach(({ name, category }) => {
    if (!skillsByCategory[category]) skillsByCategory[category] = [];
    skillsByCategory[category].push(name);
  });

  const filename = `${data.name.replace(/\s+/g, "_")}_CV.pdf`;

  const handleGenerate = async () => {
    setStatus("generating");
    try {
      // Dynamically import react-pdf only in browser
      const { pdf } = await import("@react-pdf/renderer");
      const { CVDocument } = await import("@/lib/cv/CVDocument");
      const React = (await import("react")).default;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const element = React.createElement(CVDocument, { data }) as any;
      const blob = await pdf(element).toBlob();
      const url  = URL.createObjectURL(blob);
      setPdfUrl(url);
      setStatus("ready");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  // Auto-trigger download when URL is ready
  useEffect(() => {
    if (!pdfUrl) return;
    const a = document.createElement("a");
    a.href    = pdfUrl;
    a.download = filename;
    a.click();
    // Keep URL alive 30s then revoke
    const t = setTimeout(() => URL.revokeObjectURL(pdfUrl), 30000);
    return () => clearTimeout(t);
  }, [pdfUrl, filename]);

  return (
    <div className="p-8 max-w-3xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white tracking-widest uppercase mb-1">Generate CV</h1>
        <p className="text-white/30 text-xs tracking-widest">&gt; ATS-optimised PDF built from your live portfolio data</p>
        <div className="w-12 h-px bg-white/10 mt-4" />
      </div>

      {/* Data checklist */}
      <div className="grid grid-cols-2 gap-3 mb-10">
        {[
          { label: "Name & Contact",        val: data.name || "—",                                                                    ok: !!data.name },
          { label: "Professional Summary",  val: data.bio ? `${data.bio.slice(0, 50)}…` : "Not set",                                ok: !!data.bio },
          { label: "Experience",            val: `${data.experience.length} ${data.experience.length === 1 ? "entry" : "entries"}`, ok: data.experience.length > 0 },
          { label: "Education",             val: "B.Sc. CSE — NSU, 2025",                                                           ok: true },
          { label: "Skills",                val: `${data.skills.length} skills · ${Object.keys(skillsByCategory).length} categories`, ok: data.skills.length > 0 },
          { label: "Projects",              val: `${data.projects.length} ${data.projects.length === 1 ? "project" : "projects"}`,  ok: data.projects.length > 0 },
        ].map(({ label, val, ok }) => (
          <div key={label} className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
            <span className={`mt-0.5 text-xs font-mono ${ok ? "text-blue-400" : "text-red-400/60"}`}>{ok ? "✓" : "✗"}</span>
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-widest">{label}</p>
              <p className="text-xs text-white/70 font-mono mt-0.5 truncate">{val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ATS info */}
      <div className="mb-8 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
        <p className="text-[10px] text-blue-400 uppercase tracking-widest mb-2 font-mono">&gt; ATS COMPLIANCE</p>
        <p className="text-xs text-white/50 leading-5">
          Single column layout &nbsp;·&nbsp; Fully selectable text &nbsp;·&nbsp;
          Standard section headings &nbsp;·&nbsp; No images or graphics &nbsp;·&nbsp; Helvetica font
        </p>
      </div>

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={status === "generating"}
        className="flex items-center gap-3 px-6 py-3.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-300 hover:text-white rounded-xl text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "generating" ? (
          <><span className="animate-pulse">⚙</span>&nbsp;&gt; GENERATING PDF...</>
        ) : status === "ready" ? (
          <>&gt; DOWNLOAD AGAIN</>
        ) : (
          <>&gt; GENERATE &amp; DOWNLOAD CV</>
        )}
      </button>

      {status === "error" && (
        <p className="mt-4 text-red-400 text-xs font-mono border border-red-500/20 bg-red-500/5 rounded-lg px-3 py-2">
          &gt; ERROR: Failed to generate PDF. Check console for details.
        </p>
      )}

      {status === "ready" && (
        <p className="mt-3 text-blue-400/60 text-[10px] font-mono tracking-widest">
          &gt; {filename} — download started
        </p>
      )}

      <p className="mt-6 text-[10px] text-white/20 font-mono tracking-widest">
        &gt; OUTPUT: {filename}
      </p>
    </div>
  );
}

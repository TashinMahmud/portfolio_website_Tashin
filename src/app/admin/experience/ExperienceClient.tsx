"use client";

import { useState } from "react";
import { upsertExperience, deleteExperience } from "@/app/admin/actions";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";

type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  points: string[];
};

const emptyExp: Omit<Experience, "id"> = { role: "", company: "", period: "", points: [] };

export function ExperienceClient({ experience: initial }: { experience: Experience[] }) {
  const [items, setItems] = useState(initial);
  const [editing, setEditing] = useState<Partial<Experience> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [pointsInput, setPointsInput] = useState("");

  const openNew = () => { setEditing({ ...emptyExp }); setIsNew(true); setPointsInput(""); };
  const openEdit = (e: Experience) => { setEditing({ ...e }); setIsNew(false); setPointsInput(e.points.join("\n")); };
  const closeEdit = () => { setEditing(null); setIsNew(false); };

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    const points = pointsInput.split("\n").map((p) => p.trim()).filter(Boolean);
    const result = await upsertExperience({ ...editing, points } as Parameters<typeof upsertExperience>[0]);
    setSaving(false);
    if (!result.error) window.location.reload();
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this experience entry?")) return;
    await deleteExperience(id);
    setItems((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        onClick={openNew}
        className="mb-6 flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-xs uppercase tracking-widest hover:bg-blue-500/20 transition-all"
      >
        <Plus size={13} /> Add Experience
      </button>

      {/* Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white">{isNew ? "> New Entry" : "> Edit Entry"}</h2>
              <button onClick={closeEdit}><X size={16} className="text-white/40 hover:text-white" /></button>
            </div>

            <div className="space-y-4">
              {([["role", "Role / Position"], ["company", "Company"], ["period", "Period (e.g. Feb 2026 - Present)"]] as [keyof Experience, string][]).map(([key, label]) => (
                <div key={key}>
                  <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">{label}</label>
                  <input
                    type="text"
                    value={(editing[key] as string) ?? ""}
                    onChange={(e) => setEditing((prev) => ({ ...prev, [key]: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">Bullet Points (one per line)</label>
                <textarea
                  rows={5}
                  value={pointsInput}
                  onChange={(e) => setPointsInput(e.target.value)}
                  placeholder="AI agent development and automation.&#10;Building intelligent workflow systems."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 border border-blue-500/40 text-blue-300 rounded-lg text-xs uppercase tracking-widest hover:bg-blue-500/30 transition-all disabled:opacity-50"
              >
                <Check size={13} /> {saving ? "Saving..." : "Save"}
              </button>
              <button onClick={closeEdit} className="px-5 py-2.5 bg-white/5 border border-white/10 text-white/50 rounded-lg text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      <div className="space-y-4">
        {items.map((exp) => (
          <div key={exp.id} className="bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 hover:border-white/10 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-white">{exp.role}</p>
                <p className="text-xs text-white/50 mt-0.5">{exp.company}</p>
                <span className="text-[10px] font-mono text-white/30 mt-1 block">{exp.period}</span>
                <ul className="mt-3 space-y-1">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="text-xs text-white/40 flex gap-2">
                      <span className="text-blue-500/50">&gt;&gt;</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2 shrink-0">
                <button onClick={() => openEdit(exp)} className="p-2 rounded-lg text-white/40 hover:text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all">
                  <Pencil size={13} />
                </button>
                <button onClick={() => handleDelete(exp.id)} className="p-2 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

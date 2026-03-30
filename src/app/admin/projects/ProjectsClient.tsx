"use client";

import { useState } from "react";
import { upsertProject, deleteProject } from "@/app/admin/actions";
import { Plus, Pencil, Trash2, X, Check } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  type: string;
  impact_metric: string;
};

const emptyProject: Omit<Project, "id"> = {
  title: "", description: "", tech: [], github: "", demo: "", type: "", impact_metric: "",
};

export function ProjectsClient({ projects: initial }: { projects: Project[] }) {
  const [projects, setProjects] = useState(initial);
  const [editing, setEditing] = useState<Partial<Project> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [techInput, setTechInput] = useState("");

  const openNew = () => { setEditing({ ...emptyProject }); setIsNew(true); setTechInput(""); };
  const openEdit = (p: Project) => { setEditing({ ...p }); setIsNew(false); setTechInput(p.tech.join(", ")); };
  const closeEdit = () => { setEditing(null); setIsNew(false); };

  const handleSave = async () => {
    if (!editing) return;
    setSaving(true);
    const tech = techInput.split(",").map((t) => t.trim()).filter(Boolean);
    const result = await upsertProject({ ...editing, tech } as Parameters<typeof upsertProject>[0]);
    setSaving(false);
    if (!result.error) {
      // Refresh from server — simple page reload
      window.location.reload();
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this project?")) return;
    await deleteProject(id);
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      {/* Add button */}
      <button
        onClick={openNew}
        className="mb-6 flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-xs uppercase tracking-widest hover:bg-blue-500/20 transition-all"
      >
        <Plus size={13} /> Add New Project
      </button>

      {/* Edit/New Modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-white">{isNew ? "> New Project" : "> Edit Project"}</h2>
              <button onClick={closeEdit}><X size={16} className="text-white/40 hover:text-white" /></button>
            </div>

            <div className="space-y-4">
              {([
                ["title", "Title"],
                ["type", "Type (e.g. Backend Integration)"],
                ["impact_metric", "Impact Metric"],
                ["github", "GitHub URL"],
                ["demo", "Demo URL"],
              ] as [keyof Project, string][]).map(([key, label]) => (
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
                <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">Description</label>
                <textarea
                  rows={3}
                  value={editing.description ?? ""}
                  onChange={(e) => setEditing((prev) => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                />
              </div>

              <div>
                <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-1">Tech (comma-separated)</label>
                <input
                  type="text"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  placeholder="Python, FastAPI, OpenAI"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-all"
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

      {/* Projects Table */}
      <div className="space-y-3">
        {projects.map((p) => (
          <div key={p.id} className="flex items-center justify-between gap-4 bg-white/[0.02] border border-white/5 rounded-xl px-5 py-4 hover:border-white/10 transition-all">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{p.title}</p>
              <p className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">{p.type}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => openEdit(p)} className="p-2 rounded-lg text-white/40 hover:text-blue-400 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/20 transition-all">
                <Pencil size={13} />
              </button>
              <button onClick={() => handleDelete(p.id)} className="p-2 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/20 transition-all">
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

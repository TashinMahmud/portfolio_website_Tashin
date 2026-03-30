"use client";

import { useState, useTransition } from "react";
import { updateSkillVisibility, deleteSkill } from "@/app/admin/actions";
import { Trash2, Eye, EyeOff } from "lucide-react";

type Skill = {
  id: number;
  name: string;
  category: string;
  is_visible: boolean;
};

const CATEGORIES = ["Language", "Frontend", "Backend", "AI/ML", "Database", "DevOps", "Automation", "Tools"];

export function SkillsClient({ skills: initial }: { skills: Skill[] }) {
  const [skills, setSkills] = useState(initial);
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...CATEGORIES];
  const filtered = filter === "All" ? skills : skills.filter((s) => s.category === filter);

  const toggleVisibility = (skill: Skill) => {
    const newVal = !skill.is_visible;
    setSkills((prev) => prev.map((s) => s.id === skill.id ? { ...s, is_visible: newVal } : s));
    startTransition(() => { void updateSkillVisibility(skill.id, newVal); });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this skill?")) return;
    await deleteSkill(id);
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  const grouped = filtered.reduce<Record<string, Skill[]>>((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {});

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-widest border transition-all ${
              filter === c
                ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                : "border-white/10 text-white/40 hover:text-white/70 hover:border-white/20"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {isPending && <p className="text-xs text-white/30 mb-4 font-mono">&gt; Syncing...</p>}

      {/* Grouped skills */}
      <div className="space-y-8">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-[10px] text-white/30 uppercase tracking-widest mb-3">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {items.map((s) => (
                <div
                  key={s.id}
                  className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg border transition-all ${
                    s.is_visible
                      ? "bg-white/[0.03] border-white/10"
                      : "bg-transparent border-white/5 opacity-50"
                  }`}
                >
                  <span className={`text-sm font-medium ${s.is_visible ? "text-white" : "text-white/40 line-through"}`}>
                    {s.name}
                  </span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => toggleVisibility(s)}
                      title={s.is_visible ? "Hide" : "Show"}
                      className={`p-1.5 rounded border transition-all ${
                        s.is_visible
                          ? "text-blue-400 border-blue-500/20 hover:bg-blue-500/10"
                          : "text-white/30 border-white/10 hover:text-white/60"
                      }`}
                    >
                      {s.is_visible ? <Eye size={12} /> : <EyeOff size={12} />}
                    </button>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="p-1.5 rounded border border-transparent text-white/20 hover:text-red-400 hover:border-red-500/20 hover:bg-red-500/10 transition-all"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { createClient } from "@/lib/supabase/server";
import { SkillsClient } from "./SkillsClient";

export default async function SkillsPage() {
  const supabase = await createClient();
  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("category", { ascending: true });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white tracking-widest uppercase mb-1">Tech Stack</h1>
        <p className="text-white/30 text-xs tracking-widest">&gt; Toggle visibility and manage your skills loadout</p>
        <div className="w-12 h-px bg-white/10 mt-4" />
      </div>
      <SkillsClient skills={skills ?? []} />
    </div>
  );
}

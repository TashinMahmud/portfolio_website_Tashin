import { createClient } from "@/lib/supabase/server";
import { ExperienceClient } from "./ExperienceClient";

export default async function ExperiencePage() {
  const supabase = await createClient();
  const { data: experience } = await supabase
    .from("experience")
    .select("*")
    .order("id", { ascending: false });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white tracking-widest uppercase mb-1">Experience</h1>
        <p className="text-white/30 text-xs tracking-widest">&gt; Manage your professional engagement history</p>
        <div className="w-12 h-px bg-white/10 mt-4" />
      </div>
      <ExperienceClient experience={experience ?? []} />
    </div>
  );
}

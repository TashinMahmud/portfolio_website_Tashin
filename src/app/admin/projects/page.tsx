import { createClient } from "@/lib/supabase/server";
import { ProjectsClient } from "./ProjectsClient";

export default async function ProjectsPage() {
  const supabase = await createClient();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: true });

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white tracking-widest uppercase mb-1">Projects</h1>
        <p className="text-white/30 text-xs tracking-widest">&gt; Full CRUD for portfolio projects</p>
        <div className="w-12 h-px bg-white/10 mt-4" />
      </div>
      <ProjectsClient projects={projects ?? []} />
    </div>
  );
}

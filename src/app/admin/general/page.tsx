import { createClient } from "@/lib/supabase/server";
import { GeneralForm } from "./GeneralForm";

export default async function GeneralPage() {
  const supabase = await createClient();
  const { data: config } = await supabase
    .from("site_config")
    .select("*")
    .eq("id", 1)
    .single();

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white tracking-widest uppercase mb-1">General Info</h1>
        <p className="text-white/30 text-xs tracking-widest">&gt; Edit your bio, name, and terminal configuration</p>
        <div className="w-12 h-px bg-white/10 mt-4" />
      </div>
      <GeneralForm config={config} />
    </div>
  );
}

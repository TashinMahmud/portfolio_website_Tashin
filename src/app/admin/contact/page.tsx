import { createClient } from "@/lib/supabase/server";
import { ContactForm } from "./ContactForm";

export default async function ContactPage() {
  const supabase = await createClient();
  const { data: config } = await supabase
    .from("site_config")
    .select("contact_phone, contact_email, contact_location, contact_github, contact_linkedin")
    .eq("id", 1)
    .single();

  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white tracking-widest uppercase mb-1">Contact</h1>
        <p className="text-white/30 text-xs tracking-widest">&gt; Edit your public contact information</p>
        <div className="w-12 h-px bg-white/10 mt-4" />
      </div>
      <ContactForm config={config} />
    </div>
  );
}

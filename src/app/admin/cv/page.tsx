import { createClient } from "@/lib/supabase/server";
import { CVGenerator } from "./CVGenerator";

export default async function CVPage() {
  const supabase = await createClient();

  const [
    { data: config },
    { data: experience },
    { data: skills },
    { data: projects },
  ] = await Promise.all([
    supabase.from("site_config").select("*").eq("id", 1).single(),
    supabase.from("experience").select("*").order("id", { ascending: true }),
    supabase.from("skills").select("*").eq("is_visible", true).order("category"),
    supabase.from("projects").select("*").order("id", { ascending: true }),
  ]);

  const data = {
    name:       config?.name        ?? "Tashin Mahmud Khan",
    title:      config?.subtitle    ?? "AI Engineer & Automation Developer",
    bio:        config?.bio         ?? "",
    phone:      config?.contact_phone    ?? "+8801816209396",
    email:      config?.contact_email    ?? "tashinmahmud.official@gmail.com",
    location:   config?.contact_location ?? "Dhaka, Bangladesh",
    github:     config?.contact_github   ?? "https://github.com/TashinMahmud",
    linkedin:   config?.contact_linkedin ?? "https://linkedin.com/in/tashin-mahmud-khan",
    experience: (experience ?? []).map((e) => ({
      role:    e.role,
      company: e.company,
      period:  e.period,
      points:  Array.isArray(e.points) ? e.points : [],
    })),
    skills: (skills ?? []).map((s) => ({ name: s.name, category: s.category })),
    projects: (projects ?? []).map((p) => ({
      title:       p.title,
      description: p.description,
      tech:        Array.isArray(p.tech) ? p.tech : [],
      type:        p.type,
      github:      p.github,
      demo:        p.demo,
    })),
  };

  return <CVGenerator data={data} />;
}

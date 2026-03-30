"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

// ─── SITE CONFIG ────────────────────────────────────────────────────────────

export async function updateSiteConfig(data: {
  name: string;
  subtitle: string;
  bio: string;
  terminal_version: string;
  resume_url?: string;
  contact_phone?: string;
  contact_email?: string;
  contact_location?: string;
  contact_github?: string;
  contact_linkedin?: string;
}) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("site_config")
    .update(data)
    .eq("id", 1);
  if (error) return { error: error.message };
  revalidatePath("/");
  return { success: true };
}

// ─── PROJECTS ───────────────────────────────────────────────────────────────

export async function upsertProject(data: {
  id?: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  type: string;
  impact_metric: string;
}) {
  const supabase = await createClient();
  const { error } = data.id
    ? await supabase.from("projects").update(data).eq("id", data.id)
    : await supabase.from("projects").insert(data);
  if (error) return { error: error.message };
  revalidatePath("/");
  return { success: true };
}

export async function deleteProject(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/");
  return { success: true };
}

// ─── SKILLS ─────────────────────────────────────────────────────────────────

export async function updateSkillVisibility(id: number, is_visible: boolean) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("skills")
    .update({ is_visible })
    .eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/");
  return { success: true };
}

export async function upsertSkill(data: {
  id?: number;
  name: string;
  category: string;
  is_visible: boolean;
}) {
  const supabase = await createClient();
  const { error } = data.id
    ? await supabase.from("skills").update(data).eq("id", data.id)
    : await supabase.from("skills").insert(data);
  if (error) return { error: error.message };
  revalidatePath("/");
  return { success: true };
}

export async function deleteSkill(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("skills").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/");
  return { success: true };
}

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export async function upsertExperience(data: {
  id?: number;
  role: string;
  company: string;
  period: string;
  points: string[];
}) {
  const supabase = await createClient();
  const { error } = data.id
    ? await supabase.from("experience").update(data).eq("id", data.id)
    : await supabase.from("experience").insert(data);
  if (error) return { error: error.message };
  revalidatePath("/");
  return { success: true };
}

export async function deleteExperience(id: number) {
  const supabase = await createClient();
  const { error } = await supabase.from("experience").delete().eq("id", id);
  if (error) return { error: error.message };
  revalidatePath("/");
  return { success: true };
}

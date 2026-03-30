"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Terminal, FolderOpen, Cpu, Briefcase, LogOut, LayoutDashboard, Phone } from "lucide-react";

const navItems = [
  { href: "/admin/general",    label: "General Info",  icon: LayoutDashboard },
  { href: "/admin/projects",   label: "Projects",      icon: FolderOpen },
  { href: "/admin/skills",     label: "Tech Stack",    icon: Cpu },
  { href: "/admin/experience", label: "Experience",    icon: Briefcase },
  { href: "/admin/contact",    label: "Contact",       icon: Phone },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  };

  // Don't render sidebar on login page
  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex font-mono">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 border-r border-white/5 flex flex-col h-screen sticky top-0">
        {/* Brand */}
        <div className="px-6 py-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500/10 border border-blue-500/30 p-2 rounded-lg text-blue-400">
              <Terminal size={16} />
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest text-white">ADMIN.SYS</div>
              <div className="text-[10px] text-white/30 tracking-widest">GLOBAL ENGINE</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs tracking-widest uppercase transition-all duration-200 ${
                  isActive
                    ? "bg-blue-500/10 border border-blue-500/30 text-blue-400"
                    : "text-white/40 hover:text-white/80 hover:bg-white/5 border border-transparent"
                }`}
              >
                <Icon size={14} />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-3 py-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs tracking-widest uppercase text-red-400/60 hover:text-red-400 hover:bg-red-500/5 border border-transparent hover:border-red-500/20 transition-all duration-200"
          >
            <LogOut size={14} />
            Sign Out
          </button>
          <Link
            href="/"
            target="_blank"
            className="mt-1 w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs tracking-widest uppercase text-white/30 hover:text-white/60 hover:bg-white/5 border border-transparent transition-all duration-200"
          >
            &gt; View Live Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Terminal, Lock, Mail } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/admin");
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 font-mono">
      {/* Background noise */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)] mb-6">
            <Terminal size={26} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-widest uppercase mb-1">ADMIN.SYS</h1>
          <p className="text-white/30 text-xs tracking-widest">SECURE ACCESS REQUIRED</p>
        </div>

        {/* Login Card */}
        <form onSubmit={handleLogin}
          className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          <div className="space-y-6">

            {/* Email */}
            <div>
              <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                Identifier
              </label>
              <div className="relative">
                <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  placeholder="admin@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-[10px] text-white/40 uppercase tracking-widest block mb-2">
                Access Key
              </label>
              <div className="relative">
                <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-xs border border-red-500/20 bg-red-500/5 rounded-lg px-3 py-2">
                &gt; ERROR: {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 hover:border-blue-400/60 text-blue-300 hover:text-white rounded-lg text-sm tracking-widest uppercase transition-all duration-200 disabled:opacity-50"
            >
              {loading ? "> AUTHENTICATING..." : "> AUTHENTICATE"}
            </button>
          </div>
        </form>

        <p className="text-center text-white/20 text-[10px] tracking-widest mt-6 uppercase">
          Unauthorized access is prohibited
        </p>
      </div>
    </div>
  );
}

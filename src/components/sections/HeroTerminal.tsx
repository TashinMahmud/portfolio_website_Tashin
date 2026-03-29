"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const HeroTerminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "",
      output: (
        <span className="text-white/70">
          FastAPI Connected [v1.0.0] <br />
          Type <span className="text-accent">&apos;help&apos;</span> to see available commands.
        </span>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of terminal upon execution
  useEffect(() => {
    if (history.length > 1) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [history]);

  // Focus terminal input when clicking anywhere on the terminal
  const focusInput = () => inputRef.current?.focus();

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: React.ReactNode;

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="text-white/60 space-y-1">
            <p><span className="text-accent">about</span>    - bio and background info</p>
            <p><span className="text-accent">projects</span> - execution portfolio metrics</p>
            <p><span className="text-accent">stack</span>    - language & tool proficiencies</p>
            <p><span className="text-accent">contact</span>  - get my connections</p>
            <p><span className="text-accent">clear</span>    - wipe terminal</p>
          </div>
        );
        break;
      case "about":
        output = (
          <p className="text-white/70 leading-relaxed">
            I am a highly technical AI Engineer and Automation Specialist. <br />
            I build fast, scalable system integrations with FastAPI, TypeScript, and n8n.<br />
            Obsessed with workflow optimization, deterministic deployments, and robust ML integrations.
          </p>
        );
        break;
      case "projects":
        output = (
          <p className="text-white/70">
            Fetching project metrics... [OK] <br />
            Check the <span className="text-primary font-semibold">Bento Grid</span> below for live project impact pills and architectures.
          </p>
        );
        break;
      case "stack":
        output = (
          <p className="text-white/70">
            Kernel modules loaded: <br />
            [+] Python / FastAPI / PyTorch<br />
            [+] TypeScript / Next.js / Node.js<br />
            [+] n8n / OpenAI / Docker / PostgreSQL
          </p>
        );
        break;
      case "contact":
        output = (
          <p className="text-white/70">
            Email: <a href="mailto:tashinmahmud.official@gmail.com" className="text-accent hover:underline">tashinmahmud.official@gmail.com</a><br />
            GitHub: <a href="https://github.com/TashinMahmud" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">github.com/TashinMahmud</a><br />
            LinkedIn: <a href="https://www.linkedin.com/in/tashin-mahmud-khan/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">linkedin.com/in/tashin-mahmud-khan</a>
          </p>
        );
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        output = "";
        break;
      default:
        output = (
          <span className="text-red-400">
            command not found: {cmd}. Type <span className="text-accent">&apos;help&apos;</span> for a list of commands.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <GlassCard 
      className="w-full max-w-2xl mx-auto mt-12 bg-background/50 h-[320px] flex flex-col font-mono text-sm border-white/5 shadow-2xl"
      onClick={focusInput}
    >
      {/* Terminal Header */}
      <div className="flex items-center space-x-2 px-4 py-3 bg-white/[0.02] border-b border-white/[0.05]">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-blue-500/80" />
        <span className="ml-4 text-xs text-white/40">guest@tashin-ai-box:~</span>
      </div>

      {/* Terminal Body */}
      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
        <AnimatePresence initial={false}>
          {history.map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-3"
            >
              {entry.command && (
                <div className="flex items-center text-white/50 mb-1">
                  <span className="text-accent mr-2">❯</span>
                  <span>{entry.command}</span>
                </div>
              )}
              <div className="ml-4">{entry.output}</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Input Line */}
        <div className="flex items-center text-white/90">
          <span className="text-accent mr-2 animate-pulse">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 placeholder-white/20"
            placeholder="awaiting input..."
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </GlassCard>
  );
};

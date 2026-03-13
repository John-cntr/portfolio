import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({ isDark, setIsDark }) {
  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label="Toggle dark mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

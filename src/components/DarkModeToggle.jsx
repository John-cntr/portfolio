import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle({ isDark, setIsDark }) {
  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      aria-label="Toggle dark mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-white text-ink transition hover:-translate-y-0.5 hover:shadow-toon"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

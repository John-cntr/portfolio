import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ sections, isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-fredoka text-lg font-extrabold tracking-tight text-ink">
          Johnson Kaparthi
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm font-semibold text-slate-700 transition hover:text-ink"
            >
              {section.label}
            </a>
          ))}
          <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <DarkModeToggle isDark={isDark} setIsDark={setIsDark} />
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-slate-700 dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t-2 border-ink bg-white px-6 py-5 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-semibold text-slate-700 transition hover:text-ink"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

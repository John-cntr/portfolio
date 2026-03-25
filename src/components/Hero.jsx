import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";

const BADGES = ["India", "Open to Internships", "Open Source Builder"];

export default function Hero() {
  return (
    <section id="home" className="section-wrapper pt-12 md:pt-16">
      <div className="hero-stage mx-auto max-w-5xl">
        <motion.div
          className="hero-side-greeting hidden lg:block"
          style={{ left: "-1.2rem", top: "2.2rem", transform: "perspective(1000px) rotateY(30deg) rotateX(8deg)" }}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
          transition={{ opacity: { duration: 0.45 }, x: { duration: 0.45 }, y: { duration: 3.2, repeat: Infinity } }}
        >
          Hello there
        </motion.div>

        <motion.div
          className="hero-side-greeting hidden lg:block"
          style={{ right: "-1.2rem", top: "2.2rem", transform: "perspective(1000px) rotateY(-30deg) rotateX(8deg)" }}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
          transition={{ opacity: { duration: 0.45, delay: 0.05 }, x: { duration: 0.45, delay: 0.05 }, y: { duration: 3.2, repeat: Infinity, delay: 0.35 } }}
        >
          Welcome
        </motion.div>

        <motion.div
          className="hero-side-card hidden lg:block"
          style={{ left: "-2.6rem", top: "9rem", transform: "perspective(1200px) rotateY(40deg) rotateX(10deg) rotateZ(-2deg)" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.68, x: 0, y: [0, -6, 0] }}
          transition={{ opacity: { duration: 0.5 }, x: { duration: 0.5 }, y: { duration: 4.5, repeat: Infinity } }}
        >
          <p className="hero-side-card-title">Core Focus</p>
          <p className="hero-side-card-text">AI Systems & Practical ML</p>
        </motion.div>

        <motion.div
          className="hero-side-card hidden lg:block"
          style={{ right: "-2.6rem", top: "9.6rem", transform: "perspective(1200px) rotateY(-40deg) rotateX(10deg) rotateZ(2deg)" }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.68, x: 0, y: [0, -6, 0] }}
          transition={{ opacity: { duration: 0.5, delay: 0.06 }, x: { duration: 0.5, delay: 0.06 }, y: { duration: 4.5, repeat: Infinity, delay: 0.45 } }}
        >
          <p className="hero-side-card-title">Approach</p>
          <p className="hero-side-card-text">Clean code + user-first build</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-main text-center"
        >
          <p className="inline-flex items-center rounded-full border border-slate-900/20 bg-slate-900/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 dark:border-white/15 dark:bg-white/10 dark:text-slate-100">
            AI / ML Engineer
          </p>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl lg:text-7xl">
            Johnson Kaparthi
          </h1>

          <p className="mt-4 text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl">
            AI / ML Engineer
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Building intelligent AI systems, machine learning tools, and
            real-world automation projects.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            I focus on practical products that combine model intelligence,
            clean engineering, and user-friendly interfaces for real impact.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              View Projects <ArrowDownRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-slate-200 dark:hover:text-slate-100"
            >
              Download Resume <Download size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

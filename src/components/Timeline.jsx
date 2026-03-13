import { motion } from "framer-motion";

const timeline = [
  { year: "2024", title: "Started Learning AI", text: "Built fundamentals in ML, Python, and data science workflows." },
  { year: "2025", title: "Built Zion Chess Engine", text: "Implemented minimax search, board evaluation, and tactical game modes." },
  { year: "2026", title: "Building AI Products", text: "Developing practical tools across NLP, CV, and student productivity." },
];

export default function Timeline() {
  return (
    <section id="timeline" className="section-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="section-title">Timeline</h2>
        <p className="section-subtitle">
          Project growth from AI foundations to product-oriented engineering.
        </p>
      </motion.div>

      <div className="relative mt-10 space-y-8 border-l border-slate-300 pl-7 dark:border-slate-700">
        {timeline.map((item, index) => (
          <motion.div
            key={item.year}
            className="relative"
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <span className="absolute -left-[35px] top-1 inline-block h-3.5 w-3.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(99,102,241,0.18)]" />
            <p className="text-sm font-semibold text-accent">{item.year}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

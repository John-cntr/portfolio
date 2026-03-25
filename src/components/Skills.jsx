import { motion } from "framer-motion";

const groups = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "AI & Data",
    items: [
      "Machine Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Data Analytics",
      "Data Visualization",
      "Data Cleaning",
    ],
  },
  {
    title: "Software Development",
    items: [
      "Data Structures & Algorithms",
      "API Development",
      "Full-Stack Development",
      "Git & Version Control",
    ],
  },
  {
    title: "AI Systems",
    items: ["LLM Applications", "AI Automation", "Intelligent System Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Core skills I use to build machine learning products and developer
          tools.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {groups.map((group, index) => (
          <motion.article
            key={group.title}
            className="glass-panel card-hover p-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-extrabold text-ink" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-2xl border-2 border-white/40 bg-white/10 px-3.5 py-2 text-sm font-bold text-ink shadow-sticker"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

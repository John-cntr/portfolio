import { motion } from "framer-motion";
import { BookOpen, Music2, Trophy } from "lucide-react";

const hobbies = [
  {
    title: "Playing Guitar",
    icon: Music2,
    description:
      "Guitar helps me stay creative and patient. I practice rhythm and melody regularly, and that habit translates into better focus and consistency when building complex projects.",
  },
  {
    title: "Reading Books",
    icon: BookOpen,
    description:
      "I read books on technology, psychology, and problem solving. Reading improves how I learn new systems quickly and how I break big engineering problems into clear steps.",
  },
  {
    title: "Playing Cricket",
    icon: Trophy,
    description:
      "Cricket keeps me active and sharp under pressure. It has improved my teamwork, discipline, and decision making, especially in fast changing situations.",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="section-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="section-title">Hobbies</h2>
        <p className="section-subtitle">
          Activities that keep me creative, disciplined, and balanced outside of coding.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;
          return (
            <motion.article
              key={hobby.title}
              className="glass-panel card-hover p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="mb-4 inline-flex rounded-2xl border-2 border-white/40 bg-accent p-3 text-black shadow-sticker">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-extrabold text-ink" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
                {hobby.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {hobby.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

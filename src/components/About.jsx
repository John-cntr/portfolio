import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Code2,
  GraduationCap,
  Layers3,
  Workflow,
} from "lucide-react";

const journeySteps = [
  {
    title: "Programming Foundations (Python)",
    description:
      "Started with Python to build strong programming fundamentals including variables, loops, functions, and object-oriented programming. This stage developed logical thinking and structured problem solving.",
    icon: Code2,
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Learned core data structures and algorithmic thinking to design efficient solutions and improve problem-solving ability.",
    icon: Workflow,
  },
  {
    title: "Artificial Intelligence & NLP",
    description:
      "Explored machine learning, natural language processing, and language models to build intelligent systems and AI-powered tools.",
    icon: Bot,
  },
  {
    title: "Full-Stack Development",
    description:
      "Expanded into frontend and backend development using HTML, CSS, JavaScript, and SQL to build complete AI-powered applications.",
    icon: Layers3,
  },
];

const education = [
  {
    title: "B.Tech – Artificial Intelligence & Machine Learning",
    school: "TKR College of Engineering and Technology",
    period: "Current",
    description:
      "Currently pursuing a Bachelor's degree focused on artificial intelligence, machine learning, data structures, and building intelligent software systems.",
  },
  {
    title: "Intermediate – Narayana Junior College",
    school: "",
    period: "2020 – 2022",
    description:
      "Completed intermediate education with Mathematics, Physics, and Chemistry (MPC), building strong analytical and mathematical foundations.",
  },
  {
    title: "10th Grade – St. Ann’s English Medium School",
    school: "",
    period: "Completed in 2020",
    description:
      "Developed early academic foundations in mathematics, science, and logical reasoning.",
  },
];

export default function About() {
  const [hoveredEducation, setHoveredEducation] = useState(null);

  return (
    <section id="about" className="section-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="section-title">About</h2>
      </motion.div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <motion.article
          className="rounded-[20px] border border-white/40 bg-white/55 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.10)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-800/65"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <h3 className="text-xl font-semibold text-black dark:text-slate-100">
            About Me Journey
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-black dark:text-slate-300">
            My learning journey started with core programming and gradually
            evolved into artificial intelligence, problem solving, and building
            full-stack intelligent systems.
          </p>

          <div className="mt-5 space-y-3">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="group rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-blue-300/70 hover:shadow-[0_22px_40px_rgba(59,130,246,0.15)] dark:border-slate-600 dark:bg-slate-700/60 dark:hover:border-blue-400/35"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.span
                      className="mt-0.5 inline-flex rounded-lg bg-primary/12 p-2 text-primary"
                      animate={{ y: [0, -2, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: index * 0.12,
                      }}
                    >
                      <Icon size={16} />
                    </motion.span>
                    <div>
                      <h4 className="text-sm font-semibold text-black dark:text-slate-100">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.article>

        <motion.article
          className="rounded-[20px] border border-white/40 bg-white/55 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.10)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-800/65"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-primary" />
            <h3 className="text-xl font-semibold text-black dark:text-slate-100">
              Education Timeline
            </h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-black dark:text-slate-300">
            Expand this card to view the full education path through an
            animated timeline.
          </p>

          <div className="relative mt-6 pl-8">
            <motion.div
              className="absolute left-[13px] top-1 w-[2px] rounded-full bg-gradient-to-b from-primary via-orange-400/70 to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "92%" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="space-y-4">
              {education.map((item, index) => {
                const isHovered = hoveredEducation === index;
                return (
                  <motion.div
                    key={item.title}
                    className="relative"
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: 0.12 + index * 0.1 }}
                    onMouseEnter={() => setHoveredEducation(index)}
                    onMouseLeave={() => setHoveredEducation(null)}
                  >
                    <motion.span
                      className="absolute -left-[27px] top-5 inline-flex h-3 w-3 rounded-full bg-primary"
                      initial={{ scale: 0.5, opacity: 0.45 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.2 + index * 0.12 }}
                      animate={
                        isHovered
                          ? {
                              boxShadow:
                                "0 0 0 8px rgba(255,122,24,0.18), 0 0 22px rgba(255,122,24,0.35)",
                            }
                          : {
                              boxShadow: "0 0 0 4px rgba(255,122,24,0.14)",
                            }
                      }
                    />

                    <div className="group rounded-[20px] border border-white/60 bg-white/85 p-4 shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:border-blue-300/70 hover:shadow-[0_22px_40px_rgba(59,130,246,0.15)] dark:border-slate-600 dark:bg-slate-700/60 dark:hover:border-blue-400/35">
                      <h4 className="text-sm font-semibold text-black dark:text-slate-100">
                        {item.title}
                      </h4>
                      {item.school ? (
                        <p className="mt-1 text-xs font-medium text-slate-700 dark:text-slate-300">
                          {item.school}
                        </p>
                      ) : null}
                      <p className="mt-1 text-xs font-semibold text-primary">
                        {item.period}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

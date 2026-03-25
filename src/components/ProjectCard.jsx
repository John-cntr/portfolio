import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = ((event.clientY - centerY) / rect.height) * -10;
    const rotateY = ((event.clientX - centerX) / rect.width) * 10;
    setTilt({ x: rotateX, y: rotateY });
  };

  return (
    <motion.article
      className="group glass-panel card-hover overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 180, damping: 18, delay: index * 0.04 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-slate-700 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-200"
          >
            <Github size={14} />
            GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition hover:bg-primary/90"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

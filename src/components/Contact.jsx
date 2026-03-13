import { motion } from "framer-motion";
import { Github, Linkedin, BriefcaseBusiness, Mail } from "lucide-react";

const MAIL_TO_EMAIL = "johnsonkaparthi@gmail.com";
const MAIL_SUBJECT = encodeURIComponent(
  "Project Inquiry for Johnson Kaparthi"
);
const MAIL_BODY = encodeURIComponent(
  "Hi Johnson Kaparthi,\n\nI came across your portfolio and would like to connect regarding a project opportunity.\n\nProject details:\n- Timeline:\n- Budget:\n- Requirements:\n\nLooking forward to your response.\n\nBest regards,\n[Your Name]"
);
const GMAIL_COMPOSE_LINK = `https://mail.google.com/mail/?view=cm&fs=1&to=${MAIL_TO_EMAIL}&su=${MAIL_SUBJECT}&body=${MAIL_BODY}`;

const socialLinks = [
  { label: "GitHub", href: "https://github.com/John-cntr", icon: Github, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/johnsonkaparthi", icon: Linkedin, external: true },
  { label: "Fiverr", href: "https://www.fiverr.com/johnsonkaparthi", icon: BriefcaseBusiness, external: true },
  { label: "Gmail", href: GMAIL_COMPOSE_LINK, icon: Mail, external: true },
];

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper pb-8 md:pb-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Let's collaborate on AI products, web apps, or automation workflows.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-6">
        <motion.form
          className="glass-panel card-hover space-y-5 p-6"
          action="https://formspree.io/f/your-form-id"
          method="POST"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-xl border-slate-300 bg-white/80 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-xl border-slate-300 bg-white/80 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full rounded-xl border-slate-300 bg-white/80 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-100"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Send Message
          </button>
        </motion.form>

        <motion.aside
          className="glass-panel card-hover p-6"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Connect Online
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Prefer social platforms? Reach out directly through these channels.
          </p>
          <div className="mt-6 space-y-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl border border-slate-300/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200"
                >
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

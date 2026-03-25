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
          action="https://formspree.io/f/mbdzyell"
          method="POST"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-bold text-ink">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-2xl border-2 border-white/30 bg-white/10 text-ink placeholder:text-muted focus:border-accent focus:ring-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-2xl border-2 border-white/30 bg-white/10 text-ink placeholder:text-muted focus:border-accent focus:ring-accent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full rounded-2xl border-2 border-white/30 bg-white/10 text-ink placeholder:text-muted focus:border-accent focus:ring-accent"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="btn-primary"
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
          <h3 className="text-xl font-extrabold text-ink" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
            Connect Online
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
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
                  className="flex items-center gap-3 rounded-2xl border-2 border-white/40 bg-white/10 px-4 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:shadow-sticker"
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

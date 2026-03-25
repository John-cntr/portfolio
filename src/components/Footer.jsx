import { Mail, Github, Linkedin, BriefcaseBusiness } from "lucide-react";

const MAIL_TO_EMAIL = "johnsonkaparthi@gmail.com";

const MAIL_SUBJECT = encodeURIComponent(
  "Project Inquiry for Johnson Kaparthi"
);

const MAIL_BODY = encodeURIComponent(
  "Hi Johnson Kaparthi,\n\nI came across your portfolio and would like to discuss a project.\n\nBest regards,\n"
);

const MAIL_TO_LINK = `mailto:${MAIL_TO_EMAIL}?subject=${MAIL_SUBJECT}&body=${MAIL_BODY}`;

const links = [
  { label: "Email", href: MAIL_TO_LINK, icon: Mail, external: false },
  { label: "GitHub", href: "https://github.com/John-cntr", icon: Github, external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/johnsonkaparthi", icon: Linkedin, external: true },
  { label: "Fiverr", href: "https://www.fiverr.com/johnsonkaparthi", icon: BriefcaseBusiness, external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100/80 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 dark:text-slate-300 md:flex-row">
        <p>© 2026 Johnson Kaparthi</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
              >
                <Icon size={14} />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

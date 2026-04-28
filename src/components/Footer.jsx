import { MailIcon, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram, FaJava } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = ["About", "Projects", "Skills", "Contact"];

  return (
    <footer className="relative mt-200 overflow-hidden border-t border-white/10 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.12),transparent_35%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-4">
        <div className="grid gap-10 md:grid-cols-4">
          
          <div className="md:col-span-2">
            <div className="mb-5 flex items-center gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-lg shadow-blue-500/10">
                <FaJava size={42} className="text-red-500" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  Nilesh<span className="text-blue-400"> Kumar</span>
                </h3>
                <p className="text-sm text-slate-400">
                  Java Full Stack Developer
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Building clean, responsive, and scalable web applications using
              Java, Spring Boot, React, PostgreSQL, and REST APIs.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <MapPin size={17} className="text-blue-400" />
              Bangalore, India
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
              Navigate
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
              Connect
            </h4>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/rnileshk"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/rnilesh"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:imnileshkumar06@gmail.com"
                className="footer-icon"
                aria-label="Email"
              >
                <MailIcon size={20} />
              </a>

              <a
                href="https://instagram.com/imnilesh60"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              Open to Java Full Stack Developer roles.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3 border-t border-white/10 pt-4">
          {["Java", "Spring Boot", "Microservices", "React", "PostgreSQL", "MySQL", "MongoDB", "REST API", "GitHub"].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
              >
                {tech}
              </span>
            )
          )}
        </div>

        <div className="mt-4 text-center text-sm tracking-wide text-slate-500">
          © {year} Nilesh Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
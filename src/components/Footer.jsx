import { MailIcon } from "lucide-react";
import { FaGithub, FaInstagram, FaJava } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mb-2">
              <FaJava size={50} className="inline-block mr-1 text-red-500" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">
                Nilesh<span className="text-blue-400"> Kumar</span>
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Java Full Stack Developer
              </p>
            </div>
          </div>

          {/* Center: Social icons */}
          <div className="flex items-center gap-4">
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
        </div>
        <div className="text-sm text-slate-400 text-center mt-6 md:mt-10 tracking-wide">
          © {year} • All rights reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;

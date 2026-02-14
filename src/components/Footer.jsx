import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="mt-auto py-12 px-6 border-t border-white/5 bg-bg-main">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Links: Logo & Slogan */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Logo className="h-8 w-auto opacity-80" />
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            Crafting Digital Experiences &copy; 2026
          </p>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <Link to="/" className="hover:text-brand-blue transition-colors">
            Home
          </Link>
          <Link
            to="/projecten"
            className="hover:text-brand-blue transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-brand-blue transition-colors"
          >
            Contact
          </Link>
          {/* Legal link styled to match the rest */}
          <Link
            to="/legal"
            className="hover:text-brand-blue transition-colors text-slate-500"
          >
            Terms & Privacy
          </Link>
        </nav>

        {/* Right: Socials / Status */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Available for work
            </span>
          </div>

          {/* Mail Link */}
          <a
            href="mailto:info@beadsengine.com"
            className="text-slate-500 hover:text-white transition-colors"
            title="Email us"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>

          {/* GitHub Link (Personal: 5PE3DY) */}
          <a
            href="https://github.com/5PE3DY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-white transition-colors"
            title="View my code on GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

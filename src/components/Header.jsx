import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projecten", path: "/projecten" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full z-50 bg-bg-main/90 backdrop-blur-xl border-b border-white/5 font-inter">
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
        {/* Logo met het nieuwe component */}
        <Link
          to="/"
          className="flex items-center group relative z-50"
          onClick={() => setIsOpen(false)}
        >
          <Logo className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Desktop Nav - Geen support knop meer hier */}
        <nav className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-brand-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobiele Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 p-2 text-white"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Mobiele Overlay */}
        <div
          className={`fixed inset-0 bg-bg-main flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black text-white uppercase tracking-tighter hover:text-brand-blue"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

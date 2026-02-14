import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projecten" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* 1. DE ACHTERGROND LAAG (OVERLAY) */}
      <div
        className={`fixed inset-0 transition-all duration-500 ease-in-out md:hidden`}
        style={{
          backgroundColor: "#070707",
          zIndex: 9998,
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* justify-center toegevoegd voor verticale centrering */}
        <div className="flex flex-col items-center justify-center h-full p-12">
          <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-8 opacity-60">
            Navigation
          </span>

          {/* text-center toegevoegd voor strakke uitlijning */}
          <nav className="flex flex-col gap-8 text-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                /* text-3xl of 4xl voor die mooie vette look */
                className={`text-2xl font-black text-white uppercase tracking-tighter hover:text-brand-blue transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* 2. DE HEADER BALK - Bevat alleen logo en knop */}
      <header
        className="fixed top-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 font-inter"
        style={{ zIndex: 9999 }} // De hoogste laag
      >
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="relative">
            <Logo className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
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

          {/* Hamburger Knop */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 outline-none"
            aria-label="Menu"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

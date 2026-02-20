import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShowcaseHeader from "../../components/ShowcaseHeader";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import NovaContact from "./components/NovaContact";

const SaasApp = () => {
  useEffect(() => {
    document.title = "SaaS Nova | Premium Software Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF5] text-[#1E1B4B] font-sans selection:bg-[#F59E0B]/20">
      {/* FIXED HEADER CONSTRUCTIE */}
      <header className="fixed top-0 w-full z-50">
        {/* Universele Showcase Balk - Nu ook hier! */}
        <ShowcaseHeader projectName="SaaS Nova Platform" />

        {/* Elegante Navigatie */}
        <nav className="w-full bg-[#FFFDF5]/80 backdrop-blur-md border-b border-[#1E1B4B]/5 px-8 py-5">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-black tracking-tighter uppercase italic">
              SaaS<span className="text-[#F59E0B]">NOVA</span>
            </div>

            {/* In-app menu (indien nodig, anders leeg laten voor de strakke look) */}
            <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest">
              <a
                href="#features"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="hover:text-[#F59E0B] transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-32">
        {" "}
        {/* Extra padding toegevoegd vanwege de dubbele header */}
        <Hero
          title="Schaal sneller met SaaS Nova"
          subtitle="De BeadsEngine technologie, nu verpakt in een krachtige SaaS-omgeving. Bouw, beheer en schaal je creatieve projecten met de snelheid van het licht."
        />
        <div id="features" className="bg-[#FFFDF5]">
          <Features />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="contact">
          <NovaContact />
        </div>
      </main>

      <footer className="py-20 text-center border-t border-[#1E1B4B]/5 bg-[#FFFDF5]">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30 mb-4">
          SaaS Nova Portfolio Showcase — 2026
        </p>
        <Link
          to="/"
          className="text-[9px] font-black uppercase tracking-widest text-[#1E1B4B]/40 hover:text-[#F59E0B] transition-colors"
        >
          Project sluiten
        </Link>
      </footer>
    </div>
  );
};

export default SaasApp;

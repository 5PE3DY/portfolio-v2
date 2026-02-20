import React, { useEffect } from "react";
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
    <div className="min-h-screen bg-[#FFFDF5] text-[#1E1B4B] font-sans">
      {/* Elegante Navigatie */}
      <nav className="sticky top-0 z-50 bg-[#FFFDF5]/80 backdrop-blur-md border-b border-[#1E1B4B]/5 px-8 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-black tracking-tighter uppercase italic">
            SaaS<span className="text-[#F59E0B]">NOVA</span>
          </div>

          {/* De Herstelde Terug-knop */}
          <a
            href="/"
            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1E1B4B] hover:text-[#F59E0B] transition-all decoration-none"
          >
            <span className="group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            <span className="border-b-2 border-[#1E1B4B] group-hover:border-[#F59E0B] pb-1">
              Terug naar Home
            </span>
          </a>
        </div>
      </nav>

      <main>
        <Hero
          title="Schaal sneller met SaaS Nova"
          subtitle="De BeadsEngine technologie, nu verpakt in een krachtige SaaS-omgeving. Bouw, beheer en schaal je creatieve projecten met de snelheid van het licht."
        />
        <div className="bg-[#FFFDF5]">
          <Features />
          <Pricing />
          <NovaContact />
        </div>
      </main>

      <footer className="py-20 text-center border-t border-[#1E1B4B]/5">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">
          SaaS Nova Portfolio Showcase — 2026
        </p>
      </footer>
    </div>
  );
};

export default SaasApp;

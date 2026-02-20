import React, { useEffect } from "react";
import BloomHero from "./components/Hero";
import Gallery from "./components/Gallery";
import BloomContact from "./components/Contact";

const BloomApp = () => {
  useEffect(() => {
    document.title = "Studio Bloom | Creative Direction";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F0E9] text-slate-900 selection:bg-[#D4AF37]/20">
      {/* Elegante Navigatie */}
      <nav className="fixed top-0 w-full z-50 px-10 py-8 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-xl font-light tracking-[0.4em] uppercase">
          Bloom
        </div>
        <a
          href="/"
          className="text-[10px] font-bold uppercase tracking-widest border-b border-white/40 pb-1 hover:border-white transition-all"
        >
          Close Showcase
        </a>
      </nav>

      <main>
        <BloomHero />
        <div className="h-px w-full bg-slate-200/50" />{" "}
        {/* Gebruik h-px volgens suggestie */}
        <Gallery />
        <BloomContact />
      </main>

      <footer className="py-20 text-center border-t border-slate-200/30">
        <p className="text-[9px] font-medium uppercase tracking-[0.6em] text-slate-400 italic">
          Curated by Franspeter • 2026
        </p>
      </footer>
    </div>
  );
};

export default BloomApp;

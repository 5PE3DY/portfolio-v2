import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ShowcaseHeader from "../../components/ShowcaseHeader";
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
      {/* HEADER CONSTRUCTIE */}
      <header className="fixed top-0 w-full z-50">
        {/* De universele Top Bar voor consistentie */}
        <ShowcaseHeader projectName="Studio Bloom" />

        {/* Elegante Navigatie - Let op de mix-blend-difference voor het artistieke effect */}
        <nav className="w-full px-10 py-8 flex justify-between items-center mix-blend-difference text-white">
          <div className="text-xl font-light tracking-[0.4em] uppercase">
            Bloom
          </div>

          {/* On-page links voor de SPA ervaring */}
          <div className="hidden md:flex gap-10 text-[9px] font-bold uppercase tracking-[0.3em]">
            <a href="#gallery" className="hover:opacity-60 transition-opacity">
              Gallery
            </a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* De Hero vult het scherm, de extra padding voor de header zit vaak al in de Hero component */}
        <BloomHero />

        <div className="h-px w-full bg-slate-200/50" />

        <div id="gallery">
          <Gallery />
        </div>

        <div id="contact">
          <BloomContact />
        </div>
      </main>

      <footer className="py-20 text-center border-t border-slate-200/30 bg-[#F2F0E9]">
        <p className="text-[9px] font-medium uppercase tracking-[0.6em] text-slate-400 italic mb-4">
          Curated by Franspeter • 2026
        </p>
        <Link
          to="/"
          className="text-[10px] font-bold uppercase tracking-widest text-slate-900/40 hover:text-slate-900 transition-all"
        >
          Close Showcase
        </Link>
      </footer>
    </div>
  );
};

export default BloomApp;

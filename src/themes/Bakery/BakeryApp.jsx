import React, { useEffect } from "react";
import BakeryHero from "./components/BakeryHero";

const BakeryApp = () => {
  useEffect(() => {
    // Dynamische titel voor de browser tab
    document.title = "Crust & Crumb | Ambachtelijke Bakkerij";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#4A3728] selection:bg-[#C19A6B]/20 font-sans">
      {/* Warme, Navigatiebalk */}
      <nav className="absolute top-0 w-full z-50 px-8 md:px-20 py-10 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4A3728] rounded-full flex items-center justify-center text-[#F5F2ED] text-xs">
            C
          </div>
          Crust & Crumb
        </div>

        <div className="hidden md:flex space-x-10 text-[11px] font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-[#C19A6B] transition-colors">
            Onze Oven
          </a>
          <a href="#" className="hover:text-[#C19A6B] transition-colors">
            Assortiment
          </a>
          <a href="#" className="hover:text-[#C19A6B] transition-colors">
            Contact
          </a>
        </div>

        <a
          href="/"
          className="text-[10px] font-bold uppercase tracking-widest px-6 py-3 border border-[#4A3728]/20 rounded-full hover:bg-[#4A3728] hover:text-white transition-all"
        >
          Terug naar Portfolio
        </a>
      </nav>

      <main>
        <BakeryHero />

        {/* Placeholder voor de rest van de pagina */}
        <div className="py-20 text-center opacity-30 italic font-serif">
          Hier komen straks de verse producten...
        </div>
      </main>

      <footer className="py-12 text-center border-t border-[#4A3728]/10">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B5E3C]">
          Handgemaakt met passie • 2026
        </p>
      </footer>
    </div>
  );
};

export default BakeryApp;

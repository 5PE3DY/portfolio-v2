import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Voeg iconen toe voor mobiel menu
import ShowcaseHeader from "../../components/ShowcaseHeader";
import BakeryHero from "./components/BakeryHero";
import ProductGrid from "./components/ProductGrid";
import BakeryAtelier from "./components/BakeryAtelier";
import BakeryContact from "./components/BakeryContact";

const BakeryApp = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sluit menu bij klik op link
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#F9F6F2] selection:bg-[#A68966]/20 font-sans">
      <header className="fixed top-0 w-full z-50">
        <ShowcaseHeader projectName="Crust & Crumb" />

        {/* Hoofdnavigatie */}
        <nav
          className={`w-full px-6 md:px-20 transition-all duration-500 ${
            isScrolled || isMobileMenuOpen
              ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
              : "bg-transparent py-6 md:py-8"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl md:text-2xl font-serif tracking-tighter uppercase text-[#322C28] z-50">
              C&C
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#322C28]">
              <a
                href="#atelier"
                className="hover:text-[#A68966] transition-colors"
              >
                Atelier
              </a>
              <a
                href="#collectie"
                className="hover:text-[#A68966] transition-colors"
              >
                Collectie
              </a>
              <a
                href="#contact"
                className="hover:text-[#A68966] transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-[#322C28] z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-white transition-all duration-500 ease-in-out md:hidden ${
              isMobileMenuOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
            style={{ top: "0", height: "100vh" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-12 text-[12px] font-black uppercase tracking-[0.4em] text-[#322C28]">
              <a
                href="#atelier"
                onClick={closeMenu}
                className="hover:text-[#A68966]"
              >
                Atelier
              </a>
              <a
                href="#collectie"
                onClick={closeMenu}
                className="hover:text-[#A68966]"
              >
                Collectie
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-[#A68966]"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Padding-top correctie: 
          Mobiel: pt-32 (ShowcaseHeader + Nav + Speling)
          Desktop: md:pt-44 
      */}
      <main className="pt-32 md:pt-44">
        <BakeryHero />
        <BakeryAtelier />
        <div id="collectie">
          <ProductGrid />
        </div>
        <BakeryContact />
      </main>

      <footer className="py-20 bg-[#322C28] text-center px-6">
        <p className="text-[9px] uppercase tracking-[0.5em] text-[#A68966] mb-4">
          © 2026 Crust & Crumb — Modern Patisserie
        </p>
        <Link
          to="/"
          className="text-white/20 hover:text-[#A68966] text-[10px] uppercase tracking-[0.2em] transition-all duration-500"
        >
          Sluit demo en ga terug naar portfolio
        </Link>
      </footer>
    </div>
  );
};

export default BakeryApp;

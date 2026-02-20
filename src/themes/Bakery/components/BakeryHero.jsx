import React from "react";

const BakeryHero = () => {
  return (
    <section className="relative min-h-screen bg-[#F9F6F2] flex items-center px-8 md:px-20 overflow-hidden pt-32 md:pt-48">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="z-10 relative">
          <div className="absolute -left-12 top-0 h-full hidden xl:flex items-center border-l border-[#A68966]/20">
            <span className="rotate-90 origin-left text-[9px] font-black uppercase tracking-[0.5em] text-[#A68966]/40 whitespace-nowrap pl-4">
              Est. 2026 — Modern Patisserie
            </span>
          </div>

          <span className="text-[#A68966] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">
            The Art of Couture Cakes
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-[#322C28] leading-[0.9] mb-8 uppercase tracking-tighter">
            Couture <br />
            <span className="italic font-light lowercase text-[#A68966] tracking-normal">
              Sweets.
            </span>
          </h1>
          <p className="text-[#6B5B4E] text-lg mb-12 max-w-sm leading-relaxed font-light">
            Wij vertalen emotie naar smaak. Geen standaard taarten, maar unieke
            eetbare sculpturen voor jouw meest bijzondere momenten.
          </p>

          <button className="group relative px-12 py-5 bg-[#322C28] text-white overflow-hidden rounded-full transition-all">
            <span className="relative z-10 font-bold text-xs uppercase tracking-widest">
              Bekijk Collectie
            </span>
            <div className="absolute inset-0 bg-[#A68966] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Linter fix: z-0 */}
          <div className="absolute w-[120%] h-[120%] bg-white rounded-t-full z-0 translate-y-20 opacity-50"></div>

          {/* Linter fix: aspect-4/5 */}
          <div className="relative w-full max-w-md aspect-4/5 overflow-hidden shadow-[30px_30px_0px_0px_rgba(166,137,102,0.1)] group">
            <img
              src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000"
              alt="Luxe Taart"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]"
            />
            <div className="absolute inset-0 bg-[#322C28]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold uppercase tracking-[0.3em] border border-white/40 px-6 py-2 backdrop-blur-md">
                Signature Piece
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BakeryHero;

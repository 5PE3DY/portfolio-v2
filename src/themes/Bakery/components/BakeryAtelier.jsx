import React from "react";

const BakeryAtelier = () => {
  return (
    <section
      id="atelier"
      className="py-32 bg-[#FAF7F2] px-8 md:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          {/* Linter fix: border-15 toegepast */}
          <div className="aspect-square w-full max-w-md bg-[#322C28] rounded-full overflow-hidden border-15 border-white shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800"
              alt="Bakker aan het werk"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          {/* Decoratieve zwevende badge */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#A68966] rounded-full flex items-center justify-center text-white text-center p-4 shadow-xl">
            <p className="text-[10px] font-bold uppercase tracking-tighter">
              100% Organische Ingrediënten
            </p>
          </div>
        </div>

        <div>
          <span className="text-[#A68966] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
            Het Atelier
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#322C28] mb-8 italic">
            Passie voor <br /> <span className="not-italic">Perfectie.</span>
          </h2>
          <p className="text-[#6B5B4E] leading-relaxed mb-8 font-light italic">
            In ons atelier werken we elke dag aan het herdefiniëren van
            patisserie. Geen lopende band, maar handwerk waarbij elke laag met
            zorg wordt opgebouwd.
          </p>
          <ul className="space-y-4 text-[#322C28] font-bold text-xs uppercase tracking-widest">
            {/* Linter fix: h-px toegepast voor de lijntjes */}
            <li className="flex items-center gap-4">
              <span className="w-8 h-px bg-[#A68966]"></span> Franse technieken
            </li>
            <li className="flex items-center gap-4">
              <span className="w-8 h-px bg-[#A68966]"></span> Seizoensgebonden
              fruit
            </li>
            <li className="flex items-center gap-4">
              <span className="w-8 h-px bg-[#A68966]"></span> Unieke
              smaakcombinaties
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BakeryAtelier;

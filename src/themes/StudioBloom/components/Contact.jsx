import React from "react";

const BloomContact = () => {
  return (
    <section className="bg-[#F2F0E9] py-32 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Links: De Cursus CTA */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-8">
            Educatie & Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-light serif italic leading-[1.1] text-slate-900 mb-10">
            Beheers de kunst van <br />
            <span className="not-italic font-normal">Minimal UI Design.</span>
          </h2>
          <p className="text-slate-500 font-light leading-relaxed mb-12 max-w-md">
            In mijn exclusieve cursus leer ik je hoe je technische diepgang
            combineert met high-end esthetiek. Geen standaard templates, maar
            pure creativiteit in code.
          </p>

          <div className="group w-fit">
            <button className="px-10 py-5 bg-slate-900 text-white text-[10px] uppercase tracking-[0.3em] transition-all duration-500 group-hover:bg-[#D4AF37] group-hover:px-12">
              Bekijk Cursus Aanbod
            </button>
            <div className="h-px w-0 bg-slate-900 mt-2 transition-all duration-500 group-hover:w-full opacity-20" />
          </div>
        </div>

        {/* Rechts: Het Minimalistische Formulier */}
        <div className="relative">
          {/* Decoratieve achtergrondvorm (subtiel) */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/30 rounded-full blur-3xl -z-10" />

          <form className="bg-white/40 backdrop-blur-md p-10 md:p-16 shadow-sm border border-white/20">
            <h3 className="serif italic text-2xl mb-12 text-slate-800">
              Start een gesprek
            </h3>

            <div className="space-y-12">
              <div className="group">
                <label className="text-[9px] uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-[#D4AF37]">
                  Naam
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-slate-300 py-2 outline-none focus:border-slate-900 transition-colors serif text-xl"
                />
              </div>

              <div className="group">
                <label className="text-[9px] uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-[#D4AF37]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-slate-300 py-2 outline-none focus:border-slate-900 transition-colors serif text-xl"
                />
              </div>

              <div className="group">
                <label className="text-[9px] uppercase tracking-widest text-slate-400 block mb-2 transition-colors group-focus-within:text-[#D4AF37]">
                  Bericht
                </label>
                <textarea
                  rows="3"
                  className="w-full bg-transparent border-b border-slate-300 py-2 outline-none focus:border-slate-900 transition-colors serif text-xl resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full py-6 text-[10px] uppercase tracking-[0.5em] font-bold text-slate-900 border border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-700"
              >
                Verzenden
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BloomContact;

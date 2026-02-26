import React from "react";
import ShowcaseHeader from "../../components/ShowcaseHeader";
import {
  Phone,
  CheckCircle2,
  Star,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Hammer,
  Paintbrush,
} from "lucide-react";

const SpecialistApp = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white text-left italic-none">
      {/* --- SHOWCASE HEADER --- */}
      <header className="fixed top-0 w-full z-50">
        <ShowcaseHeader projectName="The Specialist | Vakmanschap & ZZP" />

        {/* --- TOPBAR --- */}
        <div className="bg-slate-900 text-white py-3 px-6 text-[10px] md:text-xs flex justify-between items-center font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="hidden md:flex items-center gap-2 text-blue-400">
              <ShieldCheck size={14} /> Gediplomeerd Schilder & Glaszetter
            </span>
            <span className="flex items-center gap-2">
              <Star size={14} className="fill-yellow-500 text-yellow-500" /> 4.9
              Klantbeoordeling
            </span>
          </div>
          <div className="flex gap-4">
            <a
              href="tel:0612345678"
              className="hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Phone size={14} /> 06 1234 5678
            </a>
          </div>
        </div>
      </header>

      {/* --- NAVIGATIE (Tailwind canonical classes toegepast) --- */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-8 border-b border-slate-100 sticky top-18 md:top-20 z-40 backdrop-blur-md bg-white/90">
        <div className="flex flex-col text-left">
          <span className="text-2xl font-black tracking-tighter uppercase leading-none">
            The <span className="text-blue-600">Specialist</span>
          </span>
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
            Vakwerk in Schilderwerk
          </span>
        </div>

        <div className="hidden lg:flex gap-10 font-black uppercase text-[10px] tracking-widest text-slate-500">
          <a href="#diensten" className="hover:text-blue-600">
            Diensten
          </a>
          <a href="#werkwijze" className="hover:text-blue-600">
            Werkwijze
          </a>
          <a href="#portfolio" className="hover:text-blue-600">
            Portfolio
          </a>
        </div>

        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-blue-600/20 active:scale-95 cursor-pointer">
          Gratis Offerte
        </button>
      </nav>

      {/* --- CONTENT --- */}
      <main className="pt-20">
        <section className="relative pt-16 pb-24 md:pt-32 md:pb-40 px-6 overflow-hidden bg-linear-to-b from-slate-50 to-white text-left">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-100">
                <Paintbrush size={14} /> Kwaliteit die generaties meegaat
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.85] mb-8 uppercase italic tracking-tighter">
                Uw woning <br /> verdient{" "}
                <span className="text-blue-600">het beste.</span>
              </h1>
              <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-lg leading-relaxed italic">
                Geen haastwerk, maar oog voor detail. Wij beschermen uw vastgoed
                met de beste lakken.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-slate-900 text-white px-10 py-6 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all flex items-center gap-4 group cursor-pointer">
                  Bekijk Projecten{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </div>
            </div>

            <div className="relative aspect-4/5 bg-slate-200 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="/img/TheSpecialist/painter-preview.jpg"
                className="w-full h-full object-cover"
                alt="Schilderwerk"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <Star size={28} className="fill-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 leading-none">
                    Garantie
                  </p>
                  <p className="font-bold text-slate-900 text-lg italic">
                    10 jaar glansgarantie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="diensten"
          className="py-24 px-6 border-t border-slate-100 bg-white"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Binnenwerk",
                icon: <Paintbrush className="text-blue-600" />,
                desc: "Van muren tot strak lakwerk op trappen.",
              },
              {
                title: "Buitenwerk",
                icon: <ShieldCheck className="text-blue-600" />,
                desc: "Duurzame bescherming tegen weer en wind.",
              },
              {
                title: "Onderhoud",
                icon: <Hammer className="text-blue-600" />,
                desc: "Houtrotherstel en kleine reparaties.",
              },
            ].map((usp, i) => (
              <div key={i} className="group text-left">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all border border-slate-100">
                  {usp.icon}
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-4">
                  {usp.title}
                </h3>
                <p className="text-slate-500 italic text-sm">{usp.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 left-6 right-6 lg:hidden z-60">
        <a
          href="tel:0612345678"
          className="bg-blue-600 text-white w-full py-6 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-4 shadow-2xl active:scale-95 transition-transform"
        >
          <Phone size={20} /> Bel voor prijsopgave
        </a>
      </div>
    </div>
  );
};

export default SpecialistApp;

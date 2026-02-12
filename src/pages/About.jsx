import React from "react";

const About = () => {
  return (
    <div className="relative pt-40 pb-20 px-6 min-h-screen bg-bg-main text-white overflow-hidden text-left">
      {/* Achtergrond Decoratie - Consistente blauwe gloed */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-brand-blue/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* LINKS: De Grote "Hook" */}
        <div className="lg:sticky lg:top-40 space-y-12">
          <div>
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-brand-blue/10 border border-brand-blue/20">
              <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">
                The Architect
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] mb-12">
              BUILDING <br />
              <span className="text-brand-blue text-glow">BEYOND.</span>
            </h1>

            <p className="text-slate-400 text-xl max-w-md font-medium leading-relaxed italic">
              Achter elke krachtige applicatie schuilt een systeem dat is
              gebouwd op
              <span className="text-white"> logica, snelheid en innovatie</span>
              . Bij franspeter.dev vertalen we complexe visies naar tastbare
              digitale realiteit.
            </p>
          </div>

          {/* Kleine Stat-cards voor extra autoriteit */}
          <div className="grid grid-cols-2 gap-6 sm:max-w-xs">
            <div className="p-4 rounded-3xl bg-white/3 border border-white/5">
              <p className="text-2xl font-black text-white italic tracking-tighter">
                100%
              </p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Custom Code
              </p>
            </div>
            <div className="p-4 rounded-3xl bg-white/3 border border-white/5">
              <p className="text-2xl font-black text-white italic tracking-tighter">
                24/7
              </p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Engine Logic
              </p>
            </div>
          </div>
        </div>

        {/* RECHTS: De Verdieping */}
        <div className="space-y-8">
          <div className="bg-white/3 border border-white/10 p-10 md:p-14 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">
            <h2 className="text-4xl font-black uppercase italic mb-6">
              De Missie
            </h2>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              In een wereld die overspoeld wordt door standaard templates,
              kiezen wij voor het tegenovergestelde:{" "}
              <span className="text-white">Fullstack Engineering</span> met een
              doel. Mijn werk draait om het creëren van software die niet alleen
              functioneert, maar anticipeert op de groei van jouw onderneming.
            </p>

            <div className="space-y-6">
              <div className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-blue/30 transition-all duration-500 group">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  ⚙️
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm mb-1 italic">
                    BeadsEngine Core
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Het fundament van onze projecten. Een eigen ontwikkelde
                    logica-engine die data-verwerking sneller en veiliger maakt
                    dan ooit tevoren.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-blue/30 transition-all duration-500 group">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                  🚀
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm mb-1 italic">
                    Future Proof
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Wij bouwen met de tech-stack van morgen. Vite, React, en
                    schaalbare backend-oplossingen staan centraal in onze
                    workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Een extra tekstblok onder de main card voor balans */}
          <div className="px-8">
            <p className="text-slate-500 text-sm italic leading-relaxed">
              "Software is geen eindproduct, het is een levend ecosysteem dat
              moet kunnen ademen en groeien."
              <br />—{" "}
              <span className="text-brand-blue font-bold tracking-widest uppercase text-[10px] ml-2">
                Team franspeter.dev
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

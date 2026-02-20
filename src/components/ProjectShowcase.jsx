import React from "react";
// Importeer Link als je React Router gebruikt, anders een gewone <a> tag
// import { Link } from "react-router-dom";

const ProjectShowcase = () => {
  return (
    <section className="py-24 px-6 bg-[#0B0E14] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Tekst Kant */}
          <div className="space-y-8">
            <span className="text-[#F59E0B] font-black uppercase tracking-[0.3em] text-xs">
              Featured Project
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9]">
              SaaS <span className="text-[#F59E0B]">Nova</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed">
              Een geavanceerde SaaS-oplossing aangedreven door de BeadsEngine.
              Zet foto's om in complexe patronen met AI-kleurmatching.
            </p>
            <a
              href="/showcase/saas-nova"
              className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#F59E0B] transition-all"
            >
              Bekijk Live Preview →
            </a>
          </div>

          {/* Visuele Kant (De Preview) */}
          <div className="relative group cursor-pointer">
            <a href="/showcase/saas-nova">
              {/* De 'Glow' achter de afbeelding */}
              <div className="absolute -inset-4 bg-[#F59E0B]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Browser Mockup */}
              <div className="relative bg-[#1E1B4B] rounded-3xl overflow-hidden border border-white/10 shadow-2xl transform group-hover:-rotate-2 group-hover:scale-[1.02] transition-all duration-500">
                {/* Browser Top Bar */}
                <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>

                {/* De Afbeelding */}
                <img
                  src="/img/beads-farm.png"
                  alt="SaaS Nova Preview"
                  className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

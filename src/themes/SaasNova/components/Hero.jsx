import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = ({ title, subtitle }) => {
  return (
    <section className="pt-24 pb-16 px-6 text-center max-w-6xl mx-auto">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 text-[#F59E0B] px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-10 border border-[#F59E0B]/20">
        <Sparkles size={12} /> Powered by BeadsEngine
      </div>

      {/* Headline */}
      <h1 className="text-6xl md:text-8xl font-black text-[#1E1B4B] mb-8 tracking-tighter leading-[0.9] uppercase italic">
        {title}
      </h1>

      {/* Subheadline */}
      <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
        {subtitle}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-[#1E1B4B] text-[#FFFDF5] px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-[#F59E0B] hover:-translate-y-1 transition-all shadow-xl shadow-[#1E1B4B]/10 cursor-pointer">
          Start gratis trial
        </button>
        <button className="bg-white border border-[#1E1B4B]/10 text-[#1E1B4B] px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-all cursor-pointer">
          Bekijk demo
        </button>
      </div>
      {/* Browser Mockup met jouw eigen PNG/JPG */}
      <div className="mt-12 md:mt-20 p-2 md:p-4 bg-white rounded-3xl md:rounded-[3rem] shadow-2xl border border-[#1E1B4B]/5 relative overflow-hidden group max-w-5xl mx-auto">
        <div className="bg-slate-50 rounded-2xl md:rounded-4xl overflow-hidden border border-slate-100 relative">
          {/* Browser Top Bar */}
          <div className="bg-white border-b border-slate-100 px-4 md:px-6 py-2 md:py-3 flex justify-between items-center">
            <div className="flex gap-1.5">
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="bg-slate-50 px-3 md:px-4 py-1 rounded-md text-[8px] md:text-[10px] text-slate-400 font-mono flex items-center gap-2 truncate max-w-37.5 md:max-w-none">
              <span className="opacity-50 hidden sm:inline">HTTPS://</span>
              BEADSENGINE.NOVA.APP/GENERATE
            </div>
            <div className="w-6 md:w-10"></div>
          </div>

          {/* De Afbeelding Container - Aangepast voor schalen */}
          <div className="relative w-full overflow-hidden bg-[#0B0E14] flex flex-col items-center">
            <img
              src="/img/farm-tractor-beads.png"
              className="w-full h-auto block group-hover:scale-105 transition-transform duration-1000"
              alt="BeadsEngine Generator Preview"
            />

            {/* Floating UI Overlay: Responsief gemaakt voor mobiel */}
            <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 bg-black/40 md:bg-[#FFFDF5]/10 backdrop-blur-xl p-3 md:p-5 rounded-2xl md:rounded-3xl border border-white/20 text-white text-left shadow-2xl transform translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform">
              <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                <div className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-[#F59E0B] animate-pulse"></div>
                <span className="text-[7px] md:text-[10px] font-black uppercase tracking-widest opacity-70">
                  Pattern Analysis
                </span>
              </div>
              <div className="text-[10px] md:text-xl font-black italic tracking-tighter uppercase mb-0.5 md:mb-1">
                12.400 Beads
              </div>
              <div className="hidden xs:block text-[7px] md:text-[10px] font-bold opacity-60 uppercase tracking-tight">
                42 Colors • Hama Midi Standard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

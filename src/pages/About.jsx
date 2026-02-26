import React from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Rocket,
  ShieldCheck,
  Cpu,
  Code2,
  Globe,
  Sparkles,
  Database,
} from "lucide-react";

const About = () => {
  return (
    <div className="relative pt-40 pb-32 px-6 min-h-screen bg-bg-main text-white overflow-hidden text-left italic-none">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-brand-blue/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT: Fixed Header Section */}
        <div className="lg:sticky lg:top-15 space-y-12">
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
              Behind every powerful application lies a system built on
              <span className="text-white"> logic, speed, and innovation</span>.
              At franspeter.dev, we translate complex visions into tangible
              digital reality.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-6 sm:max-w-xs">
            <div className="p-6 rounded-3xl bg-white/3 border border-white/5 backdrop-blur-sm">
              <p className="text-3xl font-black text-white italic tracking-tighter mb-1">
                100%
              </p>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                Custom Code
              </p>
            </div>
            <div className="p-6 rounded-3xl bg-white/3 border border-white/5 backdrop-blur-sm">
              <p className="text-3xl font-black text-white italic tracking-tighter mb-1">
                24/7
              </p>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                Engine Logic
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Scrollable Content */}
        <div className="space-y-12">
          {/* Mission Card */}
          <div className="bg-white/3 border border-white/10 p-10 md:p-14 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl font-black uppercase italic mb-8 flex items-center gap-4">
              <Sparkles className="text-brand-blue" /> The Mission
            </h2>
            <p className="text-slate-400 font-medium leading-relaxed mb-12 text-lg italic">
              In a world flooded with standard templates, we choose the
              opposite:{" "}
              <span className="text-white">Fullstack Engineering</span> with
              purpose. My work revolves around creating software that doesn't
              just function, but anticipates the growth of your business.
            </p>

            <div className="space-y-8">
              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-xl">
                  <Settings size={28} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-lg mb-2 italic tracking-tight">
                    BeadsEngine Core
                  </h4>
                  <p className="text-slate-500 leading-relaxed italic">
                    The foundation of our projects. A proprietary logic engine
                    designed to make data processing faster and more secure than
                    ever before.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-xl">
                  <Rocket size={28} />
                </div>
                <div>
                  <h4 className="font-black uppercase text-lg mb-2 italic tracking-tight">
                    Future Proof
                  </h4>
                  <p className="text-slate-500 leading-relaxed italic">
                    We build with the tech stack of tomorrow. Vite, React, and
                    scalable backend solutions are at the center of our
                    workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-16 -bottom-16 opacity-[0.03] pointer-events-none group-hover:opacity-10 transition-opacity">
              <Cpu size={400} />
            </div>
          </div>

          {/* TECH STACK BENTO GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-8 rounded-4xl bg-white/3 border border-white/5 hover:border-brand-blue/30 transition-all flex flex-col items-center justify-center text-center group">
              <Code2
                className="mb-4 text-slate-500 group-hover:text-brand-blue transition-colors"
                size={32}
              />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                React / Vite
              </span>
            </div>
            <div className="p-8 rounded-4xl bg-white/3 border border-white/5 hover:border-brand-blue/30 transition-all flex flex-col items-center justify-center text-center group">
              <Database
                className="mb-4 text-slate-500 group-hover:text-brand-blue transition-colors"
                size={32}
              />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Firebase
              </span>
            </div>
            <div className="p-8 rounded-4xl bg-white/3 border border-white/5 hover:border-brand-blue/30 transition-all flex flex-col items-center justify-center text-center group">
              <Globe
                className="mb-4 text-slate-500 group-hover:text-brand-blue transition-colors"
                size={32}
              />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Tailwind V4
              </span>
            </div>
          </div>

          {/* Way of Working / Trust Section */}
          <div className="p-10 md:p-14 rounded-[2.5rem] bg-brand-blue text-white relative overflow-hidden group shadow-2xl">
            <h3 className="text-3xl font-black uppercase italic mb-6 relative z-10">
              Let's build the <br /> unthinkable.
            </h3>
            <p className="text-white/80 font-medium mb-8 relative z-10 italic max-w-sm">
              Heeft u een visie die om meer vraagt dan een standaard oplossing?
              Wij zijn gespecialiseerd in het bouwen van complexe systemen die
              simpel voelen voor de eindgebruiker.
            </p>
            <Link
              to="/contact"
              className="relative z-10 inline-block bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] hover:bg-black hover:text-white transition-all shadow-xl active:scale-95"
            >
              Start Project
            </Link>
            <div className="absolute -right-10 -bottom-10 opacity-20 group-hover:scale-110 transition-transform duration-700">
              <ShieldCheck size={200} strokeWidth={1} />
            </div>
          </div>

          {/* Footer Text for Balance */}
          <div className="px-8 pb-10">
            <p className="text-slate-500 text-sm italic leading-relaxed">
              "Software is not a final product; it is a living ecosystem that
              must breathe and grow."
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

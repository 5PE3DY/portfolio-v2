import React from "react";

const About = () => {
  return (
    <div className="relative pt-40 pb-20 px-6 min-h-screen bg-bg-main text-white overflow-hidden text-left">
      {/* Background Decoration - Consistent blue glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-brand-blue/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/5 blur-[100px] rounded-full -ml-32 -mb-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT: The Big Hook */}
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
              Behind every powerful application lies a system built on
              <span className="text-white"> logic, speed, and innovation</span>.
              At franspeter.dev, we translate complex visions into tangible
              digital reality.
            </p>
          </div>

          {/* Stat Cards for Authority */}
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

        {/* RIGHT: Deep Dive */}
        <div className="space-y-8">
          <div className="bg-white/3 border border-white/10 p-10 md:p-14 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">
            <h2 className="text-4xl font-black uppercase italic mb-6">
              The Mission
            </h2>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              In a world flooded with standard templates, we choose the
              opposite:{" "}
              <span className="text-white">Fullstack Engineering</span> with
              purpose. My work revolves around creating software that doesn't
              just function, but anticipates the growth of your business.
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
                    The foundation of our projects. A proprietary logic engine
                    designed to make data processing faster and more secure than
                    ever before.
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
                    We build with the tech stack of tomorrow. Vite, React, and
                    scalable backend solutions are at the center of our
                    workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Text for Balance */}
          <div className="px-8">
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

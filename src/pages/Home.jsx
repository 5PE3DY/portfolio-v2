import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const skills = [
    { name: "React", level: "Expert", color: "text-blue-400" },
    { name: "Vite", level: "Fast AF", color: "text-purple-400" },
    { name: "Tailwind", level: "Styling", color: "text-cyan-400" },
    { name: "AI Tools", level: "Prompting", color: "text-emerald-400" },
  ];

  return (
    <div className="relative pt-40 pb-20 px-6 bg-bg-main overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* --- HERO SECTION --- */}
        <section className="mb-32 relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-blue/10 border border-brand-blue/20">
            <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.2em]">
              Fullstack Developer & Designer
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
            CRAFTING <br />
            <span className="text-brand-blue text-glow">DIGITAL</span> <br />
            EXPERIENCE
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
              I build scalable applications and intelligent tools like the
              <span className="text-white"> BeadsEngine</span>. Specialized in
              React, AI integrations, and modern web architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projecten"
                className="px-8 py-4 bg-white text-black font-black rounded-xl hover:bg-brand-blue hover:scale-105 transition-all uppercase text-xs tracking-widest cursor-pointer shadow-xl"
              >
                View my work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all uppercase text-xs tracking-widest cursor-pointer"
              >
                Start a project
              </Link>
            </div>
          </div>
        </section>

        {/* --- TECH STACK BENTO GRID --- */}
        <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 relative z-10">
          {/* Main Skill Box */}
          <div className="md:col-span-2 md:row-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:border-brand-blue/50 transition-colors">
            <div>
              <h3 className="text-white text-2xl font-black mb-2 uppercase italic">
                Fullstack Tech
              </h3>
              <p className="text-slate-400 text-sm max-w-xs">
                Focusing on performance and scalability with the latest stack.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  <span className={`font-black text-xs ${skill.color}`}>
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Focus Box */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-between group hover:bg-brand-blue/20 transition-all">
            <div>
              <h3 className="text-white text-xl font-black uppercase tracking-tight">
                AI Integrated
              </h3>
              <p className="text-brand-blue/80 text-xs font-bold uppercase tracking-widest mt-1">
                Next Gen Workflow
              </p>
            </div>
            <div className="text-4xl group-hover:scale-120 group-hover:rotate-12 transition-transform duration-500">
              🤖
            </div>
          </div>

          {/* Vite/Speed Box */}
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center group hover:border-purple-500/50 transition-colors">
            <span className="text-white font-black text-3xl italic group-hover:scale-110 transition-transform">
              VITE
            </span>
            <span className="text-purple-400 text-[10px] font-black uppercase tracking-tighter">
              Instant Dev
            </span>
          </div>

          {/* BeadsEngine Preview Link */}
          <Link
            to="/projecten"
            className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center group hover:bg-white/10 cursor-pointer transition-all"
          >
            <span className="text-slate-500 text-[10px] font-black uppercase mb-1">
              Explore Tool
            </span>
            <span className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-brand-blue transition-colors italic">
              BEADS ENGINE
            </span>
          </Link>
        </section>

        {/* --- MASTERPIECE: BEADSENGINE SHOWCASE --- */}
        <section className="mt-32">
          <div className="relative group overflow-hidden rounded-4xl border border-white/5 bg-slate-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/img/ezel-render.png"
                alt="BeadsEngine Preview"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-main via-bg-main/20 to-transparent"></div>
            </div>

            {/* Content Card */}
            <div className="relative z-10 p-8 md:p-16 min-h-125 flex flex-col justify-end">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-0.5 bg-brand-blue"></span>
                  <span className="text-brand-blue text-xs font-black uppercase tracking-[0.3em]">
                    Featured Project
                  </span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
                  Beads<span className="text-brand-blue">Engine</span>
                </h2>

                <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed font-medium">
                  A revolutionary tool that transforms complex images into
                  patterns for iron-on beads. Built with a custom algorithm for
                  color matching and pixel-perfect accuracy.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/projecten"
                    className="px-10 py-5 bg-brand-blue text-black font-black rounded-xl hover:bg-white hover:scale-105 transition-all uppercase text-xs tracking-[0.3em] shadow-[0_0_30px_rgba(34,211,238,0.3)] cursor-pointer"
                  >
                    Launch Project
                  </Link>
                  <div className="flex items-center gap-4 px-6 py-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">
                      Tech: React + Canvas API
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

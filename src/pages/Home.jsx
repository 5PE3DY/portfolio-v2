import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Monitor, Smartphone } from "lucide-react";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const skills = [
    { name: "React", level: "Expert", color: "text-blue-400" },
    { name: "Vite", level: "Fast AF", color: "text-purple-400" },
    { name: "Tailwind", level: "Styling", color: "text-cyan-400" },
    { name: "AI Tools", level: "Prompting", color: "text-emerald-400" },
  ];

  const showcases = [
    {
      id: "saas-nova",
      title: "SaaS Nova",
      tag: "Software & Tech",
      desc: "Een bliksemsnelle landing page met focus op conversie en moderne animaties.",
      path: "/showcase/saas-nova",
      icon: <Layers size={20} className="text-brand-blue" />,
      image: "/img/farm-tractor-beads.png", // Jouw BeadsEngine resultaat
    },
    {
      id: "creative-studio",
      title: "Studio Bloom",
      tag: "Portfolio Theme",
      desc: "Minimalistisch design voor creatievelingen die hun werk groots willen presenteren.",
      path: "/showcase/creative-studio",
      icon: <Monitor size={20} className="text-purple-400" />,
      image: null, // Placeholder voor later
    },
    {
      id: "business-hub",
      title: "Focus Consult",
      tag: "Corporate Demo",
      desc: "Strakke, betrouwbare uitstraling voor zakelijke dienstverlening.",
      path: "/showcase/focus-consult",
      icon: <Smartphone size={20} className="text-emerald-400" />,
      image: null,
    },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const firstCard = scrollRef.current.querySelector(".snap-start");
      if (!firstCard) return;
      const cardWidth = firstCard.offsetWidth;
      const gap = 24;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(index);
    }
  };

  const scrollToProject = (index) => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector(".snap-start");
      if (!firstCard) return;
      const cardWidth = firstCard.offsetWidth;
      const gap = 24;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative pt-40 pb-20 px-6 bg-bg-main overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- HERO SECTION --- */}
        <section className="mb-32 relative z-10 text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-blue/10 border border-brand-blue/20">
            <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.2em]">
              Fullstack Developer & Designer
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic text-glow uppercase">
            Crafting <br />
            <span className="text-brand-blue">Digital</span> <br />
            Experience
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed font-medium">
              I build scalable applications and intelligent tools like the
              <span className="text-white font-bold italic"> BeadsEngine</span>.
              Specialized in React, AI integrations, and modern web
              architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projecten"
                className="px-8 py-4 bg-white text-black font-black rounded-xl hover:bg-brand-blue hover:scale-105 transition-all uppercase text-xs tracking-widest shadow-xl"
              >
                View my work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-xl hover:bg-white/10 transition-all uppercase text-xs tracking-widest"
              >
                Start a project
              </Link>
            </div>
          </div>
        </section>

        {/* --- TECH STACK BENTO GRID --- */}
        <section className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 relative z-10 mb-32">
          <div className="md:col-span-2 md:row-span-2 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between group hover:border-brand-blue/50 transition-colors">
            <div>
              <h3 className="text-white text-2xl font-black mb-2 uppercase italic tracking-tight">
                Fullstack Tech
              </h3>
              <p className="text-slate-400 text-sm max-w-xs font-medium opacity-60">
                Focusing on performance and scalability with the latest stack.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              {skills.map((skill) => (
                <div key={skill.name} className="flex flex-col">
                  <span className={`font-black text-xs ${skill.color}`}>
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 p-8 rounded-3xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-between group hover:bg-brand-blue/20 transition-all">
            <div>
              <h3 className="text-white text-xl font-black uppercase tracking-tight">
                AI Integrated
              </h3>
              <p className="text-brand-blue/80 text-[10px] font-black uppercase tracking-widest mt-1">
                Next Gen Workflow
              </p>
            </div>
            <div className="text-4xl group-hover:scale-120 group-hover:rotate-12 transition-transform duration-500">
              🤖
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center group hover:border-purple-500/50 transition-colors">
            <span className="text-white font-black text-3xl italic group-hover:scale-110 transition-transform tracking-tighter uppercase leading-none">
              Vite
            </span>
            <span className="text-purple-400 text-[10px] font-black uppercase tracking-tighter mt-1">
              Instant Dev
            </span>
          </div>

          <Link
            to="/showcase/saas-nova"
            className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-all"
          >
            <span className="text-slate-500 text-[10px] font-black uppercase mb-1">
              Explore Tool
            </span>
            <span className="text-white font-black text-xl uppercase tracking-tighter group-hover:text-brand-blue transition-colors italic">
              BEADS ENGINE
            </span>
          </Link>
        </section>

        {/* --- HORIZONTAL SHOWCASE SLIDER MET PREVIEW --- */}
        <section className="mt-32 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase">
                Showcase
              </h2>
              <p className="text-slate-400 mt-4 max-w-md font-medium text-sm md:text-base leading-relaxed opacity-70">
                Live voorbeelden van moderne web-oplossingen. Klik om de
                volledige ervaring te zien.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-slate-500 font-bold text-[10px] uppercase tracking-widest">
              Scroll{" "}
              <ArrowRight size={14} className="animate-pulse text-brand-blue" />
            </div>
          </div>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scroll-smooth no-scrollbar"
          >
            {showcases.map((item) => (
              <div
                key={item.id}
                className="min-w-[85vw] md:min-w-120 snap-start bg-white/5 border border-white/10 rounded-[2.5rem] p-6 md:p-8 flex flex-col hover:border-brand-blue/40 transition-all group overflow-hidden"
              >
                {/* De Visuele "Browser" Preview */}
                <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden border border-white/5 bg-slate-950 group-hover:border-brand-blue/20 transition-colors">
                  <div className="absolute top-0 w-full bg-white/5 px-3 py-1.5 flex gap-1 border-b border-white/5 z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/30"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/30"></div>
                  </div>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/10 italic text-xs font-black uppercase tracking-widest">
                      Coming Soon
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>
                </div>

                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 text-brand-blue">
                        {item.icon}
                      </div>
                      <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.2em]">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-3xl font-black text-white mt-2 mb-3 uppercase italic tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium opacity-60">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    to={item.path}
                    className="flex items-center justify-between w-full bg-white text-black px-6 py-5 rounded-xl font-black transition-all text-[10px] uppercase tracking-widest hover:bg-brand-blue group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                  >
                    Bekijk Live Demo <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-4">
            {showcases.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToProject(i)}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer hover:bg-brand-blue/50 ${activeIndex === i ? "w-8 bg-brand-blue" : "w-2 bg-white/20"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* --- MASTERPIECE SECTIE --- */}
        <section className="mt-40 pb-20">
          <div className="relative group overflow-hidden rounded-[3rem] border border-white/5 bg-slate-900 shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img
                src="/img/ezel-render.png"
                alt="BeadsEngine Preview"
                className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-bg-main via-bg-main/40 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 md:p-20 min-h-140 flex flex-col justify-end">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-12 h-0.5 bg-brand-blue"></span>
                  <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">
                    Featured Project
                  </span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic text-glow leading-none">
                  Beads<span className="text-brand-blue">Engine</span>
                </h2>
                <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed font-medium">
                  A revolutionary tool that transforms complex images into
                  patterns for iron-on beads. Built with a custom algorithm for
                  color matching and pixel-perfect accuracy.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/showcase/saas-nova"
                    className="px-10 py-5 bg-brand-blue text-black font-black rounded-xl hover:bg-white hover:scale-105 transition-all uppercase text-xs tracking-[0.3em] shadow-[0_0_40px_rgba(56,189,248,0.4)]"
                  >
                    Launch Project
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full -mr-48 -mt-48 opacity-50"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

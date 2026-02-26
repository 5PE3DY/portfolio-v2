import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  ShoppingBag,
  Utensils,
  Layers,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Hammer,
  Pizza,
} from "lucide-react";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRef = useRef(null);

  const skills = [
    { name: "React", level: "Expert", color: "text-blue-400" },
    { name: "Vite", level: "Fast AF", color: "text-purple-400" },
    { name: "Tailwind", level: "Styling", color: "text-cyan-400" },
    { name: "AI Tools", level: "Prompting", color: "text-emerald-400" },
  ];

  const showcases = [
    {
      id: "concept-store",
      title: "VORMR.",
      tag: "E-Commerce / Logic",
      desc: "High-end webshop met focus op state management, winkelwagen-logica en API-architectuur.",
      path: "/showcase/concept-store",
      icon: <ShoppingBag size={20} className="text-emerald-500" />,
      image: "/img/shop/chair.jpg",
      featured: true, // Deze pakt de 4-koloms breedte
    },
    {
      id: "saas-nova",
      title: "SaaS Nova",
      tag: "Software & Tech",
      desc: "Een bliksemsnelle landing page met focus op conversie en moderne animaties.",
      path: "/showcase/saas-nova",
      icon: <Layers size={20} className="text-brand-blue" />,
      image: "/img/farm-tractor-beads.png",
    },
    {
      id: "creative-studio",
      title: "Studio Bloom",
      tag: "Portfolio Theme",
      desc: "Minimalistisch design voor creatievelingen die hun werk groots willen presenteren.",
      path: "/showcase/creative-studio",
      icon: <Monitor size={20} className="text-purple-400" />,
      image: "/img/Creative_studio/Wall_light.jpg",
    },
    {
      id: "bakery-showcase",
      title: "Crust & Crumb",
      tag: "Lifestyle & Retail",
      desc: "Een warme, ambachtelijke ervaring voor een moderne bakkerij met organische vormen.",
      path: "/showcase/bakery",
      icon: <Utensils size={20} className="text-[#f59e0b]" />,
      image: "/img/bakery/Cake_fruit.jpg",
    },
    {
      id: "the-specialist",
      title: "The Specialist",
      tag: "Vakmanschap / ZZP",
      desc: "Conversie-gerichte website voor schilders en bouwbedrijven met focus op directe aanvragen.",
      path: "/showcase/specialist",
      icon: <Hammer size={20} className="text-blue-600" />,
      image: "/img/TheSpecialist/painter-preview.jpg",
    },
    {
      id: "gusto-catering",
      title: "Gusto & Co",
      tag: "Horeca / Events",
      desc: "Elegante sfeer en culinaire beleving. Inclusief menu-modules en event-reserveringen.",
      path: "/showcase/catering",
      icon: <Pizza size={20} className="text-red-500" />,
      image: "/img/Catering/catering-preview.jpg", // Zorg dat deze in je public folder staat
    },
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      // Bereken index voor dots
      const firstCard = scrollRef.current.querySelector(".snap-start");
      if (!firstCard) return;
      const cardWidth = firstCard.offsetWidth;
      const gap = 24;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(index);

      // Bereken progress bar percentage
      const totalScrollable = scrollWidth - clientWidth;
      const progress = (scrollLeft / totalScrollable) * 100;
      setScrollProgress(progress);
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

  const nextSlide = () => {
    const next = activeIndex < showcases.length - 1 ? activeIndex + 1 : 0;
    scrollToProject(next);
  };

  const prevSlide = () => {
    const prev = activeIndex > 0 ? activeIndex - 1 : showcases.length - 1;
    scrollToProject(prev);
  };

  return (
    <div className="relative pt-40 pb-20 px-6 bg-bg-main overflow-hidden font-sans text-white text-left italic-none">
      <div className="max-w-7xl mx-auto">
        {/* --- HERO SECTION --- */}
        <section className="mb-32 relative z-10">
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
        <section className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 relative z-10 mb-32">
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
            <div className="text-left">
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

        {/* --- SHOWCASE SLIDER SECTION --- */}
        <section className="mt-32 relative group">
          <div className="flex justify-between items-end mb-12">
            <div className="w-full">
              <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-none">
                Showcase
              </h2>

              {/* --- PROGRESS BAR (Vanuit je image) --- */}
              <div className="w-full max-w-md h-1.5 bg-white/10 rounded-full mt-8 overflow-hidden">
                <div
                  className="h-full bg-brand-blue shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 ease-out"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="relative -mx-6 px-6">
            {/* Linker Pijl & Masker (Canonical class fix) */}
            <div className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none bg-linear-to-r from-bg-main via-bg-main/80 to-transparent hidden md:block">
              <div className="h-full flex items-center justify-start pl-4">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white pointer-events-auto hover:bg-brand-blue hover:scale-110 transition-all shadow-2xl backdrop-blur-md"
                >
                  <ChevronLeft size={32} />
                </button>
              </div>
            </div>

            {/* Rechter Pijl & Masker (Canonical class fix) */}
            <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none bg-linear-to-l from-bg-main via-bg-main/80 to-transparent hidden md:block">
              <div className="h-full flex items-center justify-end pr-4">
                <button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white pointer-events-auto hover:bg-brand-blue hover:scale-110 transition-all shadow-2xl backdrop-blur-md"
                >
                  <ChevronRight size={32} />
                </button>
              </div>
            </div>

            {/* Slider Content (Canonical class fix: md:min-w-120) */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scroll-smooth no-scrollbar relative z-10"
            >
              {showcases.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[85vw] md:min-w-120 snap-start bg-white/5 border border-white/10 rounded-[2.5rem] p-6 md:p-8 flex flex-col hover:border-brand-blue/40 transition-all group overflow-hidden"
                >
                  <div className="relative aspect-video mb-8 rounded-2xl overflow-hidden border border-white/5 bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-brand-blue border border-white/5">
                          {item.icon}
                        </div>
                        <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.2em]">
                          {item.tag}
                        </span>
                      </div>
                      <h3 className="text-3xl font-black text-white mt-2 mb-3 uppercase italic tracking-tight leading-none">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8 opacity-60">
                        {item.desc}
                      </p>
                    </div>
                    <Link
                      to={item.path}
                      className="flex items-center justify-between w-full bg-white text-black px-6 py-5 rounded-xl font-black transition-all text-[10px] uppercase tracking-widest hover:bg-brand-blue active:scale-95"
                    >
                      Bekijk Live Demo <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INDICATOR DOTS */}
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
      </div>
    </div>
  );
};

export default Home;

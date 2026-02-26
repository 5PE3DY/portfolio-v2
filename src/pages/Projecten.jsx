import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import {
  Filter,
  ExternalLink,
  Rocket,
  Code2,
  Loader2,
  Star,
  Layout,
  ArrowUpRight,
} from "lucide-react";

const Projecten = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [isLaunching, setIsLaunching] = useState(null);

  const themeShowcases = [
    {
      id: "vormr-concept",
      title: "VORMR. Studio",
      tag: "Concept Store",
      image: "/img/shop/LivingRoom.jpg",
      path: "/showcase/concept-store",
      tech: "React, Framer, Tailwind v4",
      color: "from-emerald-500/20",
    },
    {
      id: "saas-nova",
      title: "SaaS Nova",
      tag: "Software Tech",
      image: "/img/farm-tractor-beads.png",
      path: "/showcase/saas-nova",
      tech: "Vite, AI Logic, Bento",
      color: "from-brand-blue/20",
    },
    {
      id: "bakery-showcase",
      title: "The Bakery",
      tag: "Lifestyle & Retail",
      image: "/img/bakery/Cake_fruit.jpg",
      path: "/showcase/bakery",
      tech: "E-commerce, Hooks",
      color: "from-orange-500/20",
    },
    {
      id: "studio-bloom",
      title: "Studio Bloom",
      tag: "Creative Portfolio",
      image: "/img/Creative_studio/Wall_light.jpg",
      path: "/showcase/creative-studio",
      tech: "GSAP, Minimalist",
      color: "from-purple-500/20",
    },
    {
      id: "specialist-zpp",
      title: "The Specialist",
      tag: "Vakmanschap & ZZP",
      image: "/img/TheSpecialist/painter-preview.jpg", // Tijdelijke placeholder
      path: "/showcase/specialist",
      tech: "SEO Optimized, Conversion",
      color: "from-blue-600/20",
    },
    {
      id: "gusto-catering",
      title: "Gusto & Co",
      tag: "Catering & Events",
      image: "/img/Catering/catering-preview.jpg", // Tijdelijke placeholder
      path: "/showcase/catering",
      tech: "Menu Module, Booking",
      color: "from-red-500/20",
    },
  ];

  const filters = ["All", "Webapp", "Design", "Tool", "E-Commerce"];

  useEffect(() => {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const projectsArray = [];
        querySnapshot.forEach((doc) => {
          projectsArray.push({ ...doc.data(), id: doc.id });
        });
        setProjects(projectsArray);
        setLoading(false);
      },
      (error) => {
        console.error("Firebase error:", error);
        setLoading(false);
      },
    );
    return () => unsubscribe();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(
      (p) =>
        (p.tag && p.tag.includes(activeFilter)) ||
        (p.tech && p.tech.includes(activeFilter)),
    );
  }, [activeFilter, projects]);

  const handleLaunch = (project) => {
    const targetUrl =
      project.link ||
      (project.title.toLowerCase().includes("beads")
        ? "https://beadsengine.com"
        : null);
    if (targetUrl) {
      setIsLaunching(project.id);
      setTimeout(() => {
        setIsLaunching(null);
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      }, 1200);
    }
  };

  return (
    <div className="min-h-screen bg-bg-main text-white pt-40 pb-32 font-sans selection:bg-brand-blue selection:text-white text-left italic-none">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER --- */}
        <header className="mb-24 relative animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="absolute -left-8 top-0 w-1 h-32 bg-linear-to-b from-brand-blue to-transparent hidden md:block rounded-full" />
          <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 leading-none text-glow">
            Digital <span className="text-brand-blue">Archive</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl font-medium opacity-80 italic leading-relaxed">
            Exploratie in code en design. Van modulaire thema's tot op maat
            gemaakte digitale ecosystemen.
          </p>
        </header>

        {/* --- SHOWCASES GRID --- */}
        <section className="mb-44">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-brand-blue/10 rounded-xl text-brand-blue border border-brand-blue/20">
                <Layout size={20} />
              </div>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter">
                Premium <span className="text-brand-blue">Showcases</span>
              </h2>
            </div>
            <div className="hidden sm:block text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">
              Interactive Templates
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {themeShowcases.map((theme, index) => (
              <Link
                to={theme.path}
                key={theme.id}
                className={`group relative rounded-4xl overflow-hidden border border-white/10 hover:border-brand-blue/50 transition-all duration-700 hover:-translate-y-2 shadow-2xl ${
                  index === 0
                    ? "md:col-span-4 md:row-span-2 aspect-video md:aspect-auto"
                    : "md:col-span-2 aspect-square"
                }`}
              >
                <img
                  src={theme.image}
                  className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  alt={theme.title}
                />

                {/* Glow Overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${theme.color} to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700`}
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg-main via-bg-main/20 to-transparent p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-4">
                    <Star
                      size={12}
                      className="text-brand-blue fill-brand-blue"
                    />
                    <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.4em]">
                      {theme.tag}
                    </span>
                  </div>
                  <h3
                    className={`${index === 0 ? "text-5xl md:text-7xl" : "text-3xl"} font-black uppercase italic text-white mb-6 group-hover:text-brand-blue transition-colors leading-[0.8] tracking-tighter`}
                  >
                    {theme.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold font-mono">
                        {theme.tech}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md group-hover:bg-brand-blue transition-colors">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* --- FILTER BAR --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16 border-t border-white/5 pt-16">
          <div className="flex items-center gap-3">
            <Filter size={16} className="text-brand-blue" />
            <span className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">
              Project Archive
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-7 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer border ${
                  activeFilter === f
                    ? "bg-brand-blue border-brand-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 border-white/10 text-slate-500 hover:text-white hover:border-white/20"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        {loading ? (
          <div className="py-32 flex flex-col items-center gap-6">
            <Loader2
              className="animate-spin text-brand-blue"
              size={48}
              strokeWidth={1}
            />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-30">
              Decrypting Archive...
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => {
              const isLarge = project.featured || index % 3 === 0;
              return (
                <div
                  key={project.id}
                  className={`group relative bg-white/5 border border-white/10 rounded-4xl overflow-hidden hover:border-brand-blue/30 transition-all duration-700 flex flex-col hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] ${isLarge ? "md:col-span-2" : "md:col-span-1"}`}
                >
                  <div
                    className={`relative overflow-hidden ${isLarge ? "aspect-video" : "aspect-3/4"}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110 opacity-50 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg-main via-bg-main/20 to-transparent opacity-90" />
                    <div className="absolute top-8 left-8 flex flex-wrap gap-2">
                      {project.tech
                        ?.split(",")
                        .slice(0, 4)
                        .map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-[9px] font-bold text-white uppercase tracking-widest border border-white/10"
                          >
                            {t.trim()}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="p-10 md:p-14 flex flex-col flex-1 justify-between items-start text-left relative">
                    <div className="relative z-10 w-full">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.5em] font-mono">
                          {project.tag || "Production"}
                        </span>
                        <div className="h-px flex-1 bg-white/5" />
                      </div>
                      <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 group-hover:text-brand-blue transition-colors leading-[0.8]">
                        {project.title}
                      </h2>
                      <p className="text-slate-400 text-lg leading-relaxed mb-12 opacity-70 italic max-w-2xl">
                        {project.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => handleLaunch(project)}
                      className={`w-full md:w-fit px-12 py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.4em] transition-all cursor-pointer flex items-center justify-center gap-6 shadow-2xl ${isLaunching === project.id ? "bg-emerald-500 text-white" : "bg-white text-black hover:bg-brand-blue hover:text-white"}`}
                    >
                      {isLaunching === project.id ? (
                        <>
                          Initialising System...{" "}
                          <Rocket size={18} className="animate-bounce" />
                        </>
                      ) : (
                        <>
                          Deploy Experience <ExternalLink size={18} />
                        </>
                      )}
                    </button>

                    <div className="absolute -right-12 -bottom-12 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none group-hover:rotate-12 duration-1000">
                      <Code2 size={280} strokeWidth={1} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projecten;

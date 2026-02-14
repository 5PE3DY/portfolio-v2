import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const Projecten = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLaunching, setIsLaunching] = useState(null);

  useEffect(() => {
    // Listen live to the 'projects' collection in Firebase
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

  const handleLaunch = (project) => {
    // URL Logic: Priority to database link, otherwise fallback for Beadsengine
    const targetUrl =
      project.link ||
      (project.title.toLowerCase().includes("beads")
        ? "https://beadsengine.com"
        : null);

    if (targetUrl) {
      setIsLaunching(project.id);

      // UX initialization simulation
      setTimeout(() => {
        setIsLaunching(null);
        window.open(targetUrl, "_blank", "noopener,noreferrer");
      }, 1200);
    } else {
      alert("This project does not have a live link yet.");
    }
  };

  return (
    <div className="min-h-screen bg-bg-main text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-6xl font-black uppercase italic tracking-tighter mb-4">
            Selected <span className="text-brand-blue">Projects</span>
          </h1>
          <p className="text-slate-400 font-medium tracking-wide uppercase text-xs">
            Digital Experiences & Web Applications ({projects.length})
          </p>
        </header>

        {loading ? (
          <div className="text-center py-20 font-black uppercase tracking-widest animate-pulse">
            Loading Universe...
          </div>
        ) : (
          <div className="space-y-32">
            {projects.map((project) => (
              <section
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group"
              >
                {/* Image Showcase */}
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-white/5 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    onError={(e) => (e.target.src = "/img/placeholder.png")}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg-main/80 to-transparent opacity-60" />
                </div>

                {/* Info Content */}
                <div className="flex flex-col items-start">
                  <span className="text-brand-blue font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                    {project.tag}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-6 group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.tech?.split(",").map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-widest border border-white/10"
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleLaunch(project)}
                    className={`
                      px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all cursor-pointer
                      ${
                        isLaunching === project.id
                          ? "bg-emerald-500 text-white animate-pulse"
                          : "bg-white text-black hover:bg-brand-blue hover:text-white shadow-xl active:scale-95"
                      }
                    `}
                  >
                    {isLaunching === project.id
                      ? "Initializing..."
                      : "Launch Project"}
                  </button>
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projecten;

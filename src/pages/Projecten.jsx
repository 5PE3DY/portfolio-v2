import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const Projecten = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLaunching, setIsLaunching] = useState(null); // Slaat ID op van project dat start
  const navigate = useNavigate();

  useEffect(() => {
    // Luister live naar de 'projects' collectie in Firebase
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
    // Als het project een link heeft (zoals BeadsEngine), open deze
    if (project.link || project.title.toLowerCase().includes("beads")) {
      setIsLaunching(project.id);
      setTimeout(() => {
        setIsLaunching(null);
        window.open(
          project.link || "https://beadsengine.com/",
          "_blank",
          "noopener,noreferrer",
        );
      }, 1500);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="pt-40 pb-20 px-6 min-h-screen bg-bg-main text-white text-left">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-left">
            <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">
              Case Studies
            </span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] text-left">
            BIG IDEAS <br />
            <span className="text-brand-blue text-glow italic">REALIZED</span>
          </h1>
        </header>

        {loading ? (
          <div className="text-brand-blue font-black uppercase tracking-[0.4em] animate-pulse">
            Loading Cloud Data...
          </div>
        ) : (
          <div className="grid gap-40">
            {projects.map((project) => (
              <section
                key={project.id}
                className="grid md:grid-cols-2 gap-16 items-center group text-left"
              >
                {/* Afbeelding van Firebase */}
                <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 aspect-video shadow-2xl">
                  <img
                    src={project.image || "/img/placeholder.png"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-bg-main via-transparent to-transparent"></div>
                </div>

                <div className="flex flex-col items-start text-left">
                  <span className="px-3 py-1 bg-brand-blue text-bg-main text-[9px] font-black uppercase tracking-widest rounded mb-6">
                    {project.tag || "Live Project"}
                  </span>
                  <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase italic leading-none tracking-tighter text-white">
                    {project.title}
                  </h2>
                  <p className="text-slate-400 text-xl mb-8 leading-relaxed font-medium">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech?.split(",").map((t) => (
                      <span
                        key={t}
                        className="text-xs font-bold text-brand-blue uppercase tracking-widest"
                      >
                        #{t.trim()}
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
                          : "bg-white text-bg-main hover:bg-brand-blue hover:text-white hover:scale-105 shadow-lg"
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

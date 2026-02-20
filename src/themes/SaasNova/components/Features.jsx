import React from "react";
import { Sparkles, Palette, FileDown } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Sparkles />,
      title: "Nova AI Engine",
      desc: "Onze algoritmes analyseren complexe data en vertalen deze naar begrijpelijke inzichten voor je hele team.",
    },
    {
      icon: <Palette />,
      title: "Custom Interface",
      desc: "Pas de volledige omgeving aan naar jouw huisstijl. Van kleuren tot componenten, jij hebt de volledige controle.",
    },
    {
      icon: <FileDown />,
      title: "Instant Export",
      desc: "Genereer met één klik uitgebreide rapportages en PDF-documenten op basis van je realtime projectdata.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 px-6 max-w-7xl mx-auto bg-[#FFFDF5]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="group p-10 rounded-[2.5rem] bg-white border border-[#1E1B4B]/5 hover:border-[#F59E0B]/40 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-[#1E1B4B]/5"
          >
            {/* Icon wrapper: Amber accent op een lichte achtergrond */}
            <div className="w-14 h-14 bg-[#F59E0B]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#F59E0B]/20 transition-all duration-500">
              {React.cloneElement(f.icon, {
                size: 24,
                className: "text-[#F59E0B]",
              })}
            </div>

            <h3 className="text-2xl font-black mb-4 tracking-tight uppercase italic text-[#1E1B4B]">
              {f.title}
            </h3>

            <p className="text-slate-500 leading-relaxed text-sm font-medium">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

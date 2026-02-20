import React from "react";
import { Check, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "0",
      desc: "Perfect voor individuele makers.",
      features: ["3 Projecten", "Basis AI Engine", "Community toegang"],
      highlight: false,
    },
    {
      name: "Business",
      price: "49",
      desc: "De complete suite voor groeiende teams.",
      features: [
        "Onbeperkte Projecten",
        "Full AI Pattern Suite",
        "Team samenwerking",
        "Priority support",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "149",
      desc: "Maatwerk voor grote organisaties.",
      features: [
        "Custom integraties",
        "Dedicated accountmanager",
        "SLA garanties",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="text-[#F59E0B] font-black uppercase tracking-[0.3em] text-[10px] bg-[#F59E0B]/10 px-4 py-2 rounded-full">
          Tarieven
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-[#1E1B4B] mt-6 tracking-tighter uppercase italic">
          Kies je <span className="text-[#F59E0B] underline">Nova</span> plan
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-10 rounded-4xl border transition-all duration-500 group ${
              plan.highlight
                ? "bg-[#1E1B4B] text-[#FFFDF5] border-[#1E1B4B] scale-105 shadow-2xl shadow-[#1E1B4B]/20 z-10 py-14"
                : "bg-white border-[#1E1B4B]/5 hover:border-[#F59E0B]/30 text-[#1E1B4B]"
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-[#1E1B4B] text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest flex items-center gap-2">
                <Crown size={12} /> Meest gekozen
              </div>
            )}

            <h3
              className={`text-2xl font-black mb-2 uppercase italic ${plan.highlight ? "text-[#F59E0B]" : "text-[#1E1B4B]"}`}
            >
              {plan.name}
            </h3>
            <p
              className={`text-xs mb-8 font-medium ${plan.highlight ? "text-[#FFFDF5]/60" : "text-slate-500"}`}
            >
              {plan.desc}
            </p>

            <div className="flex items-baseline mb-10">
              <span className="text-5xl font-black tracking-tighter">
                €{plan.price}
              </span>
              <span
                className={`ml-2 text-[10px] font-black uppercase tracking-widest opacity-40`}
              >
                / maand
              </span>
            </div>

            <ul className="space-y-5 mb-10">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start text-sm font-medium">
                  <Check
                    size={16}
                    className={`mr-3 shrink-0 ${plan.highlight ? "text-[#F59E0B]" : "text-[#F59E0B]"}`}
                  />
                  <span
                    className={plan.highlight ? "opacity-90" : "opacity-80"}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all cursor-pointer ${
                plan.highlight
                  ? "bg-[#F59E0B] text-[#1E1B4B] hover:scale-105 shadow-xl shadow-[#F59E0B]/20"
                  : "bg-[#1E1B4B] text-[#FFFDF5] hover:bg-[#F59E0B]"
              }`}
            >
              Selecteer {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

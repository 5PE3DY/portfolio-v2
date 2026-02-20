import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const NovaContact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="bg-brand-dark py-24 px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info Sectie */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] text-[10px] font-bold mb-6 uppercase tracking-[0.2em]">
              Support & Sales
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Klaar om je workflow te{" "}
              <span className="text-[#f59e0b]">optimaliseren?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Vraag een vrijblijvende demo aan of win informatie in over onze
              API-integraties.
            </p>
          </div>

          {/* Formulier met de exacte oranje kleur */}
          <div className="bg-[#162033] border border-slate-700/50 p-10 rounded-2xl shadow-2xl relative overflow-hidden">
            {/* Subtiele oranje gloed in de achtergrond */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#f59e0b]/10 blur-[80px] rounded-full" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Naam
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-brand-dark border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]/30 transition-all placeholder:text-slate-600"
                  placeholder="Je volledige naam"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-brand-dark border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#f59e0b] focus:ring-1 focus:ring-[#f59e0b]/30 transition-all placeholder:text-slate-600"
                  placeholder="naam@bedrijf.nl"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-5 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-500 ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-[#f59e0b] text-brand-dark hover:bg-[#d97706] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-[1.02]"
                }`}
              >
                {submitted ? (
                  <>
                    {" "}
                    <CheckCircle size={18} /> Aanvraag Verzonden{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <Send size={18} /> Aanvraag Versturen{" "}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NovaContact;

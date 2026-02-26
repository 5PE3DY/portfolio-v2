import React from "react";
import ShowcaseHeader from "../../components/ShowcaseHeader";
import {
  UtensilsCrossed,
  Calendar,
  Users,
  ArrowRight,
  Star,
  MapPin,
  Phone,
} from "lucide-react";

const GustoApp = () => {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-800 font-sans selection:bg-orange-200 selection:text-stone-900 text-left italic-none">
      <header className="fixed top-0 w-full z-50">
        <ShowcaseHeader projectName="Gusto & Co | Artisanal Catering" />
      </header>

      <nav className="flex justify-between items-center px-6 md:px-16 py-10 bg-transparent absolute top-12 left-0 right-0 z-40">
        <div className="flex flex-col text-left">
          <span className="text-3xl font-serif italic tracking-tighter text-stone-900 leading-none font-bold">
            Gusto <span className="text-orange-700">&</span> Co
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange-800/60 mt-2">
            Artisanal Catering
          </span>
        </div>

        <div className="hidden lg:flex gap-12 font-bold uppercase text-[10px] tracking-[0.2em] text-stone-600">
          <a href="#menu" className="hover:text-orange-700">
            Menu
          </a>
          <a href="#events" className="hover:text-orange-700">
            Events
          </a>
          <a href="#about" className="hover:text-orange-700">
            Onze Passie
          </a>
        </div>

        <button className="border border-stone-300 px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-stone-900 hover:text-white transition-all active:scale-95 cursor-pointer">
          Reserveer Datum
        </button>
      </nav>

      <main className="pt-12">
        <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden text-left">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10 order-2 lg:order-1">
              <div className="w-12 h-px bg-orange-700 mb-8" />
              <h1 className="text-6xl md:text-[5.5rem] font-serif italic leading-[0.9] text-stone-900 mb-10 tracking-tighter font-bold">
                Smaakvol <br />
                <span className="text-orange-800">tot in de</span> <br />
                kleinste details.
              </h1>
              <p className="text-stone-500 text-lg md:text-xl mb-12 max-w-md italic font-medium">
                Authentieke keuken op uw locatie, van intieme diners tot grote
                events.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-stone-900 text-white px-10 py-6 rounded-full font-bold uppercase text-[10px] tracking-[0.3em] hover:bg-orange-800 transition-all flex items-center gap-4 group cursor-pointer">
                  Menu{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-4/5 md:aspect-square lg:aspect-4/5 rounded-t-[200px] rounded-b-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
                  className="w-full h-full object-cover grayscale-20"
                  alt="Catering"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-32 px-6 bg-[#f3f2ee]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Private Dining",
                icon: <UtensilsCrossed size={24} />,
                desc: "Luxe diner aan huis.",
              },
              {
                title: "Business",
                icon: <Users size={24} />,
                desc: "Gezonde lunches op kantoor.",
              },
              {
                title: "Weddings",
                icon: <Star size={24} />,
                desc: "De mooiste dag, compleet verzorgd.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group"
              >
                <div className="text-orange-800/30 mb-8 group-hover:text-orange-800 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif italic text-stone-900 mb-4 font-bold">
                  {service.title}
                </h3>
                <p className="text-stone-500 text-sm max-w-xs italic">
                  {service.desc}
                </p>
                <div className="w-0 h-px bg-orange-800 mt-6 group-hover:w-12 transition-all" />
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-stone-400 font-bold uppercase text-[10px] tracking-[0.3em]">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Utrecht
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} /> 030 987 6543
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GustoApp;

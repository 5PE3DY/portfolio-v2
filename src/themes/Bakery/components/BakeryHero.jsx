import React from "react";

const BakeryHero = () => {
  return (
    <section className="relative min-h-screen bg-[#F5F2ED] flex items-center px-8 md:px-20 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="z-10 order-2 lg:order-1">
          <span className="text-[#C19A6B] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">
            Ambachtelijk & Vers
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-[#4A3728] leading-[1.1] mb-8 font-serif">
            De geur van <br />
            <span className="italic font-light text-[#C19A6B]">
              echt vakmanschap.
            </span>
          </h1>
          <p className="text-[#6B5B4E] text-lg mb-12 max-w-md leading-relaxed">
            Dankzij onze passie voor het oude bakkersvak brengen wij elke dag
            het lekkerste brood en gebak rechtstreeks uit onze warme oven.
          </p>
          <div className="flex flex-wrap gap-5">
            <button className="px-10 py-4 bg-[#4A3728] text-white rounded-full font-bold hover:bg-[#C19A6B] transition-all duration-500 shadow-xl shadow-[#4A3728]/20">
              Bekijk Assortiment
            </button>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square bg-white p-4 shadow-2xl rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden transform rotate-3 hover:rotate-0 transition-all duration-1000 ease-in-out">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000"
              alt="Vers brood"
              className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
            />
          </div>
        </div>
      </div>

      {/* Gecorrigeerde klasse: z-0 in plaats van -z-0 */}
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#E8DCC4]/40 blur-[100px] rounded-full z-0" />
    </section>
  );
};

export default BakeryHero;

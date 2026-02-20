import React from "react";

const BloomHero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#F2F0E9] overflow-hidden px-6 pt-20">
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-[15vw] md:text-[10vw] font-light leading-none tracking-tighter text-slate-800 serif italic">
          Showcase
        </h1>
      </div>

      {/* De 'Floating' Polaroid Grid met geoptimaliseerde hoogtes */}
      <div className="relative w-full max-w-5xl h-100 md:h-125">
        {/* Foto 1: Architectuur */}
        <div className="absolute left-[5%] top-[10%] w-40 md:w-64 bg-white p-4 shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-700">
          <div className="aspect-4/5 overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
              className="w-full h-full object-cover grayscale"
              alt="Arch"
            />
          </div>
        </div>

        {/* Foto 2: Bloem (Center) */}
        <div className="absolute left-[35%] top-[-5%] w-32 md:w-56 bg-white p-3 shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-700 z-20">
          <div className="aspect-square overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=800"
              className="w-full h-full object-cover"
              alt="Flower"
            />
          </div>
        </div>

        {/* Foto 3: Keramiek */}
        <div className="absolute left-[40%] top-[45%] w-36 md:w-60 bg-white p-4 shadow-2xl transform -rotate-1 hover:rotate-0 transition-all duration-700 z-10">
          <div className="aspect-square overflow-hidden bg-slate-50">
            <img
              src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Ceramic"
            />
          </div>
        </div>

        {/* Foto 4: Bloem 2 */}
        <div className="absolute right-[20%] top-[15%] w-32 md:w-52 bg-white p-3 shadow-xl transform rotate-6 hover:rotate-0 transition-all duration-700">
          <div className="aspect-4/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1550159930-40066082a4fc?q=80&w=800"
              className="w-full h-full object-cover"
              alt="Flower 2"
            />
          </div>
        </div>

        {/* Foto 5: Minimal Object */}
        <div className="absolute right-[0%] top-[30%] w-40 md:w-64 bg-white p-4 shadow-lg transform -rotate-2 hover:rotate-0 transition-all duration-700">
          <div className="aspect-4/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=800"
              className="w-full h-full object-cover grayscale"
              alt="Object"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloomHero;

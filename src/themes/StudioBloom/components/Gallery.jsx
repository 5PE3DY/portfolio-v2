import React from "react";

const Gallery = () => {
  const items = [
    {
      id: 1,
      title: "Silent Architecture",
      category: "Exterior",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
      id: 2,
      title: "The Golden Hour",
      category: "Fine Art",
      img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?q=80&w=2064",
    },
    {
      id: 3,
      title: "Minimal Form",
      category: "Object",
      img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2070",
    },
  ];

  return (
    <section className="bg-[#F5F2ED] py-32 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        {/* Item 1 - Grote focus links (4/5 aspect) */}
        <div className="md:col-span-7 group">
          <div className="bg-white p-6 shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-all duration-1000 ease-out">
            <div className="overflow-hidden aspect-4/5 bg-slate-50">
              <img
                src={items[0].img}
                alt={items[0].title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] scale-110 group-hover:scale-100"
              />
            </div>
            <div className="mt-6 flex justify-between items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 mb-1">
                  {items[0].category}
                </p>
                <h3 className="text-3xl font-light italic serif tracking-tight text-slate-800">
                  {items[0].title}
                </h3>
              </div>
              <span className="text-slate-100 text-6xl font-serif select-none">
                01
              </span>
            </div>
          </div>
        </div>

        {/* Item 2 - Zwevend rechts boven (Square aspect) */}
        <div className="md:col-span-4 md:col-start-9 group self-start md:mt-[-10%]">
          <div className="bg-white p-4 shadow-xl transform rotate-2 group-hover:rotate-0 transition-all duration-1000 ease-out">
            <div className="overflow-hidden aspect-square bg-slate-50">
              <img
                src={items[1].img}
                alt={items[1].title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
              />
            </div>
            <div className="mt-4">
              <p className="text-[9px] uppercase tracking-[0.3em] text-slate-400">
                {items[1].category}
              </p>
              <h3 className="text-xl font-light italic serif text-slate-800">
                {items[1].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Item 3 - Subtiel onderaan (Video aspect 16/9) */}
        <div className="md:col-span-6 md:col-start-4 group mt-10">
          <div className="bg-white p-5 shadow-lg transform -rotate-2 group-hover:rotate-0 transition-all duration-1000 ease-out">
            <div className="overflow-hidden aspect-video bg-slate-50">
              <img
                src={items[2].img}
                alt={items[2].title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]"
              />
            </div>
            <p className="mt-4 serif italic text-slate-500 text-center tracking-wide">
              {items[2].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

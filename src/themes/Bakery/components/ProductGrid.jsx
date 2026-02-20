import React from "react";

const products = [
  {
    id: 1,
    name: "Summer Blossom",
    cat: "Wedding",
    price: "€85",
    // Prachtige gestapelde witte taart met aardbeien en rozen
    img: "/img/bakery/Wedding_cake.jpg",
  },
  {
    id: 2,
    name: "Berry Glaze Muse",
    cat: "Patisserie",
    price: "€65",
    // De roze mirror glaze taart met bosvruchten en bloemen
    img: "/img/bakery/Cake_fruit.jpg",
  },
  {
    id: 3,
    name: "Golden Confetti",
    cat: "Celebration",
    price: "€75",
    // De feestelijke taart met sterren en kleurrijke lagen
    img: "/img/bakery/Botanical_bloom.jpg",
  },
];

const ProductGrid = () => {
  return (
    <section className="bg-white py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header voor de sectie om de 'Gallery' look af te maken */}
        <div className="mb-20 text-center">
          <span className="text-[#A68966] text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
            Limited Edition
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#322C28] italic uppercase tracking-tighter">
            Onze Collectie
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group flex flex-col ${index === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative overflow-hidden mb-8 aspect-3/4 bg-[#F9F6F2] shadow-sm group-hover:shadow-2xl transition-all duration-700">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2.5s] ease-out"
                />

                {/* Overlay met prijs die omhoog komt bij hover */}
                <div className="absolute inset-0 bg-[#322C28]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/95 backdrop-blur-sm text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#A68966]">
                    Bestel nu — {product.price}
                  </p>
                </div>
              </div>

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#A68966] mb-2">
                {product.cat}
              </span>
              <h3 className="text-2xl font-serif text-[#322C28] group-hover:italic transition-all uppercase tracking-tighter">
                {product.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const BakeryContact = () => {
  return (
    <section id="contact" className="py-32 bg-white px-8 md:px-20 text-center">
      <div className="max-w-3xl mx-auto">
        <span className="text-[#A68966] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
          Ready for a tasting?
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#322C28] mb-12 uppercase tracking-tighter">
          Laten we samen iets <br />{" "}
          <span className="italic text-[#A68966] font-light">bijzonders</span>{" "}
          maken.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left border-t border-[#F9F6F2] pt-12">
          <div>
            <h4 className="font-serif text-xl mb-4 italic">Bezoek ons</h4>
            <p className="text-sm text-[#6B5B4E] leading-loose font-light">
              Bakkerstraat 12
              <br />
              1011 AB Amsterdam
              <br />
              Nederland
            </p>
          </div>
          <div>
            <h4 className="font-serif text-xl mb-4 italic">Contact</h4>
            <p className="text-sm text-[#6B5B4E] leading-loose font-light">
              hello@crustncrumb.nl
              <br />
              +31 (0) 20 123 4567
            </p>
          </div>
        </div>

        <button className="mt-16 px-16 py-5 bg-[#322C28] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#A68966] transition-all duration-700 shadow-2xl">
          Boek een Tasting
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;

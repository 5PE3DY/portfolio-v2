import React from "react";

const products = [
  {
    id: 1,
    name: "Desembrood",
    price: "€4,50",
    img: "https://images.unsplash.com/photo-1585478259715-876a6a81fc08?q=80&w=800",
  },
  {
    id: 2,
    name: "Franse Croissant",
    price: "€2,20",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800",
  },
  {
    id: 3,
    name: "Kaneelbroodje",
    price: "€3,50",
    img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=800",
  },
];

const ProductGrid = () => {
  return (
    <section className="bg-[#FAF7F2] py-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#C19A6B] font-bold uppercase tracking-widest text-[10px] mb-2 block">
              Vers uit de oven
            </span>
            <h2 className="text-4xl font-serif text-[#4A3728]">
              Ons Assortiment
            </h2>
          </div>
          <button className="text-[#4A3728] font-bold text-xs uppercase tracking-widest border-b-2 border-[#C19A6B] pb-1 hover:text-[#C19A6B] transition-all">
            Bekijk alles
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl mb-6 bg-white shadow-lg">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-[#4A3728]">
                  {product.price}
                </div>
              </div>
              <h3 className="text-xl font-serif text-[#4A3728] mb-1">
                {product.name}
              </h3>
              <p className="text-[#8B5E3C] text-xs uppercase tracking-widest font-bold">
                Ambachtelijk bereid
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

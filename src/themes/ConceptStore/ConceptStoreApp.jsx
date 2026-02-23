import React, { useState, useEffect } from "react";
import ShowcaseHeader from "../../components/ShowcaseHeader";
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  Loader2,
  Trash2,
  Ruler,
  Box,
  ArrowUpRight,
  Zap,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react";

const ConceptStoreApp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Fout bij laden:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists)
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQty = (productId, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const newQty = item.qty + delta;
          return { ...item, qty: newQty > 0 ? newQty : 1 };
        }
        return item;
      }),
    );
  };

  const shopProducts = products.filter((p) => p.id <= 3);
  const discoveryProducts = products.filter((p) => p.id > 3);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-black selection:text-white text-left">
      <header className="fixed top-0 w-full z-50">
        <ShowcaseHeader projectName="VORMR. Concept Store" />
        <nav className="bg-white/95 backdrop-blur-md px-8 md:px-16 py-6 flex justify-between items-center border-b border-slate-200">
          <div className="text-3xl font-black uppercase tracking-widest italic text-black">
            Vormr.
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 group transition-all"
          >
            <ShoppingBag
              size={24}
              className="text-black group-hover:scale-110 transition-transform duration-500"
            />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-[10px] w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg">
                {cart.reduce((acc, item) => acc + item.qty, 0)}
              </span>
            )}
          </button>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="pt-24 border-b border-slate-100">
        <div className="relative h-[65vh] w-full overflow-hidden">
          {/* Tailwind Fix: grayscale-10 */}
          <img
            src="/img/shop/LivingRoom.jpg"
            className="w-full h-full object-cover grayscale-10"
            alt="VORMR Interior"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 gap-4">
          <Loader2 className="animate-spin text-slate-300" size={48} />
        </div>
      ) : (
        <>
          {/* --- SECTION 1: SHOP --- */}
          <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
              {shopProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-1 text-black">
                    {product.name}
                  </h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 mb-4 font-mono">
                    {product.category}
                  </p>
                  <p className="text-2xl font-black italic mb-6 text-black/80">
                    €{product.price}
                  </p>
                  <div className="aspect-square bg-[#F5F4F2] mb-6 overflow-hidden relative shadow-inner group-hover:shadow-2xl transition-all duration-1000">
                    <img
                      src={product.image}
                      className="w-full h-full object-contain p-12 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000"
                      alt={product.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- SECTION 2: DISCOVERY --- */}
          <section className="py-32 px-8 md:px-16 bg-[#F2F1EF] border-y border-slate-200">
            <div className="max-w-7xl mx-auto">
              <div className="mb-16">
                <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-500 mb-3 font-mono text-left">
                  Discover More:
                </h2>
                <p className="text-4xl font-black uppercase tracking-tighter text-black text-left">
                  Curated Combinations
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {discoveryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group cursor-pointer bg-white overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700"
                  >
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={product.image}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                        alt={product.name}
                      />
                    </div>
                    <div className="p-10 space-y-5 text-center">
                      <h3 className="text-lg font-black uppercase tracking-widest leading-tight text-black">
                        {product.name}
                      </h3>
                      <div className="h-px w-8 bg-emerald-500 mx-auto" />
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full bg-black text-white py-4 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-emerald-600 transition-all duration-500"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- SECTION 3: CTA --- */}
          <section className="py-48 px-8 md:px-16 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto relative flex flex-col items-start text-left">
              <div className="absolute -right-20 -top-20 text-[22rem] font-black text-slate-100 select-none pointer-events-none uppercase tracking-tighter leading-none opacity-80">
                Talk.
              </div>
              <div className="relative z-10 space-y-10 max-w-2xl">
                <div className="flex items-center gap-6">
                  <span className="text-emerald-600 text-[11px] font-black uppercase tracking-[0.6em]">
                    Consultancy
                  </span>
                  {/* Tailwind Fix: h-0.5 */}
                  <div className="h-0.5 w-20 bg-emerald-600" />
                </div>
                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] text-black">
                  Uw ruimte,
                  <br />
                  Onze visie.
                </h2>
                <p className="text-xl md:text-2xl font-light text-slate-500 italic border-l-8 border-black pl-10">
                  "Hulp nodig bij het vormgeven van uw interieur? Onze curatoren
                  staan klaar voor persoonlijk advies."
                </p>
                <div className="pt-8">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-8 bg-black text-white px-14 py-7 text-[12px] font-black uppercase tracking-[0.5em] hover:bg-emerald-600 transition-all duration-700 shadow-2xl"
                  >
                    Start Project{" "}
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-4 transition-transform duration-500"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* --- VOLLWERTIGE SHOP FOOTER --- */}
      <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 text-left">
            {/* Brand Column */}
            <div className="space-y-8">
              <div className="text-3xl font-black uppercase tracking-widest italic">
                Vormr<span className="text-emerald-500">.</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Exclusieve interieur-curaties en architectonische objecten voor
                de moderne leefruimte. Gevormd door passie, gedefinieerd door
                eenvoud.
              </p>
              <div className="flex gap-6">
                <Instagram
                  size={20}
                  className="text-slate-500 hover:text-emerald-500 cursor-pointer transition-colors"
                />
                <Facebook
                  size={20}
                  className="text-slate-500 hover:text-emerald-500 cursor-pointer transition-colors"
                />
                <Twitter
                  size={20}
                  className="text-slate-500 hover:text-emerald-500 cursor-pointer transition-colors"
                />
              </div>
            </div>

            {/* Menu: Collection */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">
                Collectie
              </h4>
              <ul className="space-y-4 text-sm font-medium text-slate-300 italic">
                <li className="hover:text-white cursor-pointer transition-colors">
                  Meubilair
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Verlichting
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Accessoires
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Kunst & Prints
                </li>
              </ul>
            </div>

            {/* Menu: Service */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">
                Service
              </h4>
              <ul className="space-y-4 text-sm font-medium text-slate-300 italic">
                <li className="hover:text-white cursor-pointer transition-colors">
                  Klantenservice
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Verzending & Retour
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Zakelijke Projecten
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Interieuradvies
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">
                Nieuwsbrief
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Ontvang de laatste curaties en design nieuws direct in uw inbox.
              </p>
              <div className="relative group">
                <input
                  type="email"
                  placeholder="E-mail adres"
                  className="w-full bg-transparent border-b border-slate-700 py-3 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button className="absolute right-0 top-3 text-emerald-500">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-12 border-t border-slate-800 flex flex-col md:row justify-between items-center gap-8">
            <div className="flex gap-12 text-[9px] font-black uppercase tracking-[0.3em] text-slate-500">
              <span className="hover:text-white cursor-pointer transition-colors">
                Privacy Policy
              </span>
              <span className="hover:text-white cursor-pointer transition-colors">
                Algemene Voorwaarden
              </span>
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.6em] text-slate-600">
              © 2026 VORMR STUDIO ARCHIVE — ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>

      {/* --- MODAL (z-200) --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500 text-left">
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="bg-white w-full max-w-7xl grid md:grid-cols-2 relative overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-8 right-8 z-10 p-4 bg-slate-100 hover:bg-black hover:text-white rounded-full transition-all duration-500"
            >
              <X size={24} />
            </button>
            <div className="bg-[#fcfcfc] flex items-center justify-center p-16">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto max-h-[70vh] object-contain mix-blend-multiply"
              />
            </div>
            <div className="p-10 md:p-24 flex flex-col justify-center bg-white">
              <span className="text-emerald-600 text-[11px] font-black uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                <Zap size={14} fill="currentColor" /> Authentic VORMR.
              </span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.75] text-black">
                {selectedProduct.name}
              </h2>
              <p className="text-slate-500 text-xl leading-relaxed italic border-l-4 border-emerald-600 pl-10 mb-12">
                {selectedProduct.story}
              </p>
              <div className="grid grid-cols-2 gap-12 py-10 border-y border-slate-100 mb-12 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono">
                    <Box size={14} /> Material
                  </div>
                  <p className="text-sm font-bold text-black">
                    {selectedProduct.material}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-mono">
                    <Ruler size={14} /> Format
                  </div>
                  <p className="text-sm font-bold text-black">
                    {selectedProduct.dimensions}
                  </p>
                </div>
              </div>
              <button
                onClick={() => addToCart(selectedProduct)}
                className="w-full bg-black text-white py-8 text-[12px] font-black uppercase tracking-[0.5em] hover:bg-emerald-600 transition-all duration-700 shadow-2xl"
              >
                Acquire — €{selectedProduct.price}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- CART (z-200) --- */}
      <div
        className={`fixed inset-0 z-200 transition-opacity duration-700 ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-full max-w-xl bg-white shadow-2xl transition-transform duration-700 transform ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-16 h-full flex flex-col text-left">
            <h2 className="text-xs font-black uppercase tracking-[0.6em] text-slate-400 mb-16 border-b border-slate-100 pb-8 italic">
              The Archive
            </h2>
            <div className="flex-1 overflow-y-auto space-y-12">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-10 group">
                  <div className="w-28 h-36 bg-[#F5F4F2] shrink-0 flex items-center justify-center p-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-black uppercase tracking-widest text-black">
                        {item.name}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-300 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-8 border border-slate-200 px-4 py-2">
                        <button onClick={() => updateQty(item.id, -1)}>
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-bold w-6 text-center">
                          {item.qty}
                        </span>
                        <button onClick={() => updateQty(item.id, 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-2xl font-black italic text-black">
                        €{item.price * item.qty}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t-4 border-black pt-16 mt-auto">
              <div className="flex justify-between items-center mb-12">
                <span className="text-[11px] font-black uppercase tracking-[0.5em]">
                  Total Archive
                </span>
                <span className="text-5xl font-black tracking-tighter italic text-black">
                  €{cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
                </span>
              </div>
              <button className="w-full bg-black text-white py-10 text-[12px] font-black uppercase tracking-[0.6em] hover:bg-emerald-600 transition-all duration-700 shadow-2xl">
                Complete Purchase
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ConceptStoreApp;

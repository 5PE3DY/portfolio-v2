import React, { useState, useEffect } from "react";
import ShowcaseHeader from "../../components/ShowcaseHeader";
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  Loader2,
  Trash2,
  Heart,
  Search,
  ArrowUpRight,
  PlusCircle,
  MapPin,
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Instagram,
} from "lucide-react";

const ConceptStoreApp = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState("shop");

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
    window.scrollTo(0, 0);
  }, [currentPage]);

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

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const shopProducts = products.filter((p) => p.id <= 6);

  return (
    <div className="min-h-screen bg-[#F8F6F3] text-[#2D2926] font-sans selection:bg-[#C5B4A2] selection:text-white text-left">
      <header className="fixed top-0 w-full z-50">
        <ShowcaseHeader projectName="VORMR. | Studio & Store" />
        <nav className="bg-white/70 backdrop-blur-2xl px-8 md:px-16 py-5 flex justify-between items-center border-b border-black/5">
          <div className="flex items-center gap-10">
            <button
              onClick={() => setCurrentPage("shop")}
              className="text-2xl font-black uppercase tracking-tighter italic cursor-pointer transition-opacity hover:opacity-70"
            >
              Vormr.
            </button>
            <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
              <button
                onClick={() => setCurrentPage("shop")}
                className={`${currentPage === "shop" ? "text-black" : "text-black/30"} hover:text-black transition-colors cursor-pointer`}
              >
                Collectie
              </button>
              <button
                onClick={() => setCurrentPage("studio")}
                className={`${currentPage === "studio" ? "text-black" : "text-black/30"} hover:text-black transition-colors cursor-pointer`}
              >
                De Studio
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Search
              size={20}
              strokeWidth={1.5}
              className="cursor-pointer hover:scale-110 transition-transform hidden md:block"
            />
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative group p-2 bg-black text-white rounded-full transition-transform active:scale-90 cursor-pointer"
            >
              <ShoppingBag size={18} strokeWidth={2} />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C5B4A2] text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-in zoom-in">
                  {cart.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              )}
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-16 max-w-400 mx-auto leading-normal">
        {currentPage === "shop" ? (
          <>
            {/* --- BENTO HERO SHOP --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[70vh] mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="md:col-span-2 md:row-span-2 relative rounded-4xl overflow-hidden group">
                <img
                  src="/img/shop/LivingRoom.jpg"
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                  alt="Hero"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-12">
                  <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.5em] mb-4 font-mono text-left">
                    Spring Collection 2026
                  </span>
                  <h1 className="text-white text-5xl md:text-7xl font-serif italic mb-8 leading-tight text-left">
                    De essentie van rust.
                  </h1>
                  <button
                    onClick={() => setCurrentPage("studio")}
                    className="w-fit bg-white text-black px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-[#C5B4A2] hover:text-white transition-all cursor-pointer shadow-lg"
                  >
                    Onze Studio
                  </button>
                </div>
              </div>
              <div className="md:col-span-2 bg-white rounded-4xl p-12 flex flex-col justify-center border border-black/5 relative overflow-hidden group text-left">
                <h2 className="text-3xl font-serif italic mb-4">
                  Handgemaakte Objecten
                </h2>
                <p className="text-black/50 text-sm max-w-xs mb-6">
                  Tijdloze stukken die generaties lang meegaan.
                </p>
                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors cursor-pointer">
                  <ArrowUpRight size={18} />
                </div>
                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  <ShoppingBag size={300} strokeWidth={1} />
                </div>
              </div>
              <div className="bg-[#C5B4A2] rounded-4xl p-8 flex flex-col justify-between text-white text-left">
                <PlusCircle size={32} />
                <div className="font-bold uppercase text-[10px] tracking-widest">
                  Nieuwe Items Wekelijks
                </div>
              </div>
              <div className="bg-white rounded-4xl p-8 flex items-center justify-center border border-black/5">
                <div className="text-center">
                  <div className="text-3xl font-black italic tracking-tighter mb-1 uppercase">
                    100%
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-widest opacity-40">
                    Authentic Design
                  </div>
                </div>
              </div>
            </div>

            {/* --- PRODUCT GRID --- */}
            <div className="space-y-12">
              <div className="flex justify-between items-end border-b border-black/5 pb-8">
                <h2 className="text-4xl font-serif italic text-left">
                  Collectie 2026
                </h2>
                <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40">
                  <span className="text-black opacity-100 underline underline-offset-8 decoration-2 cursor-pointer">
                    Alles
                  </span>
                  <span className="hover:text-black transition-colors cursor-pointer">
                    Meubilair
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {loading ? (
                  <div className="col-span-full flex justify-center py-20">
                    <Loader2
                      className="animate-spin text-[#C5B4A2]"
                      size={40}
                    />
                  </div>
                ) : (
                  shopProducts.map((product) => (
                    <div key={product.id} className="group relative text-left">
                      <div className="aspect-3/4 rounded-4xl overflow-hidden bg-white border border-black/5 relative shadow-sm group-hover:shadow-2xl transition-all duration-700">
                        <img
                          src={product.image}
                          className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-700"
                          alt={product.name}
                        />
                        <button
                          onClick={() => addToCart(product)}
                          className="absolute bottom-6 right-6 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-500 shadow-xl hover:bg-[#C5B4A2] cursor-pointer active:scale-90"
                        >
                          <PlusCircle size={24} />
                        </button>
                      </div>
                      <div className="mt-6 flex justify-between items-start px-2">
                        <div
                          onClick={() => setSelectedProduct(product)}
                          className="cursor-pointer"
                        >
                          <h3 className="text-lg font-bold tracking-tight mb-1">
                            {product.name}
                          </h3>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 font-mono">
                            {product.category}
                          </p>
                        </div>
                        <p className="text-xl font-serif italic font-bold">
                          €{product.price}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        ) : (
          /* --- STUDIO & SERVICE PAGE (Bento Style) --- */
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-white rounded-4xl p-12 md:p-20 border border-black/5 relative overflow-hidden text-left">
                <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.6em] mb-6 block font-mono">
                  De Filosofie
                </span>
                <h2 className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight text-black">
                  Gevormd door
                  <br />
                  eenvoud.
                </h2>
                <p className="text-black/50 text-xl italic leading-relaxed max-w-xl ">
                  "Wij geloven dat een ruimte pas tot leven komt wanneer elk
                  object een functie heeft en rust uitstraalt."
                </p>
                <div className="absolute -right-20 -top-20 text-[20rem] font-black text-slate-50 select-none pointer-events-none uppercase tracking-tighter opacity-50">
                  Studio
                </div>
              </div>
              <div className="bg-[#C5B4A2] rounded-4xl p-12 text-white flex flex-col justify-between text-left group cursor-pointer transition-colors hover:bg-black">
                <Instagram size={32} strokeWidth={1.5} />
                <div className="space-y-4">
                  <h4 className="font-bold uppercase text-[10px] tracking-widest">
                    Digital Archive
                  </h4>
                  <p className="text-sm italic opacity-80 leading-relaxed">
                    Verken onze dagelijkse curaties op sociale media.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* De Interactieve Kaart Bento Card */}
              <div className="lg:col-span-2 aspect-video md:aspect-auto bg-[#F2F1EF] rounded-4xl relative overflow-hidden grayscale border border-black/5 group cursor-crosshair">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-black rounded-full relative border-2 border-white shadow-2xl"></div>
                  <span className="bg-black text-white text-[8px] px-4 py-1.5 font-bold uppercase tracking-widest rounded-full shadow-lg">
                    VORMR. HQ
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-black/5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">
                    Amsterdam Center
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-4xl p-10 border border-black/5 space-y-6 text-left">
                <Clock size={24} className="text-[#C5B4A2]" strokeWidth={1.5} />
                <div className="space-y-2">
                  <h4 className="font-bold text-[10px] uppercase tracking-widest text-black/40 font-mono">
                    Openingstijden
                  </h4>
                  <p className="text-sm font-bold text-black italic">
                    Ma - Vr: 09:00 - 18:00
                    <br />
                    Zat: 10:00 - 17:00
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-4xl p-10 border border-black/5 flex flex-col justify-center text-left">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="font-bold text-[10px] uppercase tracking-widest text-[#C5B4A2] font-mono">
                      Telefoon
                    </h4>
                    <p className="text-xl font-serif italic text-black leading-none">
                      +31 20 765 43 21
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#C5B4A2] transition-colors cursor-pointer shadow-lg">
                      <Phone size={18} />
                    </div>
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-[#C5B4A2] transition-colors cursor-pointer shadow-lg">
                      <Mail size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-4xl p-12 md:p-20 border border-black/5 grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-8 text-left">
                <h3 className="text-4xl md:text-5xl font-serif italic leading-tight text-black">
                  Start een project
                  <br />
                  met onze studio.
                </h3>
                <p className="text-black/50 text-sm leading-relaxed italic">
                  Heb je een specifiek item op het oog of wil je een compleet
                  interieuradvies? Stuur ons een bericht.
                </p>
              </div>
              <form
                className="space-y-6 text-left"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Naam"
                    className="w-full bg-[#F8F6F3] rounded-2xl px-6 py-4 outline-none focus:ring-1 ring-[#C5B4A2] transition-all text-sm font-medium border border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full bg-[#F8F6F3] rounded-2xl px-6 py-4 outline-none focus:ring-1 ring-[#C5B4A2] transition-all text-sm font-medium border border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Uw bericht"
                  className="w-full bg-[#F8F6F3] rounded-3xl px-6 py-6 outline-none focus:ring-1 ring-[#C5B4A2] transition-all text-sm font-medium h-40 resize-none border border-transparent"
                ></textarea>
                <button className="w-full bg-black text-white py-6 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#C5B4A2] transition-all flex items-center justify-center gap-4 cursor-pointer shadow-xl active:scale-95">
                  Verstuur Bericht <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* --- QUICK VIEW MODAL --- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          />
          <div className="bg-white w-full max-w-6xl grid md:grid-cols-2 relative overflow-hidden rounded-4xl shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-8 right-8 z-10 p-3 bg-slate-100 hover:bg-black hover:text-white rounded-full transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="bg-[#fcfcfc] flex items-center justify-center p-16">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>
            <div className="p-10 md:p-20 flex flex-col justify-center text-left">
              <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em] mb-4 flex items-center gap-2 font-mono">
                <Zap size={14} fill="currentColor" /> Authentic VORMR.
              </span>
              <h2 className="text-5xl font-serif italic mb-6 leading-tight">
                {selectedProduct.name}
              </h2>
              <p className="text-black/50 leading-relaxed mb-10 italic">
                "{selectedProduct.story}"
              </p>
              <button
                onClick={() => addToCart(selectedProduct)}
                className="w-full bg-black text-white py-6 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#C5B4A2] transition-all cursor-pointer shadow-xl active:scale-95"
              >
                Toevoegen aan collectie — €{selectedProduct.price}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- CART SIDEBAR --- */}
      <div
        className={`fixed inset-0 z-100 transition-opacity duration-700 ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          className="absolute inset-0 bg-black/10 backdrop-blur-md"
          onClick={() => setIsCartOpen(false)}
        />
        <aside
          className={`absolute right-4 top-4 bottom-4 w-full max-w-md bg-white/90 backdrop-blur-2xl rounded-4xl shadow-2xl transition-transform duration-700 transform ${isCartOpen ? "translate-x-0" : "translate-x-[120%]"}`}
        >
          <div className="p-12 h-full flex flex-col text-left">
            <div className="flex justify-between items-center mb-10 border-b border-black/5 pb-6">
              <h2 className="text-2xl font-serif italic">Archive</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-black hover:text-white rounded-full transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-8 pr-2 custom-scrollbar text-left">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center opacity-20 italic font-serif">
                  Selectie is leeg...
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-6 items-center animate-in slide-in-from-right-2"
                  >
                    <div className="w-20 h-24 bg-[#F8F6F3] rounded-2xl p-4 shrink-0 shadow-inner">
                      <img
                        src={item.image}
                        className="w-full h-full object-contain mix-blend-multiply"
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[11px] font-bold uppercase tracking-widest mb-1">
                        {item.name}
                      </h3>
                      <p className="text-lg font-serif italic mb-2 tracking-tighter">
                        €{item.price}
                      </p>
                      <div className="flex items-center gap-4 bg-black/5 w-fit px-3 py-1 rounded-full text-xs font-mono">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="cursor-pointer hover:text-emerald-600"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-4 text-center font-bold">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="cursor-pointer hover:text-emerald-600"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-300 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="pt-8 mt-auto border-t border-black/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 font-mono">
                  Totaal
                </span>
                <span className="text-3xl font-serif italic font-black">
                  €{cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
                </span>
              </div>
              <button className="w-full bg-black text-white py-6 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#C5B4A2] transition-all cursor-pointer shadow-xl active:scale-95">
                Check-out
              </button>
            </div>
          </div>
        </aside>
      </div>

      <footer className="py-20 border-t border-black/5 opacity-40 mt-20">
        <div className="text-center space-y-4">
          <div className="text-xl font-black italic uppercase tracking-tighter">
            Vormr.
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] font-mono">
            © 2026 Studio Archive
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ConceptStoreApp;

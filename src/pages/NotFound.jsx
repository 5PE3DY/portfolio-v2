import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-6 overflow-hidden">
      {/* Grote achtergrond tekst voor de 'tech' vibe */}
      <h1 className="text-[20vw] font-black text-brand-blue opacity-5 absolute select-none pointer-events-none">
        404
      </h1>

      <div className="relative z-10 text-center">
        <div className="mb-6 inline-block">
          {/* Een klein visueel element dat verwijst naar pixels/kralen */}
          <div className="grid grid-cols-3 gap-1 w-12 mx-auto opacity-50">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-sm ${i % 2 === 0 ? "bg-brand-blue" : "bg-white"}`}
              ></div>
            ))}
          </div>
        </div>

        <h2 className="text-4xl font-black uppercase italic tracking-tighter mb-4">
          Pattern <span className="text-brand-blue">Not Found</span>
        </h2>

        <p className="text-slate-400 font-medium mb-8 max-w-md mx-auto leading-relaxed">
          Even the **BeadsEngine** couldn't render this page. It seems this
          coordinate doesn't exist in our pattern.
        </p>

        <Link
          to="/"
          className="group relative inline-flex items-center justify-center px-8 py-3 font-black uppercase tracking-widest text-xs transition-all duration-300"
        >
          <span className="absolute inset-0 w-full h-full rounded-full bg-white group-hover:bg-brand-blue transition-colors"></span>
          <span className="relative text-black group-hover:text-white">
            Return to Base
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

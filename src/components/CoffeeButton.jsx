import React from "react";

const CoffeeButton = () => {
  return (
    <a
      href="https://buymeacoffee.com/franspetervanlimburg"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-100 group flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="bg-white text-bg-main px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-2xl">
        Support the engine
      </span>

      {/* De Zwevende Knop */}
      <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 text-bg-main fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.25 10.5H22.5V13.5H20.25V10.5Z" />
          <path d="M4.5 3H16.5C18.1569 3 19.5 4.34315 19.5 6V15C19.5 18.3137 16.8137 21 13.5 21H7.5C4.18629 21 1.5 18.3137 1.5 15V6C1.5 4.34315 2.84315 3 4.5 3ZM16.5 4.5H4.5C3.67157 4.5 3 5.17157 3 6V15C3 17.4853 5.01472 19.5 7.5 19.5H13.5C15.9853 19.5 18 17.4853 18 15V6C18 5.17157 17.3284 4.5 16.5 4.5ZM21 9H22.5C23.3284 9 24 9.67157 24 10.5V13.5C24 14.3284 23.3284 15 22.5 15H21V13.5H22.5V10.5H21V9Z" />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute inset-0 bg-brand-blue/20 blur-xl rounded-full animate-pulse -z-10"></div>
    </a>
  );
};

export default CoffeeButton;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ShowcaseHeader = ({ projectName }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="w-full bg-[#322C28] py-1.5 md:py-2.5 px-4 md:px-20 flex justify-between items-center border-b border-white/5 relative z-70">
      <div className="flex items-center gap-2 md:gap-4">
        <span className="text-[6px] md:text-[8px] font-black uppercase tracking-[0.3em] text-[#A68966]/60">
          {isHome ? "Portfolio v2.0" : "Showcase"}
        </span>
        {!isHome && projectName && (
          <span className="hidden xs:inline text-[6px] md:text-[8px] font-black uppercase tracking-[0.3em] text-[#A68966]">
            // {projectName}
          </span>
        )}
      </div>

      <Link
        to="/"
        className="flex items-center gap-1 md:gap-2 text-[#A68966] hover:text-white transition-all group"
      >
        <ArrowLeft
          size={8}
          className="md:size-10 group-hover:-translate-x-1 transition-transform"
        />
        <span className="text-[7px] md:text-[9px] font-black uppercase tracking-widest md:tracking-widest">
          Exit
        </span>
      </Link>
    </div>
  );
};

export default ShowcaseHeader;

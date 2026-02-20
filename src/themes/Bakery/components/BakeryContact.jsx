import React from "react";

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
      </div>
    </section>
  );
};

export default BakeryContact;

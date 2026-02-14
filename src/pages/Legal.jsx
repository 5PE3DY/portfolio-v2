import React from "react";

const Legal = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Header Section */}
        <div className="bg-slate-950 p-8 text-white border-b-4 border-blue-600">
          <h1 className="text-3xl font-black uppercase italic tracking-tighter">
            Legal <span className="text-blue-500">Center</span>
          </h1>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
            Franspetervanlimburg.nl — Business & Privacy Policy
          </p>
        </div>

        <div className="p-8 space-y-12">
          {/* Section 01: Privacy */}
          <section>
            <h2 className="text-xl font-black uppercase italic text-blue-600 mb-4 flex items-center gap-3">
              <span className="bg-blue-50 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center not-italic text-sm font-black">
                01
              </span>
              Privacy & Data
            </h2>
            <div className="text-sm leading-relaxed text-slate-600 space-y-4 font-medium italic">
              <p>
                Franspetervanlimburg.nl is the legal entity behind this
                portfolio and the driving force behind the development of{" "}
                <strong>Beadsengine.com</strong>.
              </p>
              <p>
                We only collect necessary technical data via Firebase (Google)
                for project management and secure authentication. Your data is
                never shared with third parties for marketing purposes.
              </p>
            </div>
          </section>

          {/* Section 02: Disclaimer */}
          <section>
            <h2 className="text-xl font-black uppercase italic text-blue-600 mb-4 flex items-center gap-3">
              <span className="bg-blue-50 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center not-italic text-sm font-black">
                02
              </span>
              Disclaimer
            </h2>
            <div className="text-sm leading-relaxed text-slate-600 space-y-4 font-medium italic">
              <p>
                The projects displayed serve as a portfolio of technical
                expertise and craftsmanship. Franspetervanlimburg.nl is not
                liable for any damages arising from the use of applications or
                links accessed through this portfolio.
              </p>
            </div>
          </section>

          {/* Section 03: Intellectual Property */}
          <section>
            <h2 className="text-xl font-black uppercase italic text-blue-600 mb-4 flex items-center gap-3">
              <span className="bg-blue-50 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center not-italic text-sm font-black">
                03
              </span>
              Intellectual Property
            </h2>
            <div className="text-sm leading-relaxed text-slate-600 space-y-4 font-medium italic">
              <p>
                All software, algorithms, and visual content (such as the{" "}
                <strong>Ezel-render</strong>) on this website are the
                intellectual property of Franspetervanlimburg.nl, unless
                explicitly stated otherwise.
              </p>
            </div>
          </section>

          {/* Business Footer Details */}
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span className="block text-[9px] font-black uppercase text-slate-400 tracking-widest leading-loose">
                Contact
              </span>
              <span className="font-bold text-sm tracking-tight italic text-blue-600 underline">
                info@beadsengine.com
              </span>
            </div>
            <div className="text-right">
              <span className="text-[9px] font-black uppercase text-slate-300 tracking-tighter">
                Location: Netherlands
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;

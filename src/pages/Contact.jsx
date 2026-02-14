import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Initialization on mount
  useEffect(() => {
    emailjs.init("-FQSfH2Fr1xWVwyOC");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsError(false);

    // Determine context based on hostname
    const isBeadsEngine = window.location.hostname.includes("beadsengine");
    const currentTag = isBeadsEngine ? "BEADSENGINE.COM" : "FRANSPETER.DEV";
    const currentThemeColor = isBeadsEngine ? "#000000" : "#0070f3";

    const baseData = {
      name: form.current.name.value,
      email: form.current.email.value,
      title: form.current.title.value,
      message: form.current.message.value,
    };

    // 1. Parameters for the inquiry mail to YOU
    const inquiryParams = {
      ...baseData,
      site_tag: currentTag,
      header_color: currentThemeColor,
    };

    // Send first mail
    emailjs
      .send("service_emek1hj", "template_k48pots", inquiryParams)
      .then(() => {
        // 2. Parameters for the Auto-Reply to the CLIENT
        const autoReplyParams = {
          name: baseData.name,
          email: baseData.email,
          title: baseData.title,
          header_color: currentThemeColor,
          site_tag: currentTag,
        };

        // Send second mail (Auto-Reply)
        return emailjs.send(
          "service_emek1hj",
          "template_eimoqpn",
          autoReplyParams,
        );
      })
      .then(() => {
        console.log("System: Inquiry processed and confirmation sent.");
        setSubmitted(true);
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setIsError(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="relative pt-40 pb-20 px-6 min-h-screen bg-bg-main text-white overflow-hidden text-left">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-brand-blue/5 blur-[120px] rounded-full -mr-64 -mt-64 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT: Branding & Info */}
        <div className="lg:sticky lg:top-40 space-y-12">
          <div>
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-brand-blue/10 border border-brand-blue/20">
              <span className="text-brand-blue text-[10px] font-black uppercase tracking-[0.3em]">
                Contact & Inquiry
              </span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] mb-12">
              LET'S <br />
              <span className="text-brand-blue text-glow">TALK.</span>
            </h1>

            <p className="text-slate-400 text-xl max-w-md font-medium leading-relaxed italic">
              Do you have a vision for a new app or want to implement the
              powerful logic of the{" "}
              <span className="text-white border-b border-brand-blue/30">
                BeadsEngine
              </span>{" "}
              into your project? I’m here to help with custom software or
              suitable licensing options.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-6 sm:max-w-xs">
            <div className="flex items-center gap-5 p-4 rounded-3xl bg-white/3 border border-white/5 hover:border-brand-blue/30 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                ✉️
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                  Direct Mail
                </p>
                <p className="text-sm font-bold text-slate-200 uppercase tracking-tight">
                  info@beadsengine.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-4 rounded-3xl bg-white/3 border border-white/5 hover:border-brand-blue/30 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                🌍
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                  Location
                </p>
                <p className="text-sm font-bold text-slate-200 uppercase tracking-tight">
                  Netherlands, Remote
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: The Form */}
        <div className="relative w-full">
          <div className="relative bg-white/3 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl">
            {submitted ? (
              <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-emerald-500/20 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-emerald-500/30 rotate-12">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-4xl font-black uppercase italic mb-4">
                  Sent!
                </h3>
                <p className="text-slate-400 font-medium">
                  Thank you! I will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                ref={form}
                onSubmit={handleSubmit}
                className="space-y-8 text-left"
              >
                {isError && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-center">
                    <p className="text-red-400 text-[10px] font-black uppercase tracking-widest">
                      Gateway Error. Please check your connection or system
                      settings.
                    </p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 ml-1 block">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all text-white placeholder:text-slate-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 ml-1 block">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all text-white placeholder:text-slate-500"
                      placeholder="name@mail.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 ml-1 block">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    name="title"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all text-white placeholder:text-slate-500"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 ml-1 block">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows="5"
                    className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-all text-white resize-none placeholder:text-slate-500 shadow-inner"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="relative w-full py-6 bg-white text-bg-main hover:bg-brand-blue hover:text-white disabled:opacity-50 rounded-2xl font-black uppercase text-xs tracking-[0.3em] transition-all duration-500 shadow-2xl overflow-hidden group cursor-pointer"
                >
                  <span className="relative z-10 font-black">
                    {isSending ? "Processing..." : "Initiate Contact"}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowUpRight, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Contact() {
  const { personalInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all fields before sending.");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate fast client-side submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Quick CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-[#d4af37]"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                  GET IN TOUCH
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading">
                Let's build something <span className="text-gold-gradient">meaningful.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Interested in technology, data, and intelligent solutions? Feel free to connect.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0e0e14] border border-white/10 hover:border-[#d4af37]/50 transition-all shadow-lg group"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    EMAIL
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0e0e14] border border-white/10 hover:border-[#d4af37]/50 transition-all shadow-lg group"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    PHONE
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0e0e14] border border-white/10 hover:border-[#d4af37]/50 transition-all shadow-lg group"
              >
                <div className="p-3 rounded-xl bg-white/[0.03] text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-colors">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    LINKEDIN
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                    {personalInfo.linkedIn}
                  </p>
                </div>
              </a>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-black bg-[#d4af37] hover:bg-[#e2b857] transition-all rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] transform hover:-translate-y-0.5"
              >
                Email Me
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-full transition-all transform hover:-translate-y-0.5"
              >
                Connect on LinkedIn
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0e14] border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ramya"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] transition-colors text-sm"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="rramyarayar@gmail.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] transition-colors text-sm"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Ramya, I would like to discuss..."
                    className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] transition-colors text-sm resize-none"
                    suppressHydrationWarning
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Success Banner */}
                {status === "success" && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Message formatted! Feel free to email directly at rramyarayar@gmail.com.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-black bg-[#d4af37] hover:bg-[#e2b857] transition-all rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] disabled:opacity-50"
                  suppressHydrationWarning
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

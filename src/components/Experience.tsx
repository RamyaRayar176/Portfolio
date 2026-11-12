"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              INTERNSHIP HISTORY
            </span>
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Practical industry exposure and virtual internship programs.
          </p>
        </div>

        {/* Vertical Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0e0e14] border border-white/10 hover:border-[#d4af37]/40 transition-all shadow-xl relative overflow-hidden group"
            >
              {/* Background Subtle Gradient Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full pointer-events-none group-hover:bg-[#d4af37]/10 transition-colors" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="px-3.5 py-2 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] font-mono text-sm font-extrabold">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-sm font-medium text-slate-300">
                      <Building2 className="w-4 h-4 text-[#d4af37]" />
                      <span>{item.company}</span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold text-slate-300 self-start">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Bullet Descriptions */}
              <div className="pt-6 space-y-3">
                {item.descriptions.map((desc, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              ACADEMIC BACKGROUND
            </span>
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Academic milestones shaping my foundation in AI & Data Science.
          </p>
        </div>

        {/* Sophisticated Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#d4af37] via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-12 relative">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Center Badge */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border ${
                      item.isCurrent
                        ? "bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                        : "bg-[#0e0e14] text-slate-400 border-white/20"
                    }`}
                  >
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                {/* Timeline Content Card */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                  <div
                    className={`p-6 rounded-2xl border transition-all ${
                      item.isCurrent
                        ? "bg-gradient-to-br from-[#12121a] to-[#0e0e14] border-[#d4af37]/40 shadow-[0_0_25px_rgba(212,175,55,0.1)]"
                        : "bg-[#0e0e14]/60 border-white/10 hover:border-white/20"
                    }`}
                  >
                    {item.isCurrent && (
                      <span className="inline-block px-2.5 py-0.5 mb-3 text-[10px] uppercase font-bold tracking-widest text-black bg-[#d4af37] rounded-full">
                        CURRENT DEGREE
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-white leading-tight font-heading">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-200 mt-1">
                      {item.institution}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
                      <div className="flex items-center gap-1 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-semibold text-[#d4af37]">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.grade}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

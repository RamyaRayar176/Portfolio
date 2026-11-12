"use client";

import { motion } from "framer-motion";
import { Trophy, Flame, Calendar, Building } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              HACKATHONS & PARTICIPATION
            </span>
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Achievements & Hackathons
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            National-level innovation competitions and tech fest challenges.
          </p>
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-[#0e0e14] border border-white/10 hover:border-[#d4af37]/50 transition-all shadow-xl relative overflow-hidden group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37]">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-[#d4af37] font-medium mt-0.5">
                    <Building className="w-3.5 h-3.5" />
                    <span>{item.organization}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

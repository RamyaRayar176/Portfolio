"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function Approach() {
  const { approach } = portfolioData;

  return (
    <section className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              METHODOLOGY
            </span>
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            My Approach
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Structured workflow for analyzing challenges and delivering practical software solutions.
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approach.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 hover:border-[#d4af37]/40 transition-all shadow-xl space-y-4 relative"
            >
              <div className="text-3xl font-mono font-extrabold text-[#d4af37]">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white font-heading">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

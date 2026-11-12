"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";

export default function QuickStats() {
  const { quickStats } = portfolioData;

  return (
    <section className="relative z-20 -mt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#0c0c12]/80 border border-white/10 backdrop-blur-xl shadow-2xl divide-y md:divide-y-0 md:divide-x divide-white/10"
        >
          {quickStats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                idx > 0 ? "pt-4 md:pt-0 md:pl-6" : ""
              }`}
            >
              <span className="text-xs uppercase font-bold tracking-widest text-[#d4af37]">
                {stat.label}
              </span>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-400">
                  {stat.subtext}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { BarChart3, Cpu, Code2, PieChart, Database, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const domainIcons: Record<string, React.ReactNode> = {
  "01": <BarChart3 className="w-5 h-5 text-[#d4af37]" />,
  "02": <Cpu className="w-5 h-5 text-[#d4af37]" />,
  "03": <Code2 className="w-5 h-5 text-[#d4af37]" />,
  "04": <PieChart className="w-5 h-5 text-[#d4af37]" />,
  "05": <Database className="w-5 h-5 text-[#d4af37]" />,
  "06": <Sparkles className="w-5 h-5 text-[#d4af37]" />,
};

export default function WhatIWorkWith() {
  const { whatIWorkWith } = portfolioData;

  return (
    <section className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              DOMAINS OF WORK
            </span>
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            What I Work With
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Core functional domains and analytical focus areas.
          </p>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIWorkWith.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 hover:border-[#d4af37]/40 transition-all shadow-xl space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:bg-[#d4af37]/10 transition-colors">
                  {domainIcons[item.id]}
                </div>
                <span className="text-xl font-extrabold font-mono text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">
                  {item.id}
                </span>
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

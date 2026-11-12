"use client";

import { motion } from "framer-motion";
import { Sparkles, Brain, Cpu, Database, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-6 bg-[#d4af37]"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug font-heading">
              Curious about technology.
              <br />
              <span className="text-slate-400">Focused on solving problems.</span>
            </h2>
            <div className="pt-4 flex items-center space-x-3 text-slate-400 text-sm">
              <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-[#d4af37]">
                <Brain className="w-5 h-5" />
              </div>
              <p className="font-medium text-slate-300">
                Artificial Intelligence & Data Science Specialist
              </p>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Currently Exploring */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0e0e14] border border-white/10 backdrop-blur-md shadow-xl relative">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                {about.body}
              </p>
            </div>

            {/* Currently Exploring Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <h3 className="text-xs uppercase font-bold tracking-widest text-[#d4af37]">
                  CURRENTLY EXPLORING & PRACTICING
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {about.currentlyExploring.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.03 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#d4af37]/40 text-slate-200 text-xs sm:text-sm font-medium transition-all shadow-sm cursor-default"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

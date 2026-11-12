"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, BarChart2, Wrench, Users, Languages, Info } from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

const categoryIcons: Record<string, React.ReactNode> = {
  PROGRAMMING: <Code2 className="w-4 h-4 text-[#d4af37]" />,
  "DATA & VISUALIZATION": <BarChart2 className="w-4 h-4 text-[#d4af37]" />,
  TOOLS: <Wrench className="w-4 h-4 text-[#d4af37]" />,
  "SOFT SKILLS": <Users className="w-4 h-4 text-[#d4af37]" />,
  LANGUAGES: <Languages className="w-4 h-4 text-[#d4af37]" />,
};

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredCategories =
    activeCategory === "ALL"
      ? skills
      : skills.filter((cat) => cat.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#08080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center justify-center gap-2">
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
            <span className="text-xs font-bold tracking-[0.2em] text-[#d4af37] uppercase">
              TECHNICAL PROFICIENCY
            </span>
            <span className="h-[1px] w-6 bg-[#d4af37]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Core technologies, analytical toolsets, and interpersonal capabilities.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            suppressHydrationWarning
            onClick={() => setActiveCategory("ALL")}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
              activeCategory === "ALL"
                ? "bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
            }`}
          >
            All Categories
          </button>
          {skills.map((cat) => (
            <button
              suppressHydrationWarning
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                activeCategory === cat.category
                  ? "bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 hover:border-[#d4af37]/40 transition-all shadow-xl space-y-4"
            >
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
                {categoryIcons[cat.category] || <Code2 className="w-4 h-4 text-[#d4af37]" />}
                <h3 className="text-xs font-bold tracking-widest text-white uppercase font-heading">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="relative group cursor-pointer"
                  >
                    <span className="inline-block px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#d4af37]/60 text-slate-200 text-xs font-medium transition-all shadow-sm">
                      {skill.name}
                    </span>

                    {/* Hover Description Tooltip */}
                    {skill.description && hoveredSkill === skill.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 rounded-xl bg-[#181824] border border-[#d4af37]/40 text-slate-300 text-[11px] leading-snug shadow-2xl z-30 pointer-events-none"
                      >
                        <div className="flex items-center gap-1.5 font-bold text-[#d4af37] mb-1">
                          <Info className="w-3 h-3" />
                          <span>{skill.name}</span>
                        </div>
                        <p>{skill.description}</p>
                      </motion.div>
                    )}
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

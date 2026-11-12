"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database, Brain, Sparkles } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export default function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect(project)}
      className="group relative rounded-3xl bg-[#0d0d14] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 shadow-2xl cursor-pointer overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent group-hover:via-[#d4af37] transition-all" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors">
            {project.number}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/[0.04] group-hover:bg-white/[0.08] border border-white/10 text-[11px] font-semibold text-slate-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="text-2xl font-extrabold text-white group-hover:text-gold-gradient transition-colors font-heading leading-tight">
            {project.title}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Minimal Visual Code Abstract Box */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-slate-400 space-y-1">
          <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1 border-b border-white/5 uppercase tracking-wider">
            <span>system module</span>
            <span className="text-[#d4af37]">active</span>
          </div>
          <p className="text-slate-300 truncate">
            <span className="text-purple-400">def</span> process_{project.id.replace(/-/g, "_")}():
          </p>
          <p className="text-slate-400 pl-4 truncate">
            return analyze_data(input_features)
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 sm:px-8 py-4 bg-white/[0.02] border-t border-white/10 flex items-center justify-between group-hover:bg-[#d4af37]/10 transition-colors">
        <span className="text-xs font-semibold tracking-wider text-slate-300 group-hover:text-white transition-colors">
          View Details
        </span>
        <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#d4af37] text-white group-hover:text-black transition-all">
          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

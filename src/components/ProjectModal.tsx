"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Cpu, Code2, AlertCircle, Lightbulb } from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#0d0d14] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="space-y-3 pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#d4af37] text-xs font-mono font-bold">
              PROJECT {project.number}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#d4af37] flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> OVERVIEW
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <h5 className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" /> PROBLEM STATEMENT
              </h5>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.details.problem}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" /> PROPOSED SOLUTION
              </h5>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {project.details.solution}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#d4af37]">
              KEY FEATURES & IMPLEMENTATION
            </h4>
            <div className="space-y-2.5">
              {project.details.keyFeatures.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-xs sm:text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

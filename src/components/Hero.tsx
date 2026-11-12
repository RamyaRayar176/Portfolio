"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Database, Terminal, Cpu, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";

export default function Hero() {
  const { personalInfo } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#08080a]"
    >
      {/* Background Subtle Glowing Orb & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#d4af37]/15 via-amber-500/5 to-transparent rounded-full blur-[120px] opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-slate-300">
                {personalInfo.status}
              </span>
            </motion.div>

            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="h-[1px] w-8 bg-[#d4af37]"></span>
              <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#d4af37] uppercase">
                {personalInfo.eyebrow}
              </p>
            </motion.div>

            {/* Main Editorial Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-heading"
            >
              Building{" "}
              <span className="text-gold-gradient underline decoration-[#d4af37]/30 underline-offset-8">
                {personalInfo.heroHeadingHighlight}
              </span>{" "}
              with data and technology.
            </motion.h1>

            {/* Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl"
            >
              {personalInfo.heroIntro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-black bg-[#d4af37] hover:bg-[#e2b857] transition-all rounded-full shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5"
              >
                Explore My Work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 transition-all rounded-full backdrop-blur-md transform hover:-translate-y-0.5"
              >
                Let's Connect
              </a>
            </motion.div>
          </div>

          {/* Right Column: Abstract Technology Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-b from-white/[0.07] to-transparent p-1 border border-white/10 backdrop-blur-xl shadow-2xl">
              {/* Inner Decorative Container */}
              <div className="w-full h-full rounded-[22px] p-6 relative overflow-hidden flex flex-col justify-between border border-white/5 group">
                {/* User Image Background */}
                <Image
                  src="/profile.png"
                  alt="Ramya"
                  fill
                  className="object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0c12]/40 to-[#0c0c12] opacity-80" />


              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

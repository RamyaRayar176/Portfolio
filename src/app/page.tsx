import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import WhatIWorkWith from "@/components/WhatIWorkWith";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08080a] text-white selection:bg-[#d4af37]/30 selection:text-white">
      <Navbar />
      <Hero />
      <QuickStats />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Certifications />
      <WhatIWorkWith />
      <Approach />
      <Contact />
      <Footer />
    </main>
  );
}

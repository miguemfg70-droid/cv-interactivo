"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StrategicAreasSection from "@/components/StrategicAreasSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
import FloatingNav from "@/components/FloatingNav";

const BackgroundAnimation = dynamic(
  () => import("@/components/BackgroundAnimation"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent font-sans relative overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      
      {/* Animated Non-Static Premium Background */}
      <BackgroundAnimation />

      <FloatingNav />

      {/* Background Radiants for Harmony */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[50%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[80%] left-[10%] w-[400px] h-[400px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <div id="hero" className="w-full relative"><HeroSection /></div>
        <div id="about" className="w-full relative pt-12 -mt-12"><AboutSection /></div>
        <div id="areas" className="w-full relative pt-24 -mt-24"><StrategicAreasSection /></div>
        <div id="experience" className="w-full relative pt-24 -mt-24"><ExperienceSection /></div>
        <div id="skills" className="w-full relative pt-24 -mt-24"><SkillsSection /></div>
        <Footer />
      </div>
    </main>
  );
}

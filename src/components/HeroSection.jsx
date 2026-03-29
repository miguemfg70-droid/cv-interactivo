"use client";

import { motion } from "framer-motion";
import { Download, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-32 pb-20 relative z-10 w-full overflow-hidden">
      
      {/* Glow Ambiental Masivo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-700/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full flex flex-col items-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-10 relative group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full p-1 bg-gradient-to-tr from-slate-800 to-slate-900 shadow-2xl animate-float-2 will-change-transform">
            <Image 
              src="/foto-perfil.png" 
              alt="Miguel Ángel Feliciano García" 
              fill
              priority
              className="object-cover rounded-full border-[6px] border-[#020617] bg-[#020617]"
              sizes="(max-width: 768px) 176px, 224px"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-2">
          <h2 className="text-xl md:text-2xl font-bold text-cyan-400 tracking-[0.2em] uppercase mb-4 opacity-90">
            Perfil Ejecutivo
          </h2>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-[6rem] leading-[1.1] font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-slate-400"
        >
          MIGUEL ÁNGEL <br className="hidden md:block"/> FELICIANO
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-lg md:text-xl font-medium text-slate-400 mb-12 flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-center flex-wrap tracking-wide"
        >
          <span className="bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 uppercase text-sm tracking-widest text-slate-300">Jalisco, MX</span>
          
          <a href="tel:3411501739" className="hover:text-cyan-400 transition-colors flex items-center gap-2 max-w-full drop-shadow-sm">
            <span className="bg-white/5 p-2 rounded-full border border-white/10 text-cyan-500"><PhoneIcon/></span> 341 150 1739
          </a>
          
          <a href="mailto:migue.mfg70@gmail.com" className="hover:text-cyan-400 transition-colors flex items-center gap-2 max-w-full drop-shadow-sm">
            <span className="bg-white/5 p-2 rounded-full border border-white/10 text-cyan-500"><MailIcon/></span> migue.mfg70@gmail.com
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 w-full px-2"
        >
          <a
            href="https://drive.google.com/file/d/1XssvHoB2WuP7nOQZ5k9515DNh-Pn6FHG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 bg-white text-slate-950 hover:bg-transparent hover:text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-105 active:scale-95 border border-transparent hover:border-cyan-400 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
            <DownloadIcon />
            Obtener CV
          </a>
          
          <div className="flex gap-4 sm:gap-6 justify-center">
            <SocialBtn href="mailto:migue.mfg70@gmail.com" icon={<Mail />} delay="0s" animClass="animate-float-1" />
            <SocialBtn href="https://wa.me/523411501739" icon={<MessageCircle />} delay="-1s" animClass="animate-float-3" />
            <SocialBtn href="https://www.linkedin.com/in/miguelangelfeliciano/" icon={<LinkedinIcon />} delay="-2s" animClass="animate-float-2" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Minimal Icons for spacing
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>

const SocialBtn = ({ href, icon, delay, animClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center p-4 bg-white/5 backdrop-blur-3xl text-slate-300 rounded-full hover:text-cyan-400 hover:border-cyan-400/80 hover:scale-110 active:scale-95 transition-all duration-300 border border-white/10 hover:bg-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] ${animClass} will-change-transform`}
    style={{ animationDelay: delay }}
  >
    {icon}
  </a>
);

"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  // Lista unificada para el carrusel infinito de habilidades.
  const skills = [
    "Negociación Avanzada", "Solución de Conflictos", "Dirección de Operaciones", "Gestión del Talento",
    "ChatGPT", "Gemini", "Copilot", "DeepSeek", "Inteligencia Artificial",
    "Google Ads", "Facebook Ads", "Social Media", "Analytics",
    "Asana", "Trello", "Wrike", "Metodologías Ágiles",
    "Liderazgo", "Ventas Consultivas", "Optimización de Flujos", "Marketing Digital"
  ];

  // Triplicar la lista para asegurar que nunca haya un salto visible durante la animación infinita
  const sliderContent = [...skills, ...skills, ...skills];

  return (
    <section className="py-24 relative z-10 w-full mb-20 overflow-hidden bg-white/5 backdrop-blur-lg border-y border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white uppercase tracking-widest text-center">
            Arsenal de Habilidades
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full opacity-80 mb-12"></div>
        </motion.div>
      </div>

      <div className="relative w-full flex flex-col gap-6 mask-image-fade">
        <div className="w-full relative overflow-hidden flex select-none">
          <div className="flex shrink-0 min-w-full gap-4 animate-marquee hover:[animation-play-state:paused] will-change-transform">
            {sliderContent.map((skill, i) => (
              <div 
                key={i} 
                className="shrink-0 px-8 py-4 bg-slate-900 border border-white/10 rounded-full text-lg md:text-xl font-bold text-slate-200 hover:bg-slate-800 hover:text-cyan-300 hover:border-cyan-400/60 transition-colors cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Reverse Slider Row */}
        <div className="w-full relative overflow-hidden flex select-none">
          <div className="flex shrink-0 min-w-full gap-4 animate-marquee-reverse hover:[animation-play-state:paused] will-change-transform">
            {[...sliderContent].reverse().map((skill, i) => (
              <div 
                key={i} 
                className="shrink-0 px-8 py-4 bg-slate-900 border border-white/10 rounded-full text-lg md:text-xl font-bold text-slate-200 hover:bg-slate-800 hover:text-blue-300 hover:border-blue-400/60 transition-colors cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Efecto de desvanecido en los bordes izquierdo y derecho del contenedor */
        .mask-image-fade {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
}

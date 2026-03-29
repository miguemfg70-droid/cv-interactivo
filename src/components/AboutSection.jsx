"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center bg-slate-950/70 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white uppercase tracking-widest text-center">
            Resumen Ejecutivo y Comercial
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full opacity-80 mb-12"></div>
          
          <p className="text-lg md:text-xl leading-relaxed text-slate-100 font-normal text-justify md:text-center mt-8 drop-shadow-md">
            &quot;Gerente de Proyectos y Administrador con visión estratégica y{" "}
            <span className="font-bold text-white">5 años de éxito probado impulsando la eficiencia operativa y el crecimiento comercial.</span>{" "}
            Poseo un <span className="font-bold text-cyan-400 drop-shadow-sm">ADN comercial de alto rendimiento</span>,{" "}
            pasión por las ventas consultivas y una mentalidad de aprendizaje continuo. Mi especialidad es escalar la rentabilidad de los negocios liderando equipos multidisciplinarios, optimizando flujos de trabajo clave y ejecutando{" "}
            <span className="font-bold text-cyan-400 drop-shadow-sm">estrategias de marketing digital de alto impacto</span>.{" "}
            Reconocido por mi capacidad de negociación, análisis profundo de datos y la integración ágil de herramientas de{" "}
            <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-500">Inteligencia Artificial</span>{" "}
            para maximizar la productividad y la toma de decisiones críticas.&quot;
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <a
              href="https://wa.me/523411501739"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-105 active:scale-95 overflow-hidden w-full sm:w-auto border border-cyan-400/50"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              Hablemos de Negocios
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

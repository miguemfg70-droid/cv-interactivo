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
        </motion.div>
      </div>
    </section>
  );
}

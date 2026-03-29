"use client";

import { motion } from "framer-motion";
import { TrendingUp, Settings, BarChart, Users } from "lucide-react";

export default function StrategicAreasSection() {
  const areas = [
    {
      title: "Ventas & Cierre de Negociaciones de Alto Valor",
      icon: <TrendingUp size={32} className="text-cyan-500" />,
      text: "Impulso las ventas consultivas mediante análisis estratégico de datos de clientes, tácticas de captación orquestadas y cierres de negociaciones críticas, maximizando la rentabilidad de cada cuenta y el retorno de inversión."
    },
    {
      title: "Administración & Eficiencia Operativa",
      icon: <Settings size={32} className="text-blue-600" />,
      text: "Potencio la eficiencia operativa mediante la reingeniería de procesos complejos y la automatización operativa con IA, reduciendo tiempos críticos de ejecución y optimizando recursos clave para el crecimiento sostenible."
    },
    {
      title: "Marketing & Growth (Crecimiento Acelerado)",
      icon: <BarChart size={32} className="text-cyan-500" />,
      text: "Acelero la captación y retención de clientes mediante campañas de publicidad digital (Google Ads, Facebook Ads) orquestadas con análisis profundo del ROI, incrementando la presencia de marca y el crecimiento exponencial de las cuentas comerciales."
    },
    {
      title: "Talento Humano & Liderazgo Estratégico",
      icon: <Users size={32} className="text-blue-600" />,
      text: "Fomento el desarrollo continuo y la capacitación de alto impacto, alineando el talento con los objetivos estratégicos de la empresa para maximizar la productividad de los equipos y fortalecer la cultura organizacional."
    }
  ];

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white uppercase tracking-widest text-center">
            Áreas Estratégicas de Impulso Comercial
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full opacity-80 mb-12"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-950/70 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 hover:bg-slate-900/80 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)] transition-all duration-300 relative overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.8)] will-change-transform"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-cyan-400/30 transition-all duration-500"></div>
              
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/10">
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {area.title}
              </h3>
              <p className="text-slate-100 leading-relaxed text-lg font-medium drop-shadow-md">
                {area.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

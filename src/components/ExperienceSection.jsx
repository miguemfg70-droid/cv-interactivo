"use client";

import { motion } from "framer-motion";
import { Briefcase, Building, GraduationCap } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Gerente de Proyectos",
      company: "CARMA Agencia de Marketing",
      period: "Febrero 2022 - Marzo 2026",
      details: [
        "Dirigí la orquestación integral de la estrategia operativa, potenciando la entrega oportuna y la calidad superior de proyectos complejos tras liderar equipos multidisciplinarios.",
        "Alineé y sincronicé las estrategias de Social Media, Community Management y Relaciones Públicas con los objetivos de ventas, impulsando la captación de clientes y la fidelización de cuentas clave.",
        "Orquesté y gestioné campañas de publicidad digital (Google Ads, Facebook Ads) de alto rendimiento, optimizando recursos para maximizar el ROI.",
        "Implementé reformas críticas en control de calidad y gestión de cobros, acelerando la recuperación de cartera y fortaleciendo la posición financiera de la empresa.",
        "Revolucioné la eficiencia operativa al integrar herramientas de IA de vanguardia (ChatGPT, Gemini, Copilot, DeepSeek) en flujos de trabajo administrativos, liberando tiempo para tareas estratégicas."
      ],
    },
    {
      title: "Analista Administrativo / Becario JCF",
      company: "CARMA",
      period: "Junio 2020 - Febrero 2022",
      details: ["Demostré un aprendizaje rápido y adaptabilidad, gestionando eficientemente las operaciones administrativas iniciales. Gracias a mi enfoque en resultados y mejora continua, logré ser promovido a Gerente de Proyectos en menos de 2 años."],
    },
    {
      title: "Promotor de Ventas",
      company: "Pabs Servicios Funerarios",
      period: "2020",
      details: ["Orquesté el ciclo completo de ventas consultivas de planes funerarios, superando consistentemente las expectativas de colocación. Brindé asesoría empática y estratégica a los clientes, maximizando la tasa de cierre de negociaciones."],
    },
    {
      title: "Experiencia Logística Previa",
      company: "Polilaminas / CARMENTA",
      period: "2016 - 2020",
      details: [
        "Polilaminas: Auxiliar de Almacén. Optimización del control de inventarios y despacho estratégico de materiales. (2019-2020).",
        "CARMENTA: Auxiliar de Almacén. Gestión y organización logística eficiente de abarrotes. (2016-2017)."
      ],
    },
  ];

  const education = [
    {
      title: "Licenciatura en Administración y gestión de empresas",
      institution: "UVEG (Virtual)",
      status: "En curso"
    },
    {
      title: "Diplomado en Finanzas",
      institution: "CONDUSEF",
      status: "Completado"
    },
    {
      title: "Programa Jóvenes Construyendo el Futuro",
      institution: "Constancia",
      status: "Completado"
    },
    {
      title: "Licenciatura en Derecho",
      institution: "CUSUR",
      status: "Trunca"
    },
    {
      title: "Técnico en Contabilidad",
      institution: "CBTIS 226",
      status: "Completado"
    }
  ];

  return (
    <section className="py-24 px-4 relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white uppercase tracking-widest">
            Experiencia Profesional
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-80 mb-12 rounded-full"></div>
        </motion.div>

        <div className="relative ml-4 space-y-12 before:absolute before:inset-y-0 before:-left-[2px] before:w-[3px] before:bg-gradient-to-b before:from-cyan-400 before:via-blue-600 before:to-transparent before:rounded-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
              className="relative pl-8 md:pl-10"
            >
              <div className="absolute -left-[16px] top-1 w-8 h-8 rounded-full bg-[#020617] border-4 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              </div>
              
              <div className="bg-slate-950/70 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-400/50 hover:bg-slate-900/80 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                    <div className="text-cyan-400 font-medium flex items-center gap-2 mt-1">
                      <Briefcase size={16} /> {exp.company}
                    </div>
                  </div>
                  <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/10 text-sm font-semibold text-slate-200 rounded-full whitespace-nowrap h-fit">
                    {exp.period}
                  </span>
                </div>
                
                <div className="text-slate-100 leading-relaxed text-[15px] space-y-2 font-medium drop-shadow-md">
                  {exp.details.length > 1 ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.details[0]}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-1">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white uppercase tracking-widest">
            Educación y Formación
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-80 mb-12 rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-950/70 backdrop-blur-xl p-6 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/10 border-l-4 border-l-cyan-500 hover:bg-slate-900/80 transition-all duration-300"
            >
              <h3 className="font-bold text-white text-lg leading-tight mb-2">
                {item.title}
              </h3>
              <div className="text-slate-200 text-sm flex items-center gap-2 mb-2 font-medium">
                <GraduationCap size={16} /> {item.institution}
              </div>
              <span className="inline-block px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 text-xs font-semibold text-cyan-300 rounded-full">
                {item.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

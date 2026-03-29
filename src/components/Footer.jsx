"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full py-24 bg-[#020617] text-slate-300 relative z-20 overflow-hidden border-t border-white/5 shadow-[0_-20px_40px_rgba(0,0,0,0.5)]">
      
      {/* Footer Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-[30vw] h-[30vw] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-4xl mx-auto px-4 text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            ¿Listo para llevar tu proyecto al siguiente nivel?
          </h3>
          <p className="mb-12 text-slate-400 font-light text-xl">
            Estoy disponible para nuevos retos estratégicos y colaboraciones de alto impacto.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="mailto:migue.mfg70@gmail.com" 
              className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl hover:border-cyan-400/50 hover:text-cyan-400 text-slate-300 transition-all hover:scale-110 active:scale-95 shadow-lg" 
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/miguelangelfeliciano/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl hover:border-blue-400/50 hover:text-blue-400 text-slate-300 transition-all hover:scale-110 active:scale-95 shadow-lg" 
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a 
              href="https://wa.me/523411501739" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl hover:border-green-400/50 hover:text-green-400 text-slate-300 transition-all hover:scale-110 active:scale-95 shadow-lg" 
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>
          
          <div className="w-full block border-t border-slate-800 pt-8 mt-4 text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Miguel Ángel Feliciano García. Todos los derechos reservados. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> Desarrollo Frontend React.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

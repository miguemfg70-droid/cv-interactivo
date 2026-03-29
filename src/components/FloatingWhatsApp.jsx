"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/523411501739"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex items-center justify-center p-4 rounded-full bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:bg-green-400 hover:scale-110 active:scale-95 hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all duration-300 group border border-white/20"
      aria-label="Contactarme por WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
      
      <MessageCircle size={32} strokeWidth={1.5} className="relative z-10" />
      
      {/* Tooltip Hover */}
      <div className="absolute right-full mr-5 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-slate-900 border border-green-500/30 rounded-2xl text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-2xl backdrop-blur-xl">
        ¡Hablemos de negocios!
        {/* Triangulito del tooltip */}
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-[6px] border-transparent border-l-slate-900"></div>
      </div>
    </motion.a>
  );
}

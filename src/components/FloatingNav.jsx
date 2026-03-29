"use client";

import { useState, useEffect } from "react";

export default function FloatingNav() {
  const sections = ["hero", "about", "areas", "experience", "skills"];
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 300; // Activation breakpoint
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getSectionLabel = (id) => {
    const labels = {
      hero: "Inicio",
      about: "Sobre Mí",
      areas: "Estrategia",
      experience: "Experiencia",
      skills: "Habilidades"
    };
    return labels[id];
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5 items-center">
      {sections.map((section) => (
        <a 
          key={section}
          href={`#${section}`}
          className="group relative flex items-center justify-end w-4 h-4"
          aria-label={`Scroll to ${section}`}
        >
          <span className="absolute right-8 px-3 py-1.5 rounded-lg bg-slate-900/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-slate-900 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
            {getSectionLabel(section)}
          </span>
          <div className={`rounded-full transition-all duration-300 absolute ${
            activeSection === section 
              ? 'w-3 h-3 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] border-2 border-slate-950' 
              : 'w-2 h-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-500 hover:scale-150'
          }`} />
        </a>
      ))}
      <div className="absolute top-2 bottom-2 right-[7px] w-0.5 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-800 to-transparent -z-10 rounded-full" />
    </div>
  );
}

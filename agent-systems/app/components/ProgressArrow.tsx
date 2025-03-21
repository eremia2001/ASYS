import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function ProgressArrow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  
  // State für die Pfeilhöhe (0-1)
  const [progress, setProgress] = useState(0.02); // Startet mit 2% Höhe
  
  // Animationen für Pulsieren
  const pulseVariants = {
    pulse: {
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Elemente für die Berechnung finden
    const ablaufSection = document.querySelector('.space-y-36');
    if (!ablaufSection) return;
    
    // Die Ablauf-Sektion finden
    const sectionHeaders = document.querySelectorAll('h2');
    let ablaufHeading = null;
    
    // Ablauf-Überschrift suchen
    for (let i = 0; i < sectionHeaders.length; i++) {
      if (sectionHeaders[i].textContent?.includes('Ablauf')) {
        ablaufHeading = sectionHeaders[i];
        break;
      }
    }
    
    const sectionStart = ablaufHeading ? ablaufHeading.closest('section') : null;
    const finalElement = document.querySelector('.mt-20.text-center');
    
    if (!sectionStart || !finalElement) return;
    
    const handleScroll = () => {
      if (!ablaufSection || !sectionStart || !finalElement) return;
      
      // Positionen und Höhen
      const sectionRect = sectionStart.getBoundingClientRect();
      const sectionTop = window.scrollY + sectionRect.top;
      const windowHeight = window.innerHeight;
      
      // Der Bereich, in dem wir scrollen
      const startPosition = sectionTop - windowHeight * 0.5; // Beginnt halb im Viewport
      const endPosition = sectionTop + ablaufSection.getBoundingClientRect().height;
      const scrollRange = endPosition - startPosition;
      
      // Aktuelle Scroll-Position
      const currentScrollPos = window.scrollY;
      
      // Fortschritt berechnen (0.02 bis 1)
      let scrollProgress = (currentScrollPos - startPosition) / scrollRange;
      scrollProgress = Math.max(0.02, Math.min(1, scrollProgress)); // Mindestens 2% sichtbar
      
      // Pfeil entsprechend aktualisieren
      setProgress(scrollProgress);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial aufrufen
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="absolute left-0 top-0 bottom-0 w-2">
      {/* Pfeil-Linie */}
      <motion.div
        ref={arrowRef}
        className="w-[3px] bg-gradient-to-b from-cyan-400 to-blue-500 absolute top-0 left-0"
        initial={{ height: "2%" }}
        animate={{ 
          height: `${progress * 100}%`,
          opacity: 1
        }}
        transition={{ duration: 0.1 }}
        style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}
      />
      
      {/* Pfeilspitze */}
      <motion.div
        className="absolute left-0 right-0"
        style={{ top: `${progress * 100}%` }}
        animate={{ 
          top: `${progress * 100}%`,
          ...pulseVariants.pulse
        }}
        transition={{ duration: 0.1 }}
      >
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          style={{ marginLeft: "-5.5px", marginTop: "-7px" }}
        >
          <path 
            d="M12 19V5M12 5L5 12M12 5L19 12" 
            stroke="#06B6D4" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </motion.div>
    </div>
  );
} 
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      <div className="neural-network"></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6" 
          style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}
        >
          KI-gesteuerte Prozessautomatisierung
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-300 mb-12 font-mono"
        >
          <span className="typewriter">Smarte Prozesse: Weniger Overhead, mehr Wachstum</span>
        </motion.p>
        <CTAButton 
          text="Jetzt durchstarten" 
          href="#contact" 
          variant="primary" 
          size="large"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
    </section>
  );
} 
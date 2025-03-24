import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CTAButton from "./CTAButton";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-24 bg-gradient-to-b from-gray-900 to-black relative"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left column with image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <div className="relative z-10">
              <img
                src="/team_meeting.jpg"
                alt="Das Agent Systems Team bei der Arbeit"
                className="rounded-2xl shadow-2xl"
              />
              {/* Teal border overlay */}
              <div className="absolute -inset-2 border-2 border-teal-500/30 rounded-[1.2rem] -z-10"></div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-teal-500/10 rounded-full filter blur-2xl"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/5 rounded-full filter blur-3xl"></div>
          </motion.div>

          {/* Right column with text */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-teal-500/60 via-teal-400/60 to-teal-500/60 rounded-full mb-8"
            />

            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
            >
              Wir sind Agent Systems
            </h2>

            <p className="text-gray-300 text-lg mb-6">
              Ein Team von KI- und Automatisierungsexperten mit einer Mission:
              Unternehmen von zeitraubenden Routineaufgaben zu befreien und
              Wachstum durch intelligente Technologie zu ermöglichen.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 text-xl">•</span>
                <span className="text-gray-300">
                  <strong className="text-white">KI-zentriert:</strong> Wir
                  integrieren modernste KI-Technologien direkt in eure
                  Arbeitsabläufe
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 text-xl">•</span>
                <span className="text-gray-300">
                  <strong className="text-white">Erfahrenes Team:</strong> Unser
                  Expertenteam bringt jahrelange Erfahrung in der Entwicklung
                  von Automatisierungslösungen mit
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-400 mr-2 text-xl">•</span>
                <span className="text-gray-300">
                  <strong className="text-white">Kundenorientiert:</strong> Wir
                  entwickeln maßgeschneiderte Lösungen, die exakt auf eure
                  Geschäftsprozesse zugeschnitten sind
                </span>
              </li>
            </ul>

            <div className="flex gap-4">
              <CTAButton
                text="Unser Angebot"
                href="#services"
                variant="secondary"
                size="medium"
              />
              <CTAButton
                text="Team kennenlernen"
                href="#team"
                variant="outline"
                size="medium"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

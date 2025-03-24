import { motion } from "framer-motion";
import { Search, Cpu, Lightbulb } from "lucide-react";

export default function LeistungenSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const services = [
    {
      number: "01",
      title: "Prozessanalyse & KI-Strategie",
      subtitle: "Identifikation von Automatisierungspotenzial",
      icon: <Search size={36} className="text-teal-400/80" />,
      points: [
        "Wir analysieren eure Workflows und identifizieren die größten Effizienz-Engpässe",
        "Fachberatung für Integration von Tools wie n8n, Zapier & maßgeschneiderten KI-Lösungen",
        "Lokales Hosting & Setup für datenschutzkonforme KI-Infrastruktur auf deutschen Servern",
      ],
    },
    {
      number: "02",
      title: "KI-Agenten & Automatisierung",
      subtitle: "Maßgeschneiderte intelligente Assistenten",
      icon: <Cpu size={36} className="text-teal-400/80" />,
      points: [
        "Entwicklung von KI-Assistenten, die repetitive Aufgaben 24/7 übernehmen",
        "Integration von LLMs in bestehende Systeme für Texterstellung, Kundensupport & Datenanalyse",
        "Prozessautomatisierung mit KI-Agenten, die sich nahtlos in eure Systeme einfügen",
      ],
    },
    {
      number: "03",
      title: "KI & Automation Workshops",
      subtitle: "Praxisnahes Know-how für euer Team",
      icon: <Lightbulb size={36} className="text-teal-400/80" />,
      points: [
        "Hands-on Schulungen zur Nutzung von KI-Tools in eurem spezifischen Geschäftsumfeld",
        "Befähigung eures Teams zur eigenständigen Implementierung von Automatisierungslösungen",
        "Fokus auf sofort anwendbare Skills mit messbarem ROI für euer Unternehmen",
      ],
    },
  ];

  return (
    <section
      className="py-24 px-4 bg-gradient-to-b from-black to-gray-900"
      id="leistungen"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-teal-500/60 via-teal-400/60 to-teal-500/60 mx-auto rounded-full mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
          >
            Unsere Leistungen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-xl mx-auto max-w-2xl font-light"
          >
            Maßgeschneiderte KI-Lösungen für messbare Ergebnisse
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="relative p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/30 shadow-xl transform transition-all duration-300 hover:translate-y-[-10px] group"
            >
              {/* Card Number */}

              {/* Icon & Title */}
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-gray-800/70 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Service Points */}
              <ul className="space-y-4 text-gray-300 pl-1">
                {service.points.map((point, pIndex) => (
                  <li
                    key={pIndex}
                    className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="text-teal-400/80 mr-2 text-lg">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-teal-500/20 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import {
  FileText,
  TrendingUp,
  Search,
  MessageSquare,
  Bot,
  Zap,
} from "lucide-react";
import React from "react";

export default function UseCasesSection() {
  const caseVariants = {
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

  const useCases = [
    {
      title: "Intelligente Kundensupport-Automation",
      description:
        "Ein Immobilienunternehmen reduzierte Antwortzeiten um 76% durch KI-Assistenten, die 24/7 Kundenanfragen beantworten.",
      icon: <MessageSquare size={30} className="text-teal-400/80" />,
      emoji: "💬",
    },
    {
      title: "Datengesteuerte Vertriebsoptimierung",
      description:
        "Eine Versicherungsagentur steigerte Abschlussraten um 32% durch automatisierte Lead-Qualifizierung und personalisierte Follow-up-Sequenzen.",
      icon: <TrendingUp size={30} className="text-teal-400/80" />,
      emoji: "📈",
    },
    {
      title: "Workflow-Automatisierung",
      description:
        "Ein E-Commerce-Unternehmen reduzierte manuelle Dateneingabe um 94% durch intelligente Prozessautomatisierung zwischen CRM und ERP.",
      icon: <Zap size={30} className="text-teal-400/80" />,
      emoji: "⚡",
    },
    {
      title: "KI-gestützte Inhaltsproduktion",
      description:
        "Eine Marketing-Agentur konnte ihren Content-Output verdreifachen durch KI-unterstützte Texterstellung und automatisierte Content-Distribution.",
      icon: <FileText size={30} className="text-teal-400/80" />,
      emoji: "📝",
    },
    {
      title: "Automatisierte Datenanalyse",
      description:
        "Ein Einzelhandelsunternehmen erzielte 28% Umsatzsteigerung durch automatische Analyse von Verkaufsdaten und Identifikation von Trendprodukten.",
      icon: <Search size={30} className="text-teal-400/80" />,
      emoji: "🔍",
    },
    {
      title: "Intelligente Prozess-Agenten",
      description:
        "Ein IT-Dienstleister reduzierte Ticketbearbeitungszeit um 65% durch KI-Agenten, die Standardprobleme automatisch diagnostizieren und lösen.",
      icon: <Bot size={30} className="text-teal-400/80" />,
      emoji: "🤖",
    },
  ];

  return (
    <section
      className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative"
      id="usecases"
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
            className="text-4xl lg:text-5xl font-bold mb-4 text-center"
            style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
          >
            Erfolgsgeschichten
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-xl text-center mb-8 max-w-2xl mx-auto font-light"
          >
            Reale Resultate unserer KI-Automatisierungslösungen
          </motion.p>
        </div>

        {/* Use Cases Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={caseVariants}
              className="p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/30 shadow-xl transform transition-all duration-300 hover:-translate-y-2 group relative"
            >
              <div className="absolute -top-3 -right-3 w-12 h-12 flex items-center justify-center text-2xl rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-500/30">
                {useCase.emoji}
              </div>

              <div className="flex flex-col">
                <div className="flex items-center mb-5">
                  <div className="p-3 bg-gray-800/70 rounded-lg mr-4 flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-white leading-tight"
                    style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
                  >
                    {useCase.title}
                  </h3>
                </div>

                <div className="pl-16">
                  <p className="text-gray-300 text-base break-words">
                    {useCase.description}
                  </p>
                </div>
              </div>

              {/* Subtle line */}
              <div className="h-0.5 w-0 group-hover:w-full mt-6 bg-gradient-to-r from-teal-500/40 to-transparent transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-teal-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-teal-900/5 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}

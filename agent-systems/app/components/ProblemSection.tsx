import { motion } from "framer-motion";
import { Users, Clock, FileText, TrendingUp } from "lucide-react";
import PillTag from "./PillTag";
import React from "react";

type Problem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  keyword: string;
};

function ProblemCard({ problem, index }: { problem: Problem; index: number }) {
  // Erstelle eine sichere HTML-Darstellung mit dem hervorgehobenen Schlüsselwort
  const createMarkup = () => {
    const parts = problem.title.split(problem.keyword);

    if (parts.length === 1) return problem.title; // Keyword nicht gefunden

    return (
      <>
        {parts[0]}
        <span className="text-teal-300">{problem.keyword}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/30 shadow-xl transition-all duration-300 hover:shadow-teal-500/5 group"
    >
      <div className="flex items-start">
        <div className="mr-5 p-3 bg-gray-800/70 rounded-lg mt-1">
          {problem.icon}
        </div>
        <div>
          <h3
            className="text-xl font-bold text-white mb-2"
            style={{ fontFamily: "Inter", letterSpacing: "-0.02em" }}
          >
            {createMarkup()}
          </h3>
          <p className="text-gray-300 leading-relaxed">{problem.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProblemSection() {
  const problems: Problem[] = [
    {
      title: "Zeitverschwendung durch Routineaufgaben",
      keyword: "Zeitverschwendung",
      description:
        "Dein Team verbringt Stunden mit repetitiven Aufgaben wie Dateneingabe, E-Mail-Verwaltung und Berichterstellung - wertvolle Zeit, die für strategische Arbeit verloren geht.",
      icon: <Clock size={28} className="text-teal-400/50" />,
    },
    {
      title: "Ineffiziente manuelle Prozesse",
      keyword: "Ineffiziente",
      description:
        "Fehleranfällige manuelle Eingaben und inkonsistente Workflow-Prozesse führen zu Qualitätsproblemen und Verzögerungen in kritischen Geschäftsabläufen.",
      icon: <Users size={28} className="text-teal-400/50" />,
    },
    {
      title: "Komplexe Datenverarbeitung",
      keyword: "Komplexe",
      description:
        "Die steigende Menge an zu verarbeitenden Daten und die Schwierigkeit, daraus wertvolle Erkenntnisse zu gewinnen, überfordert bestehende manuelle Systeme.",
      icon: <FileText size={28} className="text-teal-400/50" />,
    },
    {
      title: "Skalierungshindernisse",
      keyword: "Skalierungshindernisse",
      description:
        "Das Wachstum deines Unternehmens wird durch ineffiziente Prozesse ausgebremst, während der Wettbewerb durch moderne Technologien Marktanteile gewinnt.",
      icon: <TrendingUp size={28} className="text-teal-400/50" />,
    },
  ];

  return (
    <section
      className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative"
      id="problems"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <PillTag label="Herausforderungen" variant="secondary" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4 mt-4"
            style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
          >
            <span className="text-white">Bekannte </span>
            <span className="text-teal-400">Probleme</span>
            <span className="text-white">?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-xl mx-auto max-w-2xl font-light"
          >
            Diese häufigen Herausforderungen können mit KI und Automatisierung
            gelöst werden
          </motion.p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>

        {/* Solution Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-8 rounded-2xl bg-gray-800/30 max-w-3xl mx-auto border border-gray-700/30"
        >
          <h3
            className="text-2xl font-bold mb-4 text-white"
            style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
          >
            Unsere <span className="text-teal-400">Lösung</span>:
          </h3>
          <p className="text-xl text-gray-300 font-normal">
            Intelligente KI-Agenten und Automatisierungslösungen, die diese
            Probleme für dich lösen und deinem Unternehmen zu nachhaltigem
            Wachstum verhelfen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { MessageSquare, Lightbulb, Code, Users } from "lucide-react";
import { handleSmoothScroll } from "../utils/smoothScroll";
import Link from "next/link";

export default function AblaufSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleSmoothScroll(e, 100); // 100px Offset vom oberen Rand
  };

  const steps = [
    {
      number: 1,
      title: "Bedarf analysieren",
      description:
        "Wir identifizieren gemeinsam wiederkehrende Prozesse, die euer Team Zeit kosten und automatisiert werden können.",
      icon: <MessageSquare size={24} className="text-teal-400" />,
    },
    {
      number: 2,
      title: "Lösungskonzept entwickeln",
      description:
        "Wir konzipieren maßgeschneiderte KI-basierte Agentensysteme, die nahtlos in eure bestehende Infrastruktur passen.",
      icon: <Lightbulb size={24} className="text-teal-400" />,
    },
    {
      number: 3,
      title: "Agile Implementierung",
      description:
        "Schnelle Entwicklung und Integration der Agenten mit kontinuierlichem Feedback und regelmäßigen Anpassungen.",
      icon: <Code size={24} className="text-teal-400" />,
    },
    {
      number: 4,
      title: "Langfristige Betreuung",
      description:
        "Wir sichern den Erfolg durch Schulungen, Monitoring und kontinuierliche Optimierung eurer Systeme.",
      icon: <Users size={24} className="text-teal-400" />,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-3"
            style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
          >
            KI-Agenten in 4 Schritten
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            So automatisieren wir eure Geschäftsprozesse
          </motion.p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 gap-5 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative"
            >
              <div className="flex items-start gap-4 p-5 rounded-xl bg-gray-800/50 border border-gray-700/30 hover:border-teal-500/30 transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-900/30 flex items-center justify-center border border-teal-500/20">
                  <span className="text-xl font-bold text-teal-400">
                    {step.number}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {step.title}
                    <span className="inline-flex">{step.icon}</span>
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="h-5 w-1 bg-teal-500/20 ml-6 my-1"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-900/30 to-teal-800/20 p-5 rounded-xl border border-teal-500/20 mb-10 text-center"
        >
          <p className="text-teal-300 text-lg mb-1">
            Typische Ergebnisse unserer Kunden:
          </p>
          <p className="text-white font-light">
            Zeitersparnis von 60-80% bei repetitiven Aufgaben • Fehlerreduktion
            um 90% • ROI innerhalb weniger Monate
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl text-gray-200 mb-5">
            Bereit, eure Prozesse zu automatisieren?
          </p>
          <Link href="#contact" onClick={handleNavClick}>
            <CTAButton
              text="Unverbindlich beraten lassen"
              href="#contact"
              variant="primary"
              size="large"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

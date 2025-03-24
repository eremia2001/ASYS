import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  HeartHandshake,
  Globe,
  Sparkles,
} from "lucide-react";

export default function WerteSection() {
  const valueVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * i,
        duration: 0.5,
      },
    }),
  };

  const values = [
    {
      title: "Transparenz & Ehrlichkeit",
      description:
        "Wir beraten ehrlich und kommunizieren transparent über Fortschritte und Herausforderungen.",
      icon: <ShieldCheck size={30} className="text-primary/80" />,
      color: "indigo",
    },
    {
      title: "Innovation",
      description:
        "Als junges Team setzen wir auf moderne Technologien und zukunftsorientierte Lösungen.",
      icon: <Sparkles size={30} className="text-primary/80" />,
      color: "indigo",
    },
    {
      title: "Inklusion & Vielfalt",
      description:
        "Wir fördern Gleichstellung, nutzen genderneutrale Sprache und lehnen Diskriminierung ab.",
      icon: <HeartHandshake size={30} className="text-primary/80" />,
      color: "indigo",
    },
    {
      title: "Agilität",
      description:
        "Flexibel und lösungsorientiert passen wir uns den Bedürfnissen unserer Kunden an.",
      icon: <Rocket size={30} className="text-primary/80" />,
      color: "indigo",
    },
    {
      title: "Nachhaltigkeit",
      description:
        "Wir denken langfristig und streben nach nachhaltigen Lösungen für Mensch und Umwelt.",
      icon: <Globe size={30} className="text-primary/80" />,
      color: "indigo",
    },
  ];

  return (
    <section
      className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative"
      id="werte"
    >
      {/* Top fade for smooth transition from TeamSection */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>

      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-indigo-500/60 via-indigo-400/60 to-indigo-500/60 mx-auto rounded-full mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4 text-center"
            style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
          >
            Unsere Werte
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-xl text-center mb-8 max-w-2xl mx-auto font-light"
          >
            Diese Prinzipien leiten unsere tägliche Arbeit und Entscheidungen
          </motion.p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={valueVariants}
              className="p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/30 shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-indigo-500/5"
            >
              <div className="flex items-center mb-5">
                <div className="h-12 w-12 flex items-center justify-center bg-gray-800/70 rounded-lg mr-4">
                  {value.icon}
                </div>
                <h3
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
                >
                  {value.title}
                </h3>
              </div>
              <div className="pl-16">
                <p className="text-gray-300 text-lg">{value.description}</p>
              </div>

              {/* Subtle decoration */}
              <div className="w-0 h-0.5 group-hover:w-full mt-5 bg-gradient-to-r from-indigo-500/30 to-transparent"></div>
            </motion.div>
          ))}
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-900/10 rounded-full filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-3xl opacity-20"></div>
        </div>
      </div>
    </section>
  );
}

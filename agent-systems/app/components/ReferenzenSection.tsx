import { motion } from "framer-motion";
import { BarChart3, Percent } from "lucide-react";

export default function ReferenzenSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.6,
      },
    }),
  };

  const referenzen = [
    {
      title: "Beispielprojekt 1",
      description: "X Stunden & Y € eingespart",
      icon: <BarChart3 size={36} className="text-primary/70" />,
      highlight: "73%",
      subtext: "weniger manuelle Arbeit",
    },
    {
      title: "Beispielprojekt 2",
      description: "X % mehr Effizienz",
      icon: <Percent size={36} className="text-primary/70" />,
      highlight: "4.2x",
      subtext: "schnellere Bearbeitung",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-indigo-500/60 via-primary/60 to-indigo-500/60 mx-auto rounded-full mb-8"
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4 text-center"
            style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
          >
            Referenzen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-xl text-center mb-8 max-w-2xl mx-auto font-light"
          >
            Zahlen lügen nicht – So viel haben unsere Kunden gespart
          </motion.p>
        </div>

        {/* Referenz Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {referenzen.map((referenz, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/30 shadow-xl overflow-hidden relative group"
            >
              {/* Content */}
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-gray-800/70 rounded-lg">
                    {referenz.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
                  >
                    {referenz.title}
                  </h3>
                </div>

                <div className="mb-8">
                  <p className="text-gray-300 text-lg mb-6">
                    {referenz.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-baseline">
                    <span className="text-4xl md:text-5xl font-bold text-primary mr-3">
                      {referenz.highlight}
                    </span>
                    <span className="text-gray-300">{referenz.subtext}</span>
                  </div>
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-indigo-600/5 group-hover:bg-indigo-600/10 transition-all duration-500"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-indigo-600/5 group-hover:bg-indigo-600/10 transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-2">
            <span className="text-primary font-semibold">
              Ihr Projekt könnte das nächste Erfolgsbeispiel sein.
            </span>
          </p>
          <p className="text-gray-400">
            Lassen Sie uns gemeinsam Ihre Prozesse optimieren und messbare
            Ergebnisse erzielen.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

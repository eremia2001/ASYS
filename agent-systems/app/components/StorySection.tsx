import { motion } from "framer-motion";
import { BookOpen, Users } from "lucide-react";
import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            Unsere Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-xl text-center mb-8 max-w-2xl mx-auto font-light"
          >
            Pioniere der KI-Revolution
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-700/30 shadow-xl p-10 relative overflow-hidden"
        >
          {/* Decorative book icon */}
          <div className="absolute -right-8 -top-8 opacity-5">
            <BookOpen size={200} />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* Team Photo Placeholder (16:9 aspect ratio) */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-700/50 shadow-lg bg-gray-800/30 flex items-center justify-center">
                <div className="text-center p-4">
                  <Users size={60} className="mx-auto mb-3 text-gray-500" />
                  <p className="text-gray-500 text-sm">
                    Teamfoto (16:9) wird hier erscheinen
                  </p>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="md:w-1/2 text-left">
              <p className="text-lg text-gray-200 mb-4">
                Unsere Geschichte beginnt mit unserem Geschäftsführer Florian
                Beitans, der sich schon lange vor dem KI-Boom für künstliche
                Intelligenz begeisterte und mit KI-gestützten Lösungen
                experimentierte.
              </p>
              <p className="text-lg text-gray-200 mb-6">
                Aus dieser Leidenschaft heraus entstand ein Team von
                Gleichgesinnten, vereint durch die Vision, innovative
                KI-Technologien für Unternehmen zugänglich zu machen.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <a
              href="/unsere-geschichte"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-all duration-300 group relative"
            >
              <span className="mr-2">
                Erfahre mehr über unseren Weg und unsere Leidenschaft für KI
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-400/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Background abstract shapes */}
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-900/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-3xl"></div>
    </section>
  );
}

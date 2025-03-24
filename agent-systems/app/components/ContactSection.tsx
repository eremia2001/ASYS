import React from "react";
import { motion } from "framer-motion";
import { companyInfo } from "../data/companyInfo";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 relative"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            className="text-5xl font-bold mb-4 text-center"
            style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
          >
            Kontakt
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-xl text-center mb-8 max-w-2xl mx-auto font-light"
          >
            Bereit für den nächsten Schritt? Kontaktiere uns!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 p-8 rounded-xl border border-gray-700/30 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Kontaktdaten</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin size={24} className="text-teal-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Adresse</h4>
                  <p className="text-gray-300">
                    {companyInfo.name}
                    <br />
                    {companyInfo.address.street}
                    <br />
                    {companyInfo.address.zip} {companyInfo.address.city}
                    <br />
                    {companyInfo.address.country}
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone size={24} className="text-teal-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Telefon</h4>
                  <a
                    href={`tel:${companyInfo.contact.phone}`}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={24} className="text-teal-400 mr-4 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">E-Mail</h4>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-gray-300 hover:text-teal-400 transition-colors"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-10 pt-8 border-t border-gray-700/30">
              <h4 className="text-white font-semibold mb-3">Bürozeiten</h4>
              <p className="text-gray-300">
                Montag - Freitag: 9:00 - 18:00 Uhr
                <br />
                Wochenende: Geschlossen
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white mb-2 font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                  placeholder="Dein Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-2 font-medium"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                  placeholder="deine@email.de"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-white mb-2 font-medium"
                >
                  Betreff
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                  placeholder="Worum geht es?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2 font-medium"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50"
                  placeholder="Wie können wir dir helfen?"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-teal-600/20"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-teal-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-900/5 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}

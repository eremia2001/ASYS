import React, { useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";

export default function KontaktSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation for form submission would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
    // Display success message to user
    alert("Vielen Dank für deine Nachricht! Wir melden uns bei dir.");
  };

  return (
    <section id="contact" className="py-24 px-4 bg-black relative">
      <div className="container mx-auto">
        <h2
          className="text-5xl font-bold text-center mb-16"
          style={{ fontFamily: "Inter", letterSpacing: "-0.05em" }}
        >
          Kontakt – Kein Blabla, einfach loslegen!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Karte 1: Standort */}
          <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Unser Standort
            </h3>
            <p className="text-gray-300 mb-6">
              Besuche uns in Leipzig oder vereinbare einen virtuellen Termin.
              Wir sind flexibel und können uns deinen Bedürfnissen anpassen.
            </p>
            <p className="text-gray-400">
              Agent Systems GmbH
              <br />
              Peterssteinweg 14
              <br />
              04107 Leipzig, Deutschland
            </p>

            <div className="mt-6">
              <CTAButton
                text="E-Mail schreiben"
                href="mailto:kontakt@agent-systems.de"
                variant="outline"
                size="small"
              />
            </div>
          </div>

          {/* Karte 2: Kontaktformular */}
          <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Kontaktformular
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-500"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-500"
                  placeholder="Betreff"
                  required
                />
              </div>
              <div>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 placeholder-gray-500"
                  placeholder="Deine Nachricht"
                  required
                ></textarea>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-primary text-black font-bold py-3 px-8 rounded-2xl shadow-xl shadow-primary/50 hover:shadow-lg hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-600/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-900/5 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
}

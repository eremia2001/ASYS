export default function LeistungenSection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
          Unsere Leistungen – Wir liefern Ergebnisse!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Analyse */}
          <div className="p-8 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              1. Analyse: Wo steckt euer Potenzial?
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Wir identifizieren Engpässe & Automatisierungsmöglichkeiten.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Spezialisten für n8n, Zapier & maßgeschneiderte Lösungen.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Hosting & Setup für Open-Source-KI-Infrastruktur (Open Web UI, deutsche Server).</span>
              </li>
            </ul>
          </div>
          
          {/* KI & Automatisierung */}
          <div className="p-8 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              2. KI & Automatisierung: Weniger manuell, mehr smart!
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Chatbots, die Prozesse abnehmen – rund um die Uhr.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>LLMs & Automatisierungstools für Texterstellung, Kundenanfragen & mehr.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>KI-Agenten, die sich in eure Workflows integrieren und produktiv arbeiten.</span>
              </li>
            </ul>
          </div>
          
          {/* Schulungen */}
          <div className="p-8 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              3. Schulungen: Wissen, das direkt Umsatz bringt
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Praxisnahe Workshops mit echten Profis.</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Fokus auf schnelle Umsetzung & direkt nutzbares Know-how.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 
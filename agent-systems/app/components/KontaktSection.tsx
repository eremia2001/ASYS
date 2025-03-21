import CTAButton from './CTAButton';

export default function KontaktSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
          Kontakt – Kein Blabla, einfach loslegen!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Karte 1: Standort */}
          <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-white">Unser Standort</h3>
            <p className="text-gray-300 mb-6">
              Besuche uns in München oder vereinbare einen virtuellen Termin. 
              Wir sind flexibel und können uns deinen Bedürfnissen anpassen.
            </p>
            <p className="text-gray-400">
              Agent Systems GmbH<br />
              Beispielstraße 123<br />
              80331 München
            </p>
          </div>
          
          {/* Karte 2: Kontaktformular */}
          <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-white">Kontaktformular</h3>
            <p className="text-gray-300 mb-6">
              Fülle unser Kontaktformular aus und wir melden uns innerhalb von 24 Stunden bei dir. 
              Alternativ kannst du uns direkt eine E-Mail schreiben.
            </p>
            <div className="mt-6">
              <CTAButton 
                text="E-Mail schreiben" 
                href="mailto:kontakt@agent-systems.de" 
                variant="gradient" 
                size="medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
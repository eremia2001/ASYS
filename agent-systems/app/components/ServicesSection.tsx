import CTAButton from './CTAButton';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
          100 % Effizienz. 0 % unnötige Arbeit.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Karte 1: Prozessautomatisierung */}
          <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-white">Prozessautomatisierung</h3>
            <p className="text-gray-300 mb-6">
              Wir automatisieren zeitraubende Routineaufgaben und setzen deine Mitarbeiter für wertschöpfende Tätigkeiten frei.
            </p>
            <div className="mt-6">
              <CTAButton 
                text="Mehr erfahren" 
                href="#contact" 
                variant="outline" 
                size="small"
              />
            </div>
          </div>
          
          {/* Karte 2: KI-Lösungen */}
          <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-white">KI-Lösungen</h3>
            <p className="text-gray-300 mb-6">
              Wir entwickeln maßgeschneiderte KI-Lösungen, die deine Daten intelligent nutzen und neue Einsichten generieren.
            </p>
            <div className="mt-6">
              <CTAButton 
                text="Mehr erfahren" 
                href="#contact" 
                variant="outline" 
                size="small"
              />
            </div>
          </div>
          
          {/* Karte 3: Softwareentwicklung */}
          <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-white">Softwareentwicklung</h3>
            <p className="text-gray-300 mb-6">
              Wir programmieren moderne, skalierbare Anwendungen, die genau auf deine Anforderungen zugeschnitten sind.
            </p>
            <div className="mt-6">
              <CTAButton 
                text="Mehr erfahren" 
                href="#contact" 
                variant="outline" 
                size="small"
              />
            </div>
          </div>
          
          {/* Karte 4: Strategische Beratung */}
          <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold mb-4 text-white">Strategische Beratung</h3>
            <p className="text-gray-300 mb-6">
              Wir entwickeln mit dir gemeinsam eine Digitalstrategie, die dein Unternehmen nachhaltig voranbringt.
            </p>
            <div className="mt-6">
              <CTAButton 
                text="Mehr erfahren" 
                href="#contact" 
                variant="outline" 
                size="small"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
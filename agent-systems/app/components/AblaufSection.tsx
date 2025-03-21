import ProgressArrow from './ProgressArrow';
import CTAButton from './CTAButton';

export default function AblaufSection() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-24" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
          Ablauf – So arbeiten wir mit euch
        </h2>
        
        <div className="max-w-5xl mx-auto relative">
          <ProgressArrow />
          
          <div className="space-y-36">
            {/* Schritt 1 */}
            <div className="relative">
              <div className="ml-8 flex items-start">
                {/* Rechte Seite - Inhalt */}
                <div className="flex-1">
                  {/* Kopfzeile */}
                  <div className="mb-6">
                    <h3 className="text-4xl font-bold text-white" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
                      <span className="text-4xl font-bold text-white mr-3">1</span>
                      Erstgespräch
                    </h3>
                  </div>
                  
                  {/* Inhaltsbox mit Glaseffekt */}
                  <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Analyse eures Bedarfs und Identifikation von Automatisierungspotenzial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Schritt 2 */}
            <div className="relative">
              <div className="ml-8 flex items-start">
                {/* Rechte Seite - Inhalt */}
                <div className="flex-1">
                  {/* Kopfzeile */}
                  <div className="mb-6">
                    <h3 className="text-4xl font-bold text-white" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
                      <span className="text-4xl font-bold text-white mr-3">2</span>
                      Strategie
                    </h3>
                  </div>
                  
                  {/* Inhaltsbox mit Glaseffekt */}
                  <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Entwicklung konkreter Lösungsansätze auf Basis bewährter Technologien.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Schritt 3 */}
            <div className="relative">
              <div className="ml-8 flex items-start">
                {/* Rechte Seite - Inhalt */}
                <div className="flex-1">
                  {/* Kopfzeile */}
                  <div className="mb-6">
                    <h3 className="text-4xl font-bold text-white" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
                      <span className="text-4xl font-bold text-white mr-3">3</span>
                      Umsetzung
                    </h3>
                  </div>
                  
                  {/* Inhaltsbox mit Glaseffekt */}
                  <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Agile Implementierung und nahtlose Integration in bestehende Systeme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Schritt 4 */}
            <div className="relative">
              <div className="ml-8 flex items-start">
                {/* Rechte Seite - Inhalt */}
                <div className="flex-1">
                  {/* Kopfzeile */}
                  <div className="mb-6">
                    <h3 className="text-4xl font-bold text-white" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
                      <span className="text-4xl font-bold text-white mr-3">4</span>
                      Partnerschaft
                    </h3>
                  </div>
                  
                  {/* Inhaltsbox mit Glaseffekt */}
                  <div className="p-8 rounded-2xl bg-black/30 backdrop-blur-sm border border-cyan-500/20 shadow-xl shadow-cyan-500/10 transform transition-all duration-300 hover:shadow-cyan-400/20 hover:border-cyan-400/30 hover:scale-[1.02]">
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Kontinuierliche Optimierung und Betreuung für langfristigen Erfolg.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Final Element */}
          <div className="mt-20 text-center">
            <div className="inline-block p-4 bg-gradient-to-r from-cyan-400/40 to-blue-600/40 rounded-full backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
              </div>
            </div>
            <p className="mt-8 text-xl font-medium text-gray-300">Bereit, mit uns durchzustarten?</p>
            <div className="mt-6">
              <CTAButton 
                text="Jetzt Kontakt aufnehmen" 
                href="#contact" 
                variant="secondary" 
                size="medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
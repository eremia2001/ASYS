import CTAButton from './CTAButton';

export default function UseCasesSection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
          Use Cases – So sieht das in der Praxis aus
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="p-8 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              🚀 Automatische Dokumentengenerierung
            </h3>
            <p className="text-gray-300 mb-4">
              Beispiel: Grundsteine.com – per GIF visualisiert.
            </p>
          </div>
          
          <div className="p-8 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              📈 Automatisiertes Content-Management
            </h3>
            <p className="text-gray-300 mb-4">
              Aktuelle News scrapen & passend zur Buyer Persona aufbereiten.
            </p>
          </div>
          
          <div className="p-8 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              🔍 Rezensionen auswerten & analysieren
            </h3>
            <p className="text-gray-300 mb-4">
              Smarte KI-Analyse für besseren Kundenservice.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
            Bereit, eure Prozesse auf das nächste Level zu heben?
          </h3>
          <CTAButton 
            text="Lasst uns quatschen" 
            href="#contact" 
            variant="gradient" 
            size="large"
          />
        </div>
      </div>
    </section>
  );
} 
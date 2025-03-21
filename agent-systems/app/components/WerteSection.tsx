export default function WerteSection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
          Unsere Werte – Darauf könnt ihr euch verlassen
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <p className="text-xl text-gray-300">
              <span className="text-green-500 mr-2">✅</span> Ehrlichkeit: Kein Bullshit, nur klare Ergebnisse.
            </p>
          </div>
          
          <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <p className="text-xl text-gray-300">
              <span className="text-green-500 mr-2">✅</span> Macher-Mentalität: Wir reden nicht nur – wir liefern.
            </p>
          </div>
          
          <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <p className="text-xl text-gray-300">
              <span className="text-green-500 mr-2">✅</span> Agilität: Anpassungsfähig & lösungsorientiert.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
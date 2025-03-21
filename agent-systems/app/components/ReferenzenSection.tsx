export default function ReferenzenSection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
          Referenzen – Zahlen lügen nicht
        </h2>
        
        <p className="text-center text-xl text-gray-300 mb-12">
          So viel Zeit & Geld haben unsere Kunden gespart:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              Beispielprojekt 1
            </h3>
            <p className="text-gray-300">
              X Stunden & Y € eingespart.
            </p>
          </div>
          
          <div className="p-8 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
            <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              Beispielprojekt 2
            </h3>
            <p className="text-gray-300">
              X % mehr Effizienz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
export default function ProblemSection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-left" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em', paddingLeft: '0px' }}>
            Eure Pain Points.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
              <p className="text-gray-300 mb-4">
                Eure Mitarbeitenden verbringen zu viel Zeit mit Aufgaben, die kein Geld bringen.
              </p>
            </div>
            
            <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
              <p className="text-gray-300 mb-4">
                Kundenanfragen müssen mühsam manuell eingegeben werden.
              </p>
            </div>
            
            <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
              <p className="text-gray-300 mb-4">
                Content-Erstellung frisst Kapazitäten.
              </p>
            </div>
            
            <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
              <p className="text-gray-300 mb-4">
                Skalierung wird ab einer gewissen Größe zum Albtraum – mehr Leute einzustellen ist keine Option.
              </p>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-300 mb-6">
              Langsame Prozesse = unzufriedene Kunden & stagnierendes Wachstum.
            </p>
            <p className="text-xl text-cyan-400 font-bold">
              Unsere Lösung: Prozessoptimierung mit KI & Software – effizient, skalierbar, profitabel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
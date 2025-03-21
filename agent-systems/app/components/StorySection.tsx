export default function StorySection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
          Unsere Story – Warum wir tun, was wir tun
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-6">
            Wir lieben Effizienz & smarte Prozesse.
          </p>
          <p className="text-xl text-gray-300 mb-6">
            Unsere Wurzeln liegen im Machn-Basislager – Unternehmer-DNA steckt in uns.
          </p>
          <a href="#" className="text-cyan-400 hover:underline">Mehr dazu? Hier geht's zur ganzen Story.</a>
        </div>
      </div>
    </section>
  );
} 
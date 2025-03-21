export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
          Unser Team – die Macher:innen!
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto text-lg">
          Wir kommen aus der Praxis, nicht aus dem Lehrbuch.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* Team Member - Robert */}
          <div className="text-center group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-5 aspect-square">
              <img 
                src="/robert.jpg" 
                alt="Robert - Fullstack Developer" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
                style={{ objectPosition: 'center 30%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              Robert
            </h3>
            <p className="text-indigo-400 font-medium" style={{ fontFamily: 'Inter' }}>Fullstack Developer</p>
          </div>
          
          {/* Team Member - Flo */}
          <div className="text-center group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-5 aspect-square">
              <img 
                src="/flo.jpg" 
                alt="Flo - CEO" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
                style={{ objectPosition: 'center 30%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              Flo
            </h3>
            <p className="text-indigo-400 font-medium" style={{ fontFamily: 'Inter' }}>CEO</p>
          </div>
          
          {/* Team Member - Ida */}
          <div className="text-center group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-5 aspect-square">
              <img 
                src="/ida.JPG" 
                alt="Ida - COO" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105" 
                style={{ objectPosition: 'center 30%' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
            </div>
            <h3 className="text-2xl font-semibold mb-1" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              Ida
            </h3>
            <p className="text-indigo-400 font-medium" style={{ fontFamily: 'Inter' }}>COO</p>
          </div>
        </div>
      </div>
    </section>
  );
} 
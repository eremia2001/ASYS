'use client';
import { motion } from 'framer-motion';
import { FaRobot, FaCode, FaCogs } from 'react-icons/fa';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white transition-all duration-500 ease-in-out">
        <style jsx>{`
          .neural-network {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(0,255,255,0.1) 1%, transparent 1%), radial-gradient(circle, rgba(0,255,255,0.1) 1%, transparent 1%);
            background-size: 3% 3%, 3% 3%;
            background-position: 0 0, 1.5% 1.5%;
            transform: translateZ(0) scale(1);
            pointer-events: none;
            z-index: 0;
          }
          .neural-network::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
            transform: translateZ(-1px) scale(2);
            z-index: 1;
          }
          h1, h2, h3, h4, p, a {
            font-family: 'Geistmono', monospace;
            color: white;
          }
          .text-gray-300 {
            color: white;
          }
          .text-gray-600 {
            color: white;
          }
          .bg-gradient-to-r {
            background: linear-gradient(to right, #00FFFF, #81E6D9);
          }
          .hover\:from-blue-500:hover {
            background: #00B5D8;
          }
          .hover\:to-teal-600:hover {
            background: #319795;
          }
          .glow-effect:hover {
            color: #00FFFF;
            text-shadow: 0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF;
          }
          .hexagon {
            clip-path: none;
            border-radius: 20px;
            background: black;
            border: 2px solid #00FFFF;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hexagon:hover {
            transform: scale(1.05);
            box-shadow: 0 0 5px rgba(0,255,255,0.7), 0 0 15px rgba(0,255,255,0.6), 0 0 25px rgba(0,255,255,0.4);
            border-width: 2px;
          }
          .typewriter {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 3px solid;
            animation: typing 6s steps(40, end), blink-caret 0.75s step-end infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: white }
          }

          .team-image-container {
            position: relative;
            width: 320px;
            height: 320px;
            margin-bottom: 1rem;
            overflow: hidden;
            background: black;
            -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Cpath d='M128 16L222 72V184L128 240L34 184V72L128 16Z' fill='black'/%3E%3C/svg%3E") center/contain;
            mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Cpath d='M128 16L222 72V184L128 240L34 184V72L128 16Z' fill='black'/%3E%3C/svg%3E") center/contain;
            transition: all 0.3s ease;
          }
          .team-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            filter: grayscale(100%) contrast(120%);
          }
          .team-image-container:hover {
            transform: scale(1.05);
          }
          .team-image-container:hover img {
            filter: grayscale(100%) contrast(120%);
          }
        `}</style>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
          <div className="neural-network"></div>
          <div className="container mx-auto px-4 z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold text-white mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}
            >
              KI-gesteuerte Prozessautomatisierung
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl text-gray-300 mb-12 font-mono"
            >
              <span className="typewriter">Maximale Effizienz. Mehr Umsatz. Weniger Aufwand.</span>
            </motion.p>
            <a 
              href="#contact" 
              className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full transition-colors glow-effect hover:bg-gradient-to-r from-teal-600 to-blue-500 hover:from-blue-500 hover:to-teal-600 border-2 border-teal-500"
            >
              Jetzt durchstarten
          </a>
        </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
        </section>

        {/* Hauptüberschrift */}
        <section className="py-20 px-4 bg-black">
          <div className="container mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-center mb-8" 
              style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}
            >
              Weniger Overhead, mehr Wachstum: Smarte Prozesse mit KI & Software
            </motion.h2>
          </div>
        </section>

        {/* Das Problem Section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
                Das Problem: Zeitfresser killen Wachstum!
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

        {/* Unsere Leistungen Section */}
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

        {/* Referenzen Section */}
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

        {/* Ablauf Section */}
        <section className="py-16 px-4 bg-black">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
              Ablauf – So arbeiten wir mit euch
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
                  <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
                    1. Unverbindliches Erstgespräch
                  </h3>
                  <p className="text-gray-300">
                    Wir analysieren euren Bedarf.
                  </p>
                </div>
                
                <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
                  <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
                    2. Klarer Plan
                  </h3>
                  <p className="text-gray-300">
                    Wir entwickeln Lösungen, die wirklich funktionieren.
                  </p>
                </div>
                
                <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
                  <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
                    3. Umsetzung
                  </h3>
                  <p className="text-gray-300">
                    Technische Umsetzung & Integration.
                  </p>
                </div>
                
                <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
                  <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>
                    4. Langfristige Partnerschaft
                  </h3>
                  <p className="text-gray-300">
                    Betreuung, Support & Weiterentwicklung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Unser Team Section - mit Hexagonen und runden Ecken */}
        <section id="team" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>Unser Team – Macher, keine Schwätzer!</h2>
            <p className="text-center text-gray-300 mb-12">Wir kommen aus der Praxis, nicht aus dem Lehrbuch.</p>
            <div className="flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <div className="team-image-container" style={{ borderRadius: '20px' }}>
                  <img src="/robert.jpg" alt="Teammitglied 1" className="w-full h-full object-cover filter grayscale opacity-80 transition-transform transform object-position-y-top scale-85" style={{ objectPosition: 'center 30%', borderRadius: '20px' }} />
                </div>
                <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>Robert</h3>
                <p className="text-gray-400" style={{ fontFamily: 'Inter' }}>Fullstack Developer</p>
              </div>
              <div className="text-center">
                <div className="team-image-container" style={{ borderRadius: '20px' }}>
                  <img src="/flo.jpg" alt="Teammitglied 2" className="w-full h-full object-cover filter grayscale opacity-80 transition-transform transform object-position-y-top scale-85" style={{ objectPosition: 'center 30%', borderRadius: '20px' }} />
                </div>
                <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>Flo</h3>
                <p className="text-gray-400" style={{ fontFamily: 'Inter' }}>CEO</p>
              </div>
              <div className="text-center">
                <div className="team-image-container" style={{ borderRadius: '20px' }}>
                  <img src="/ida.JPG" alt="Teammitglied 3" className="w-full h-full object-cover filter grayscale opacity-80 transition-transform transform object-position-y-top scale-85" style={{ objectPosition: 'center 30%', borderRadius: '20px' }} />
                </div>
                <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>Ida</h3>
                <p className="text-gray-400" style={{ fontFamily: 'Inter' }}>COO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unsere Werte Section */}
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

        {/* Unsere Story Section */}
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

        {/* Use Cases Section */}
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
              <a 
                href="#contact" 
                className="inline-block bg-black text-white font-bold py-3 px-8 rounded-full transition-colors glow-effect hover:bg-gradient-to-r from-teal-600 to-blue-500 hover:from-blue-500 hover:to-teal-600 border-2 border-teal-500"
              >
                Lasst uns quatschen
              </a>
            </div>
          </div>
        </section>

        {/* Kontakt Section */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>Kontakt – Kein Blabla, einfach loslegen!</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
                  <p className="text-xl text-gray-300">
                    <span className="mr-2">📍</span> Wir sitzen in Leipzig – für euch vor Ort oder remote erreichbar.
                  </p>
                </div>
                
                <div className="p-6 bg-black rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon">
                  <p className="text-xl text-gray-300">
                    <span className="mr-2">📩</span> Kontaktformular direkt auf der Seite – einfach & schnell.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <a 
                href="mailto:kontakt@agent-systems.de" 
                className="inline-block bg-gradient-to-r from-blue-600 to-teal-600 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="pt-6 pb-20 px-4 bg-black">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h3 className="text-3xl font-semibold mb-12 text-white">100 % Effizienz. 0 % unnötige Arbeit.</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative mb-8 p-8 bg-black text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon" style={{ border: '2px solid #00FFFF' }}>
                  <h4 className="text-2xl font-semibold mb-2">Prozessautomatisierung</h4>
                  <p className="text-gray-300 mb-4">
                    Manuelle Prozesse kosten Zeit und Geld. Wir automatisieren Ihre Abläufe mit intelligenten Tools, die für Sie arbeiten.
                  </p>
                  <a href="#" className="text-sm text-blue-500 hover:underline glow-effect">Mehr erfahren</a>
                </div>
                <div className="relative mb-8 p-8 bg-black text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon" style={{ border: '2px solid #00FFFF' }}>
                  <h4 className="text-2xl font-semibold mb-2">KI-Lösungen</h4>
                  <p className="text-gray-300 mb-4">
                    Datenbasierte Entscheidungen, smarte Algorithmen, echte Wettbewerbsvorteile. Nutzen Sie KI, um effizienter und schneller zu handeln.
                  </p>
                  <a href="#" className="text-sm text-blue-500 hover:underline glow-effect">Mehr erfahren</a>
                </div>
                <div className="relative mb-8 p-8 bg-black text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon" style={{ border: '2px solid #00FFFF' }}>
                  <h4 className="text-2xl font-semibold mb-2">Softwareentwicklung</h4>
                  <p className="text-gray-300 mb-4">
                    Standardlösungen reichen nicht? Wir entwickeln exakt die Software, die Ihr Unternehmen benötigt.
                  </p>
                  <a href="#" className="text-sm text-blue-500 hover:underline glow-effect">Mehr erfahren</a>
                </div>
                <div className="relative mb-8 p-8 bg-black text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hexagon" style={{ border: '2px solid #00FFFF' }}>
                  <h4 className="text-2xl font-semibold mb-2">Strategische Beratung</h4>
                  <p className="text-gray-300 mb-4">
                    Sie wissen, dass Ihr Unternehmen optimiert werden muss, aber nicht wie? Wir zeigen Ihnen den direkten Weg zu mehr Effizienz und Umsatz.
                  </p>
                  <a href="#" className="text-sm text-blue-500 hover:underline glow-effect">Mehr erfahren</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="py-10 px-4 bg-black text-white border-t border-gray-800">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Linke Spalte - Unternehmensinfo */}
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>Agent Systems</h3>
                <p className="mb-4" style={{ fontFamily: 'Inter' }}>Ihr Partner für KI & Automatisierung</p>
                <p className="mb-4" style={{ fontFamily: 'Inter' }}>Peterssteinweg 14<br/>04105 Leipzig</p>
                <p className="mb-4" style={{ fontFamily: 'Inter' }}>🌐 <a href="http://agent-systems.de" className="text-blue-500 hover:text-cyan-400 hover:underline transition-colors">agent-systems.de</a></p>
              </div>
              
              {/* Rechte Spalte - Kontaktinfo */}
              <div className="text-left md:text-right">
                <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Inter', letterSpacing: '-0.05em' }}>Kontakt</h3>
                <p className="mb-4" style={{ fontFamily: 'Inter' }}>📧 info@agent-system.de</p>
                <p className="mb-4" style={{ fontFamily: 'Inter' }}>📞 +49 151 42095898</p>
                <a 
                  href="mailto:kontakt@agent-systems.de" 
                  className="inline-block bg-black text-white font-bold py-2 px-6 rounded-full transition-colors border-2 border-cyan-500 hover:bg-cyan-900"
                  style={{ fontFamily: 'Inter' }}
                >
                  Nachricht senden
                </a>
              </div>
            </div>
            
            {/* Unterer Bereich mit Links und Copyright */}
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500 mb-4 md:mb-0" style={{ fontFamily: 'Inter' }}>© 2023 Agent Systems. Alle Rechte vorbehalten.</p>
              <div className="flex space-x-8">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Inter' }}>Impressum</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" style={{ fontFamily: 'Inter' }}>Datenschutzerklärung</a>
              </div>
            </div>
          </div>
      </footer>
      </main>
    </>
  );
}

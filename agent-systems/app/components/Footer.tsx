import CTAButton from './CTAButton';

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-black border-t border-cyan-900/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-12">
          {/* Linke Spalte - Unternehmensinformationen */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Agent Systems</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Wir verwandeln manuelle Prozesse in automatisierte Workflows. 
              Mit maßgeschneiderten KI-Lösungen und intelligenter Softwareentwicklung 
              steigern wir deine Effizienz und reduzieren Fehler.
            </p>
            <div className="text-gray-400">
              <p className="mb-2">Agent Systems GmbH</p>
              <p className="mb-2">Beispielstraße 123</p>
              <p className="mb-2">80331 München</p>
              <a 
                href="https://www.agent-systems.de" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
              >
                www.agent-systems.de
              </a>
            </div>
          </div>
          
          {/* Rechte Spalte - Kontaktinformationen */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Kontakt</h3>
            <div className="mb-8">
              <p className="text-gray-400 mb-2">
                <span className="font-medium text-white">E-Mail:</span> kontakt@agent-systems.de
              </p>
              <p className="text-gray-400 mb-6">
                <span className="font-medium text-white">Telefon:</span> +49 (0) 123 456789
              </p>
              <div>
                <CTAButton 
                  text="Nachricht senden" 
                  href="mailto:kontakt@agent-systems.de" 
                  variant="primary" 
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright und rechtliche Links */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p className="mb-4">© {new Date().getFullYear()} Agent Systems GmbH. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center space-x-6">
            <a href="/impressum" className="hover:text-cyan-400 transition-colors">Impressum</a>
            <a href="/datenschutz" className="hover:text-cyan-400 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 
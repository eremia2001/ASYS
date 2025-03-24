import React from "react";
import { companyInfo } from "../data/companyInfo";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import HexagonBackground from "./HexagonBackground";
import { handleSmoothScroll } from "../utils/smoothScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          {/* Logo and company name */}
          <div className="flex items-center mb-8 md:mb-0">
            <Image
              src="/logo_asys.svg"
              alt={companyInfo.shortName}
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="text-white text-xl font-medium">
              {companyInfo.shortName}
            </span>
          </div>

          {/* Simple navigation mit sanftem Scrolling */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 md:mb-0">
            <a
              href="#leistungen"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              onClick={(e) => handleSmoothScroll(e, 80)} // 80px Offset von der Oberseite
            >
              Leistungen
            </a>
            <a
              href="#team"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              onClick={(e) => handleSmoothScroll(e, 80)}
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-teal-400 transition-colors"
              onClick={(e) => handleSmoothScroll(e, 80)}
            >
              Kontakt
            </a>
            <a
              href="/impressum"
              className="text-gray-400 hover:text-teal-400 transition-colors"
            >
              Impressum
            </a>
          </div>

          {/* Contact buttons */}
          <div className="flex space-x-4">
            <a
              href={`mailto:${companyInfo.contact.email}`}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-700 text-gray-300 hover:text-white transition-all duration-300"
              aria-label="E-Mail"
            >
              <Mail size={18} />
            </a>
            <a
              href={`tel:${companyInfo.contact.phone}`}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-700 text-gray-300 hover:text-white transition-all duration-300"
              aria-label="Telefon"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Copyright bar - very minimal */}
        <div className="pt-8 border-t border-gray-800/30 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div>
            &copy; {currentYear} {companyInfo.name}
          </div>
          <div className="mt-4 md:mt-0">
            {companyInfo.address.city} • {companyInfo.contact.email}
          </div>
        </div>
      </div>
    </footer>
  );
}

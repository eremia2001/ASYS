import React from "react";
import { companyInfo } from "../data/companyInfo";

export default function ImpressumPage() {
  return (
    <div className="py-24 px-4 bg-gradient-to-b from-black to-gray-900 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-12 text-white text-center">
          Impressum
        </h1>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Angaben gemäß § 5 TMG
          </h2>

          <div className="mb-6">
            <p className="text-gray-300">{companyInfo.name}</p>
            <p className="text-gray-300">{companyInfo.address.street}</p>
            <p className="text-gray-300">
              {companyInfo.address.zip} {companyInfo.address.city}
            </p>
            <p className="text-gray-300">{companyInfo.address.country}</p>
          </div>

          <h3 className="text-xl font-bold mb-3 text-white">Handelsregister</h3>
          <div className="mb-6">
            <p className="text-gray-300">
              {companyInfo.legal.registrationNumber}
            </p>
            <p className="text-gray-300">
              {companyInfo.legal.registrationCourt}
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 text-white">Umsatzsteuer-ID</h3>
          <div className="mb-6">
            <p className="text-gray-300">{companyInfo.legal.vatId}</p>
          </div>

          <h3 className="text-xl font-bold mb-3 text-white">Vertreten durch</h3>
          <div className="mb-6">
            {companyInfo.legal.managingDirectors.map((director, index) => (
              <p key={index} className="text-gray-300">
                {director}
              </p>
            ))}
          </div>
        </div>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Kontakt</h2>

          <div className="mb-6">
            <p className="text-gray-300">
              Telefon: {companyInfo.contact.phone}
            </p>
            <p className="text-gray-300">
              E-Mail:{" "}
              <a
                href={`mailto:${companyInfo.contact.email}`}
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                {companyInfo.contact.email}
              </a>
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-8 shadow-xl mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Rechtliche Hinweise
          </h2>

          <h3 className="text-xl font-bold mb-3 text-white">
            Haftung für Inhalte
          </h3>
          <div className="mb-6">
            <p className="text-gray-300">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 text-white">
            Haftung für Links
          </h3>
          <div className="mb-6">
            <p className="text-gray-300">
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 text-white">Urheberrecht</h3>
          <div className="mb-6">
            <p className="text-gray-300">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/"
            className="inline-block px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors"
          >
            Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}

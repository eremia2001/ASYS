// Zentrale Datei für alle Unternehmensinformationen
// Diese Informationen können in verschiedenen Komponenten verwendet werden,
// um Konsistenz zu gewährleisten und Tippfehler zu vermeiden

export const companyInfo = {
  // Grundlegende Unternehmensdaten
  name: "Agent Systems GmbH",
  shortName: "Agent Systems",
  slogan: "KI-Automatisierung für Unternehmen",
  description:
    "Wir entwickeln intelligente Systeme, die eure Geschäftsprozesse automatisieren und skalieren.",
  yearFounded: 2023,

  // Kontaktdaten
  address: {
    street: "Peterssteinweg 14",
    zip: "04107",
    city: "Leipzig",
    country: "Deutschland",
    formatted: "Peterssteinweg 14, 04107 Leipzig, Deutschland",
  },

  contact: {
    phone: "+49 151 42095898",
    email: "info@agent-systems.de",
    website: "https://agent-systems.de",
  },

  // Social Media
  social: {
    linkedin: "https://linkedin.com/company/agent-systems",
    github: "https://github.com/agent-systems",
  },

  // Rechtliche Informationen
  legal: {
    companyType: "GmbH",
    vatId: "DE367091569",
    registrationNumber: "HRB 42600",
    registrationCourt: "Amtsgericht Leipzig",
    managingDirectors: ["Florian Beitans"],
  },

  // Kernkompetenzen
  coreCompetencies: [
    "KI-Agenten & Automatisierung",
    "Prozessanalyse & KI-Strategie",
    "Chatbots & LLM-Integration",
    "KI-Schulungen & Workshops",
  ],

  // Technologie-Stack
  technologies: [
    "Large Language Models (LLMs)",
    "Automatisierungsplattformen (n8n, Zapier)",
    "Künstliche Intelligenz",
    "Machine Learning",
  ],

  // Branding
  branding: {
    primaryColor: "teal",
    secondaryColor: "gray",
    logoPath: "/logo.svg",
    fontFamily: "Inter, sans-serif",
  },
};

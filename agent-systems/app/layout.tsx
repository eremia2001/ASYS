import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agent Systems GmbH - Prozessoptimierung & KI-Lösungen",
  description: "Ihr Partner für Prozessoptimierung, KI-Entwicklung und innovative Softwarelösungen. Spezialisiert auf maßgeschneiderte Chatbots und digitale Transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

'use client';
import { useRef } from 'react';
import Navbar from './components/Navbar';
import StyleSheet from './components/StyleSheet';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import LeistungenSection from './components/LeistungenSection';
import ReferenzenSection from './components/ReferenzenSection';
import AblaufSection from './components/AblaufSection';
import TeamSection from './components/TeamSection';
import WerteSection from './components/WerteSection';
import StorySection from './components/StorySection';
import UseCasesSection from './components/UseCasesSection';
import KontaktSection from './components/KontaktSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white transition-all duration-500 ease-in-out">
        
        <HeroSection />
        <ProblemSection />
        <LeistungenSection />
        <ReferenzenSection />
        <AblaufSection />
        <TeamSection />
        <WerteSection />
        <StorySection />
        <UseCasesSection />
        <KontaktSection />
        <ServicesSection />
        <Footer />
      </main>
    </>
  );
}

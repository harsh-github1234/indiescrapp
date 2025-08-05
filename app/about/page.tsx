
'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import MissionSection from './MissionSection';
import TeamSection from './TeamSection';
import StatsSection from './StatsSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <MissionSection />
      <StatsSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

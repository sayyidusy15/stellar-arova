import React from 'react';
import { Metadata } from 'next';
import { GridRails } from '@/components/monitor/GridRails';
import { Navbar } from '@/components/monitor/Navbar';
import { Hero } from '@/components/monitor/Hero';
import { Marquee } from '@/components/monitor/Marquee';
import { Statement } from '@/components/monitor/Statement';
import { Stats } from '@/components/monitor/Stats';
import { SolutionThesis } from '@/components/monitor/SolutionThesis';
import { Capabilities } from '@/components/monitor/Capabilities';
import { AuthLifecycle } from '@/components/monitor/AuthLifecycle';
import { BentoFeatures } from '@/components/monitor/BentoFeatures';
import { EngineBreakdown } from '@/components/monitor/EngineBreakdown';
import { Integrations } from '@/components/monitor/Integrations';
import { SocialProof } from '@/components/monitor/SocialProof';
import { Pricing } from '@/components/monitor/Pricing';
import { CtaFinal } from '@/components/monitor/CtaFinal';
import { Footer } from '@/components/monitor/Footer';

export const metadata: Metadata = {
  title: 'Arova | Verified Purchase Reviews on Stellar',
  description:
    "Arova is a reusable Stellar eligibility layer that lets marketplaces accept one verified review per valid purchase without putting the buyer's wallet in the public review record.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] font-sans selection:bg-[#1f1f1f] selection:text-[#ffffff]">
      {/* Fixed vertical rail lines — continuous from top to bottom */}
      <GridRails />
      <Navbar />
      <Hero />
      <Marquee />
      <Statement />
      {/* <Stats /> */}
      <SolutionThesis />
      <Capabilities />
      <AuthLifecycle />
      {/* <BentoFeatures /> */}
      {/* <EngineBreakdown /> */}
      {/* <Integrations /> */}
      {/* <SocialProof /> */}
      {/* <Pricing /> */}
      <CtaFinal />
      <Footer />
    </main>
  );
}

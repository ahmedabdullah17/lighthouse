"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SpecialOffers from '@/components/SpecialOffers';
import Destinations from '@/components/Destinations';
import LuxurySection from '@/components/LuxurySection';
import TechLiving from '@/components/TechLiving';
import PartnerSection from '@/components/PartnerSection';
import PartnersBar from '@/components/PartnersBar';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/10 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <SpecialOffers />
        <Destinations />
        <LuxurySection />
        <TechLiving />
        <PartnerSection />
        <PartnersBar />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
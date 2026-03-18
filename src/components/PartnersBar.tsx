"use client";

import React from 'react';

const partners = [
  "Marassi", "Amwaj", "Hacienda", "Mountain View", "Fouka Bay", "Ghazala Bay", "New Alamein",
  "Sidi Heneish", "Almaza Bay", "Telal", "Seashell", "La Vista", "Sodic", "Emaar"
];

const PartnersBar = () => {
  return (
    <div className="bg-[#1A2B4C] border-t border-white/10 py-12 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-white/30 font-black text-xs uppercase tracking-[0.4em]">Trusted by Industry Leaders</h3>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
          {partners.map((partner, i) => (
            <span key={i} className="text-white/40 font-black text-2xl md:text-3xl hover:text-secondary transition-colors cursor-default uppercase tracking-tighter">
              {partner}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-24">
          {partners.map((partner, i) => (
            <span key={`clone-${i}`} className="text-white/40 font-black text-2xl md:text-3xl hover:text-secondary transition-colors cursor-default uppercase tracking-tighter">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersBar;
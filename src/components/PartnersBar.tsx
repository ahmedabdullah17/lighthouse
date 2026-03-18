"use client";

import React from 'react';

const partners = [
  "Marassi", "Amwaj", "Hacienda", "Mountain View", "Fouka Bay", "Ghazala Bay", "New Alamein"
];

const PartnersBar = () => {
  return (
    <div className="bg-[#1A2B4C] border-t border-white/10 py-10">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-white/40 font-bold text-2xl mb-8 uppercase tracking-[0.2em]">Our Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <span key={partner} className="text-white/60 font-bold text-lg hover:text-white transition-colors cursor-default">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersBar;
"use client";

import React from 'react';

const LuxurySection = () => {
  const marqueeText = "LIMITLESS LUXURY • UNMATCHED COMFORT • DISTINCTION • ";

  return (
    <section className="py-24 bg-[#1A2B4C] overflow-hidden relative">
      {/* Decorative Logo in Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <img src="/src/assets/logo.png" alt="" className="w-[600px] h-auto grayscale invert" />
      </div>

      <div className="relative flex overflow-x-hidden border-y border-white/10 py-12">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-6xl md:text-8xl font-black text-white/20 mx-4 tracking-tighter uppercase italic">
              {marqueeText}
            </span>
          ))}
        </div>

        <div className="absolute top-12 animate-marquee2 whitespace-nowrap flex items-center">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-6xl md:text-8xl font-black text-white/20 mx-4 tracking-tighter uppercase italic">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-12 text-center">
        <div className="inline-flex items-center gap-6 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10 shadow-2xl">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shrink-0">
            <img src="/src/assets/logo.png" alt="Lighthouse" className="w-full h-auto" />
          </div>
          <p className="text-xl md:text-2xl text-yellow-500 font-bold italic tracking-tight">
            Because You Deserve a Stay That Matches Your Distinction
          </p>
        </div>
      </div>
    </section>
  );
};

export default LuxurySection;
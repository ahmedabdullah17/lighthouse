"use client";

import React from 'react';

const LuxurySection = () => {
  return (
    <section className="py-24 bg-[#1A2B4C] text-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center p-8">
            <img src="/src/assets/logo.png" alt="Lighthouse Logo" className="w-full h-auto" />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Limitless Luxury and Unmatched Comfort
          </h2>
          <p className="text-xl text-yellow-500 font-medium italic">
            Because You Deserve a Stay That Matches Your Distinction
          </p>
        </div>
      </div>
    </section>
  );
};

export default LuxurySection;
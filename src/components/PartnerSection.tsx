"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PartnerSection = () => {
  return (
    <section className="py-24 bg-[#1A2B4C] text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm">Partnership Opportunity</span>
          <h2 className="text-5xl font-bold leading-tight">Become a Partner with Lighthouse</h2>
          <p className="text-gray-300 text-lg">
            List your property on Egypt's leading vacation rental platform and earn maximum returns with our comprehensive property management services.
          </p>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-6 rounded-xl font-bold text-lg group">
            Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-gray-400">Join 500+ property owners already earning</p>
        </div>

        <div className="flex-1 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
              alt="Luxury Property" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl text-[#1A2B4C]">
            <div className="flex items-center gap-4">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-xs font-medium text-gray-500 leading-tight">
                Active<br />Partner<br />Earning with us
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
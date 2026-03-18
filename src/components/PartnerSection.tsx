"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Shield, Globe } from 'lucide-react';

const PartnerSection = () => {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-8 md:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-secondary font-black uppercase tracking-[0.4em] text-xs">Partnership</span>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                  Maximize Your <br />
                  <span className="text-secondary italic">Returns.</span>
                </h2>
                <p className="text-white/60 text-xl leading-relaxed max-w-xl">
                  Join Egypt's most exclusive property management network. We handle everything from marketing to maintenance, so you can enjoy the rewards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary">
                    <TrendingUp size={20} />
                  </div>
                  <h5 className="text-white font-bold text-sm">High Yield</h5>
                  <p className="text-white/40 text-xs">Optimized pricing for maximum occupancy.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary">
                    <Shield size={20} />
                  </div>
                  <h5 className="text-white font-bold text-sm">Full Care</h5>
                  <p className="text-white/40 text-xs">Professional cleaning and maintenance.</p>
                </div>
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-secondary">
                    <Globe size={20} />
                  </div>
                  <h5 className="text-white font-bold text-sm">Global Reach</h5>
                  <p className="text-white/40 text-xs">Listed on all major global platforms.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-primary px-10 py-8 rounded-2xl font-black text-lg group w-full sm:w-auto">
                  Partner With Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Partner" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-[10px] font-black text-primary">
                    500+
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="flex-1 relative w-full">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000" 
                  alt="Luxury Property Management" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-secondary">Monthly Earnings</span>
                    <TrendingUp size={16} className="text-secondary" />
                  </div>
                  <div className="text-3xl font-black mb-1">EGP 125,000+</div>
                  <p className="text-white/40 text-xs">Average monthly revenue for premium villas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
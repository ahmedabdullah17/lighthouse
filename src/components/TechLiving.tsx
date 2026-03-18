"use client";

import React from 'react';
import { Smartphone, ShieldCheck, MessageSquare, Sparkles } from 'lucide-react';
import phoneMockup from '@/assets/phonemockup.avif';

const TechLiving = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Content */}
          <div className="flex-1 space-y-12 relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary text-xs font-black uppercase tracking-widest">
                <Sparkles size={14} />
                Smart Hospitality
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tight">
                Tech-Enabled <br />
                <span className="text-secondary italic">Living.</span>
              </h2>
              <p className="text-gray-500 text-xl leading-relaxed max-w-lg">
                Experience a seamless stay with our integrated technology. From instant booking to smart access, everything is at your fingertips.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group p-6 rounded-[2rem] bg-gray-50 hover:bg-primary hover:text-white transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <Smartphone size={24} />
                </div>
                <h4 className="font-black text-lg mb-2">Smart Check-in</h4>
                <p className="text-sm opacity-70 leading-relaxed">Skip the front desk. Access your luxury suite directly with your smartphone.</p>
              </div>

              <div className="group p-6 rounded-[2rem] bg-gray-50 hover:bg-primary hover:text-white transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="font-black text-lg mb-2">24/7 Support</h4>
                <p className="text-sm opacity-70 leading-relaxed">Our digital concierge is always available to ensure your comfort and safety.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-12 cursor-pointer hover:scale-105 transition-transform" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-12 cursor-pointer hover:scale-105 transition-transform" />
            </div>
          </div>

          {/* Right Mockup */}
          <div className="flex-1 relative">
            <div className="relative z-10">
              <img 
                src={phoneMockup} 
                alt="Lighthouse App Mockup" 
                className="w-full max-w-[500px] mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] animate-in fade-in slide-in-from-bottom-10 duration-1000"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full -z-10 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechLiving;
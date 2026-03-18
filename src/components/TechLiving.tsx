"use client";

import React from 'react';
import { Smartphone, ShieldCheck, MessageSquare } from 'lucide-react';

const TechLiving = () => {
  return (
    <section className="py-24 container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-[#1A2B4C] mb-4">Tech Enabled Living</h2>
            <p className="text-gray-500 text-lg">
              Smart stays made easy. Book, check in, and get support anytime, all from the app.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto text-[#1A2B4C]">
                <Smartphone size={24} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Smart Check-in</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto text-[#1A2B4C]">
                <ShieldCheck size={24} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Contactless Support</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto text-[#1A2B4C]">
                <MessageSquare size={24} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Seamless Communication</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10 cursor-pointer" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-10 cursor-pointer" />
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative z-10 max-w-[300px] mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000" 
              alt="App Mockup" 
              className="rounded-[3rem] border-[8px] border-black shadow-2xl"
            />
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
              <h4 className="font-bold text-lg">Double Room w/ Balcony</h4>
              <p className="text-xs opacity-80">New Cairo</p>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-[10px]">
                  <p className="opacity-60">Check-in date</p>
                  <p className="font-bold">18 Mar 2024</p>
                </div>
                <div className="text-[10px] text-right">
                  <p className="opacity-60">Check-out date</p>
                  <p className="font-bold">30 Mar 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-50 rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TechLiving;
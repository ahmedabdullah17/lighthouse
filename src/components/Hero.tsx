"use client";

import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex flex-col items-center justify-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Resort" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Lighthouse
        </h1>
        <p className="text-xl text-white/90 font-medium drop-shadow-md">
          Your gateway to luxury stays in Egypt.
        </p>
      </div>

      {/* Booking Bar */}
      <div className="relative z-10 w-full max-w-5xl px-4">
        <div className="bg-white rounded-2xl shadow-2xl p-2 md:p-4 flex flex-col md:flex-row items-center gap-2 md:gap-0">
          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
            <MapPin className="text-gray-400" size={20} />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Where</span>
              <input 
                type="text" 
                placeholder="New Cairo, North Coast..." 
                className="text-sm font-semibold text-gray-800 placeholder:text-gray-300 focus:outline-none w-full"
              />
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
            <Calendar className="text-gray-400" size={20} />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Check-in</span>
              <span className="text-sm font-semibold text-gray-300">Add dates</span>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
            <Calendar className="text-gray-400" size={20} />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Check-out</span>
              <span className="text-sm font-semibold text-gray-300">Add dates</span>
            </div>
          </div>

          <div className="flex-1 w-full flex items-center gap-3 px-4 py-3">
            <Users className="text-gray-400" size={20} />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Guests</span>
              <span className="text-sm font-semibold text-gray-800">2 Adults</span>
            </div>
          </div>

          <Button className="w-full md:w-14 h-14 rounded-xl bg-[#1A2B4C] hover:bg-[#2A3B5C] transition-all shrink-0">
            <Search size={24} className="text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
"use client";

import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const destinations = [
  {
    id: 1,
    name: "Marassi Marina",
    location: "North Coast",
    properties: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    name: "Amwaj Resort",
    location: "North Coast",
    properties: 0,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    name: "Fifth Settlement",
    location: "New Cairo",
    properties: 0,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000"
  }
];

const Destinations = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl font-bold text-[#1A2B4C] mb-4">Destinations of Distinction.</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore exclusive properties in Egypt's most sought-after coastal and urban locations.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {destinations.map((dest) => (
          <div key={dest.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-xl">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#1A2B4C]">
                  {dest.properties} Properties
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-[#1A2B4C] mb-1">{dest.name}</h3>
              <div className="flex items-center justify-center gap-1 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>{dest.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button className="bg-[#1A2B4C] hover:bg-[#2A3B5C] text-white px-8 py-6 rounded-xl font-bold text-lg">
          Explore Destinations
        </Button>
      </div>
    </section>
  );
};

export default Destinations;
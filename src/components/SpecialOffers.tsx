"use client";

import React from 'react';
import { Heart, Star, MapPin, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const properties = [
  {
    id: 1,
    title: "Marassi Marina",
    location: "North Coast",
    price: "2,700",
    oldPrice: "3,000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    discount: "-10%",
    timeLeft: "10:42:15:36"
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-20 container mx-auto px-4">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#1A2B4C] mb-2">Special Offers</h2>
        <p className="text-gray-500">Limited time deals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="group cursor-pointer">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                <Badge className="bg-white/90 text-black hover:bg-white border-none font-bold">
                  {property.discount}
                </Badge>
                <Badge className="bg-red-500 text-white border-none">
                  🔥
                </Badge>
              </div>
              <button className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-red-500 transition-all">
                <Heart size={20} />
              </button>
              <div className="absolute bottom-3 left-3 right-3 bg-black/40 backdrop-blur-md rounded-lg p-2 flex items-center gap-2 text-white text-xs font-medium">
                <Clock size={14} />
                <span>{property.timeLeft}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="text-[10px] uppercase tracking-wider border-red-200 text-red-500 bg-red-50">
                  Ramadan
                </Badge>
              </div>
              <h3 className="font-bold text-lg text-[#1A2B4C]">{property.title}</h3>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>{property.location}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-[#1A2B4C]">EGP {property.price}</span>
                <span className="text-sm text-gray-400 line-through">EGP {property.oldPrice}</span>
                <span className="text-xs text-gray-400">/ night</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
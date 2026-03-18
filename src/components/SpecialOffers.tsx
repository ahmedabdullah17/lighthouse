"use client";

import React from 'react';
import { Heart, Star, MapPin, Clock, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const properties = [
  {
    id: 1,
    title: "Marassi Marina Luxury Suite",
    location: "North Coast, Egypt",
    price: "2,700",
    oldPrice: "3,000",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
    discount: "10% OFF",
    timeLeft: "10:42:15:36",
    tag: "Ramadan Special"
  },
  {
    id: 2,
    title: "Amwaj Beachfront Villa",
    location: "North Coast, Egypt",
    price: "4,500",
    oldPrice: "5,200",
    rating: 4.8,
    reviews: 85,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000",
    discount: "15% OFF",
    timeLeft: "05:12:45:20",
    tag: "Early Bird"
  },
  {
    id: 3,
    title: "Fifth Settlement Penthouse",
    location: "New Cairo, Egypt",
    price: "3,200",
    oldPrice: "3,800",
    rating: 5.0,
    reviews: 42,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1000",
    discount: "20% OFF",
    timeLeft: "02:30:10:05",
    tag: "Last Minute"
  },
  {
    id: 4,
    title: "Hacienda Bay Modern Loft",
    location: "North Coast, Egypt",
    price: "2,100",
    oldPrice: "2,500",
    rating: 4.7,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    discount: "15% OFF",
    timeLeft: "08:15:22:10",
    tag: "Limited Offer"
  }
];

const SpecialOffers = () => {
  return (
    <section className="py-32 container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <span className="text-secondary font-black uppercase tracking-[0.3em] text-xs">Exclusive Deals</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Special Offers</h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Handpicked luxury stays with limited-time pricing. Book your dream escape today.
          </p>
        </div>
        <Button variant="outline" className="rounded-full px-8 h-14 font-bold border-gray-200 hover:bg-gray-50">
          View All Offers
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 shadow-xl">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Zap size={12} className="text-secondary fill-secondary" />
                  <span className="text-[10px] font-black text-primary">{property.discount}</span>
                </div>
                <div className="bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                  <span className="text-[10px] font-black text-white uppercase tracking-wider">{property.tag}</span>
                </div>
              </div>

              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-red-500 transition-all shadow-lg">
                <Heart size={20} />
              </button>

              <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-xl rounded-2xl p-3 flex items-center justify-between text-white border border-white/10">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-secondary" />
                  <span className="text-[11px] font-bold tracking-wider">{property.timeLeft}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={12} className="text-secondary fill-secondary" />
                  <span className="text-[11px] font-black">{property.rating}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 px-2">
              <div className="flex items-center gap-1.5 text-gray-400">
                <MapPin size={14} />
                <span className="text-xs font-bold uppercase tracking-wider">{property.location}</span>
              </div>
              <h3 className="font-black text-xl text-primary leading-tight group-hover:text-secondary transition-colors">
                {property.title}
              </h3>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-2xl font-black text-primary">EGP {property.price}</span>
                <span className="text-sm text-gray-400 line-through font-medium">EGP {property.oldPrice}</span>
                <span className="text-xs text-gray-400 font-bold">/ night</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
"use client";

import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, ArrowRight } from 'lucide-react';

interface Room {
  id: number;
  title: string;
  location: string;
  price: string;
  rating: number;
  guests: number;
  image: string;
  tag: string;
}

const sampleRooms: Room[] = [
  {
    id: 1,
    title: "Royal Marina Suite",
    location: "Marassi, North Coast",
    price: "4,200",
    rating: 4.9,
    guests: 2,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400",
    tag: "Most Popular"
  },
  {
    id: 2,
    title: "Azure Beachfront Villa",
    location: "Amwaj, North Coast",
    price: "8,500",
    rating: 4.8,
    guests: 6,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400",
    tag: "Exclusive"
  },
  {
    id: 3,
    title: "Skyline Penthouse",
    location: "Fifth Settlement, Cairo",
    price: "3,800",
    rating: 5.0,
    guests: 4,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=400",
    tag: "New"
  }
];

interface SearchResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  searchData: {
    location: string;
    guests: string;
  };
}

const SearchResultsModal = ({ isOpen, onClose, searchData }: SearchResultsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl bg-white">
        <div className="flex flex-col max-h-[85vh]">
          {/* Compact Header */}
          <div className="p-6 bg-primary text-white">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Badge className="bg-secondary text-primary font-black uppercase tracking-widest text-[9px] border-none px-2 py-0.5">
                  Live Results
                </Badge>
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  {searchData.location || "All Egypt"} • {searchData.guests} Guests
                </span>
              </div>
              <DialogTitle className="text-2xl font-black tracking-tight">
                Available Stays
              </DialogTitle>
            </div>
          </div>

          {/* List Results */}
          <div className="p-6 overflow-y-auto space-y-4 custom-scrollbar">
            {sampleRooms.map((room) => (
              <div 
                key={room.id} 
                className="group flex gap-4 p-3 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                {/* Image Container */}
                <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2">
                    <div className="bg-white/90 backdrop-blur-md px-1.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                      <Star size={8} className="text-secondary fill-secondary" />
                      <span className="text-[9px] font-black text-primary">{room.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-black text-secondary uppercase tracking-widest">{room.tag}</span>
                    </div>
                    <h4 className="font-black text-primary text-lg leading-tight group-hover:text-secondary transition-colors">
                      {room.title}
                    </h4>
                    <div className="flex items-center gap-1 text-gray-400 mt-1">
                      <MapPin size={12} />
                      <span className="text-[10px] font-bold">{room.location}</span>
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Per Night</span>
                      <span className="text-lg font-black text-primary">EGP {room.price}</span>
                    </div>
                    <Button size="sm" className="rounded-xl bg-primary hover:bg-secondary hover:text-primary transition-all px-4 h-9 font-bold text-xs">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-gray-50 bg-gray-50/30 flex items-center justify-between">
            <p className="text-[11px] text-gray-400 font-medium">
              Showing {sampleRooms.length} of 24 properties
            </p>
            <Button variant="ghost" className="text-primary hover:text-secondary font-black text-sm group p-0 h-auto">
              Explore More Rooms
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchResultsModal;
"use client";

import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, ArrowRight, X } from 'lucide-react';

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
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    tag: "Most Popular"
  },
  {
    id: 2,
    title: "Azure Beachfront Villa",
    location: "Amwaj, North Coast",
    price: "8,500",
    rating: 4.8,
    guests: 6,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    tag: "Exclusive"
  },
  {
    id: 3,
    title: "Skyline Penthouse",
    location: "Fifth Settlement, Cairo",
    price: "3,800",
    rating: 5.0,
    guests: 4,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800",
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
      <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[2.5rem] border-none shadow-2xl bg-white">
        <div className="relative h-full flex flex-col">
          {/* Header Section */}
          <div className="p-8 md:p-10 bg-primary text-white">
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-2">
                <Badge className="bg-secondary text-primary font-black uppercase tracking-widest text-[10px] border-none">
                  Available Now
                </Badge>
                <DialogTitle className="text-3xl md:text-4xl font-black tracking-tight">
                  Perfect Stays in {searchData.location || "Egypt"}
                </DialogTitle>
                <DialogDescription className="text-white/60 font-medium text-lg">
                  We found {sampleRooms.length} exclusive properties matching your criteria.
                </DialogDescription>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                <Users size={14} className="text-secondary" />
                <span className="text-xs font-bold">{searchData.guests} Guests</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
                <MapPin size={14} className="text-secondary" />
                <span className="text-xs font-bold">{searchData.location || "All Locations"}</span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="p-8 md:p-10 overflow-y-auto max-h-[60vh] custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sampleRooms.map((room) => (
                <div key={room.id} className="group cursor-pointer space-y-4">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                    <img 
                      src={room.image} 
                      alt={room.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 backdrop-blur-md text-primary font-black text-[9px] uppercase tracking-wider border-none">
                        {room.tag}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1">
                      <Star size={10} className="text-secondary fill-secondary" />
                      <span className="text-[10px] font-black text-white">{room.rating}</span>
                    </div>
                  </div>
                  
                  <div className="px-1">
                    <h4 className="font-black text-primary text-lg leading-tight group-hover:text-secondary transition-colors">
                      {room.title}
                    </h4>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Price</span>
                        <span className="text-lg font-black text-primary">EGP {room.price}</span>
                      </div>
                      <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-white transition-all">
                        <ArrowRight size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-8 border-t border-gray-100 bg-gray-50/50 flex justify-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-10 py-7 rounded-2xl font-black text-lg shadow-xl group">
              Explore More Rooms
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchResultsModal;
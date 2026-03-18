"use client";

import React, { useState } from 'react';
import { Search, MapPin, Calendar as CalendarIcon, Users, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const destinations = [
  { id: 1, name: "Marassi Marina", location: "North Coast" },
  { id: 2, name: "Amwaj Resort", location: "North Coast" },
  { id: 3, name: "Fifth Settlement", location: "New Cairo" },
  { id: 4, name: "Hacienda Bay", location: "North Coast" },
  { id: 5, name: "Mountain View", location: "Ras El Hekma" },
];

const Hero = () => {
  const [dateIn, setDateIn] = useState<Date>();
  const [dateOut, setDateOut] = useState<Date>();
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section className="relative h-[90vh] min-h-[700px] flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Resort" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center mb-16 px-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-white/20">
          Experience Distinction
        </span>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
          Lighthouse
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-lg leading-relaxed">
          Your gateway to luxury stays in Egypt's most exclusive destinations.
        </p>
      </div>

      {/* Booking Bar */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] p-3 md:p-4 flex flex-col lg:flex-row items-center gap-2">
          
          {/* Where Dropdown */}
          <div className="flex-1 w-full">
            <Select onValueChange={setLocation}>
              <SelectTrigger className="h-20 border-none bg-transparent hover:bg-gray-50 rounded-3xl px-6 focus:ring-0 focus:ring-offset-0 transition-all group">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Where</span>
                    <SelectValue placeholder="Select destination" className="text-sm font-bold text-primary" />
                  </div>
                </div>
              </SelectTrigger>
              <SelectContent className="rounded-2xl p-2 border-gray-100 shadow-2xl">
                {destinations.map((dest) => (
                  <SelectItem key={dest.id} value={dest.name} className="rounded-xl py-3 font-bold text-primary">
                    <div className="flex flex-col">
                      <span>{dest.name}</span>
                      <span className="text-[10px] text-gray-400 font-medium">{dest.location}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="hidden lg:block w-px h-12 bg-gray-100"></div>

          {/* Check-in Calendar */}
          <div className="flex-1 w-full">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full h-20 justify-start border-none hover:bg-gray-50 rounded-3xl px-6 group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <CalendarIcon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Check-in</span>
                      <span className={cn("text-sm font-bold", !dateIn && "text-gray-300")}>
                        {dateIn ? format(dateIn, "PPP") : "Add date"}
                      </span>
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-3xl border-none shadow-2xl" align="start">
                <Calendar
                  mode="single"
                  selected={dateIn}
                  onSelect={setDateIn}
                  initialFocus
                  className="p-4"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="hidden lg:block w-px h-12 bg-gray-100"></div>

          {/* Check-out Calendar */}
          <div className="flex-1 w-full">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full h-20 justify-start border-none hover:bg-gray-50 rounded-3xl px-6 group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <CalendarIcon size={20} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Check-out</span>
                      <span className={cn("text-sm font-bold", !dateOut && "text-gray-300")}>
                        {dateOut ? format(dateOut, "PPP") : "Add date"}
                      </span>
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 rounded-3xl border-none shadow-2xl" align="start">
                <Calendar
                  mode="single"
                  selected={dateOut}
                  onSelect={setDateOut}
                  initialFocus
                  className="p-4"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="hidden lg:block w-px h-12 bg-gray-100"></div>

          {/* Guests Dropdown */}
          <div className="flex-1 w-full">
            <Select onValueChange={setGuests} defaultValue="2">
              <SelectTrigger className="h-20 border-none bg-transparent hover:bg-gray-50 rounded-3xl px-6 focus:ring-0 focus:ring-offset-0 transition-all group">
                <div className="flex items-center gap-4 text-left">
                  <div className="w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Users size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Guests</span>
                    <SelectValue placeholder="Select guests" className="text-sm font-bold text-primary" />
                  </div>
                </div>
              </SelectTrigger>
              <SelectContent className="rounded-2xl p-2 border-gray-100 shadow-2xl">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <SelectItem key={num} value={num.toString()} className="rounded-xl py-3 font-bold text-primary">
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <Button className="w-full lg:w-20 h-16 lg:h-20 rounded-[2rem] bg-primary hover:bg-primary/90 transition-all shrink-0 shadow-xl group">
            <Search size={28} className="text-white group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
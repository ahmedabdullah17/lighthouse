"use client";

import React from 'react';
import { Globe, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src="/src/assets/logo.png" alt="Lighthouse Logo" className="h-12 w-auto" />
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">Become a Partner with Lighthouse</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
            <span className="text-xs font-bold text-gray-500">EG</span>
            <span className="text-sm font-semibold">EGP</span>
            <ChevronDown size={14} className="text-gray-400" />
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
            <Globe size={18} className="text-gray-600" />
            <span className="text-sm font-medium">العربية</span>
          </div>

          <Button variant="ghost" size="icon" className="rounded-full border border-gray-200">
            <User size={20} className="text-gray-600" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
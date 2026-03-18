"use client";

import React from 'react';
import { Globe, User, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from '@/assets/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo & Main Nav */}
        <div className="flex items-center gap-12">
          <a href="/" className="shrink-0">
            <img src={logo} alt="Lighthouse Logo" className="h-16 w-auto" />
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-[13px] font-bold text-primary/70 hover:text-primary transition-all uppercase tracking-wider">About</a>
            <a href="#" className="text-[13px] font-bold text-primary/70 hover:text-primary transition-all uppercase tracking-wider">Destination</a>
            <a href="#" className="text-[13px] font-bold text-primary/70 hover:text-primary transition-all uppercase tracking-wider">Contact Us</a>
            <a href="#" className="text-[13px] font-bold text-secondary hover:text-secondary/80 transition-all uppercase tracking-wider">Become a Partner</a>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-4 mr-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="text-[10px] font-black text-gray-400">EG</span>
              <span className="text-xs font-bold text-primary">EGP</span>
              <ChevronDown size={12} className="text-gray-400" />
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors">
              <Globe size={14} className="text-primary/70" />
              <span className="text-xs font-bold text-primary">العربية</span>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-full border-gray-200 h-11 px-4 flex items-center gap-3 hover:bg-gray-50 shadow-sm">
                <Menu size={18} className="text-primary" />
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                  <User size={14} className="text-white" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 mt-2 rounded-2xl p-2">
              <DropdownMenuItem className="rounded-xl font-bold text-primary py-3">Sign up</DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl font-medium text-gray-600 py-3">Log in</DropdownMenuItem>
              <div className="h-px bg-gray-100 my-2" />
              <DropdownMenuItem className="rounded-xl font-medium text-gray-600 py-3">Lighthouse your home</DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl font-medium text-gray-600 py-3">Help Center</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1A2B4C] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center p-4 mb-6">
              <img src="/src/assets/logo.png" alt="Lighthouse Logo" className="w-full h-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your gateway to luxury stays in Egypt. Providing unmatched property management and hospitality services.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© 2024 Lighthouse. All rights reserved.</p>
          <div className="flex gap-6 text-gray-500 text-xs">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cancellation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
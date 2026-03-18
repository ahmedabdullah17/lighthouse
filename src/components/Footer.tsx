"use client";

import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A2B4C] text-white pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-3xl w-24 h-24 flex items-center justify-center p-4 shadow-2xl">
              <img src="/src/assets/logo.png" alt="Lighthouse Logo" className="w-full h-auto" />
            </div>
            <p className="text-white/50 text-lg leading-relaxed max-w-sm">
              Redefining luxury hospitality in Egypt. We provide curated stays and world-class property management services.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="font-black text-sm uppercase tracking-[0.2em] text-secondary">Company</h4>
            <ul className="space-y-4 text-white/60 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partnership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="font-black text-sm uppercase tracking-[0.2em] text-secondary">Support</h4>
            <ul className="space-y-4 text-white/60 font-bold">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cancellation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="font-black text-sm uppercase tracking-[0.2em] text-secondary">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-black text-white/30 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="font-bold">hello@lighthouse.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-black text-white/30 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="font-bold">+20 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/30 text-sm font-bold">
            © 2026 Lighthouse Hospitality. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/30 text-sm font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
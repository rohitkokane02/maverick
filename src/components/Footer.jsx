import React from 'react';
import { ArrowUp, Instagram, Facebook, Phone, MapPin, Heart } from 'lucide-react';
import MascotIcon from './MascotIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-dark text-cream pt-16 pb-12 border-t-4 border-terracotta relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-cream/15">
          
          {/* Col 1: Brand & Mascot */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <MascotIcon size={48} />
              <div>
                <span className="font-display font-black text-2xl text-cream tracking-wide">
                  Café Maverick
                </span>
                <div className="text-xs text-terracotta-light font-bold">
                  कॅफे मॅवरिक • Kolhapur
                </div>
              </div>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed max-w-sm font-medium">
              Kolhapur’s vibrant boho sanctuary offering handcrafted coffees, open kitchen food preparation, and dedicated Pure Jain menu options.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-forest text-cream flex items-center justify-center hover:bg-terracotta transition border border-cream/20"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-forest text-cream flex items-center justify-center hover:bg-terracotta transition border border-cream/20"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-forest text-cream flex items-center justify-center hover:bg-terracotta transition border border-cream/20"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-lg text-terracotta-light">Quick Navigation</h3>
            <ul className="space-y-2 text-sm text-cream/80 font-medium">
              <li><a href="#menu" className="hover:text-terracotta transition">Café Menu Preview</a></li>
              <li><a href="#gallery" className="hover:text-terracotta transition">Photo & Video Gallery</a></li>
              <li><a href="#about" className="hover:text-terracotta transition">Our Kolhapur Story</a></li>
              <li><a href="#reviews" className="hover:text-terracotta transition">Guest Reviews</a></li>
              <li><a href="#location" className="hover:text-terracotta transition">Location & Directions</a></li>
            </ul>
          </div>

          {/* Col 3: Differentiators */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-display font-bold text-lg text-terracotta-light">Our Specialities</h3>
            <ul className="space-y-2 text-xs text-cream/80 font-medium">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                Pure Jain Options (No Root Vegetables)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                Live Open Kitchen Preparation
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                Private Birthday & Celebration Hosting
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terracotta" />
                Signature Kolhapuri Fusion & Cold Brews
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/70">
          <p>© {new Date().getFullYear()} Café Maverick (कॅफे मॅवरिक), Kolhapur. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3.5 h-3.5 text-terracotta fill-current inline" /> for Kolhapur
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-terracotta hover:bg-terracotta-dark text-cream shadow-md transition"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Coffee } from 'lucide-react';
import MascotIcon from './MascotIcon';

export default function Navbar({ onOpenFullMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-forest/95 backdrop-blur-md shadow-lg py-3 border-b border-terracotta/20 text-cream'
          : 'bg-gradient-to-b from-forest/90 to-forest/70 backdrop-blur-sm py-4 text-cream'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Bilingual Branding */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-terracotta rounded-lg p-1 transition"
            aria-label="Café Maverick Home"
          >
            <MascotIcon className="w-10 h-10 transition-transform duration-300 group-hover:scale-105" size={42} />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-xl sm:text-2xl tracking-wide text-cream group-hover:text-terracotta-light transition-colors">
                  Café Maverick
                </span>
                <span className="text-[10px] sm:text-xs bg-terracotta/80 text-cream font-medium px-2 py-0.5 rounded-full uppercase tracking-wider">
                  कॅफे मॅवरिक
                </span>
              </div>
              <span className="text-[11px] text-cream/70 font-sans tracking-wide">
                Urban Jungle Café • Kolhapur
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-cream/90 hover:text-terracotta transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-terracotta rounded-md px-2 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenFullMenu}
              className="text-xs font-bold uppercase tracking-wider text-cream bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full border border-white/20 transition focus:outline-none focus:ring-2 focus:ring-terracotta"
            >
              Full Menu
            </button>
            <a
              href="#location"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cream bg-terracotta hover:bg-terracotta-dark px-5 py-2.5 rounded-full shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <MapPin className="w-3.5 h-3.5" />
              Find Us
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#location"
              className="text-xs font-bold text-cream bg-terracotta px-3 py-1.5 rounded-full"
            >
              Find Us
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-cream hover:bg-forest-light focus:outline-none focus:ring-2 focus:ring-terracotta"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-forest-dark border-t border-terracotta/20 text-cream px-6 py-6 space-y-4 animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display font-semibold text-cream hover:text-terracotta transition py-1 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFullMenu();
              }}
              className="w-full text-center py-2.5 rounded-xl bg-cream/10 text-cream font-bold text-sm border border-cream/20"
            >
              View Full Menu
            </button>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl bg-terracotta text-cream font-bold text-sm shadow-md"
            >
              Get Directions to Café Maverick
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

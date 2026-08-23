import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Sparkles, ChevronLeft, ChevronRight, UtensilsCrossed } from 'lucide-react';
import MascotIcon from './MascotIcon';

const HERO_IMAGES = [
  { url: './images/img_1.jpg', title: 'Boho Ambience & Cozy Seating' },
  { url: './images/img_3.jpg', title: 'Open Kitchen & Fresh Preparation' },
  { url: './images/img_5.jpg', title: 'Artisanal Coffee & Pure Jain Delights' },
  { url: './images/img_7.jpg', title: 'Lively Celebrations & Warm Hospitality' },
];

export default function Hero({ onOpenFullMenu }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
  const handlePrev = () => setCurrentIdx((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-cream overflow-hidden">
      
      {/* Background Subtle Arch Graphic Overlay */}
      <div className="absolute top-10 right-[-10%] w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-80 h-80 bg-forest/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-forest/10 border border-forest/20 text-forest px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-terracotta" />
              <span>Kolhapur’s Favorite Urban-Jungle Café</span>
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span className="text-terracotta font-semibold">कॅफे मॅवरिक</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-ink leading-[1.15] tracking-tight">
              A Bohemian Oasis for <span className="text-terracotta relative inline-block">
                Creative Brews
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-terracotta/30" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> & Pure Delights.
            </h1>

            {/* Subcopy */}
            <p className="text-lg sm:text-xl text-ink-muted leading-relaxed font-medium max-w-2xl">
              Step into Café Maverick — where plant-filled boho warmth meets an open kitchen, 
              handcrafted beverages, creative global bites, and dedicated <strong className="text-forest font-bold">Pure Jain delicacies</strong>. 
              Freshly prepped every single day in the heart of Kolhapur.
            </p>

            {/* Key Differentiator Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="bg-forest text-cream text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                🌿 Pure Jain Menu
              </span>
              <span className="bg-cream-alt border border-terracotta/30 text-ink text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                👨‍🍳 Open Kitchen Prep
              </span>
              <span className="bg-cream-alt border border-forest/30 text-ink text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                ✨ 100% Hygienic Ingredients
              </span>
              <span className="bg-cream-alt border border-terracotta/30 text-ink text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                🥳 Birthday Celebrations
              </span>
            </div>

            {/* Two Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={onOpenFullMenu}
                className="inline-flex items-center justify-center gap-3 bg-terracotta hover:bg-terracotta-dark text-cream text-base font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-terracotta/40"
              >
                <UtensilsCrossed className="w-5 h-5" />
                View Café Menu
              </button>

              <a
                href="#location"
                className="inline-flex items-center justify-center gap-2 bg-forest hover:bg-forest-light text-cream text-base font-extrabold px-7 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-forest/40"
              >
                <MapPin className="w-5 h-5 text-terracotta-light" />
                Find Us in Kolhapur
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            {/* Social Proof Teaser */}
            <div className="pt-4 flex items-center gap-4 text-xs font-bold text-ink-muted">
              <div className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full bg-forest text-cream flex items-center justify-center border-2 border-cream font-bold">4.9</span>
                <span className="w-8 h-8 rounded-full bg-terracotta text-cream flex items-center justify-center border-2 border-cream font-bold">★</span>
                <span className="w-8 h-8 rounded-full bg-navy text-cream flex items-center justify-center border-2 border-cream font-bold">500+</span>
              </div>
              <div>
                <p className="text-ink font-bold text-sm">Loved by Kolhapur Foodies</p>
                <p className="text-ink-muted text-xs">Rated 4.9/5 stars • 100% Pure Jain Friendly</p>
              </div>
            </div>

          </div>

          {/* Right Hero Arch Frame Image Rotator Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Outer Terracotta Arch Frame Motif */}
              <div className="relative p-3 bg-terracotta rounded-[999px_999px_32px_32px] shadow-2xl">
                
                {/* Arch Masked Image Frame */}
                <div className="relative h-[440px] sm:h-[500px] w-full rounded-[999px_999px_24px_24px] overflow-hidden bg-forest-dark">
                  {HERO_IMAGES.map((img, idx) => (
                    <div
                      key={img.url}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-black/20" />
                      
                      {/* Image Caption overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-forest/90 backdrop-blur-md text-cream p-3 rounded-2xl border border-cream/20">
                        <p className="text-xs uppercase font-bold text-terracotta-light tracking-wider">Café Highlight</p>
                        <p className="font-display font-semibold text-sm">{img.title}</p>
                      </div>
                    </div>
                  ))}

                  {/* Rotator Controls Overlay */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-full bg-black/40 hover:bg-terracotta text-cream backdrop-blur-md transition"
                      aria-label="Previous Hero Image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-full bg-black/40 hover:bg-terracotta text-cream backdrop-blur-md transition"
                      aria-label="Next Hero Image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Floating Mascot Badge */}
                <div className="absolute -bottom-6 -left-6 z-30 bg-cream p-3 rounded-2xl shadow-xl border-2 border-terracotta flex items-center gap-3">
                  <MascotIcon size={44} />
                  <div>
                    <p className="text-xs font-black uppercase text-terracotta">Café Mascot</p>
                    <p className="font-display text-xs font-bold text-forest">Meet Maverick!</p>
                  </div>
                </div>

              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIdx ? 'w-8 bg-terracotta' : 'w-2.5 bg-ink/20 hover:bg-ink/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

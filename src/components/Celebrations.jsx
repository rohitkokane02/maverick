import React from 'react';
import { PartyPopper, Calendar, Cake, Music, Users, PhoneCall } from 'lucide-react';

export default function Celebrations() {
  return (
    <section className="py-16 bg-gradient-to-r from-terracotta to-terracotta-dark text-cream relative overflow-hidden shadow-inner">
      
      {/* Background festive arch decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-forest/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border-2 border-cream/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Text */}
          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-terracotta text-cream text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full border border-cream/30">
              <PartyPopper className="w-4 h-4" />
              <span>Private Events & Party Hosting</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-black text-cream leading-tight">
              Host Your Next Birthday or Special Event at Café Maverick!
            </h2>

            <p className="text-cream/80 text-base font-medium leading-relaxed">
              Looking for a vibrant, boho, plant-filled space in Kolhapur to celebrate with friends and family? 
              We offer customized food menus, Pure Jain food catering, cozy seating, and ambient music for up to 40 guests.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-cream">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                <Cake className="w-4 h-4 text-terracotta-light" /> Custom Cake Arrangement
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                <Music className="w-4 h-4 text-terracotta-light" /> Music & Party Lighting
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                <Users className="w-4 h-4 text-terracotta-light" /> Pure Jain Platters
              </span>
            </div>
          </div>

          {/* Right CTA */}
          <div className="shrink-0 w-full lg:w-auto text-center">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-3 bg-terracotta hover:bg-terracotta-light text-cream font-black text-base px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 w-full lg:w-auto border border-cream/30"
            >
              <PhoneCall className="w-5 h-5" />
              Book Celebration Slot
            </a>
            <p className="text-xs text-cream/70 mt-2 font-sans">
              Call us directly to reserve dates and discuss custom menus!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

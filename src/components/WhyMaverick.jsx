import React from 'react';
import { Leaf, Eye, ShieldCheck, Sparkles, PartyPopper, HeartHandshake } from 'lucide-react';

const FEATURES = [
  {
    icon: Leaf,
    title: "Pure Jain Menu Options",
    description: "Dedicated Jain kitchen prep with zero root vegetables, strictly maintained for your peace of mind.",
    badge: "100% Jain Friendly"
  },
  {
    icon: Eye,
    title: "Open Kitchen Experience",
    description: "Complete transparency! Watch our skilled baristas & chefs craft every coffee and dish live.",
    badge: "Transparent & Clean"
  },
  {
    icon: ShieldCheck,
    title: "Hygienic Prep & Freshness",
    description: "Highest food safety standards with daily fresh-sourced artisanal ingredients & clean station practices.",
    badge: "Top Sanitation"
  },
  {
    icon: Sparkles,
    title: "Creative Signature Recipes",
    description: "From Kolhapuri spritzed brews to gourmet loaded bites — recipes designed to surprise your palate.",
    badge: "Unique Flavors"
  },
  {
    icon: PartyPopper,
    title: "Private Celebrations Host",
    description: "Looking for a birthday or anniversary spot? We host memorable private boho gatherings with curated menus.",
    badge: "Events & Parties"
  },
  {
    icon: HeartHandshake,
    title: "Warm Boho Hospitality",
    description: "Friendly staff, lush indoor plants, cozy seating, and happening music that makes you feel at home.",
    badge: "Happening Ambience"
  }
];

export default function WhyMaverick() {
  return (
    <section className="bg-forest text-cream py-16 sm:py-20 relative overflow-hidden border-y border-terracotta/30">
      
      {/* Decorative background arch motifs */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[800px] h-[300px] bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block bg-terracotta text-cream text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
            The Maverick Difference
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Why Kolhapur Loves <span className="text-terracotta-light">Café Maverick</span>
          </h2>
          <p className="text-cream/80 text-base sm:text-lg font-medium">
            We built Café Maverick around food hygiene, creative culinary passion, and an inviting space for every celebration.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-forest-light/60 border border-terracotta/20 hover:border-terracotta p-6 rounded-3xl transition-all duration-300 transform hover:-translate-y-1.5 shadow-lg group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-terracotta text-cream flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-terracotta-light bg-forest-dark px-3 py-1 rounded-full border border-terracotta/20">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-cream mb-2 group-hover:text-terracotta-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-cream/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

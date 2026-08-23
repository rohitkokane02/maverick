import React from 'react';
import { Sparkles, Heart, Coffee, ShieldCheck, CheckCircle, Flame } from 'lucide-react';
import MascotIcon from './MascotIcon';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-cream-alt relative overflow-hidden">
      
      {/* Background Arch Motif Overlay */}
      <div className="absolute top-1/2 left-[-10%] transform -translate-y-1/2 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Arch-Framed Portrait / Ambience Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Main Signature Arch Frame */}
              <div className="p-3 bg-terracotta rounded-[999px_999px_32px_32px] shadow-2xl relative">
                <div className="relative h-[480px] sm:h-[540px] rounded-[999px_999px_24px_24px] overflow-hidden bg-forest">
                  <img
                    src="/images/img_1.jpg"
                    alt="Café Maverick Story & Ambience"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-transparent" />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur-md p-4 rounded-2xl border border-terracotta/30 text-ink shadow-lg">
                    <p className="text-xs uppercase font-extrabold text-terracotta tracking-wider">Our Core Philosophy</p>
                    <p className="font-display font-bold text-sm text-forest mt-0.5">
                      "Clean kitchen, honest food, and a space where every conversation feels special."
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-4 -right-4 bg-forest text-cream p-4 rounded-2xl shadow-xl border-2 border-terracotta hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center font-bold">
                  🌿
                </div>
                <div>
                  <p className="font-display font-black text-lg text-terracotta-light">100%</p>
                  <p className="text-[11px] font-semibold">Pure Jain Dedicated Prep</p>
                </div>
              </div>

            </div>
          </div>

          {/* About Copy Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 bg-forest/10 text-forest px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider border border-forest/20">
              <MascotIcon size={20} showBackground={false} className="w-5 h-5" />
              <span>Our Story • आमची गोष्ट</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink leading-tight">
              Welcome to Kolhapur’s <span className="text-terracotta">Boho & Urban Jungle</span> Retreat
            </h2>

            <p className="text-ink text-base sm:text-lg leading-relaxed font-medium">
              Café Maverick was born out of a simple belief: <strong className="text-forest">great food starts with complete trust.</strong> In a city known for its rich flavors and warm hospitality, we set out to build a café that feels like a cozy, plant-filled sanctuary right in Kolhapur.
            </p>

            <p className="text-ink-muted text-base leading-relaxed">
              Whether you’re stopping by for a quiet morning cold brew, hanging out with friends over sizzling paneer bites, or celebrating a birthday with your loved ones, we welcome you with open arms and fresh ingredients.
            </p>

            {/* Core Values / Pillar List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="bg-cream p-4 rounded-2xl border border-ink/10 flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-ink">Open Kitchen Guarantee</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">Watch every sandwich, coffee, and pasta prepared live in front of you.</p>
                </div>
              </div>

              <div className="bg-cream p-4 rounded-2xl border border-ink/10 flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-forest/15 text-forest flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-ink">Pure Jain Integrity</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">Dedicated Jain utensils, sauces, and recipes crafted without root vegetables.</p>
                </div>
              </div>

              <div className="bg-cream p-4 rounded-2xl border border-ink/10 flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-terracotta/15 text-terracotta flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-ink">Creative In-House Recipes</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">Unique flavor profiles developed specifically for Café Maverick guests.</p>
                </div>
              </div>

              <div className="bg-cream p-4 rounded-2xl border border-ink/10 flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-forest/15 text-forest flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-ink">Private Gathering Spot</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">Hosting birthday parties, anniversaries, and family get-togethers.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

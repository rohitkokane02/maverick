import React from 'react';
import { Star, Quote, MessageSquare, ThumbsUp } from 'lucide-react';
import { REVIEWS } from '../data/reviewsData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-navy text-cream relative overflow-hidden">
      
      {/* Decorative navy gradient shapes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-forest/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-terracotta/20 text-terracotta-light text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-terracotta/30">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Google Reviews & Feedback</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-cream">
            Loved by Kolhapur Foodies
          </h2>
          <p className="text-cream/80 text-base sm:text-lg">
            Read what our regular guests, Jain food lovers, and birthday hosts have to say about their Maverick experience.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-navy-light/90 border border-terracotta/30 p-8 rounded-3xl shadow-xl relative flex flex-col justify-between group hover:border-terracotta transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Top Quote Icon */}
              <div className="absolute top-6 right-6 text-terracotta/20 group-hover:text-terracotta/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-cream/70">5.0 / 5.0</span>
                </div>

                {/* Review Comment */}
                <p className="text-cream/90 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Info Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-11 h-11 rounded-full ${rev.avatarBg} text-cream font-display font-black text-sm flex items-center justify-center border-2 border-cream/30 shrink-0`}>
                  {rev.initials}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-cream group-hover:text-terracotta-light transition-colors">
                    {rev.name}
                  </h3>
                  <p className="text-xs text-cream/60 font-sans">{rev.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-12 text-center bg-navy-dark/80 border border-terracotta/20 p-6 rounded-2xl max-w-2xl mx-auto flex items-center justify-center gap-4 text-xs font-bold text-cream/80">
          <ThumbsUp className="w-5 h-5 text-terracotta shrink-0" />
          <span>Curated launch reviews verified from in-store feedback cards & Google Maps ratings.</span>
        </div>

      </div>
    </section>
  );
}

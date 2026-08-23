import React, { useState } from 'react';
import { Search, Sparkles, Utensils, CheckCircle2, ChevronRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuSection({ onOpenFullMenu }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all'
        ? true
        : activeCategory === 'jain'
        ? item.isJain
        : item.category === activeCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 bg-cream-alt relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta bg-terracotta/10 px-3.5 py-1 rounded-full border border-terracotta/20">
              Crafted With Love in Kolhapur
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink">
              Our Café Specials & Delights
            </h2>
            <p className="text-ink-muted text-base max-w-xl">
              Display-only preview. All items prepared fresh in our open kitchen. Dedicated Pure Jain menu options available!
            </p>
          </div>

          <button
            onClick={onOpenFullMenu}
            className="self-start md:self-auto inline-flex items-center gap-2 bg-forest hover:bg-forest-light text-cream font-bold px-6 py-3 rounded-full text-sm shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-forest"
          >
            Explore Complete Menu
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-terracotta text-cream shadow-md scale-105'
                    : 'bg-cream text-ink-muted hover:bg-cream-light border border-ink/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search coffee, Jain sandwich..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-cream border border-ink/15 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
          </div>

        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.slice(0, 9).map((item) => (
              <div
                key={item.id}
                className="bg-cream rounded-3xl p-6 border border-ink/10 shadow-warm hover:shadow-warm-hover transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Arch accent graphic in background */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-terracotta/5 rounded-bl-full pointer-events-none group-hover:bg-terracotta/10 transition-colors" />

                <div>
                  {/* Top Tags & Price */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {item.isJain && (
                        <span className="text-[11px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          🌿 Pure Jain
                        </span>
                      )}
                      {item.isBestseller && (
                        <span className="text-[11px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full">
                          ⭐ Bestseller
                        </span>
                      )}
                      {item.isChefSpecial && (
                        <span className="text-[11px] font-extrabold bg-terracotta/15 text-terracotta-dark border border-terracotta/30 px-2.5 py-0.5 rounded-full">
                          👨‍🍳 Chef Special
                        </span>
                      )}
                    </div>
                    
                    <span className="font-display font-black text-xl text-forest bg-cream-alt px-3 py-1 rounded-full border border-forest/10 shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-ink mb-2 group-hover:text-terracotta transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-ink-muted text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-ink/5 flex items-center justify-between text-[11px] font-bold text-ink-muted">
                  <span className="flex items-center gap-1 text-forest">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                    Open Kitchen Prep
                  </span>
                  <span className="text-terracotta uppercase tracking-wider font-extrabold">In-Café Served</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-cream rounded-3xl border border-dashed border-ink/20">
            <Utensils className="w-12 h-12 text-terracotta mx-auto mb-3 opacity-60" />
            <h3 className="font-display text-xl font-bold text-ink mb-1">No items found</h3>
            <p className="text-sm text-ink-muted mb-4">Try adjusting your search query or category filter.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-terracotta underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View All Menu Banner */}
        <div className="mt-12 text-center bg-forest text-cream p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-terracotta/30">
          <div className="text-left space-y-1">
            <h3 className="font-display font-extrabold text-2xl text-cream">
              Want to see our full 30+ item menu?
            </h3>
            <p className="text-cream/80 text-sm">
              Includes cold brews, frappes, pizzas, sizzlers, Jain specials & artisanal desserts.
            </p>
          </div>
          <button
            onClick={onOpenFullMenu}
            className="bg-terracotta hover:bg-terracotta-dark text-cream font-black px-8 py-3.5 rounded-full text-sm shadow-md transition transform hover:-translate-y-0.5 shrink-0"
          >
            View Full Menu (PDF / Interactive)
          </button>
        </div>

      </div>
    </section>
  );
}

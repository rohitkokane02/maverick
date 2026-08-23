import React, { useEffect } from 'react';
import { X, Utensils, Sparkles, CheckCircle2 } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';

export default function FullMenuModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = [
    { title: 'Pure Jain Specials 🌿', items: MENU_ITEMS.filter((i) => i.isJain) },
    { title: 'Handcrafted Coffee & Brews ☕', items: MENU_ITEMS.filter((i) => i.category === 'coffee') },
    { title: 'Gourmet Sandwiches & Burgers 🍔', items: MENU_ITEMS.filter((i) => i.category === 'bites') },
    { title: 'Artisanal Pizzas & Pastas 🍕', items: MENU_ITEMS.filter((i) => i.category === 'mains') },
    { title: 'Desserts & Thick Shakes 🍨', items: MENU_ITEMS.filter((i) => i.category === 'desserts') },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-cream w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col border-2 border-terracotta"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-forest text-cream p-6 flex items-center justify-between border-b border-terracotta/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center text-cream font-bold">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h2 id="modal-title" className="font-display text-2xl font-black text-cream">
                Café Maverick — Full Menu Preview
              </h2>
              <p className="text-cream/80 text-xs font-sans">
                कॅफे मॅवरिक • All items freshly prepped in our open kitchen
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-terracotta text-cream transition focus:outline-none focus:ring-2 focus:ring-cream"
            aria-label="Close menu modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          <div className="bg-terracotta/10 border border-terracotta/30 text-ink p-4 rounded-2xl flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-terracotta shrink-0" />
            <p className="text-xs sm:text-sm font-semibold">
              <strong className="text-terracotta">Notice:</strong> This menu is for in-café dining. We offer complete customisation for Pure Jain dietary requirements!
            </p>
          </div>

          {categories.map((cat, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-display font-black text-xl text-forest border-b-2 border-terracotta/30 pb-2">
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-cream-alt p-4 rounded-2xl border border-ink/10 flex flex-col justify-between"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-display font-bold text-base text-ink">
                        {item.name}
                      </h4>
                      <span className="font-display font-bold text-base text-terracotta shrink-0">
                        ₹{item.price}
                      </span>
                    </div>
                    <p className="text-ink-muted text-xs leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2">
                      {item.isJain && (
                        <span className="text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full">
                          🌿 Pure Jain
                        </span>
                      )}
                      {item.tags.map((t, tid) => (
                        <span key={tid} className="text-[10px] font-semibold bg-white text-ink-muted border border-ink/10 px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="bg-cream-alt p-4 border-t border-ink/10 flex items-center justify-between">
          <span className="text-xs font-semibold text-ink-muted">
            * Prices subject to applicable local taxes.
          </span>
          <button
            onClick={onClose}
            className="bg-forest hover:bg-forest-light text-cream font-bold text-xs uppercase px-6 py-2.5 rounded-full transition"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}

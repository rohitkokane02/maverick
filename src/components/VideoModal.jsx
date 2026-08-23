import React, { useEffect, useRef } from 'react';
import { X, Volume2, VolumeX } from 'lucide-react';

export default function VideoModal({ isOpen, videoUrl, posterUrl, title, onClose }) {
  const videoRef = useRef(null);

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

  if (!isOpen || !videoUrl) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-forest-dark rounded-3xl overflow-hidden shadow-2xl border-2 border-terracotta"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-terracotta text-cream transition backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cream"
          aria-label="Close video lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoUrl}
            poster={posterUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Caption Bar */}
        <div className="bg-forest text-cream p-4 border-t border-terracotta/30 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase font-extrabold text-terracotta-light tracking-wider">Café Maverick Reel</p>
            <h3 className="font-display font-bold text-lg">{title || "Life at Café Maverick"}</h3>
          </div>
          <span className="text-xs font-semibold bg-terracotta px-3 py-1 rounded-full text-cream">
            HD Video Clip
          </span>
        </div>
      </div>
    </div>
  );
}

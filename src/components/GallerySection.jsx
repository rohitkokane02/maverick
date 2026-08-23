import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Video, Image as ImageIcon, Sparkles, VolumeX, Maximize2 } from 'lucide-react';
import VideoModal from './VideoModal';

const GALLERY_VIDEOS = [
  {
    id: 'video_1',
    src: '/videos/video_1.mp4',
    poster: '/videos/posters/video_1_poster.jpg',
    title: 'Signature Coffee Pouring & Art',
    subtitle: 'Handcrafted Espresso Specials'
  },
  {
    id: 'video_2',
    src: '/videos/video_2.mp4',
    poster: '/videos/posters/video_2_poster.jpg',
    title: 'Open Kitchen Live Sizzling',
    subtitle: 'Fresh Gourmet Bites'
  },
  {
    id: 'video_3',
    src: '/videos/video_3.mp4',
    poster: '/videos/posters/video_3_poster.jpg',
    title: 'Urban Jungle Plant Ambience',
    subtitle: 'Boho Seating Sanctuary'
  },
  {
    id: 'video_4',
    src: '/videos/video_4.mp4',
    poster: '/videos/posters/video_4_poster.jpg',
    title: 'Artisanal Pure Jain Pizza Craft',
    subtitle: '100% Dedicated Prep'
  },
  {
    id: 'video_5',
    src: '/videos/video_5.mp4',
    poster: '/videos/posters/video_5_poster.jpg',
    title: 'Birthday & Party Celebrations',
    subtitle: 'Private Event Moments'
  },
  {
    id: 'video_6',
    src: '/videos/video_6.mp4',
    poster: '/videos/posters/video_6_poster.jpg',
    title: 'Dessert Shake & Brownie Creation',
    subtitle: 'Decadent Sweet Delights'
  }
];

const GALLERY_IMAGES = [
  { src: '/images/img_1.jpg', title: 'Boho Wall & Seating' },
  { src: '/images/img_2.jpg', title: 'Open Bar & Kitchen View' },
  { src: '/images/img_3.jpg', title: 'Signature Cold Brews' },
  { src: '/images/img_4.jpg', title: 'Celebration Gathering' },
  { src: '/images/img_5.jpg', title: 'Lush Botanical Corners' },
  { src: '/images/img_6.jpg', title: 'Storefront Facade' },
  { src: '/images/img_7.jpg', title: 'Pure Jain Gourmet Plates' },
];

export default function GallerySection() {
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);
  const [isAutoPlayNext, setIsAutoPlayNext] = useState(true);
  const [modalVideo, setModalVideo] = useState(null);
  const videoRef = useRef(null);

  const currentVid = GALLERY_VIDEOS[activeVideoIdx];

  // When activeVideoIdx changes, play the video automatically (muted)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeVideoIdx]);

  // Handle automatic transition to the next video when one ends
  const handleVideoEnded = () => {
    if (isAutoPlayNext) {
      setActiveVideoIdx((prevIdx) => (prevIdx + 1) % GALLERY_VIDEOS.length);
    }
  };

  const handleNextVid = () => {
    setActiveVideoIdx((prevIdx) => (prevIdx + 1) % GALLERY_VIDEOS.length);
  };

  const handlePrevVid = () => {
    setActiveVideoIdx((prevIdx) => (prevIdx - 1 + GALLERY_VIDEOS.length) % GALLERY_VIDEOS.length);
  };

  return (
    <section id="gallery" className="py-20 bg-cream relative overflow-hidden">
      
      {/* Lightbox Modal */}
      <VideoModal
        isOpen={!!modalVideo}
        videoUrl={modalVideo?.src}
        posterUrl={modalVideo?.poster}
        title={modalVideo?.title}
        onClose={() => setModalVideo(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-terracotta/10 text-terracotta text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full border border-terracotta/20">
            <Video className="w-3.5 h-3.5" />
            <span>Dynamic Reels & 16:9 Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink">
            Experience Café Maverick Live
          </h2>
          <p className="text-ink-muted text-base sm:text-lg">
            Watch our café videos auto-sequence seamlessly without audio interruptions, or manually select any video clip below.
          </p>
        </div>

        {/* Dynamic Video Reel Showcase (16:9 Aspect Ratio) */}
        <div className="bg-forest rounded-3xl p-3 sm:p-4 border-2 border-terracotta shadow-2xl mb-12 relative overflow-hidden">
          
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black group">
            {/* Auto-Sequencing Video Player (Muted, No Audio) */}
            <video
              ref={videoRef}
              src={currentVid.src}
              poster={currentVid.poster}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnded}
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Muted Audio Badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="bg-terracotta text-cream text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                Auto-Sequencing Reel
              </span>
              <span className="bg-black/60 backdrop-blur-md text-cream text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <VolumeX className="w-3.5 h-3.5 text-terracotta-light" />
                Muted Playback
              </span>
            </div>

            {/* Clip Index & Auto-Sequence Toggle */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={() => setIsAutoPlayNext(!isAutoPlayNext)}
                className={`text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md transition ${
                  isAutoPlayNext ? 'bg-emerald-600 text-cream' : 'bg-white/20 text-cream'
                }`}
                title="Toggle Automatic Next Video"
              >
                {isAutoPlayNext ? 'Auto-Next: ON' : 'Auto-Next: OFF'}
              </button>
              <span className="bg-black/60 text-cream text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
                {activeVideoIdx + 1} / {GALLERY_VIDEOS.length}
              </span>
            </div>

            {/* Manual Previous / Next Arrow Controls */}
            <button
              onClick={handlePrevVid}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-terracotta text-cream backdrop-blur-md transition transform hover:scale-110 focus:outline-none"
              aria-label="Previous Video Clip"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextVid}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 hover:bg-terracotta text-cream backdrop-blur-md transition transform hover:scale-110 focus:outline-none"
              aria-label="Next Video Clip"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Video Caption & Fullscreen Lightbox Button */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-cream">
              <div>
                <p className="text-xs uppercase font-extrabold text-terracotta-light tracking-wider">
                  {currentVid.subtitle}
                </p>
                <h3 className="font-display font-bold text-xl sm:text-2xl drop-shadow-md">
                  {currentVid.title}
                </h3>
              </div>

              <button
                onClick={() => setModalVideo(currentVid)}
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-cream text-xs font-extrabold uppercase px-4 py-2.5 rounded-full shadow-lg transition transform hover:-translate-y-0.5 shrink-0 self-start sm:self-auto"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Expand Video Lightbox
              </button>
            </div>

          </div>

          {/* Video Selector Thumbnails Row (Manual Selection) */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mt-3">
            {GALLERY_VIDEOS.map((vid, idx) => (
              <button
                key={vid.id}
                onClick={() => setActiveVideoIdx(idx)}
                className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  idx === activeVideoIdx
                    ? 'border-terracotta ring-2 ring-terracotta scale-105 shadow-md'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={vid.poster}
                  alt={vid.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  {idx === activeVideoIdx ? (
                    <span className="w-3 h-3 rounded-full bg-terracotta animate-ping" />
                  ) : (
                    <Play className="w-4 h-4 text-cream fill-current" />
                  )}
                </div>
                <span className="absolute bottom-1 left-1 text-[9px] font-bold text-cream bg-black/60 px-1.5 py-0.5 rounded">
                  #{idx + 1}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* 16:9 Image Gallery Grid */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-display font-bold text-2xl text-ink flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-terracotta" />
            16:9 High-Res Photo Gallery
          </h3>
          <span className="text-xs font-bold text-ink-muted">Uniform 16:9 Aspect Ratio</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-video w-full rounded-3xl overflow-hidden bg-forest border border-ink/10 shadow-warm hover:shadow-warm-hover transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute top-3 left-3 bg-forest/80 backdrop-blur-sm text-cream text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <ImageIcon className="w-3 h-3 text-terracotta-light" />
                16:9 Photo
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-cream">
                <p className="font-display font-bold text-sm">{img.title}</p>
                <p className="text-[11px] text-cream/70">Café Maverick • Kolhapur</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

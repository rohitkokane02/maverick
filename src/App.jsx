import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyMaverick from './components/WhyMaverick';
import MenuSection from './components/MenuSection';
import FullMenuModal from './components/FullMenuModal';
import GallerySection from './components/GallerySection';
import AboutSection from './components/AboutSection';
import Celebrations from './components/Celebrations';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col">
      {/* Sticky Header */}
      <Navbar onOpenFullMenu={() => setIsFullMenuOpen(true)} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero onOpenFullMenu={() => setIsFullMenuOpen(true)} />
        <WhyMaverick />
        <MenuSection onOpenFullMenu={() => setIsFullMenuOpen(true)} />
        <GallerySection />
        <AboutSection />
        <Celebrations />
        <ReviewsSection />
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full Menu Modal Overlay */}
      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
      />
    </div>
  );
}

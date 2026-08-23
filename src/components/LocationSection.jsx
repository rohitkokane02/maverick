import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import MascotIcon from './MascotIcon';

export default function LocationSection() {
  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Kolhapur,%20Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const googleMapsDirectionsUrl = "https://www.google.com/maps/search/?api=1&query=Cafe+Maverick+Kolhapur+Maharashtra";

  return (
    <section id="location" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-forest/10 text-forest text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border border-forest/20">
            <MapPin className="w-3.5 h-3.5 text-terracotta" />
            <span>Visit Us in Kolhapur • आमचा पत्ता</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-ink">
            Find Café Maverick
          </h2>
          <p className="text-ink-muted text-base sm:text-lg">
            Located in the heart of Kolhapur city. Drop by for handcrafted coffee, Jain delicacies, and good music!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact & Hours Info Column */}
          <div className="lg:col-span-5 bg-forest text-cream p-8 sm:p-10 rounded-3xl border-2 border-terracotta shadow-2xl flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              
              {/* Mascot header */}
              <div className="flex items-center gap-3 pb-6 border-b border-cream/20">
                <MascotIcon size={46} />
                <div>
                  <h3 className="font-display font-black text-2xl text-cream">Café Maverick</h3>
                  <p className="text-xs text-terracotta-light font-bold">कॅफे मॅवरिक • Kolhapur</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-terracotta text-cream flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-terracotta-light uppercase tracking-wider">Address</h4>
                  <p className="text-cream text-base font-semibold mt-0.5">
                    Near Rajarampuri / Main Road, Kolhapur, Maharashtra 416008
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-terracotta text-cream flex items-center justify-center shrink-0 shadow-md">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-terracotta-light uppercase tracking-wider">Operating Hours</h4>
                  <p className="text-cream text-base font-semibold mt-0.5">
                    Open Every Day: <span className="text-terracotta-light">11:00 AM – 11:00 PM</span>
                  </p>
                  <p className="text-xs text-cream/70 mt-0.5">Open kitchen operational throughout business hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-terracotta text-cream flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-terracotta-light uppercase tracking-wider">Call & Reservations</h4>
                  <a href="tel:+919876543210" className="text-cream hover:text-terracotta-light text-base font-bold mt-0.5 block transition">
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-cream/70">Walk-ins welcome • Table & Party bookings</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-terracotta text-cream flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-terracotta-light uppercase tracking-wider">Email Inquiry</h4>
                  <a href="mailto:hello@cafemaverick.in" className="text-cream hover:text-terracotta-light text-sm font-semibold transition">
                    hello@cafemaverick.in
                  </a>
                </div>
              </div>

            </div>

            {/* Directions CTA Button */}
            <a
              href={googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-terracotta hover:bg-terracotta-dark text-cream font-black text-base py-4 rounded-2xl shadow-xl transition transform hover:-translate-y-0.5"
            >
              <Navigation className="w-5 h-5" />
              Open in Google Maps
              <ExternalLink className="w-4 h-4" />
            </a>

          </div>

          {/* Google Maps Iframe Column */}
          <div className="lg:col-span-7 bg-cream-alt rounded-3xl overflow-hidden border-2 border-ink/10 shadow-xl flex flex-col">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-full">
              <iframe
                title="Café Maverick Location Map"
                src={mapEmbedUrl}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

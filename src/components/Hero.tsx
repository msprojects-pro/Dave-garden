import React, { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';
import heroImage from '../assets/images/hero_british_garden_1792526791205.jpg';
import heroBgLandscape from '../assets/images/hero_background_landscape_1792527584033.jpg';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="home" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-[#0E2E17]/10">
      {/* 1. Full-bleed Landscape Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src={heroBgLandscape}
          alt="Shropshire English countryside landscape background"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </div>

      {/* 2. Soft Atmospheric Washes for Rich Color & Impeccable Text Contrast */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white/95 via-[#F4F7F2]/92 to-[#F4F7F2]/75 backdrop-blur-[2px]" 
        aria-hidden="true" 
      />
      
      {/* 3. Subtle Emerald Sunlight Accent in Top Right */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#527A45]/15 rounded-full blur-3xl -z-10 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            
            {/* Small eyebrow text */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#527A45] uppercase mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#527A45] shrink-0" aria-hidden="true" />
              <span>GARDENING &amp; PROPERTY MAINTENANCE | SHROPSHIRE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2E17] tracking-tight leading-[1.12] mb-5 [text-wrap:balance]">
              A Garden You Can Be Proud Of.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#667268] leading-relaxed mb-8 max-w-xl">
              Reliable garden and property maintenance to keep your outdoor space looking its best. From regular upkeep to bigger garden jobs, Dave is ready to help.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7">
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-[#0E2E17] hover:bg-[#183F25] active:bg-[#0A2210] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#527A45]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#A3D995]" aria-hidden="true" />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#0E2E17] bg-[#F4F7F2] hover:bg-[#E8EFE5] border border-[#0E2E17]/15 rounded-xl transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#527A45]"
              >
                <Phone className="w-4 h-4 text-[#527A45]" aria-hidden="true" />
                <span>Call Dave: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Small trust message */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#667268] pt-2 border-t border-[#0E2E17]/10">
              <span className="flex items-center gap-1.5 font-medium text-[#17231A]">
                <CheckCircle2 className="w-4 h-4 text-[#527A45] shrink-0" aria-hidden="true" />
                Free quotes available
              </span>
              <span className="text-[#667268]/40" aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5 font-medium text-[#17231A]">
                <ShieldCheck className="w-4 h-4 text-[#527A45] shrink-0" aria-hidden="true" />
                No job too big or small
              </span>
            </div>

            {/* Availability highlight */}
            <div className="mt-4 flex items-center gap-2 text-xs text-[#667268]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#527A45]" aria-hidden="true" />
              <span>Availability: <strong className="text-[#17231A] font-semibold">{BUSINESS_INFO.availability}</strong></span>
              <span className="text-[#667268]/40" aria-hidden="true">/</span>
              <span>Direct communication via phone, WhatsApp &amp; email</span>
            </div>
          </div>

          {/* Right Column: Visual Photographic Showcase */}
          <div className="lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0">
            {/* Subtle decorative glassmorphism border frame */}
            <div className="relative rounded-2xl lg:rounded-3xl p-2 sm:p-3 bg-white/85 backdrop-blur-md border border-white/70 shadow-2xl ring-1 ring-[#0E2E17]/10">
              
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl lg:rounded-2xl bg-[#E2ECE0]">
                {/* Visual Image with Fallback */}
                <img
                  src={heroImage}
                  alt="A beautifully maintained British garden in Shropshire with neat lawn stripes, dense boxwood hedges, and vibrant flower borders"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imgLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                  loading="eager"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => {
                    // Fallback to high quality unsplash gardening image if local asset has issue
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('unsplash')) {
                      target.src = 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                />

                {/* Gentle image gradient overlay on bottom for contrast */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-[#0E2E17]/40 via-transparent to-transparent pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Floating Badge on the image */}
                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-lg border border-[#0E2E17]/10 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#0E2E17] text-[#A3D995] flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-[#0E2E17] leading-tight">
                      Your Garden, Well Looked After
                    </p>
                    <p className="text-[11px] text-[#667268]">
                      Proudly serving Shropshire
                    </p>
                  </div>
                </div>

              </div>

              {/* Decorative accent notch */}
              <div 
                className="absolute -bottom-2 -right-2 w-16 h-16 bg-[#527A45]/15 rounded-full blur-xl -z-10"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

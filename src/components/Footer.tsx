import React from 'react';
import { Phone, Mail, ArrowUp, ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface FooterProps {
  onQuoteClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onQuoteClick }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0E2E17] text-white border-t border-[#183F25]">
      {/* Top Banner CTA: Need a Hand With Your Garden? Get in Touch. */}
      <div className="border-b border-white/10 py-10 lg:py-12 bg-[#0A2210]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs font-bold tracking-wider text-[#A3D995] uppercase">
                {BUSINESS_INFO.tagline}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Need a Hand With Your Garden? Get in Touch.
              </h2>
              <p className="text-sm text-[#E2ECE0]/80 mt-1 max-w-xl">
                Free quotes available upon message request. Serving Shropshire with dependable care.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-[#0E2E17] bg-[#A3D995] hover:bg-[#8ECB7E] rounded-xl transition-colors shadow-sm"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#0E2E17]" />
              </button>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-[#A3D995]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-white/10 text-[#A3D995] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 3.84 2.16 7.18 5.34 8.87.12-.66.27-1.34.46-2.03.85-3.07 2.37-6.02 4.41-8.52 1.94 3.03 2.97 6.49 2.97 10.08 0 .54-.03 1.07-.08 1.6C18.66 20.44 22 16.63 22 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </span>
              <span className="font-bold text-lg text-white">
                Dave's Garden &amp; Property Maintenance
              </span>
            </div>

            <p className="text-sm text-[#E2ECE0]/75 leading-relaxed max-w-sm">
              Reliable, professional garden and property maintenance in Shropshire, United Kingdom. From regular grass cutting to bigger garden jobs, Dave is dedicated to keeping your outdoor space looking its very best.
            </p>

            <div className="pt-2 text-xs text-[#E2ECE0]/60 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A3D995] shrink-0" />
                <span>Service Area: <strong>{BUSINESS_INFO.areaServed}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A3D995]" />
                <span>Operating hours: <strong>{BUSINESS_INFO.availability}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A3D995]">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#E2ECE0]/85">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors"
                >
                  Services &amp; Care
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  About Dave
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  Request a Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A3D995]">
              Get In Touch
            </h3>
            <div className="space-y-2.5 text-sm text-[#E2ECE0]/85">
              <div>
                <span className="text-xs text-[#A3D995] block">Telephone</span>
                <a href={BUSINESS_INFO.phoneTel} className="hover:text-white transition-colors font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-xs text-[#A3D995] block">WhatsApp</span>
                <a 
                  href={BUSINESS_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#A3D995]" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-[#A3D995] block">Email</span>
                <a href={BUSINESS_INFO.emailMailto} className="hover:text-white transition-colors font-medium break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-xs text-[#A3D995] block">TikTok</span>
                <a 
                  href={BUSINESS_INFO.tiktokUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-medium inline-flex items-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-[#A3D995]" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.34 0 .66.06.96.17V9.43a6.35 6.35 0 0 0-.96-.08A6.34 6.34 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.32V9.38a8.16 8.16 0 0 0 4.91 1.62V7.55c-.34 0-.68-.05-1-.16v-.7z" />
                  </svg>
                  <span>{BUSINESS_INFO.tiktokHandle}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar with Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E2ECE0]/60">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved. Shropshire, UK.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2 rounded focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#A3D995]" />
          </button>
        </div>
      </div>
    </footer>
  );
};

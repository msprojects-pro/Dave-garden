import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

interface HeaderProps {
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white transition-all duration-200 ${
        scrolled ? 'shadow-xs border-b border-[#0E2E17]/10 py-2.5' : 'border-b border-[#0E2E17]/5 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 sm:gap-6">
          {/* Zone 1: Small Refined Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center gap-2 text-[#0E2E17] group whitespace-nowrap shrink-0 focus:outline-none"
            aria-label="Dave's Garden & Property Maintenance - Home"
          >
            <span className="w-7 h-7 rounded-md bg-[#0E2E17] text-white flex items-center justify-center shadow-2xs group-hover:bg-[#183F25] transition-colors shrink-0">
              <svg
                className="w-4 h-4 fill-current text-[#A3D995]"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12c0 3.84 2.16 7.18 5.34 8.87.12-.66.27-1.34.46-2.03.85-3.07 2.37-6.02 4.41-8.52 1.94 3.03 2.97 6.49 2.97 10.08 0 .54-.03 1.07-.08 1.6C18.66 20.44 22 16.63 22 12c0-5.52-4.48-10-10-10z" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-xs sm:text-sm tracking-tight text-[#0E2E17] leading-tight">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-[10px] text-[#667268] hidden xs:block">
                Shropshire, UK
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links for Desktop (Clean typography) */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#17231A]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 text-[#17231A] hover:text-[#0E2E17] transition-colors whitespace-nowrap shrink-0 group"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#527A45] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Zone 3: CTA & Mobile Hamburger Menu */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Desktop CTA */}
            <button
              type="button"
              onClick={onQuoteClick}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#0E2E17] hover:bg-[#183F25] active:bg-[#0A2210] rounded-lg transition-colors whitespace-nowrap shadow-xs focus-visible:ring-2 focus-visible:ring-[#527A45]"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A3D995]" aria-hidden="true" />
            </button>

            {/* Mobile Hamburger Toggle Button (< md) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#0E2E17] hover:bg-[#F4F7F2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#527A45]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#0E2E17]/10 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#17231A] hover:bg-[#F4F7F2] hover:text-[#0E2E17] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#0E2E17]/10">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onQuoteClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-[#0E2E17] rounded-lg shadow-xs"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A3D995]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

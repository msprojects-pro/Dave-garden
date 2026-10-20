import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dave on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1da850] text-white pl-3.5 pr-4 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        <span className="relative flex items-center justify-center">
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white" aria-hidden="true" />
        </span>
        <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">
          WhatsApp Dave
        </span>
      </a>
    </div>
  );
};

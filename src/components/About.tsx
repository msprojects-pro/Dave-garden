import React, { useState } from 'react';
import { Sparkles, MessageCircle, MapPin, Check, ArrowRight } from 'lucide-react';
import { BENEFITS, BUSINESS_INFO } from '../data/business';
import aboutImage from '../assets/images/about_gardener_work_1792526791967.jpg';

interface AboutProps {
  onQuoteClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onQuoteClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const getBenefitIcon = (id: string) => {
    switch (id) {
      case 'flexible':
        return <Sparkles className="w-5 h-5 text-[#527A45]" />;
      case 'quotes':
        return <MessageCircle className="w-5 h-5 text-[#527A45]" />;
      case 'local':
        return <MapPin className="w-5 h-5 text-[#527A45]" />;
      default:
        return <Check className="w-5 h-5 text-[#527A45]" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left / Visual Column: Large Garden Maintenance Photograph */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-2xl lg:rounded-3xl p-2 sm:p-3 bg-[#F4F7F2] border border-[#527A45]/20 shadow-lg">
              
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl lg:rounded-2xl bg-[#E2ECE0]">
                <img
                  src={aboutImage}
                  alt="Outdoor property care and precision hedge maintenance in a British residential garden"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    imgLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('unsplash')) {
                      target.src = 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                />

                {/* Corner detail tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-lg shadow-sm border border-[#0E2E17]/10 text-xs font-semibold text-[#0E2E17]">
                  Shropshire &amp; Surrounding Areas
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#527A45]/10 rounded-full blur-xl -z-10" aria-hidden="true" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            
            <p className="text-xs font-bold tracking-widest text-[#527A45] uppercase mb-3">
              About The Business
            </p>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E2E17] tracking-tight leading-tight mb-5 [text-wrap:balance]">
              Big Jobs or Small, Every Garden Matters.
            </h2>

            <p className="text-base sm:text-lg text-[#667268] leading-relaxed mb-8">
              Whether your outdoor space needs regular attention or simply a little care to get it back in shape, Dave's Garden &amp; Property Maintenance is ready to help. Get in touch to discuss what you need and request a free quote.
            </p>

            {/* Three short benefit points */}
            <div className="space-y-5 mb-8">
              {BENEFITS.map((benefit) => (
                <div key={benefit.id} className="flex items-start gap-4 p-3.5 rounded-xl bg-[#F4F7F2]/60 border border-[#0E2E17]/5">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#527A45]/20 flex items-center justify-center shrink-0 shadow-2xs">
                    {getBenefitIcon(benefit.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0E2E17]">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#667268] mt-0.5 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct prompt to get in touch */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0E2E17] hover:bg-[#183F25] rounded-xl transition-colors cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#527A45]"
              >
                <span>Request Your Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#A3D995]" aria-hidden="true" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0E2E17] hover:bg-[#F4F7F2] border border-[#0E2E17]/15 rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#527A45]" aria-hidden="true" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

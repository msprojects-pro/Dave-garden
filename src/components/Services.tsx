import React from 'react';
import { 
  Trees, 
  Scissors, 
  Sparkles, 
  Shovel, 
  Home, 
  Wrench, 
  ArrowRight,
  Check
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/business';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-6 h-6 text-[#0E2E17]" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#0E2E17]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0E2E17]" />;
      case 'Shovel':
        return <Shovel className="w-6 h-6 text-[#0E2E17]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#0E2E17]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#0E2E17]" />;
      default:
        return <Trees className="w-6 h-6 text-[#0E2E17]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F4F7F2]/70 border-y border-[#0E2E17]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-[#527A45] uppercase mb-2">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E2E17] tracking-tight [text-wrap:balance]">
            Garden &amp; Property Care, Made Simple
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#667268] [text-wrap:balance]">
            Practical, reliable help to keep your garden and property looking its best.
          </p>
        </div>

        {/* Services Grid (6 Clean Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl border border-[#0E2E17]/10 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#527A45]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Icon & Optional Service Image Thumbnail */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F4F7F2] border border-[#527A45]/20 flex items-center justify-center group-hover:bg-[#E2ECE0] transition-colors shrink-0">
                      {getIcon(service.iconName)}
                    </div>

                    {service.image && (
                      <div className="w-16 h-12 rounded-lg overflow-hidden border border-[#0E2E17]/10 shrink-0">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Editorial Index + Title */}
                  <div className="mb-2.5">
                    <span className="text-xs font-semibold text-[#527A45]/80 tracking-wider">
                      0{index + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0E2E17] group-hover:text-[#183F25] transition-colors mt-0.5">
                      {service.title}
                    </h3>
                  </div>

                  {/* One short, helpful description */}
                  <p className="text-sm text-[#667268] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#0E2E17]/5 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E2E17] hover:text-[#527A45] transition-colors group-hover:translate-x-0.5 duration-200 cursor-pointer focus:outline-none"
                    aria-label={`Request quote for ${service.title}`}
                  >
                    <span>Request a Quote for this</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#527A45]" aria-hidden="true" />
                  </button>
                  <span className="text-[11px] text-[#667268] font-medium">Free estimate</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Note about custom tasks */}
        <div className="mt-12 text-center max-w-xl mx-auto bg-white/70 border border-[#0E2E17]/10 rounded-xl py-3 px-5 text-xs sm:text-sm text-[#667268] flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-[#527A45] shrink-0" aria-hidden="true" />
          <span>Have a specific job in mind? <strong>Dave is happy to discuss any garden or property need.</strong></span>
        </div>

      </div>
    </section>
  );
};

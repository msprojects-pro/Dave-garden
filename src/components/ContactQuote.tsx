import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/business';

// Configuration: Replace with your free Web3Forms access key from https://web3forms.com
export const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

interface ContactQuoteProps {
  selectedServicePreset?: string;
}

export const ContactQuote: React.FC<ContactQuoteProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedServicePreset || 'Lawn Care & Grass Cutting',
    details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<'idle' | 'success' | 'needs_key'>('idle');

  // Sync if preset changes
  React.useEffect(() => {
    if (selectedServicePreset) {
      setFormData((prev) => ({ ...prev, service: selectedServicePreset }));
    }
  }, [selectedServicePreset]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a telephone or mobile number.';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please provide a valid telephone number.';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.service) {
      errs.service = 'Please select a service.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Check if real Web3Forms key is provided or still the placeholder
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      // Do not pretend it sent to an API if key is not configured.
      // Show the clear configuration state with direct 1-click WhatsApp/Email transmission!
      setSubmissionState('needs_key');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Garden Quote Request from ${formData.name}`,
          from_name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          service_required: formData.service,
          additional_details: formData.details || 'None provided',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmissionState('success');
      } else {
        setSubmissionState('needs_key');
      }
    } catch {
      setSubmissionState('needs_key');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-formatted message for instant WhatsApp delivery
  const whatsappPreFilledText = encodeURIComponent(
    `Hello Dave, I'd like to request a free quote:\n\n• Name: ${formData.name || '(Your Name)'}\n• Phone: ${formData.phone || '(Your Phone)'}\n• Service: ${formData.service}\n• Details: ${formData.details || 'None'}`
  );
  const directWhatsAppLink = `https://wa.me/447399406002?text=${whatsappPreFilledText}`;

  // Pre-formatted email mailto
  const emailSubject = encodeURIComponent(`Garden Quote Enquiry: ${formData.service}`);
  const emailBody = encodeURIComponent(
    `Hello Dave,\n\nI would like to request a quote.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nService needed: ${formData.service}\nDetails: ${formData.details}\n\nThank you!`
  );
  const directEmailLink = `mailto:${BUSINESS_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4F7F2] border-t border-[#0E2E17]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold tracking-widest text-[#527A45] uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E2E17] tracking-tight [text-wrap:balance]">
            Ready to Get Your Garden Looking Its Best?
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#667268] [text-wrap:balance]">
            Tell Dave a little about the work you need. Get in touch today to request your free quote.
          </p>
        </div>

        {/* Main Grid: Forest Green Contact Panel + White Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Forest-Green Call-to-Action & Contact Panel */}
          <div className="lg:col-span-5 bg-[#0E2E17] text-white rounded-3xl p-7 sm:p-9 shadow-xl relative overflow-hidden">
            {/* Subtle organic light accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#527A45]/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
            
            <span className="text-xs font-bold tracking-wider text-[#A3D995] uppercase">
              Direct Contact
            </span>

            <h3 className="text-2xl font-bold text-white mt-1 mb-3">
              Dave's Garden &amp; Property Maintenance
            </h3>

            <p className="text-sm text-[#E2ECE0]/90 leading-relaxed mb-8">
              Based in Shropshire, Dave provides reliable outdoor maintenance with no job too big or small. Reach out by phone, WhatsApp, or email.
            </p>

            {/* Clear Contact Details List */}
            <div className="space-y-4 mb-8 text-sm">
              <div className="flex items-start gap-3 text-white/90">
                <Phone className="w-4 h-4 text-[#A3D995] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs text-[#A3D995] block">Phone / WhatsApp</span>
                  <a href={BUSINESS_INFO.phoneTel} className="font-semibold text-white hover:text-[#A3D995] transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white/90">
                <Mail className="w-4 h-4 text-[#A3D995] mt-1 shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <span className="text-xs text-[#A3D995] block">Email</span>
                  <a href={BUSINESS_INFO.emailMailto} className="font-semibold text-white hover:text-[#A3D995] transition-colors break-all">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white/90">
                <MapPin className="w-4 h-4 text-[#A3D995] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs text-[#A3D995] block">Location</span>
                  <span className="font-medium text-white">{BUSINESS_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white/90">
                <Clock className="w-4 h-4 text-[#A3D995] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <span className="text-xs text-[#A3D995] block">Availability</span>
                  <span className="font-medium text-white">{BUSINESS_INFO.availability}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-white/90">
                <svg className="w-4 h-4 fill-current text-[#A3D995] mt-1 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.34 0 .66.06.96.17V9.43a6.35 6.35 0 0 0-.96-.08A6.34 6.34 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.32V9.38a8.16 8.16 0 0 0 4.91 1.62V7.55c-.34 0-.68-.05-1-.16v-.7z" />
                </svg>
                <div>
                  <span className="text-xs text-[#A3D995] block">TikTok</span>
                  <a 
                    href={BUSINESS_INFO.tiktokUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium text-white hover:text-[#A3D995] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{BUSINESS_INFO.tiktokHandle}</span>
                    <ExternalLink className="w-3 h-3 text-[#A3D995]" />
                  </a>
                </div>
              </div>
            </div>

            {/* 4 Dedicated Contact Buttons */}
            <div className="pt-6 border-t border-white/10 space-y-2.5">
              <p className="text-xs font-semibold text-[#A3D995] uppercase tracking-wider mb-2">
                Quick Action Buttons
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* A. Call Dave */}
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-bold text-[#0E2E17] bg-[#A3D995] hover:bg-[#8ECB7E] rounded-xl transition-colors shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0E2E17]" />
                  <span>Call Dave</span>
                </a>

                {/* B. Message on WhatsApp */}
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-bold text-white bg-[#183F25] hover:bg-[#204f30] border border-white/20 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#A3D995]" />
                  <span>Message on WhatsApp</span>
                </a>

                {/* C. Send an Email */}
                <a
                  href={BUSINESS_INFO.emailMailto}
                  className="flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#A3D995]" />
                  <span>Send an Email</span>
                </a>

                {/* D. Follow on TikTok */}
                <a
                  href={BUSINESS_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#A3D995]" />
                  <span>Follow on TikTok</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Free Quote Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-[#0E2E17]/10 shadow-lg">
            
            <div className="mb-6">
              <span className="text-xs font-bold tracking-widest text-[#527A45] uppercase">
                Online Enquiry
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0E2E17] mt-1">
                Request a Free Quote
              </h3>
              <p className="text-sm text-[#667268] mt-1">
                Fill in the details below and Dave will get back to you promptly with an estimate.
              </p>
            </div>

            {/* Submission Feedback Messages */}
            {submissionState === 'success' && (
              <div className="mb-6 p-4 rounded-xl bg-[#E2ECE0] border border-[#527A45]/30 text-[#0E2E17] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#527A45] mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-sm">Quote Request Sent Successfully!</p>
                  <p className="text-xs text-[#667268] mt-0.5">
                    Thank you, {formData.name}. Dave will review your details and be in touch soon.
                  </p>
                </div>
              </div>
            )}

            {submissionState === 'needs_key' && (
              <div className="mb-6 p-4 rounded-xl bg-[#F4F7F2] border border-[#527A45]/40 text-[#17231A]">
                <div className="flex items-start gap-2.5 mb-2">
                  <AlertCircle className="w-5 h-5 text-[#527A45] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-bold text-sm text-[#0E2E17]">Your enquiry is ready to send!</p>
                    <p className="text-xs text-[#667268] mt-1">
                      To receive Web3Forms submissions via backend, set your free API key in the configuration code.
                    </p>
                  </div>
                </div>
                
                <p className="text-xs font-semibold text-[#0E2E17] mt-3 mb-2">
                  Send your enquiry immediately with 1-click:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={directWhatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-white bg-[#183F25] hover:bg-[#0E2E17] rounded-lg transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#A3D995]" />
                    <span>Send via WhatsApp</span>
                  </a>

                  <a
                    href={directEmailLink}
                    className="inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold text-[#0E2E17] bg-[#E2ECE0] hover:bg-[#d4e4d1] rounded-lg transition-colors border border-[#527A45]/30"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#527A45]" />
                    <span>Send via Email</span>
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Full Name */}
              <div>
                <label htmlFor="quote-name" className="block text-xs font-semibold text-[#17231A] mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="quote-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-[#17231A] placeholder-[#667268]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#527A45] ${
                    errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#0E2E17]/15 hover:border-[#527A45]/50'
                  }`}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-semibold text-[#17231A] mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 07123 456789"
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-[#17231A] placeholder-[#667268]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#527A45] ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-[#0E2E17]/15 hover:border-[#527A45]/50'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="quote-email" className="block text-xs font-semibold text-[#17231A] mb-1.5">
                    Email Address <span className="text-[#667268] font-normal">(optional)</span>
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@example.co.uk"
                    className={`w-full px-4 py-2.5 text-sm rounded-xl border bg-white text-[#17231A] placeholder-[#667268]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#527A45] ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#0E2E17]/15 hover:border-[#527A45]/50'
                    }`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* What Do You Need Help With? */}
              <div>
                <label htmlFor="quote-service" className="block text-xs font-semibold text-[#17231A] mb-1.5">
                  What Do You Need Help With? <span className="text-red-500">*</span>
                </label>
                <select
                  id="quote-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#0E2E17]/15 bg-white text-[#17231A] hover:border-[#527A45]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#527A45]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Multiple Services / Full Garden Tidy">
                    Multiple Services / Full Garden Tidy
                  </option>
                  <option value="Other Outdoor Property Work">
                    Other Outdoor Property Work
                  </option>
                </select>
              </div>

              {/* Additional Details */}
              <div>
                <label htmlFor="quote-details" className="block text-xs font-semibold text-[#17231A] mb-1.5">
                  Additional Details <span className="text-[#667268] font-normal">(garden size, frequency, or specific job)</span>
                </label>
                <textarea
                  id="quote-details"
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Tell Dave a little about the work (e.g. medium front lawn needs regular mowing, hedge needs trimming, or patio requires clearing)..."
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-[#0E2E17]/15 bg-white text-[#17231A] placeholder-[#667268]/50 hover:border-[#527A45]/50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#527A45] resize-y"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-bold text-white bg-[#0E2E17] hover:bg-[#183F25] active:bg-[#0A2210] rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-[#527A45]"
              >
                {isSubmitting ? (
                  <span>Sending request...</span>
                ) : (
                  <>
                    <span>Request My Free Quote</span>
                    <Send className="w-4 h-4 text-[#A3D995]" aria-hidden="true" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#667268] pt-1">
                <span>Free quotes • No obligation • Shropshire &amp; surrounding areas</span>
              </div>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

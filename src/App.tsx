import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { ContactQuote } from './components/ContactQuote';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Lawn Care & Grass Cutting');

  const scrollToQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-white text-[#17231A] flex flex-col font-sans antialiased">
      {/* 1. Header / Navigation */}
      <Header onQuoteClick={scrollToQuote} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onQuoteClick={scrollToQuote} />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. About / Why Choose Dave Section */}
        <About onQuoteClick={scrollToQuote} />

        {/* 5. Contact / Free Quote Section */}
        <ContactQuote selectedServicePreset={selectedService} />
      </main>

      {/* 6. Footer */}
      <Footer onQuoteClick={scrollToQuote} />

      {/* Floating WhatsApp button in bottom right */}
      <FloatingWhatsApp />
    </div>
  );
}

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServiceCategories from '@/components/home/ServiceCategories';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedGallery from '@/components/home/FeaturedGallery';
import CTASection from '@/components/home/CTASection';
import Footer from '@/components/layout/Footer';
import { MessageCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServiceCategories />
      <WhyChooseUs />
      <FeaturedGallery />
      <CTASection />
      <Footer />

      {/* Floating WhatsApp Contact Button */}
        <a 
        href="https://wa.me/234XXXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
};


import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServiceCategories from "@/components/home/ServiceCategories";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedGallery from "@/components/home/FeaturedGallery";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServiceCategories />
      <WhyChooseUs />
      <FeaturedGallery />
      <CTASection />
     
    </div>
  );
}

import React from 'react';
import Image from 'next/image';
import { PartyPopper } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 px-6 md:px-12" style={{ backgroundColor: '#FFFAF5' }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#FFE4E1' }}></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: '#D4A5A5' }}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full opacity-10" style={{ backgroundColor: '#FADADD' }}></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between max-w-6xl gap-12 w-full">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start gap-6">
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: '#FFF5F5' }}>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#D4A5A5' }}></div>
            <span className="text-sm font-semibold" style={{ color: '#8B6F6F' }}>
              PREMIUM CATERING & EVENTS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ color: '#8B6F6F' }}>
            Baking Dreams
            <br />
            <span style={{ color: '#D4A5A5' }}>& Planning Perfect Events</span>
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-md leading-relaxed">
            Creating unforgettable moments with delicious treats & beautiful celebrations tailored to your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="px-8 py-4 rounded-full font-semibold shadow-lg transition text-white hover:opacity-90" style={{ backgroundColor: '#D4A5A5' }}>
              Get a Quote
            </button>
            <button className="px-8 py-4 rounded-full font-semibold shadow-lg transition border-2 hover:bg-opacity-5" style={{ borderColor: '#D4A5A5', color: '#8B6F6F' }}>
              View Menu
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
            {/* Image placeholder - Replace with your actual image */}
            <Image 
              width={500}
              height={500}
              src="/hero-cake.jpg"
              alt="Delicious cake"
              className="rounded-2xl shadow-2xl"
            />


            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-5 shadow-xl">
              <div className="text-center">
                <p className="text-2xl font-bold" style={{ color: '#D4A5A5' }}>100%</p>
                <p className="text-xs text-gray-600 font-semibold">Fresh</p>
              </div>
            </div>

            {/* Bottom floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-[#D4A5A5]" style={{ backgroundColor: '#FFF5F5' }}>
                 <PartyPopper />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#8B6F6F' }}>Custom Designs</p>
                  <p className="text-xs text-gray-600">For Every Occasion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
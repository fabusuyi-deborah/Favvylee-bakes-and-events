import React from "react";
import Image from "next/image";
import { PartyPopper } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 px-6 md:px-12 mt-16 font-space-grotesk bg-light"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-15 animate-pulse bg-primary" />
        <div className="absolute bottom-12 right-12 w-28 h-28 rounded-full opacity-10 animate-pulse bg-primary" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between max-w-6xl gap-12 w-full">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold text-secondary">
              PREMIUM CATERING & EVENTS
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-secondary">
            Baking Dreams
            <br />
            <span className="text-primary">& Planning Perfect Events</span>
          </h1>

          <p className="text-secondary/80 text-lg md:text-xl max-w-md leading-relaxed font-inter">
            Creating unforgettable moments with delicious treats & beautiful
            celebrations tailored to your vision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="px-8 py-4 rounded font-semibold shadow-lg bg-primary text-white hover:bg-primary/80 transition">
              Get a Quote
            </button>

            <button className="px-8 py-4 rounded font-semibold border-2 border-primary text-secondary hover:bg-primary/10 transition">
              View Menu
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
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
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs font-semibold text-secondary">Fresh</p>
              </div>
            </div>

            {/* Bottom floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-primary bg-primary/10">
                  <PartyPopper size={18} />
                </div>
                <div>
                  <p className="font-bold text-sm text-secondary">
                    Custom Designs
                  </p>
                  <p className="text-xs text-primary">For Every Occasion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { slides } from "../data/HeroSectionData";
import Link from "next/link";
import { createWhatsAppLink } from "../data/whatsapp";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const phoneNumber = "2348105338572";
  const defaultMessage =
    "Hello Favvylee Bakes & Events! I'll like to order/get a quote for : ";

  const whatsappLink = createWhatsAppLink(phoneNumber, defaultMessage);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 px-6 md:px-12 mt-16 font-space-grotesk"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-10 h-10 rounded-full opacity-10 animate-pulse bg-primary" />
        <div className="absolute bottom-12 right-12 w-18 h-18 rounded-full opacity-10 animate-pulse bg-primary" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center md:justify-between max-w-6xl gap-12 w-full">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-start gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold text-secondary">
              Favvylee Bakes and Events
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

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link
              href={whatsappLink}
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold shadow-lg bg-primary text-white hover:bg-secondary transition"
            >
              Get a Quote
            </Link>

            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold border-2 border-primary text-secondary hover:bg-primary/10 transition text-center"
            >
              View Menu
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div
          data-aos="fade-left"
          className="relative w-full md:w-1/2 flex justify-center"
        >
          {/* SLIDER CONTAINER*/}
          <div className="relative w-full max-w-sm md:max-w-md aspect-square">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  fill
                  src={slide.image}
                  alt={slide.alt}
                  className="object-cover rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            ))}

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-5 shadow-xl">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">
                  {slides[currentSlide].badge.value}
                </p>
                <p className="text-xs font-semibold text-secondary">
                  {slides[currentSlide].badge.label}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo / Brand */}
        <a
          href="#home"
          className="font-bold text-2xl"
          style={{ color: '#8B6F6F' }}
        >
          <Image
            width={350}
            height={350}
            src="/fav-logo.jpeg"
            alt="Favvylee Bakes and Events Logo"
            className="h-20 w-auto"
          />    

        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium relative group transition"
                style={{ color: '#8B6F6F' }}
              >
                {link.name}
                <span 
                  className="absolute left-0 -bottom-1 h-0.5 w-0 transition-all group-hover:w-full"
                  style={{ backgroundColor: '#D4A5A5' }}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <a
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-4 py-3 rounded-full  transition shadow-md text-[#5A1F1F] border-2 border-[#D4A5A5] hover:opacity-90"
        >
          Order Now
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: '#8B6F6F' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3" style={{ borderColor: '#FFF5F5' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block font-medium py-2"
              style={{ color: '#8B6F6F' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-6 py-3 rounded-full font-semibold transition shadow-md text-white mt-4"
            style={{ backgroundColor: '#D4A5A5' }}
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
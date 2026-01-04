"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body overflow toggle for mobile menu
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-20 lg:hidden backdrop-blur-sm transition-opacity duration-300 font-space-grotesk ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      <header
        className={`${
          pathname === "/menu" ? "relative" : "fixed top-0 left-0 w-full z-50"
        } transition-all duration-300  ${
          scrolled ? "bg-white shadow-lg" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-3  font-space-grotesk">
          {/* Logo */}
          <Link href="#home" className="flex items-center z-50">
            <Image
              width={110}
              height={55}
              src="/fav-logo.jpeg"
              alt="Favvylee Bakes and Events"
              className="h-12 sm:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[15px] font-semibold text-primary hover:text-secondary transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 ">
            <Link
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary rounded-full px-7 py-3 text-[15px] font-bold text-white transition-all hover:bg-secondary uppercase tracking-wide"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-secondary p-2 z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Panel Menu */}
      <div
        className={`fixed inset-x-0 top-0 z-50 bg-white transform transition-transform duration-300 ease-in-out lg:hidden  rounded-b-3xl shadow-xl ${
          isMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full px-6 py-4 font-space-grotesk">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <Image
              src="/fav-logo.jpeg"
              alt="Favvylee"
              width={100}
              height={50}
              className="h-11 w-auto"
            />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-secondary p-2"
              aria-label="Close Menu"
            >
              <X size={26} strokeWidth={2.5} />
            </button>
          </div>

          {/* Scrollable Links */}
          <nav className="flex-1 flex flex-col overflow-y-auto mt-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-bold text-secondary hover:text-secondary/80 py-4 border-b border-gray-100 uppercase tracking-wide text-center transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Sticky Mobile CTA */}
          <div className="mt-4 shrink-0">
            <Link
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-6 py-4 text-lg font-bold text-white hover:bg-secondary transition-all uppercase tracking-wide shadow-lg "
            >
              <ShoppingBag size={22} />
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

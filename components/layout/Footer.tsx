import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white px-4 md:px-12 pt-16 pb-8 font-space-grotesk">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl text-white mb-3">
            Favvylee Bakes & Events
          </h3>
          <p className="text-sm leading-relaxed font-inter">
            Custom cakes, catering and event services crafted with love for
            every celebration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm font-inter">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-white">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-white">
                Events
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-medium mb-3">Services</h4>
          <ul className="space-y-2 text-sm font-inter">
            <li>Custom Cakes</li>
            <li>Small Chops</li>
            <li>Catering Services</li>
            <li>Event Planning & Decor</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-sm font-inter">
            <li>Anambra, Nigeria</li>
            <li>
              <Link
                href="https://wa.me/234XXXXXXXXXX"
                className="text-bodyBg hover:underline"
              >
                Order via WhatsApp
              </Link>
            </li>
            <li>
              <span className="text-white/60">Open:</span> Mon – Sat
            </li>
          </ul>
          {/* Social Links */}
          <div className="mt-4 flex gap-3">
            <Link
              href="https://facebook.com/favvylee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-bodyBg transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://instagram.com/favvylee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-bodyBg transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Favvylee Bakes & Events. All rights
        reserved.
      </div>
    </footer>
  );
}

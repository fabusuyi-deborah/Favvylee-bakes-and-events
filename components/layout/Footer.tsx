import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#5A1F1F] text-white px-4 md:px-12 pt-16 pb-8">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl text-white mb-3">
            Favvylee Bakes & Events
          </h3>
          <p className="text-sm leading-relaxed">
            Custom cakes, catering and event services crafted with love for
            every celebration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
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
          <ul className="space-y-2 text-sm">
            <li>Custom Cakes</li>
            <li>Small Chops</li>
            <li>Catering Services</li>
            <li>Event Planning & Decor</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Anambra, Nigeria</li>
            <li>
              <Link
                href="https://wa.me/234XXXXXXXXXX"
                className="text-[#D4A5A5] hover:underline"
              >
                Order via WhatsApp
              </Link>
            </li>
            <li>
              <span className="text-white/60">Open:</span> Mon – Sat
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Favvylee Bakes & Events. All rights reserved.
      </div>
    </footer>
  )
}

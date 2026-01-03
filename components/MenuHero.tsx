import Link from 'next/link';

export default function MenuHero() {
  return (
    <section className="bg-[#FFFAF5] pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#4A1C1C] mb-4">
          Our Menu
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#4A1C1C]/80 max-w-2xl mx-auto mb-8">
          From freshly baked treats to full catering and event services,
          everything is crafted with care for your special moments.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://wa.me/234XXXXXXXXXX"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-[#4A1C1C] px-8 py-4 text-white font-medium transition hover:bg-[#3A1515]"
          >
            Order on WhatsApp
          </Link>

          <Link
            href="#cakes-desserts"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#D4A5A5] px-8 py-4 font-medium text-[#4A1C1C] transition hover:bg-[#D4A5A5]/10"
          >
            Browse Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

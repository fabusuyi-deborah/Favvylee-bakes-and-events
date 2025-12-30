import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#FFFDFC] text-[#5A1F1F]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">
          Let’s Make Your Event Delicious
        </h2>

        <p className="max-w-xl mx-auto text-[#5A1F1F] mb-8">
          From custom cakes to full event catering, we bring flavour, style and
          care to every order.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://wa.me/234XXXXXXXXXX"
            className="inline-flex items-center justify-center rounded-full bg-[#D4A5A5] px-8 py-4 text-sm font-medium text-[#5A1F1F] transition hover:bg-[#e3b47b]"
          >
            Order on WhatsApp
          </Link>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-full border border-[#D4A5A5] px-8 py-4 text-sm font-medium text-[#5A1F1F] transition hover:bg-white hover:text-[#5A1F1F]"
          >
            View Our Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 px-4 md:px-12 text-secondary font-space-grotesk">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading mb-4">
          Let’s Make Your Event Delicious
        </h2>

        <p className="max-w-xl mx-auto text-secondary mb-8 font-inter">
          From custom cakes to full event catering, we bring flavour, style and
          care to every order.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://wa.me/234XXXXXXXXXX"
            className="inline-flex items-center justify-center rounded bg-primary px-8 py-4 text-sm font-medium text-white transition hover:bg-primary/80"
          >
            Order on WhatsApp
          </Link>

          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded border border-primary px-8 py-4 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            View Our Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

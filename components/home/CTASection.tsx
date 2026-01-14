import Link from 'next/link'
import { createWhatsAppLink } from '../data/whatsapp';

export default function CTASection() {
  
    const phoneNumber = '2348105338572'; 
    const defaultMessage = `Hello Favvylee Bakes & Events! I'm interested in ordering: `;
 
    const whatsappLink = createWhatsAppLink(phoneNumber, defaultMessage);
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

     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
        <Link
            href={whatsappLink}
            target='_blank'
          className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-white transition hover:bg-secondary"
        >
          Order on WhatsApp
        </Link>

        <Link
          href="/menu"
          className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-primary px-8 py-4 text-sm font-medium text-primary transition hover:bg-secondary hover:text-white"
        >
          View Our Menu
        </Link>
     </div>

      </div>
    </section>
  )
}

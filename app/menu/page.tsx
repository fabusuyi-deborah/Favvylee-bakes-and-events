import MenuHero from '../../components/menu/MenuHero';
import MenuCategory from '../../components/menu/MenuCategory';
import { menuData } from '../../components/data/MenuData';
import MenuTabs from '../../components/menu/MenuTabs';
import Link from 'next/link';
import { createWhatsAppLink } from '@/components/data/whatsapp';

export default function MenuPage() {

const phoneNumber = '2348105338572'; 
  const defaultMessage = `Hello Favvylee Bakes & Events! I'll like to order/get a quote for : `;
 
  const whatsappLink = createWhatsAppLink(phoneNumber, defaultMessage);
  
  return (
    <main className="">
      {/* Hero */}
      <MenuHero />
      <MenuTabs />

      {/* Menu Sections */}
      {menuData.map((category) => (
        <MenuCategory
          key={category.id}
          id={category.id}
          title={category.title}
          description={category.description}
          items={category.items}
        />
      ))}

      {/* Bottom CTA */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
          Ready to place an order?
        </h3>

        <p className="text-secondary/75 mb-8 max-w-xl mx-auto">
          Let us know what you need and we’ll take care of the rest.
        </p>

        <Link
            href={whatsappLink}
            target='_blank'
          className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-white transition hover:bg-secondary"
        >
          Order on WhatsApp
        </Link>
      </section>
    </main>
  );
}

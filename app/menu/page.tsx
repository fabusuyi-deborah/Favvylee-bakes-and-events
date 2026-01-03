import MenuHero from '../../components/MenuHero';
import MenuCategory from '../../components/MenuCategory';
import { menuData } from '../../components/data/MenuData';
import MenuTabs from '@/components/MenuTabs';

export default function MenuPage() {
  return (
    <main className="bg-[#FFFAF5]">
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
        <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#4A1C1C] mb-4">
          Ready to place an order?
        </h3>

        <p className="text-[#4A1C1C]/75 mb-8 max-w-xl mx-auto">
          Let us know what you need and we’ll take care of the rest.
        </p>

        <a
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          className="inline-flex items-center justify-center rounded-full bg-[#4A1C1C] px-10 py-4 text-white font-medium transition hover:bg-[#3A1515]"
        >
          Order on WhatsApp
        </a>
      </section>
    </main>
  );
}

import GalleryHero from '@/components/gallery/GalleryHero';
import GallerySection from '@/components/gallery/GallerySection';
import { galleryData } from '@/components/data/FullGalleryData';

export default function GalleryPage() {
  return (
    <main className="">
      <GalleryHero />

      {galleryData.map((section) => (
        <GallerySection
          key={section.id}
          id={section.id}
          title={section.title}
          images={section.images}
        />
      ))}

      {/* Bottom CTA */}
      <section className="py-20 px-6 text-center font-space-grotesk">
        <h3 className="text-2xl md:text-4xl font-heading font-bold text-secondary mb-4">
          Like what you see?
        </h3>

        <p className="text-secondary/75 mb-8 max-w-xl mx-auto font-inter text-sm">
          Let us create something special for your next celebration.
        </p>

        <div className='w-full max-w-md mx-auto mt-10 text-center'>
        <a
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-white font-medium hover:bg-[#3A1515] transition "
        >
          Order on WhatsApp
          </a>
          </div>
      </section>
    </main>
  );
}

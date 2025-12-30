import Image from 'next/image'
import Link from 'next/link'
import { galleryImages } from '../data/GalleryData'

export default function FeaturedGallery() {
  return (
    <section className="py-20 px-4 bg-[#FFF8F1]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading text-[#5A1F1F] mb-4">
            Featured Gallery
          </h2>
          <p className="max-w-xl mx-auto text-[#6B4E4E]">
            A glimpse of our creations and beautifully styled events.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-2 md:columns-2 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-auto rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-block rounded-full bg-[#D19C65] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#b88554]"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

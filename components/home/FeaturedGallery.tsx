import Image from 'next/image'
import Link from 'next/link'
import { galleryImages } from '../data/GalleryData'

export default function FeaturedGallery() {
  return (
    <section className="py-20 px-4 md:px-12 bg-[#FFF8F1]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[320px] sm:auto-rows-[320px] gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl 
                
                ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-block rounded-full bg-[#D4A5A5] px-8 py-3 text-sm font-medium text-[#5A1F1F] transition hover:bg-[#b88554]"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

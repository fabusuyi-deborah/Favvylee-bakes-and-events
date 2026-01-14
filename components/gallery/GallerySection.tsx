import Image from 'next/image';

type Props = {
  id: string;
  title: string;
  images: string[];
};

export default function GallerySection({ id, title, images }: Props) {
  return (
    <section id={id} className="py-16 px-6 md:px-12 font-space-grotesk">
      <div className="max-w-6xl mx-auto">
        {/* Section title */}
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-8">
          {title}
        </h2>

        {/* Image grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={index*100}
              className="overflow-hidden rounded-xl bg-white hover:shadow-lg transition-shadow"
            >
              <Image
                src={src}
                alt={title}
                width={600}
                height={600}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

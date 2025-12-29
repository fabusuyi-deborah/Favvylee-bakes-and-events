import Link from 'next/link'
import { services } from '../data/ServicesData'

export default function ServiceCategories() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading text-[#5A1F1F] mb-4">
            Our Services
          </h2>
          <p className="max-w-xl mx-auto text-[#6B4E4E]">
            Everything you need for delicious moments and unforgettable events.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group"
            >
              <div className="h-full rounded-2xl bg-[#FFFDFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#D19C65]/20">
                <div className="text-4xl mb-4 text-[#D4A5A5]"><service.icon size={32} /></div>

                <h3 className="text-xl font-heading text-[#5A1F1F] mb-2">
                  {service.title}
                </h3>

                <p className="text-[#6B4E4E] mb-4">
                  {service.description}
                </p>

                <span className="inline-block text-sm font-medium text-[#D4A5A5] group-hover:underline">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

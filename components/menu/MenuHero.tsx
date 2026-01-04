

export default function MenuHero() {
  return (
    <section className="pt-10 pb-10 px-6 md:px-12 font-space-grotesk">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-4">
          Our Menu
        </h1>

        {/* Description */}
        <p className="text-md text-secondary/75 max-w-2xl mx-auto mb-8 font-inter">
          From freshly baked treats to full catering and event services,
          everything is crafted with care for your special moments.
        </p>
        
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#4A1C1C]/5 px-4 py-2 text-xs text-[#4A1C1C]/70">
            <span className="h-2 w-2 rounded-full bg-[#4A1C1C]" />
             We usually respond within 24 hours
        </div>

      </div>
    </section>
  );
}

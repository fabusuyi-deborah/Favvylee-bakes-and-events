import Image from "next/image";

type MenuItem = {
  name: string;
  note?: string;
  image?: string;
};

type MenuCategoryProps = {
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
};

export default function MenuCategory({
  id,
  title,
  description,
  items,
}: MenuCategoryProps) {
  return (
    <section
      id={id}
      className="scroll-mt-32 py-16 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#4A1C1C] mb-2">
            {title}
          </h2>

          {description && (
            <p className="text-[#4A1C1C]/75 max-w-2xl">
              {description}
            </p>
          )}
        </div>

        {/* Items */}
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={index}
              className="rounded-xl border border-[#D4A5A5]/40 bg-white px-5 py-4"
            >

              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
              )}

              <p className="font-medium text-[#4A1C1C]">
                {item.name}
              </p>

              {item.note && (
                <p className="mt-1 text-sm text-[#4A1C1C]/60">
                  {item.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

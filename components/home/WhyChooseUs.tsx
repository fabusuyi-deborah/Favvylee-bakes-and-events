import { whyChooseUsReasons } from '../data/WhyChooseUsData'

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-[#FFFDFC]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading text-[#5A1F1F] mb-4">
            Why Choose Us
          </h2>
          <p className="max-w-xl mx-auto text-[#6B4E4E]">
            We’re committed to making every bite and every event special.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid gap-10 sm:grid-cols-2">
          {whyChooseUsReasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 items-start p-6 rounded-2xl bg-[#FFFDFC] shadow-sm"
            >
              <div className="text-3xl">{reason.icon}</div>

              <div>
                <h3 className="text-xl font-heading text-[#5A1F1F] mb-2">
                  {reason.title}
                </h3>
                <p className="text-[#6B4E4E]">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { whyChooseUsReasons } from "../data/WhyChooseUsData";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 font-space-grotesk">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading text-secondary mb-4">
            Why Choose Us
          </h2>
          <p className="max-w-xl mx-auto text-secondary/80 text-inter">
            We’re committed to making every bite and every event special.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid gap-10 sm:grid-cols-2">
          {whyChooseUsReasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 items-start p-6 rounded-2xl bg-light shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl text-primary">
                <reason.icon size={32} />
              </div>

              <div>
                <h3 className="text-xl font-heading text-secondary mb-2">
                  {reason.title}
                </h3>
                <p className="text-secondary/80 text-inter">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

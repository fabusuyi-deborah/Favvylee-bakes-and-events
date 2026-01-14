import {
  MessageCircle,
  MapPin,
  Clock
} from "lucide-react";

import { contactMethods, orderGuideItems, socialLinks } from "@/components/data/ContactUsData"

export default function ContactPage() {

  return (
    < section className="font-space-grotesk">
    {/* Hero */ }
      <section className="pt-32 pb-10 px-6 md:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-white shadow-sm">
          <MessageCircle size={16} style={{ color: '#D4A5A5' }} />
          <span className="text-sm font-semibold text-secondary">
            GET IN TOUCH
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary" >
          Contact Us
        </h1>
        <p className="text-md text-secondary/75 max-w-xl mx-auto font-inter">
          Have a question, want to place an order, or planning an event? Wed love to hear from you.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="pb-16 px-6 md:px-12">
        <div
          className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const Component = method.href ? 'a' : 'div';
            return (
              <Component
                key={index}
                href={method.href}
                {...(method.external && {
                  target: "_blank",
                  rel: "noopener noreferrer"
                })}
                data-aos="fade-up"
                data-aos-delay ={index*100}
                className="rounded-2xl border bg-white p-6 text-center transition hover:shadow-lg"
                style={{ borderColor: '#E8D4D4' }}
              >
                <Icon className="w-8 h-8 mx-auto mb-3 text-primary"  />
                <h3 className="font-bold mb-2 text-primary">
                  {method.title}
                </h3>
                <p className="text-secondary/75 text-sm font-inter">
                  {method.description}
                </p>
              </Component>
            );
          })}

          {/* Location Card */}
          <div 
            data-aos="fade-up"
            data-aos-delay ="300"
            className="rounded-2xl border bg-white p-6 text-center border-[#E8D4D4] hover:shadow-lg">
            <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h3 className="font-bold mb-2 text-primary">
              Location
            </h3>
            <p className="text-secondary/75 text-sm font-inter">
              Anambra, Nigeria
              <br />
              Delivery available across Anambra
            </p>
          </div>
        </div>
      </section>

      {/* Order Guide & Business Hours */}
      <section className="pb-16 px-6 md:px-12">
        <div
          data-aos="fade-up"
          data-aos-delay ="300"
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Order Guide */}
          <div 
            className="bg-white rounded-2xl border p-8 border-[#E8D4D4]"
          >
            <h3 className="font-bold text-xl mb-4 text-primary">
              Quick Order Guide
            </h3>
            <p className="text-secondary/75 text-sm mb-4">
              When placing an order, please include:
            </p>
            <ul className="space-y-2 font-inter">
              {orderGuideItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-secondary/75 text-sm">
                  <span className="text-primary/75">•</span>
                  <span>
                    <strong className="text-primary">{item.label}</strong> {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div 
            data-aos="fade-up"
            data-aos-delay ="300"
            className="bg-white rounded-2xl border p-8 border-[#E8D4D4]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-xl text-primary">
                Business Hours
              </h3>
            </div>
            <p className="text-secondary/75 text-lg mb-2">Monday – Saturday</p>
            <p className="font-semibold text-2xl mb-4" style={{ color: '#8B6F6F' }}>
              9:00 AM – 10:00 PM
            </p>
            <p className="text-sm text-secondary/75">
              Hours may vary on holidays or for large event orders.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="pb-4 px-6 md:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-primary">
            Follow Us
          </h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-full text-white transition hover:opacity-90 shadow-lg bg-primary" 
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Response Note */}
      <section className="pb-20 px-6 text-center">
        <div 
          className="max-w-xl mx-auto rounded-2xl p-6"
        >
          <p className="text-sm text-secondary/75">
            💬 We usually respond to messages within 24 hours
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/234XXXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
      >
        <MessageCircle size={28} />
  </a>
  
  </section>
  );
}
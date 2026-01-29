import {
  Phone,
  MessageCircle,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";

  export const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Fastest way to place an order or ask questions",
      href: "WhatsApp",
      external: true
    },
    {
      icon: Phone,
      title: "Phone Call",
      description: "Call us during business hours",
      number : "+2348105338572",
      external: false
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us detailed inquiries or event planning",
      href: "mailto:favvyleebakesandevents@gmail.com",
      external: false
    },
  ];

  export const orderGuideItems = [
    { label: "Date", detail: "of pickup/delivery" },
    { label: "Quantity", detail: "needed" },
    { label: "Delivery location", detail: "(if applicable)" }
  ];

  export const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/14d3KUTja1m/?mibextid=wwXIfr",
      label: "Follow us on Facebook"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/favvylee_hillcity?igsh=czh6emlzaWl2aWQy&utm_source=qr",
      label: "Follow us on Instagram"
  }
];
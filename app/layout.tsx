import "./globals.css";
import type { Metadata } from "next";
import AOSInit from "@/components/AOSInit";
import Navbar from "@/components/layout/Navbar";

import Footer from '@/components/layout/Footer';
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/components/data/whatsapp";

import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Favvylee Bakes & Events | Cakes, Catering & Events",
  description:
    "Custom cakes, small chops, catering and event services for all occasions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const phoneNumber = '2348105338572'; 
    const defaultMessage = `Hello Favvylee Bakes & Events! I'm interested in ordering: `;
 
    const whatsappLink = createWhatsAppLink(phoneNumber, defaultMessage);
  
    return (
      <html lang="en">
        <body
          className={`${spaceGrotesk.variable} ${inter.variable} font-inter min-h-screen flex flex-col`}
        >
          <AOSInit />
          <Navbar />
          <main>{children}</main>
          <Footer />

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
          >
            <MessageCircle size={28} />
          </a>
        </body>
      </html>
    );
};
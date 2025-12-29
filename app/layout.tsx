import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Poppins } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
// import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Delightful Bites | Cakes, Catering & Events',
  description:
    'Custom cakes, small chops, catering and event services for all occasions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} bg-[#FADADD] font-body min-h-screen flex flex-col`}
      >
        <Navbar />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500'],
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Frederick Web Co. — Local Websites for Frederick, MD Businesses',
  description:
    'Affordable, professional websites for small businesses in Frederick, Maryland. Built fast, managed monthly, no tech headaches.',
  openGraph: {
    title: 'Frederick Web Co.',
    description: 'Local websites for Frederick, MD businesses.',
    url: 'https://frederickwebco.com',
    siteName: 'Frederick Web Co.',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}

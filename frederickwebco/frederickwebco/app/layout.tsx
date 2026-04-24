import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frederick Web Co. — Local Websites for Frederick, MD Businesses',
  description: 'Affordable, professional websites for small businesses in Frederick, Maryland. Built fast, managed monthly, no tech headaches.',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

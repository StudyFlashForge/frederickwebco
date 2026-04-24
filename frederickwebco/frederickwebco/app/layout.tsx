import type { Metadata } from 'next'
import './globals.css'

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

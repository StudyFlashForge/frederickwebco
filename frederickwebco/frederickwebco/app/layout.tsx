import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frederick Web Co. — Affordable Websites for Frederick, MD Businesses',
  description: 'Frederick Web Co. builds professional websites for small businesses in Frederick, MD. Sites from $499, live in under a week, managed monthly from $75. Serving Downtown Frederick, Middletown, Urbana, Brunswick and surrounding areas.',
  keywords: 'web design Frederick MD, small business website Frederick Maryland, affordable website design Frederick, local web designer Frederick MD',
  openGraph: {
    title: 'Frederick Web Co. — Local Websites for Frederick, MD Businesses',
    description: 'Professional websites for Frederick, MD small businesses. From $499, live in under a week. Managed monthly plans from $75/mo.',
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
        <meta name="google-site-verification" content="md2LCJCTb7POG4JKBXAk3w9cvPKGORG0DRkAbAGzC5I" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Frederick Web Co." />
        <link rel="canonical" href="https://frederickwebco.com" />
      </head>
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Frederick Web Co. — Local Websites for Frederick, MD Businesses',
  description: 'Frederick Web Co. builds affordable, professional websites for small businesses in Frederick, MD. Get online in under a week. Websites from $399, managed monthly from $75.',
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
        <meta name="google-site-verification" content="md2LCJCTb7POG4JKBXAk3w9cvPKGORG0DRkAbAGzC5I" />
      </head>
      <body>{children}</body>
    </html>
  )
}

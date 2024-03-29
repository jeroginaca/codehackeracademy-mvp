import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CodeHacker Academy',
  description: 'Full Stack Developer Bootcamp',
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": 'https://res.cloudinary.com/dr3cvyonp/image/upload/v1694865028/bg-contact_rigmdj.png',
    "twitter:card": "summary_large_image",
    "og:url": "codehackeracademy.com",
    "og:image": 'https://res.cloudinary.com/dr3cvyonp/image/upload/v1694865028/bg-contact_rigmdj.png',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-dark-100'>{children}</body>
    </html>
  )
}
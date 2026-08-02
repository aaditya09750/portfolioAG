import './globals.css'
import 'lenis/dist/lenis.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SmoothScroll, Cursor } from '@/components/layout'
import { StructuredData } from '@/components/shared'
import { generatePersonSchema, generateWebSiteSchema } from '@/lib/schema'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aadityag975pf.vercel.app'),
  title: 'Aaditya Gunjal - Full Stack Developer.',
  description:
    'Personal portfolio of Aaditya Gunjal — Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
  icons: {
    icon: [{ url: '/assets/images/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/assets/images/favicon.svg',
    apple: '/assets/images/favicon.svg',
  },
  openGraph: {
    title: 'Aaditya Gunjal - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    url: 'https://aadityag975pf.vercel.app',
    siteName: 'Aaditya Gunjal Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaditya Gunjal - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <StructuredData data={generatePersonSchema()} />
        <StructuredData data={generateWebSiteSchema()} />

        {/* Favicon fallback links for strict browser caching */}
        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
        <link rel="shortcut icon" type="image/svg+xml" href="/assets/images/favicon.svg" />

        {/* Recoleta custom font */}
        <link rel="stylesheet" href="/assets/font/font.css" />

        {/* Font Awesome 6.5.1 — used for FA brand icons (GitHub, LinkedIn, WhatsApp, Instagram) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Preload hero images for LCP */}
        <link rel="preload" as="image" href="/assets/images/hero-shape-1.png" />
        <link rel="preload" as="image" href="/assets/images/hero-shape-2.png" />
      </head>
      <body id="top" suppressHydrationWarning>
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

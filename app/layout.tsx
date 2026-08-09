import './globals.css'
import 'lenis/dist/lenis.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SmoothScroll, Cursor } from '@/components/layout'
import { StructuredData } from '@/components/shared'
import {
  generatePersonSchema,
  generateWebSiteSchema,
  generateBreadcrumbSchema,
  generateProfilePageSchema,
  generateServiceSchemas,
  generateReviewSchema,
} from '@/lib/schema'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const SITE_URL = 'https://aadityag975pf.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Aaditya Gunjal',
    default: 'Aaditya Gunjal — Full Stack Developer | React, Next.js, Mumbai',
  },
  description:
    'Portfolio of Aaditya Gunjal — Full Stack Developer in Dombivli, Mumbai specializing in React, Next.js, Node.js, TypeScript, and modern web technologies.',
  keywords: [
    'Aaditya Gunjal',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript',
    'Mumbai Developer',
    'Dombivli',
    'Web Developer India',
    'Portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/assets/images/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/assets/images/favicon.svg',
    apple: '/assets/images/favicon.svg',
  },
  openGraph: {
    title: 'Aaditya Gunjal — Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    url: SITE_URL,
    siteName: 'Aaditya Gunjal Portfolio',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/assets/images/p4.jpg',
        width: 600,
        height: 600,
        alt: 'Aaditya Gunjal — Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaditya Gunjal — Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    images: ['/assets/images/p4.jpg'],
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
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
    other: {
      'msvalidate.01': ['YOUR_BING_WEBMASTER_VERIFICATION_CODE'],
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
        <StructuredData data={generateProfilePageSchema()} />
        <StructuredData data={generateReviewSchema()} />
        <StructuredData data={generateBreadcrumbSchema([{ name: 'Home', url: SITE_URL }])} />
        {generateServiceSchemas().map((schema, i) => (
          <StructuredData key={`service-${i}`} data={schema} />
        ))}

        {/* Favicon fallback links for strict browser caching */}
        <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg" />
        <link rel="shortcut icon" type="image/svg+xml" href="/assets/images/favicon.svg" />

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

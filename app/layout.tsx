import './globals.css'
import 'lenis/dist/lenis.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { SmoothScroll } from '@/components/layout'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aaditya Gunjal - Full Stack Developer.',
  description: 'This is a personal portfolio made by Aaditya Gunjal',
  icons: {
    icon: { url: '/assets/images/favicon.svg', type: 'image/svg+xml' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <head>
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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}

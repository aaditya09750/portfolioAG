import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Aaditya Gunjal - Full Stack Developer.',
  description: 'This is a personal portfolio made by Aaditya Gunjal',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/assets/images/favicon.svg" type="image/svg+xml" />

        {/* Google Fonts — Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome 6.5.1 — used for FA brand icons (GitHub, LinkedIn, WhatsApp, Instagram) */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />

        {/* Preload hero images for LCP */}
        <link rel="preload" as="image" href="/assets/images/hero-shape-1.png" />
        <link rel="preload" as="image" href="/assets/images/hero-shape-2.png" />
      </head>
      <body id="top">
        {children}
      </body>
    </html>
  )
}

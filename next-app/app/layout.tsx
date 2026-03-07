import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Aaditya Gunjal - Full Stack Developer',
  description: "Personal portfolio of Aaditya Gunjal",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

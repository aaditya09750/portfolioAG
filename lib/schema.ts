const SITE_URL = 'https://aadityag975pf.vercel.app'

/**
 * Generates a JSON-LD Person schema for the developer.
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aaditya Gunjal',
    url: SITE_URL,
    jobTitle: 'Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    sameAs: [
      'https://github.com/aaditya09750',
      'https://www.linkedin.com/in/aaditya09750/',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',
      'NestJS',
      'MongoDB',
      'MySQL',
      'Docker',
      'Three.js',
    ],
  }
}

/**
 * Generates a JSON-LD WebSite schema for the portfolio.
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aaditya Gunjal - Full Stack Developer',
    url: SITE_URL,
    description: 'Personal portfolio of Aaditya Gunjal, Full Stack Developer.',
    author: {
      '@type': 'Person',
      name: 'Aaditya Gunjal',
    },
  }
}

/**
 * Generates a JSON-LD BreadcrumbList schema.
 */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

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
    image: `${SITE_URL}/assets/images/p4.jpg`,
    jobTitle: 'Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    sameAs: [
      'https://github.com/aaditya09750',
      'https://www.linkedin.com/in/aaditya9750/',
      'https://wa.me/qr/5S6RP74BVGGDH1',
      'https://www.instagram.com/_aadiii0975_____',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '401 Jayram Sadan, Sunil Nagar, DNC rd',
      addressLocality: 'Dombivli',
      addressRegion: 'Maharashtra',
      postalCode: '421201',
      addressCountry: 'IN',
    },
    email: 'aadigunjal0975@gmail.com',
    telephone: '+91 84335 09521',
    knowsAbout: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Node.js',
      'Express',
      'NestJS',
      'Python',
      'Java',
      'C',
      'Git',
      'MongoDB',
      'MySQL',
      'Docker',
      'Figma',
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
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
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

/**
 * Generates a JSON-LD ProfilePage schema wrapping the Person entity.
 */
export function generateProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: 'Aaditya Gunjal — Full Stack Developer Portfolio',
    url: SITE_URL,
    mainEntity: {
      '@type': 'Person',
      name: 'Aaditya Gunjal',
      url: SITE_URL,
      jobTitle: 'Full Stack Developer',
      image: `${SITE_URL}/assets/images/p4.jpg`,
    },
    description:
      'Personal portfolio of Aaditya Gunjal, a Full Stack Developer based in Dombivli, Mumbai, Maharashtra.',
  }
}

/**
 * Generates JSON-LD Service schemas for offered services.
 * Service names sourced directly from data/constants.tsx.
 */
export function generateServiceSchemas() {
  const serviceEntries = [
    { name: 'Full Stack Development', icon: '1' },
    { name: 'Project Management', icon: '2' },
    { name: 'Graphic Designing', icon: '3' },
    { name: 'Database Management', icon: '4' },
  ]

  return serviceEntries.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    provider: {
      '@type': 'Person',
      name: 'Aaditya Gunjal',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    url: `${SITE_URL}/#service`,
  }))
}

/**
 * Generates a JSON-LD Review schema from the existing testimonial data.
 * Uses the single real testimonial from data/constants.tsx only.
 */
export function generateReviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: 'Yash Santosh Hule',
      jobTitle: 'Founder of BM25',
    },
    reviewBody:
      'I had the pleasure of working with Aaditya on a recent project, as a full stack developer truly impressed me. They delivered clean, efficient code and seamlessly integrated both frontend and backend components. Their attention to detail, and commitment to meeting deadlines made the entire process smooth and stress-free. I highly recommend Aaditya for any web development needs!',
    itemReviewed: {
      '@type': 'Person',
      name: 'Aaditya Gunjal',
      url: SITE_URL,
    },
  }
}

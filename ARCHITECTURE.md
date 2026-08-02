# Architecture — portfolioAG

> Technical system design and architectural specifications for the portfolioAG personal portfolio.

## Technology Stack

| Layer           | Technology                                | Version |
| --------------- | ----------------------------------------- | ------- |
| Framework       | Next.js (App Router)                      | 16.2.12 |
| UI Runtime      | React                                     | 19.2.8  |
| Language        | TypeScript                                | 6.0.3   |
| Styling         | Tailwind CSS 4 + Legacy CSS Design System | 4.3.3   |
| Animation       | GSAP                                      | 3.14.2  |
| 3D Engine       | Three.js                                  | 0.183.2 |
| Smooth Scroll   | Lenis                                     | 1.3.25  |
| Package Manager | pnpm                                      | 9.15.9  |

## Architecture Pattern: Server-First RSC

The application uses a **Server-Shell + Client-Behavior** split pattern:

- **Server Components** render static HTML markup (Header, Footer, HeroSection, ServiceSection, etc.)
- **Client Components** attach interactivity via `useEffect` and return `null` (HeaderBehavior, CursorBehavior, PreloaderBehavior)

This maximizes initial HTML payload size, minimizes client JavaScript bundle, and eliminates layout shift.

## Component Architecture

```
app/layout.tsx          → Root layout (fonts, metadata, Lenis, Analytics)
app/page.tsx            → Home page composing all sections
│
├── components/layout/  → Site chrome (Header, Footer, Cursor, Preloader, SmoothScroll)
├── components/sections/ → Content sections (Hero, Services, About, CTA, Testimonial, Contact)
├── components/ui/      → Interactive primitives (Globe, Tabs, Typewriter)
└── components/shared/  → Reusable utilities (StructuredData)
```

## Data Architecture

All content is statically defined in `data/constants.tsx` — zero API calls, zero database queries. The site is fully pre-renderable at build time.

## Security

Production security headers are configured in `next.config.mjs`:

- HSTS with 2-year max-age and preload
- Content type sniffing prevention
- Clickjacking protection (SAMEORIGIN)
- Strict referrer policy
- Camera/microphone/geolocation permissions denied

## SEO

- Dynamic `robots.txt` and `sitemap.xml` generation
- JSON-LD structured data (Person, WebSite schemas)
- OpenGraph and Twitter Card metadata
- Semantic HTML with proper heading hierarchy

## Deployment

The application is deployed to both:

- **Vercel** (primary): Auto-deploys from `main` branch with Analytics + Speed Insights
- **Netlify** (secondary): Configured via `netlify.toml` with `@netlify/plugin-nextjs`

For detailed file-level documentation, see [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).

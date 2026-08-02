## CONTEXT.md — PortfolioAG Technical Context & Architecture

> **Repository Name:** `portfolioAG`  
> **Author & Full Stack Developer:** Aaditya Gunjal  
> **Framework:** Next.js 16.2.12 (App Router — Server Components by Default)  
> **UI Runtime:** React 19.2.8  
> **Language:** TypeScript 6.0.3 (`strict: true`)  
> **Styling Engine:** Tailwind CSS 4.3.3 (`@tailwindcss/postcss` v4 engine) + HSL Design Tokens  
> **Animation & 3D Engine:** Three.js 0.183.2 + GSAP 3.14.2 + Custom GLSL Shaders  
> **Smooth Scroll Engine:** Lenis 1.3.25  
> **Package Manager:** pnpm 9.15.9

---

## 1. Executive Summary

**PortfolioAG** is a production-grade, high-performance personal portfolio web application engineered for Aaditya Gunjal, a Full Stack Developer based in Dombivli / Mumbai, Maharashtra. Rebuilt on Next.js 16 App Router, React 19, TypeScript 6, and Tailwind CSS v4, the project operates as a **statically-driven, content-first web platform**.

### Core Architecture & Business Goals:

- **Zero Server Overhead**: The site features no server-side API routes, no backend database, and no user authentication. All content is pre-rendered at build time for instant worldwide delivery.
- **Cinematic Visual Excellence & 3D WebGL Integration**: Integrates a real-time 3D WebGL Interactive Globe with custom vertex/fragment GLSL shaders, double-buffered hero parallax, custom dual-layer cursor, and smooth inertia scrolling.
- **Sub-Second LCP Performance Target**: Sub-second Largest Contentful Paint (LCP) enabled via AVIF/WebP image formats, 1-year immutable asset caching, pre-loaded WOFF2 Recoleta typography, and deduplicated viewport intersection observers.
- **Search Engine Dominance**: End-to-end JSON-LD structured data integration (`Person`, `WebSite`, `BreadcrumbList`) covering primary technical skillsets, projects, and geographic location.

---

## 2. Complete Workspace Directory Structure (100% Explicit — Zero Omissions)

```
portfolioAG/
├── .editorconfig                       # Formatting rules: 2 spaces, UTF-8, trim trailing whitespace
├── .env.example                        # Documentation template for environment variables (MAINTENANCE_MODE)
├── .env.local                          # Local environment variable overrides (gitignored)
├── .git/                               # Git repository metadata directory
├── .gitattributes                      # Git LFS & line ending normalization rules
├── .github/                            # GitHub CI/CD workflows and repository templates
│   └── workflows/
│       └── ci.yml                      # Automated GitHub Actions workflow (typecheck, lint, build)
├── .gitignore                          # Excludes node_modules, .next, .env.local, build caches
├── .husky/                             # Git pre-commit hook triggers (Husky v9)
│   └── pre-commit                     # Pre-commit script executing lint-staged
├── .next/                              # Next.js build output, static chunks, and cache (gitignored)
├── .nvmrc                              # Explicit Node.js version requirement (.nvmrc: 22)
├── .prettierignore                     # File exclusions for Prettier code formatter
├── .prettierrc.json                    # Prettier formatting standards (no tabs, 2 spaces, singleQuote, semi: false)
├── ARCHITECTURE.md                     # Technical system design and architectural specifications
├── CHANGELOG.md                        # Version release notes and project iteration history
├── CODE_OF_CONDUCT.md                  # Contributor code of conduct standards
├── CONTRIBUTING.md                     # Developer contribution guidelines and pull request instructions
├── LICENSE                             # MIT Open Source License agreement
├── PROJECT_CONTEXT.md                  # Comprehensive technical context documentation
├── README.md                           # Primary project summary, setup commands, and features guide
├── SECURITY.md                         # Security policy, vulnerability disclosures, and headers summary
├── commitlint.config.cjs               # Conventional commits message format configuration
├── eslint.config.js                    # ESLint flat config (TypeScript, React 19, Hooks, JSX A11y, Prettier)
├── lint-staged.config.cjs              # Pre-commit task execution pipeline configuration
├── netlify.toml                        # Netlify build & deployment configuration (@netlify/plugin-nextjs)
├── next-env.d.ts                       # Next.js auto-generated TypeScript type declarations
├── next.config.mjs                     # Next.js configuration (AVIF/WebP, security headers, 1-year cache)
├── package.json                        # Dependency manifest, scripts, and package version locks
├── pnpm-lock.yaml                      # Committed pnpm lockfile for reproducible installations
├── postcss.config.mjs                  # PostCSS plugins configuration (@tailwindcss/postcss, autoprefixer)
├── proxy.ts                            # Sitewide maintenance mode rewrite middleware proxy handler
├── tailwind.config.js                  # Tailwind CSS theme extension & design tokens
├── tsconfig.json                       # TypeScript compiler options (strict: true, @/* path alias)
│
├── app/                                # Next.js 16 App Router application root
│   ├── globals.css                     # Global CSS entry (Tailwind v4 & styles/legacy.css)
│   ├── icon.svg                        # Site SVG favicon (High-contrast white AG circle logo)
│   ├── layout.tsx                      # Root layout (Poppins font, metadata, Lenis, JSON-LD, Analytics)
│   ├── not-found.tsx                   # Custom 404 error page (renders <NotFoundUI />)
│   ├── page.tsx                        # Main portfolio landing page composing all sections
│   ├── robots.ts                       # Dynamic robots.txt generation script
│   ├── sitemap.ts                      # Dynamic XML sitemap generator
│   │
│   └── maintenance/                    # Maintenance mode fallback route directory
│       └── page.tsx                    # Serves maintenance page content wrapper (<MaintenanceUI />)
│
├── components/                         # Modular React Component Library
│   ├── layout/                         # Chrome & site-wide structural layout components
│   │   ├── Cursor/                     # Dual-layer interactive custom cursor
│   │   │   ├── Cursor.tsx              # Server Component: dot + outline span markup
│   │   │   ├── CursorBehavior.tsx      # Client Component: mouse tracking & hover effects
│   │   │   └── index.ts
│   │   ├── Header/                     # Navigation header & mobile menu overlay
│   │   │   ├── Header.tsx              # Server Component: static navigation markup
│   │   │   ├── HeaderBehavior.tsx      # Client Component: nav toggle & scroll listeners
│   │   │   └── index.ts
│   │   ├── Preloader/                  # Opening curtain split animation
│   │   │   ├── Preloader.tsx           # Server Component: curtain line markup
│   │   │   ├── PreloaderBehavior.tsx   # Client Component: DOMContentLoaded listener
│   │   │   └── index.ts
│   │   ├── Footer.tsx                  # Footer with copyright and back-to-top button
│   │   ├── HeroParallax.tsx            # Client Component: multi-layer hero background parallax
│   │   ├── MaintenanceUI.tsx           # Sitewide maintenance mode page UI
│   │   ├── NotFoundUI.tsx              # Custom 404 not found page UI
│   │   ├── SmoothScroll.tsx            # Client Component: Lenis scroll provider wrapper
│   │   ├── Tilt.tsx                    # Client Component: attaches 3D tilt to [data-tilt] elements
│   │   └── index.ts                    # Layout components barrel export
│   │
│   ├── sections/                       # Portfolio content sections
│   │   ├── about/                      # Tabbed About Me, Skills, and Achievements section
│   │   │   ├── AboutMeTab.tsx          # About Me overview text + social links + 3D Globe
│   │   │   ├── AboutSection.tsx        # Section container wrapping <Tabs />
│   │   │   ├── AchievementsTab.tsx     # Credentials & certificate card grid
│   │   │   ├── SkillsTab.tsx           # Staggered tech stack grid (react-icons + IntersectionObserver)
│   │   │   └── index.ts
│   │   ├── contact/                    # Contact section with form, map, and info list
│   │   │   ├── ContactForm.tsx         # Web3Forms API contact form with email hydration guard
│   │   │   ├── ContactList.tsx         # Contact details list (Phone, Address, Email)
│   │   │   ├── ContactMap.tsx          # Responsive embedded Google Maps iframe
│   │   │   ├── ContactSection.tsx      # Contact section container
│   │   │   └── index.ts
│   │   ├── CTASection.tsx              # "Work With Me" Call-To-Action banner
│   │   ├── HeroSection.tsx             # Hero landing banner with profile portrait & Typewriter
│   │   ├── ServiceSection.tsx          # Interactive services showcase grid (4 services)
│   │   ├── TestimonialSection.tsx      # Client testimonial quote & founder endorsement
│   │   └── index.ts                    # Sections barrel export
│   │
│   ├── shared/                         # Reusable shared components
│   │   ├── structured-data.tsx         # Injects JSON-LD schema script tags into document head
│   │   └── index.ts                    # Shared components barrel export
│   │
│   └── ui/                             # Reusable interactive primitives
│       ├── Globe.tsx                   # Client Component: Three.js 3D WebGL Globe with GLSL shaders
│       ├── Tabs.tsx                    # Client Component: tabbed interface state container
│       ├── Typewriter.tsx              # Client Component: character-by-character typewriter loop
│       └── index.ts                    # UI primitives barrel export
│
├── data/                               # Typed static content layer (Central Content Engine)
│   └── constants.tsx                   # Tech skills, services, certs, testimonial, contact info
│
├── hooks/                              # Custom React Hooks
│   └── useLenis.ts                     # Custom hook: Lenis initialization + RAF animation loop
│
├── lib/                                # Pure utilities & schema generators
│   ├── schema.ts                       # Pure functions generating JSON-LD schemas
│   └── utils.ts                        # Tailwind class merge utility helper (`cn()`)
│
├── public/                             # Public static assets served at site root
│   ├── cv.pdf                          # Downloadable resume PDF
│   ├── favicon.svg                     # High-contrast AG logo SVG favicon
│   └── assets/
│       ├── font/                       # Custom Typography assets
│       │   ├── font.css                # @font-face declarations for Recoleta font (case-corrected)
│       │   └── recoleta/               # WOFF2 font files
│       │       ├── recoleta-medium.woff2
│       │       └── recoleta-regular.woff2
│       └── images/                     # Graphic assets & site imagery
│           ├── aglogo.png              # Primary AG circular brand logo
│           ├── certificate01.png       # Achievement credential 1
│           ├── certificate02.png       # Achievement credential 2
│           ├── certificate03.png       # Achievement credential 3
│           ├── client1.png             # Testimonial client avatar (Yash Santosh Hule)
│           ├── contact-icon-1.png      # Contact phone icon
│           ├── contact-icon-2.png      # Contact address icon
│           ├── contact-icon-3.png      # Contact email icon
│           ├── favicon.svg             # Favicon SVG asset
│           ├── hero-shape-1.png        # Hero background decorative shape 1
│           ├── hero-shape-2.png        # Hero background decorative shape 2
│           ├── p4.jpg                  # Developer profile portrait photo
│           ├── service-icon-1.svg      # Service icon: Full Stack Development
│           ├── service-icon-2.svg      # Service icon: Project Management
│           ├── service-icon-3.svg      # Service icon: Graphic Designing
│           ├── service-icon-4.svg      # Service icon: Database Management
│           ├── skillset1.png           # Skillset visual graphic asset
│           └── world_alpha_mini.jpg    # Latitude/longitude dot map texture for 3D Globe
│
├── styles/                             # Stylesheets
│   └── legacy.css                      # Design system variables, layout, components, & responsive styles
│
└── types/                              # Shared TypeScript interfaces & types
    └── global.d.ts                     # Ambient module declarations for CSS, images, and Three.js
```

---

## 3. Complete Technology & Dependency Matrix (Every Single Package Listed)

### Production Dependencies (`dependencies` in `package.json`):

1. **`next` (`16.2.12`)**: Next.js App Router framework providing static site generation (SSG), pre-rendering, and layout streaming.
2. **`react` (`19.2.8`)**: Core UI rendering engine supporting React Server Components (RSC).
3. **`react-dom` (`19.2.8`)**: DOM rendering bindings for React 19.
4. **`three` (`0.183.2`)**: WebGL 3D graphics engine rendering the interactive 3D Globe.
5. **`gsap` (`3.14.2`)**: Animation platform driving 3D camera transitions and timeline animations.
6. **`lenis` (`1.3.25`)**: Lightweight smooth inertia scroll library integrated into `SmoothScroll` provider.
7. **`react-icons` (`5.6.0`)**: Comprehensive brand icon set (`SiReact`, `SiNextdotjs`, `SiTypescript`, `SiNestjs`, `SiNodedotjs`, `SiDocker`, `SiMongodb`, `SiMysql`, `FaJava`, etc.).
8. **`lucide-react` (`1.28.0`)**: Tree-shakeable SVG icon library.
9. **`class-variance-authority` (`^0.7.1`)**: Utility for creating type-safe component variants.
10. **`clsx` (`^2.1.1`)**: Utility for constructing conditional className strings.
11. **`tailwind-merge` (`3.6.0`)**: Utility for merging Tailwind CSS classes without style conflicts.
12. **`@vercel/analytics` (`2.0.1`)**: Real User Monitoring (RUM) analytics auto-injected in root layout.
13. **`@vercel/speed-insights` (`2.0.0`)**: Real-time Core Web Vitals monitoring auto-injected in root layout.

### Development Dependencies (`devDependencies` in `package.json`):

1. **`typescript` (`6.0.3`)**: Strict type-checker enforcing type safety across the entire codebase.
2. **`@types/node` (`26.1.2`)**: TypeScript type definitions for Node.js runtime environment.
3. **`@types/react` (`19.2.17`)**: TypeScript type definitions for React 19.
4. **`@types/react-dom` (`19.2.3`)**: TypeScript type definitions for React DOM.
5. **`tailwindcss` (`4.3.3`)**: Engine for Tailwind CSS v4.
6. **`@tailwindcss/postcss` (`4.3.3`)**: PostCSS plugin for Tailwind CSS v4 integration.
7. **`tw-animate-css` (`1.4.0`)**: Animation utilities for Tailwind CSS.
8. **`postcss` (`8.5.25`)**: CSS transformation tool.
9. **`autoprefixer` (`10.4.14`)**: CSS vendor prefixing tool.
10. **`eslint` (`9.39.5`)**: JavaScript and TypeScript linting engine.
11. **`eslint-config-next` (`16.1.6`)**: Next.js core web vitals ESLint rules.
12. **`eslint-config-prettier` (`10.1.8`)**: Disables ESLint rules that conflict with Prettier.
13. **`eslint-plugin-import-x` (`4.17.1`)**: Validates import syntax and path aliases.
14. **`eslint-plugin-jsx-a11y` (`^6.10.2`)**: Enforces accessibility standards on JSX elements.
15. **`eslint-plugin-react` (`^7.37.4`)**: React-specific linting rules.
16. **`eslint-plugin-react-hooks` (`7.1.1`)**: Enforces Rules of Hooks.
17. **`typescript-eslint` (`^8.24.0`)**: TypeScript plugin for ESLint flat config.
18. **`globals` (`17.8.0`)**: Global variable definitions for ESLint.
19. **`prettier` (`3.9.6`)**: Code formatter.
20. **`husky` (`^9.1.7`)**: Git hooks manager enforcing linting and commit standards.
21. **`lint-staged` (`17.2.0`)**: Runs linters against staged git files.
22. **`@commitlint/cli` (`21.2.1`)**: CLI tool for checking conventional commit messages.
23. **`@commitlint/config-conventional` (`21.2.0`)**: Conventional commit rules preset.

---

## 4. Complete Configuration Specifications

### A. Next.js Configuration ([next.config.mjs](next.config.mjs))

- **Image Optimization**:
  - Formats: `["image/avif", "image/webp"]`
  - Device Sizes: `[640, 750, 828, 1080, 1200, 1920, 2048]`
  - Image Sizes: `[16, 32, 48, 64, 96, 128, 256, 384]`
  - Minimum Cache TTL: `31536000` seconds (1 year)
- **Security Headers (Globally Applied to `/(.*)`)**:
  - `Strict-Transport-Security`: `max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options`: `nosniff`
  - `X-Frame-Options`: `SAMEORIGIN`
  - `Referrer-Policy`: `strict-origin-when-cross-origin`
  - `Permissions-Policy`: `camera=(), microphone=(), geolocation=()`
- **Asset Caching Headers**:
  - `/assets/images/:path*`, `/assets/font/:path*`: `Cache-Control: public, max-age=31536000, immutable`

### B. TypeScript Configuration ([tsconfig.json](tsconfig.json))

- **Target**: `ES6`
- **Module Resolution**: `bundler`
- **Strict Mode**: `strict: true`
- **Path Alias**: `@/*` mapped to project root (`./*`)
- **No Emit**: `noEmit: true` (Next.js handles compilation)

### C. ESLint Configuration ([eslint.config.js](eslint.config.js))

- Uses ESLint 9 Flat Config format.
- Ignored Paths: `node_modules/**`, `.next/**`, `coverage/**`, `tsconfig.tsbuildinfo`.
- Rules: Enforces `react-hooks/rules-of-hooks: error`, `react-hooks/exhaustive-deps: warn`, JSX accessibility rules, and turns off unnecessary React-in-JSX requirements for React 19.

### D. Deployment Configurations

- **Vercel**: Deployment configuration automatically detects Next.js 16 App Router, serving static pre-rendered routes with edge analytics.
- **Netlify ([netlify.toml](netlify.toml))**:
  ```toml
  [build]
    command = "pnpm run build"
    publish = ".next"

  [[plugins]]
    package = "@netlify/plugin-nextjs"
  ```

### E. Maintenance Mode Middleware Proxy ([proxy.ts](proxy.ts))

- Controls sitewide maintenance fallback behavior via `process.env.MAINTENANCE_MODE === "true"`.
- Performs URL rewrites to `/maintenance` with `Retry-After: 3600` and `Cache-Control: no-store, must-revalidate`.
- Exempts static assets (`.png`, `.jpg`, `.svg`, `.webp`, `.mp4`, `.woff2`), `/_next/`, `/api/*`, `robots.txt`, and `sitemap.xml`.

---

## 5. Design System & Styling Infrastructure

### A. Typography Specifications

- **Recoleta** (Editorial Serif Display Font):
  Loaded locally in [`public/assets/font/font.css`](public/assets/font/font.css) via `@font-face` across 2 case-corrected WOFF2 variants (Linux production server compatible):
  1. Regular (`400`, Normal) — `/assets/font/recoleta/recoleta-regular.woff2`
  2. Medium (`500`, Normal) — `/assets/font/recoleta/recoleta-medium.woff2`
     CSS Variable: `--fontFamily-recoleta: "Recoleta", serif;`.
- **Poppins** (Modern Sans-Serif Body Font):
  Loaded via `next/font/google` in `app/layout.tsx` across weights `300`, `400`, `500`, `600`, `700`.
  CSS Variable: `--fontFamily-poppins: "Poppins", sans-serif;`.

### B. HSL Color Token System ([styles/legacy.css](styles/legacy.css))

#### Color Tokens (`:root`):

- `--bg-black`: `hsla(0, 0%, 0%, 1)` (Primary background)
- `--bg-smoky-black`: `hsla(0, 0%, 6%, 1)` (Secondary dark background)
- `--bg-eerie-black`: `hsla(0, 0%, 13%, 1)` (Card surfaces & tile borders)
- `--bg-jet`: `hsla(0, 0%, 18%, 1)` (Elevated surfaces)
- `--bg-rich-black-fogra-29`: `hsla(229, 23%, 9%, 1)`
- `--text-white`: `hsla(0, 0%, 100%, 1)` (Primary text)
- `--text-light-gray`: `hsla(240, 1%, 83%, 1)` (Muted text)

---

## 6. Complete Data & Content Engine Manifest ([data/constants.tsx](data/constants.tsx))

### A. Technical Skills Categories (`techSkills`):

1. **Frontend**: React, Next.js, JavaScript, TypeScript, HTML, CSS.
2. **Backend**: Node.js, Express, NestJS, Python, Java, C.
3. **Tools & Database**: Git, MongoDB, MySQL, Docker, Figma.

### B. Achievements & Certifications (`certs`):

- 3 high-resolution certificate imagery items (`certificate01.png`, `certificate02.png`, `certificate03.png`).

### C. Services Offered (`services`):

1. `FULL STACK DEVELOPMENT`
2. `PROJECT MANAGEMENT`
3. `GRAPHIC DESIGNING`
4. `DATABASE MANAGEMENT`

### D. Client Endorsement (`testimonial`):

- Quote from Yash Santosh Hule (Founder of BM25) endorsing full stack development deliverables.

### E. Single Source of Truth Contact Details (`contactItems`):

- **Phone**: `+91 84335 09521`
- **Address**: `401 Jayram Sadan, Sunil Nagar, DNC rd, Dombivali East 421201.`
- **Emails**: `aadigunjal0975@gmail.com`, `aadityagunjal0975@gmail.com`

---

## 7. Shared Type Definitions

```typescript
// data/constants.tsx
export interface SkillCategory {
  category: string
  items: { label: string; iconKey: string }[]
}

// types/global.d.ts
declare module '*.css'
declare module '*.scss'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg'

declare module 'three'
declare module 'three/examples/jsm/controls/OrbitControls'
```

---

## 8. Key Engineering Modules & Architectural Patterns

### 1. Interactive 3D WebGL Globe (`components/ui/Globe.tsx`)

- **Engine**: Three.js + GSAP OrbitControls.
- **Rendering**: InstancedMesh rendering thousands of individual dots sampled from `world_alpha_mini.jpg`.
- **GLSL Shaders**: Custom vertex & fragment shaders handling Fresnel rim lighting, color blending, and mouse-interaction extrusion effects.

### 2. Server-Shell + Client-Behavior Split Pattern

- **Header**: Static markup rendered by `Header.tsx` (Server), scroll/toggle events handled by `HeaderBehavior.tsx` (Client).
- **Preloader**: Curtain markup rendered by `Preloader.tsx` (Server), split animation triggered by `PreloaderBehavior.tsx` (Client).
- **Cursor**: Custom dual-layer spans rendered by `Cursor.tsx` (Server), mouse tracking handled by `CursorBehavior.tsx` (Client).

### 3. Lenis Smooth Inertia Scroll (`hooks/useLenis.ts`)

- Hardware-accelerated smooth scrolling using Lenis with RAF animation loop.
- Automatically respects `prefers-reduced-motion: reduce`.

### 4. Categorized Tech Stack Showcase (`components/sections/about/SkillsTab.tsx`)

- Maps skills data to brand icons (`react-icons/si` & `react-icons/fa`).
- Uses `IntersectionObserver` to trigger a staggered entrance reveal animation (65ms delay per tile).

### 5. Interactive Typewriter (`components/ui/Typewriter.tsx`)

- Character-by-character text typing loop.
- React StrictMode safe with timeout cleanup arrays and `cancelled` ref guards to prevent race conditions.

### 6. Automated JSON-LD Schema Infrastructure (`lib/schema.ts` & `components/shared/structured-data.tsx`)

- Injects structured schema payloads for `Person`, `WebSite`, and `BreadcrumbList` directly into the document head.

---

## 9. Developer Execution Commands

```bash
# 1. Install dependencies via pnpm (Lockfile: pnpm-lock.yaml)
pnpm install --no-frozen-lockfile

# 2. Start development server with Turbopack compilation
pnpm dev:turbo

# 3. Start standard development server
pnpm dev

# 4. Perform production build compilation
pnpm build

# 5. Serve local production build preview
pnpm start

# 6. Execute ESLint code checks
pnpm lint

# 7. Execute strict TypeScript type verification without emitting files
pnpm typecheck

# 8. Format all workspace code via Prettier
pnpm format

# 9. Comprehensive pre-commit verification pipeline
pnpm check
```

---

## 10. Security & Performance Contract

1. **Security Headers**: Standardized in `next.config.mjs` including HSTS (`max-age=63072000`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and strict `Permissions-Policy`.
2. **Asset Optimization**: AVIF and WebP auto-negotiation via Next.js Image Optimization with 1-year immutable caching on static routes.
3. **Accessibility Standard**: Enforces full keyboard navigation, screen-reader ARIA landmarks, and animation deactivation under `prefers-reduced-motion: reduce`.

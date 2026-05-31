### AG - RESPONSIVE E-PORTFOLIO (Next.js)

![Profile Views](https://komarev.com/ghpvc/?username=aaditya09750&style=for-the-badge&color=0e75b6&label=Profile+Views)

![Next.js](https://img.shields.io/badge/Next.js-16.2.4-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.5-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.183.2-000000?style=for-the-badge&logo=three.dot.js&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Design-00D4FF?style=for-the-badge&logo=css3&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-6.x-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

A modern, elegant, and fully responsive personal portfolio website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. Features advanced 3D graphics, interactive animations, and a stunning dark theme design — migrated from the original static HTML/CSS/JS portfolio into a modern component-driven architecture.

**Developer:** Aaditya Gunjal - Full Stack Developer

## Core Features

**Hero Section with Typewriter Effect** - Eye-catching landing area with an animated typewriter effect built as a React component, cycling through personalized introduction text with proper cleanup and StrictMode safety.

**Cinematic Parallax Hero** - Multi-layer parallax motion in the hero area driven by `HeroParallax`, creating depth as the user scrolls while keeping text and CTA elements crisp and readable.

**Interactive Tilt Effect** - Smooth 3D perspective tilt animations on images that respond to mouse movements, implemented as a reusable React component with `data-tilt` attribute support.

**Interactive 3D Globe** - A high-performance, custom-shaded 3D globe built with Three.js and GSAP. Features instanced mesh rendering for 60fps performance, shader materials (vertex & fragment), orbit controls with auto-rotation, mouse interaction with on-hover extrusion, and responsive camera positioning.

**Custom Cursor System** - Dual-layer custom cursor with dot and outline elements that transform on hover states, desktop-only with proper event listener management in React.

**Tabbed Content Interface** - Dynamic content switching system built with React state management and smooth fade animations for About Me, Skillsets, and Achievements sections.

**Professional Services Showcase** - Animated service cards with hover effects revealing service titles through elegant opacity transitions, rendered from centralized data constants.

**Tech Stack Showcase** - A premium, categorized skills section featuring real technology logos (React, Next.js, TypeScript, Node.js, Python, MongoDB, Docker, and more) rendered via `react-icons`. Tiles use a glass-gradient surface with sharp edges, circular icon rings, and a scroll-triggered staggered entrance powered by `IntersectionObserver`. Hover reveals an inner-ring glow without scale or displacement, keeping motion subtle and purposeful.

**Lenis Smooth Scrolling** - App-wide buttery-smooth scrolling via `lenis`, wired through a modular `useLenis` custom hook and a `SmoothScroll` client provider mounted in the root layout. Handles the RAF loop, respects `prefers-reduced-motion`, and coexists cleanly with GSAP, the scroll-triggered skills animation, and the sticky header.

**Server-First Architecture** - Every content section and most page chrome renders as a React Server Component — ~17 Server Components vs. ~9 Client Components. Header, Preloader, and Cursor use a **Server-shell + Client-behavior** split: static markup ships in the initial server HTML, while the event-wiring `*Behavior.tsx` siblings render `null` and exist only to attach listeners imperatively. Result: smaller hydration surface, more HTML in the first byte, and a cleaner Server/Client boundary.

**Contact Form Integration** - Fully functional contact form powered by Web3Forms API with real-time submission capabilities, built as a React component. The email input carries `suppressHydrationWarning` to tolerate DOM attribute injection from disposable-email browser extensions (e.g. Temp Mail) that run before React hydrates.

**Embedded Google Maps** - Interactive location display with grayscale styling to maintain design consistency.

**Smooth Scroll Navigation** - Seamless page navigation with scroll-based header transformations and sticky positioning via a responsive Header component.

**Split-Curtain Preloader** - Elegant loading animation with a white curtain split effect and fade-in transition.

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.4 | App Router framework with SSR/SSG, file-based routing |
| React | 19.2.5 | Component-driven UI with hooks and StrictMode |
| TypeScript | 5.4.0 | Static typing with strict mode for type-safe development |
| Tailwind CSS | 4.0.0 | Utility-first CSS framework with custom theme extensions |
| Three.js | 0.183.2 | Core engine for the interactive 3D globe with shader materials |
| GSAP | 3.14.2 | High-performance animations for globe interactions |
| Lenis | Latest | Hardware-accelerated smooth scrolling with RAF loop |
| react-icons | Latest | Tech stack logos for the Skillsets showcase (Simple Icons + Font Awesome sets) |
| Google Fonts | Poppins | Modern sans-serif typography for optimal readability |
| Recoleta Font | Custom (WOFF2) | Elegant serif display font for headings and titles |
| Font Awesome | 6.x (CDN) | Comprehensive icon library for UI elements |
| Web3Forms | API | Serverless contact form submission handling |
| ESLint | 9.39.4 | Code linting with Next.js configuration |
| Prettier | 3.0.0 | Consistent code formatting |
| PostCSS | 8.4.20 | CSS processing with Autoprefixer |
| pnpm | 9.15.9 | Package manager pinned via the `packageManager` field for reproducible installs |

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/aaditya09750/portfolioAG.git
cd portfolioAG/next-app

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build & Production

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

### Deployment

```bash
# Deploy to any Next.js-compatible hosting service
# Compatible with: Vercel, Netlify, AWS Amplify, Railway

# For Vercel (recommended for Next.js)
# Connect your repository and deploy automatically
```

## Project Structure

```
next-app/
├── app/
│   ├── layout.tsx                      # Root layout with metadata, fonts, preloads
│   ├── page.tsx                        # Home page composing layout + sections
│   └── globals.css                     # Global CSS importing legacy styles
├── components/
│   ├── layout/                         # Site-wide chrome + global behaviors
│   │   ├── Header/
│   │   │   ├── Header.tsx              # Server: static nav markup
│   │   │   ├── HeaderBehavior.tsx      # Client: nav toggle + scroll listeners, renders null
│   │   │   └── index.ts
│   │   ├── Preloader/
│   │   │   ├── Preloader.tsx           # Server: curtain markup
│   │   │   ├── PreloaderBehavior.tsx   # Client: DOMContentLoaded handler, renders null
│   │   │   └── index.ts
│   │   ├── Cursor/
│   │   │   ├── Cursor.tsx              # Server: dot + outline spans
│   │   │   ├── CursorBehavior.tsx      # Client: mouse tracking, renders null
│   │   │   └── index.ts
│   │   ├── Footer.tsx                  # Server
│   │   ├── SmoothScroll.tsx            # Client: Lenis provider
│   │   ├── Tilt.tsx                    # Client: [data-tilt] wiring, renders null
│   │   └── index.ts
│   ├── sections/                       # Page content, colocated with sub-parts
│   │   ├── about/
│   │   │   ├── AboutSection.tsx        # Server: composes the three tabs
│   │   │   ├── AboutMeTab.tsx          # Server
│   │   │   ├── SkillsTab.tsx           # Client: IntersectionObserver + tile grid
│   │   │   ├── AchievementsTab.tsx     # Server
│   │   │   └── index.ts
│   │   ├── contact/
│   │   │   ├── ContactSection.tsx      # Server: composes form + map + list
│   │   │   ├── ContactForm.tsx         # Server (Web3Forms target)
│   │   │   ├── ContactMap.tsx          # Server (Google Maps iframe)
│   │   │   ├── ContactList.tsx         # Server
│   │   │   └── index.ts
│   │   ├── HeroSection.tsx             # Server: hero banner with portrait & typewriter
│   │   ├── ServiceSection.tsx          # Server: service cards grid
│   │   ├── CTASection.tsx              # Server: call-to-action banner
│   │   ├── TestimonialSection.tsx      # Server: client testimonials
│   │   └── index.ts
│   └── ui/                             # Reusable primitives
│       ├── Globe.tsx                   # Client: Three.js 3D globe
│       ├── Tabs.tsx                    # Client: tab state
│       ├── Typewriter.tsx              # Client: character-typing animation
│       └── index.ts
├── data/
│   └── constants.tsx                   # Centralized data (tech stack, services, certs, etc.)
├── hooks/
│   └── useLenis.ts                     # Custom hook: Lenis + RAF loop + reduced-motion guard
├── styles/
│   └── legacy.css                      # Consolidated CSS (variables, components, responsive)
├── public/
│   └── assets/
│       ├── font/                       # Recoleta WOFF2 font files
│       └── images/                     # All portfolio images, icons, certificates
├── types/
│   └── global.d.ts                     # Module declarations for CSS, images, Three.js
├── package.json                        # packageManager: pnpm@9.15.9
├── pnpm-lock.yaml                      # committed, replaces package-lock.json
├── tailwind.config.js                  # Custom theme (colors, fonts, spacing)
├── next.config.ts                      # Next.js configuration (strict mode)
├── tsconfig.json                       # TypeScript config (ES2020, strict, path aliases)
├── postcss.config.mjs                  # PostCSS with Tailwind & Autoprefixer
└── eslint.config.mjs                   # ESLint with Next.js rules
```

## Design System

### Color Palette

| Color Variable | HSL Value | Usage |
|----------------|-----------|-------|
| `--bg-black` | hsla(0, 0%, 0%, 1) | Primary background |
| `--bg-smoky-black` | hsla(0, 0%, 6%, 1) | Secondary backgrounds |
| `--bg-eerie-black` | hsla(0, 0%, 13%, 1) | Borders, cards |
| `--bg-jet` | hsla(0, 0%, 18%, 1) | Elevated surfaces |
| `--bg-white` | hsla(0, 0%, 100%, 1) | Accents, text |
| `--text-light-gray` | hsla(240, 1%, 83%, 1) | Body text |

### Tailwind Theme Extensions

```js
// tailwind.config.js custom tokens
colors: {
  'portfolio-white', 'light-gray', 'jet',
  'eerie', 'rich-black', 'smoky', 'black'
}
fontFamily: {
  recoleta: ['Recoleta', 'serif'],
  poppins: ['Poppins', 'sans-serif']
}
fontSize: {
  'fs-1': '4.6rem',  // Hero headlines
  'fs-2': '4.5rem',  // Section titles
  ...
  'fs-10': '1.4rem'  // Small text, labels
}
```

### Typography Scale

```css
--fontSize-1: 4.6rem;   /* Hero headlines */
--fontSize-2: 4.5rem;   /* Section titles */
--fontSize-3: 4rem;     /* Major headings */
--fontSize-4: 3rem;     /* Subsection titles */
--fontSize-5: 2.4rem;   /* Card titles */
--fontSize-6: 1.8rem;   /* Navigation, tabs */
--fontSize-7: 2rem;     /* Medium emphasis */
--fontSize-8: 1.6rem;   /* Body text */
--fontSize-9: 1.5rem;   /* Buttons */
--fontSize-10: 1.4rem;  /* Small text, labels */
```

### Font Families

**Recoleta** - Display serif font for headings and titles, providing elegant personality (self-hosted WOFF2)
**Poppins** - Clean sans-serif for body text, ensuring optimal readability (Google Fonts)

## Website Sections

### Header & Navigation
- Fixed position header with scroll-triggered styling changes
- Mobile-responsive hamburger menu with smooth slide-in animation
- Navigation links with hover effects and smooth scroll behavior
- Call-to-action button for direct contact access

### Hero Section
- Full-width introduction with animated typewriter text effect (React component)
- 3D tilt-enabled profile image with gradient overlay
- Downloadable CV button with icon integration
- Decorative shape elements for visual depth

### Services Section
- Four service cards: Full Stack Development, Project Management, Graphic Designing, Database Management
- Animated hover effects with icon-to-title transitions
- Responsive grid layout adapting from 1 to 4 columns
- Data-driven rendering from centralized constants

### About Section (Tabbed Interface)
**About Me Tab**
- Professional biography with personal details
- Interactive 3D globe (Three.js client component)
- Social media links (WhatsApp, Instagram, LinkedIn)
- Contact information display

**Skillsets Tab**
- Premium tech stack showcase grouped by category: **Frontend**, **Backend**, and **Tools & Database**
- Frontend: React, Next.js, JavaScript, TypeScript, HTML, CSS
- Backend: Node.js, Express, Python, Java, C
- Tools & Database: Git, MongoDB, MySQL, Docker, Figma
- Each skill rendered as a glass tile with a circular icon ring, using real brand logos from `react-icons`
- Scroll-triggered staggered entrance (65ms per tile) via `IntersectionObserver` — no layout shift, no jank
- Inner icon ring glows on hover; no scale or translate for a restrained, professional feel
- Fully responsive: 2-column on small phones, `auto-fill` grid (130–150px min) from tablets up, with progressive icon/label sizing at 480/575/768/992/1200 breakpoints

**Achievements Tab**
- Certificate gallery with tilt effects
- Responsive grid layout for credentials

### Call to Action
- Prominent section encouraging collaboration
- "Hire Me Now" button with hover animations

### Testimonials Section
- Client review with quotation styling
- Profile card with client image and details
- Professional endorsement from Yash Santosh Hule (BM25 Founder)

### Contact Section
- Functional contact form with validation (React component)
- Embedded Google Maps location
- Contact details: Phone, Address, Email
- Web3Forms API integration for submissions

### Footer
- Copyright information
- Back to top button with smooth scroll

## Responsive Breakpoints

| Breakpoint | Target Devices | Key Changes |
|------------|----------------|-------------|
| < 575px | Mobile phones | Single column, simplified navigation |
| ≥ 575px | Large phones | Two-column service grid, profile cards |
| ≥ 768px | Tablets | Hero grid layout, expanded typography, custom cursor enabled |
| ≥ 992px | Desktops | Full navigation bar, enhanced interactions |
| ≥ 1200px | Large screens | Enhanced spacing, larger typography |
| ≥ 1400px | Extra large | Maximum content width, optimized layout |

## Animation Library

### CSS Animations

**Preloader Animation**
```css
@keyframes loading { 0% → 100%: scaleY(0) → scaleY(0.3) }
@keyframes loaded { 0% → 100%: scaleY(0.3) → scaleY(1), opacity: 0 }
```

**Header Slide-In**
```css
@keyframes slideIn { 0% → 100%: translateY(-100%), opacity: 0 → translateY(0), opacity: 1 }
```

**Content Fade**
```css
@keyframes fade { 0% → 100%: opacity: 0 → opacity: 1 }
```

**Cursor Blink**
```css
@keyframes blink { 0%-50%: opacity: 1, 51%-100%: opacity: 0 }
```

### CSS Transitions

**Standard Transitions**
```css
--transition-1: 0.25s ease;      /* Quick interactions */
--transition-2: 0.5s ease;       /* Medium animations */
--transition-3: 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99); /* Tilt effect */
```

### Three.js & GSAP Animations
- Globe auto-rotation with orbit controls
- Mouse-hover extrusion effect on globe points
- Instanced mesh rendering for smooth 60fps performance
- Custom vertex and fragment shaders for visual effects

### Lenis Smooth Scrolling
- App-wide smooth scroll mounted once in the root layout via the `SmoothScroll` client provider
- `useLenis` custom hook owns the RAF loop, cleans up on unmount, and short-circuits when `prefers-reduced-motion: reduce` is set
- Duration `1.2s` with an exponential ease-out curve for a weighted, inertia-driven feel
- Native CSS `scroll-behavior: smooth` removed from `html` to avoid conflicting with Lenis' JS scroll

### Skills Scroll-Triggered Reveal
- `IntersectionObserver` at `0.15` threshold flips a `visible` state once the skills section enters the viewport
- Each tile fades/translates in with a 65ms per-item cascade and a `cubic-bezier(0.22, 1, 0.36, 1)` ease
- Respects reduced motion — instantly reveals the final state without animating

## Customization Guide

### Updating Personal Information

1. **Edit `data/constants.tsx`** - Update skills, services, testimonials, and contact details
2. **Edit `app/layout.tsx`** - Update metadata (title, description)
3. **Replace images** - Add your photos in `public/assets/images/`
4. **Modify components** - Update text content in section components

### Styling Modifications

```css
/* Modify CSS custom properties in styles/legacy.css */
:root {
  /* Change primary colors */
  --bg-black: /* your color */;
  --bg-white: /* your accent */;

  /* Adjust typography */
  --fontSize-1: /* your size */;

  /* Modify spacing */
  --section-spacing: /* your value */;
}
```

```js
// Or extend via tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: { /* your custom colors */ },
      fontFamily: { /* your custom fonts */ },
    }
  }
}
```

### Contact Form Configuration

```tsx
{/* Update Web3Forms access key in components/sections/contact/ContactForm.tsx */}
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
```

The email `<input type="email">` in `ContactForm.tsx` carries `suppressHydrationWarning`
as a deliberate guard: disposable-email browser extensions (Temp Mail and similar) inject
attributes into email fields before React hydrates, and this directive tells React to
tolerate those extension-side mutations on that one element only.

## Browser Compatibility

![Chrome](https://img.shields.io/badge/Chrome-90+-4285F4?style=flat-square&logo=googlechrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-88+-FF7139?style=flat-square&logo=firefox&logoColor=white)
![Safari](https://img.shields.io/badge/Safari-14+-000000?style=flat-square&logo=safari&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-90+-0078D7?style=flat-square&logo=microsoftedge&logoColor=white)

**Full Support** - Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
**Custom Cursor** - Desktop browsers only (disabled on mobile)
**Tilt Effects** - Mouse-enabled devices
**3D Globe** - WebGL-capable browsers
**Progressive Enhancement** - Core functionality preserved on older browsers

## Performance Features

**Next.js Optimizations**
- Server-side rendering (SSR) and static site generation (SSG) support
- Automatic code splitting per route
- Image preloading for critical assets in layout
- React Strict Mode enabled for development safety

**Optimized Loading**
- Preloaded critical images via `<link rel="preload">` in layout
- Font preconnect hints for Google Fonts
- Self-hosted Recoleta font files (WOFF2) for fast loading
- Server Components render all static markup (≈17 files); a small set of `*Behavior.tsx` Client Components attach event listeners imperatively without shipping any markup, minimizing the hydration surface

**Efficient CSS**
- CSS custom properties for theme consistency
- Tailwind CSS utility classes for minimal bundle size
- Hardware-accelerated animations using transform
- Legacy CSS consolidated into single file for easy migration

**Type-Safe Development**
- TypeScript strict mode for compile-time error detection
- Module declarations for CSS, images, and Three.js
- Path aliases (`@/*`) for clean imports
- ESLint + Prettier for consistent code quality

## Contact & Support

![Email](https://img.shields.io/badge/Email-aadigunjal0975%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)
![LinkedIn](https://img.shields.io/badge/LinkedIn-aadityagunjal0975-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)
![WhatsApp](https://img.shields.io/badge/WhatsApp-Contact-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)

**Get In Touch**

- **Email:** [aadigunjal0975@gmail.com](mailto:aadigunjal0975@gmail.com)
- **Phone:** +91 84335 09521
- **LinkedIn:** [aadityagunjal0975](https://www.linkedin.com/in/aadityagunjal0975/)
- **Location:** Dombivli, Maharashtra, India

**Professional Inquiries Welcome** - Open to freelance projects, collaboration opportunities, and full-time positions.

## License

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensourceinitiative&logoColor=white)

```
MIT License

Copyright (c) 2024 Aaditya Gunjal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

**Aaditya Gunjal Portfolio (Next.js)** - A modern rewrite of the original static portfolio using Next.js 16, React 19, and TypeScript. This project demonstrates proficiency in modern React architecture, server-side rendering, TypeScript, Tailwind CSS, Three.js 3D graphics, and component-driven development for creating engaging, responsive user experiences.

**Star this repository** if you found it helpful!

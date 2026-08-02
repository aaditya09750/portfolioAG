# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2026-08-03

### Added
- Production-grade `next.config.mjs` with security headers (HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- AVIF/WebP image optimization with 1-year immutable caching
- ESLint 9 flat config with TypeScript, React Hooks, JSX A11y, and Prettier integration
- Prettier configuration (`.prettierrc.json`, `.prettierignore`)
- Husky v9 pre-commit hooks with lint-staged
- Commitlint enforcing Conventional Commits format
- Dynamic `robots.txt` and `sitemap.xml` generation
- JSON-LD structured data (Person, WebSite schemas)
- Custom branded 404 page
- Maintenance mode middleware with `MAINTENANCE_MODE` env toggle
- Vercel Analytics and Speed Insights integration
- `cn()` Tailwind class merge utility (`lib/utils.ts`)
- `.editorconfig`, `.nvmrc`, `.gitattributes`, `.env.example`
- `CHANGELOG.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `ARCHITECTURE.md`
- New NPM scripts: `typecheck`, `format`, `check`, `prepare`

### Changed
- Upgraded TypeScript from 5.4.0 to 6.0.3
- Upgraded Next.js from 16.1.6 to 16.2.12
- Upgraded React from 19.2.4 to 19.2.8
- Upgraded Tailwind CSS from 4.0.0 to 4.3.3
- Upgraded Lenis from 1.3.21 to 1.3.25
- Upgraded ESLint, Prettier, PostCSS, and all type packages to latest
- Changed `next.config.ts` to `next.config.mjs`
- Changed `eslint.config.mjs` to `eslint.config.js` (full flat config)
- Changed TypeScript target from ES2020 to ES6
- Cleaned up `.gitignore` (removed stale `next-app/*` entries)
- Expanded `app/layout.tsx` metadata with OpenGraph, Twitter, and robots directives

### Unchanged
- All existing React components, visual design, animations, and functionality
- GSAP, Three.js 3D Globe, Lenis smooth scroll behavior
- Legacy CSS design system (`styles/legacy.css`)
- All public assets and data constants

## [1.0.0] - 2026-08-02

### Added
- Initial Next.js 16 App Router migration from static HTML/CSS/JS
- Server-First RSC architecture with Server-Shell + Client-Behavior pattern
- Interactive 3D WebGL Globe with Three.js and custom GLSL shaders
- Lenis smooth inertia scrolling
- Character-by-character Typewriter effect
- Web3Forms contact form integration
- NestJS icon added to Backend skills showcase
- Recoleta custom font with case-corrected WOFF2 paths for Linux production
- Netlify deployment configuration

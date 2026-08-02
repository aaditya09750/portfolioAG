# AGENTS.md — AI Coding Agent Guidelines & Governance

> **Repository Name:** `portfolioAG`  
> **Author & Developer:** Aaditya Gunjal  
> **Framework:** Next.js 16.2.12 (App Router — Server Components by Default)  
> **UI Runtime:** React 19.2.8  
> **Language:** TypeScript 6.0.3 (`strict: true`)  
> **Package Manager:** pnpm 9.15.9

---

## 1. Master Operational Directives

1. **No Code Churn & Architectural Preservation**:
   - Never perform unsolicited refactoring of working components, styles, or single sources of truth (`data/constants.tsx`).
   - Maintain the existing Server-Shell + Client-Behavior component split architecture.
   - Do not replace Framer Motion or GSAP or Three.js animations with unverified custom implementations unless explicitly requested by the user.

2. **Package Manager Mandate**:
   - Always use **pnpm** (`pnpm install`, `pnpm dev:turbo`, `pnpm build`, `pnpm typecheck`).
   - Do NOT run `npm` or `yarn` commands which corrupt `pnpm-lock.yaml`.

3. **Strict Type Safety**:
   - TypeScript is configured with `strict: true`.
   - Never introduce `any` types or disable ESLint/TypeScript checks (`@ts-ignore`) to bypass type errors.

4. **Styling & Design Token Integrity**:
   - Design system tokens reside in `styles/legacy.css` and `app/globals.css`.
   - Typography uses Recoleta (`var(--fontFamily-recoleta)`) for display titles and Poppins (`var(--fontFamily-poppins)`) for body/UI text.
   - Respect light/dark contrast standards and HSL color variables (`--bg-black`, `--text-white`, `--text-light-gray`).

5. **Navigation & Anchor Routing**:
   - Header navigation links must use root-relative anchors (`/#home`, `/#about`, `/#review`, `/#contact`) so navigation functions seamlessly from any route or 404 error page.

---

## 2. Component Creation & Lifecycle Rules

- **Server Components by Default**: All layout shells, static text sections, footers, and page wrappers must remain pure Server Components.
- **Client Boundaries (`"use client"`)**: Push client boundaries as deep as possible down the DOM tree (e.g., `<CursorBehavior />`, `<HeaderBehavior />`, `<Typewriter />`, `<Globe />`).
- **Verification Protocol**: Always verify changes by running `pnpm typecheck` and `pnpm build` before presenting completion.

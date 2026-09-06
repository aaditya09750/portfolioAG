# CLAUDE.md — Claude Execution & Command Guide

This file provides specific project context and command workflows for Claude and AI assistants working in `portfolioAG`.

## Core Project Architecture

- **Framework**: Next.js 16.2.12 (App Router with Turbopack)
- **UI Engine**: React 19.2.8
- **Type Checking**: TypeScript 6.0.3 (`strict: true`)
- **Package Manager**: `pnpm`

## Common Development Commands

```bash
# Start local development server with Turbopack
pnpm dev:turbo

# Typecheck codebase without emitting JS
pnpm typecheck

# Execute ESLint 9 flat config check
pnpm lint

# Format codebase with Prettier
pnpm format

# Run all checks at once (format, lint, typecheck, build)
pnpm verify

# Verify production build compilation
pnpm build
```

## Architectural Guidelines & Code Rules

1. **Server Components First**: Keep page components (`app/page.tsx`, `app/not-found.tsx`, `app/maintenance/page.tsx`) server-rendered. Move interactive logic to decoupled client behavior components (`components/layout/...Behavior.tsx`).
2. **Path Aliases**: Always use `@/` path alias for root imports (e.g. `@/components/layout`, `@/lib/utils`, `@/data/constants`).
3. **No Unrequested Refactoring**: Modify only the code necessary to address user requests. Preserve all existing docstrings, data structures, and constants.

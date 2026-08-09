# Contributing to portfolioAG

Thank you for your interest in contributing! This guide covers the development workflow and standards.

## Prerequisites

- **Node.js**: v22+ (see `.nvmrc`)
- **pnpm**: v11+ (specified in `packageManager` field)
- **Docker**: v20+ (optional — for containerized deployment)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/aaditya09750/portfolioAG.git
cd portfolioAG

# Install dependencies
pnpm install

# Start development server
pnpm dev:turbo
```

## Development Workflow

### Scripts

| Command          | Description                             |
| ---------------- | --------------------------------------- |
| `pnpm dev`       | Start development server                |
| `pnpm dev:turbo` | Start development server with Turbopack |
| `pnpm build`     | Production build                        |
| `pnpm start`     | Serve production build                  |
| `pnpm lint`      | Run ESLint                              |
| `pnpm typecheck` | Run TypeScript type checking            |
| `pnpm format`    | Format all files with Prettier          |
| `pnpm check`     | Run lint + typecheck                    |

### Commit Messages

This project enforces [Conventional Commits](https://www.conventionalcommits.org/) via commitlint. All commit messages must follow this format:

```
type(scope): description
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

**Examples**:

```bash
feat(skills): add Docker icon to tools section
fix(fonts): correct Recoleta path casing for Linux
docs(readme): update setup instructions
refactor(layout): extract header into separate component
```

### Pre-commit Hooks

Husky automatically runs the following on every commit:

1. **ESLint** — Lints and auto-fixes staged `.ts` and `.tsx` files
2. **Prettier** — Formats staged files

### Code Style

- **TypeScript**: Strict mode enabled (`strict: true`)
- **Formatting**: Prettier (no semicolons, single quotes, trailing commas)
- **Linting**: ESLint with React Hooks, JSX A11y, and Prettier integration

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the code style guidelines
3. Ensure `pnpm check` passes
4. Ensure `pnpm build` succeeds
5. Submit a PR with a clear description of changes

import nextConfig from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Ignore build output and generated files
  {
    ignores: ['node_modules/**', '.next/**', 'coverage/**', '*.tsbuildinfo'],
  },

  // Next.js core web vitals rules (includes react-hooks and jsx-a11y plugins)
  ...nextConfig,

  // Prettier conflict resolution (must be last)
  prettierConfig,

  // Project-specific overrides
  {
    rules: {
      // React 19 does not require React in scope
      'react/react-in-jsx-scope': 'off',
      // Allow unused vars prefixed with _
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
]

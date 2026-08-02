import nextConfig from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  // Ignore build output and generated files
  {
    ignores: ['node_modules/**', '.next/**', 'coverage/**', '*.tsbuildinfo'],
  },

  // Next.js core web vitals rules
  ...nextConfig,

  // Prettier conflict resolution (must be last)
  prettierConfig,

  // Project-specific overrides
  {
    rules: {
      // React 19 does not require React in scope
      'react/react-in-jsx-scope': 'off',
      // Allow unused vars prefixed with _
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
]

export default eslintConfig

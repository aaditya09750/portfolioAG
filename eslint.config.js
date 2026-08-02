import nextConfig from 'eslint-config-next/core-web-vitals'
import prettierConfig from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'

/** @type {import('eslint').Linter.Config[]} */
export default [
  // Ignore build output and generated files
  {
    ignores: ['node_modules/**', '.next/**', 'coverage/**', '*.tsbuildinfo'],
  },

  // Next.js core web vitals rules
  ...nextConfig,

  // React Hooks enforcement
  {
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // JSX Accessibility rules
  {
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },

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

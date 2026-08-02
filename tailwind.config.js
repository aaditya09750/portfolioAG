/** @type {import('tailwindcss').Config} */
module.exports = {
  // Scan all component/page files for class names
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{ts,tsx}',
  ],

  // We rely primarily on global CSS variables (legacy.css) for visual fidelity.
  // The theme extension here exposes the same design tokens as Tailwind utilities
  // so future components can use e.g. `text-portfolio-white` or `font-recoleta`.
  theme: {
    extend: {
      // ── Colors (mirror CSS custom properties exactly) ──────────────────
      colors: {
        'portfolio-white':      'hsla(0,   0%,  100%, 1)',
        'portfolio-light-gray': 'hsla(240, 1%,   83%, 1)',
        'portfolio-jet':        'hsla(0,   0%,   18%, 1)',
        'portfolio-eerie':      'hsla(0,   0%,   13%, 1)',
        'portfolio-rich-black': 'hsla(229, 23%,   9%, 1)',
        'portfolio-smoky':      'hsla(0,   0%,    6%, 1)',
        'portfolio-black':      'hsla(0,   0%,    0%, 1)',
      },

      // ── Font families ──────────────────────────────────────────────────
      fontFamily: {
        recoleta: ['Recoleta', 'serif'],
        poppins:  ['Poppins', 'sans-serif'],
      },

      // ── Font sizes (matching --fontSize-1 through --fontSize-10) ───────
      fontSize: {
        'fs-1':  '4.6rem',
        'fs-2':  '4.5rem',
        'fs-3':  '4rem',
        'fs-4':  '3rem',
        'fs-5':  '2.4rem',
        'fs-6':  '1.8rem',
        'fs-7':  '2rem',
        'fs-8':  '1.6rem',
        'fs-9':  '1.5rem',
        'fs-10': '1.4rem',
      },

      // ── Spacing ────────────────────────────────────────────────────────
      spacing: {
        'section': '70px',
      },

      // ── Border radius ──────────────────────────────────────────────────
      borderRadius: {
        'pill':   '500px',
        'circle': '50%',
      },

      // ── Transitions ────────────────────────────────────────────────────
      transitionTimingFunction: {
        'cubic-in':  'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        'cubic-out': 'cubic-bezier(0.05, 0.83, 0.52, 0.97)',
      },
    },
  },

  plugins: [],
}

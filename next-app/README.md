# Next.js Migration (preview)

This folder contains a scaffolded Next.js (App Router) project intended to migrate the existing static portfolio into a modern stack.

Quick start:

```bash
cd next-app
# install dependencies
npm install
# start dev server
npm run dev
```

Notes:
- Existing project CSS has been copied into `styles/` and imported globally in `app/layout.tsx` via `styles/globals.css` to preserve initial pixel parity.
- Next steps: port interactive JS into React components, move assets into `public/`, install `three`, `gsap`, and migrate fonts.

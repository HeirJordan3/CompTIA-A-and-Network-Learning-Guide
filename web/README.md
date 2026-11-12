# Study Web App (Milestone 1)

Next.js App Router application for the CompTIA A+ and Network+ Learning Guide.

This app **reads** Markdown lessons from `../core-2/` (and is structured for Core 1 / Network+ later). It does not relocate lesson files.

## Requirements

- Node.js 20+ recommended
- npm

## Run locally

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Suggested path to validate M1:

1. Dashboard → **CompTIA A+ Core 2**
2. Domain **Security**
3. Lesson **Logical Security**

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run lint` | ESLint |
| `npm run build` | Production build |
| `npm start` | Serve production build |

## Notes

- Only lessons listed in `src/lib/content/curriculum.ts` can be loaded.
- Coming Soon lessons appear in navigation but are not readable until marked available.
- This product is an independent educational resource and is not affiliated with or endorsed by CompTIA.

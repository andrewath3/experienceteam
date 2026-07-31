# Experience Team

Internal site for the Experience Team — who they are, what they do, and examples of the work.
Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Structure

- `src/app` — routes and layout
- `src/components/sections` — one component per homepage section (Who We Are, What We Do, Work)
- `src/data` — content as typed data (team roster, work examples, capabilities) — edit these files
  to update copy or add projects, no JSX changes needed
- `public/case-studies` — project images used in the Work gallery

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Open items

- Intake form in "Bring us in" currently submits via `mailto:` to a placeholder address
  (`src/components/WorkWithUs.tsx`) — swap in a real form backend and Teams link before launch.
- Several Work entries are missing budget/timeline/awards data — see `src/data/work.ts`.

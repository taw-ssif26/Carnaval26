# CARNAVAL da Chittagong COLLEGE ’26 — The Realm of Knowledge
Frontend-only Next.js site. Run: `npm install && npm run dev` · Build: `npm run build && npm start`.

## Where to edit
- Festival details/contact/links: `src/data/siteConfig.ts`
- **Ticket link:** copy `.env.example` to `.env.local`, set `NEXT_PUBLIC_TICKETIFY_URL=https://...` (empty = button disabled with message).
- Prizes: `src/data/events.ts` — set `total` and/or `awards: [{label:"1st",amount:10000}]` (taka). Empty = "Prize details to be announced". Add `rulesUrl` for a rules link.
- Houses: `src/data/houses.ts` · Tiers/benefits: `src/data/sponsorshipTiers.ts` (fill `benefits` arrays)
- **Add a sponsor:** put logo in `public/sponsors/`, add an entry in `src/data/sponsors.ts` (`logo:"/sponsors/acme.png"`, `tier:"gold"`, `isActive:true`, `displayOrder`, optional `isFeatured`, `website`). Empty array shows the "first seat" state.
- Partners: `src/data/partners.ts` (name, logo, url, isActive)
Deploy: Vercel (free) — set the env var in project settings.

// HOW TO ADD A SPONSOR: put the logo in public/sponsors/, add an entry below. `tier` = a tier id from sponsorshipTiers.ts.
export type Sponsor = { id: string; name: string; logo?: string; tier: "title" | "power" | "platinum" | "gold" | "co"; website?: string; description?: string; displayOrder: number; isFeatured?: boolean; isActive: boolean };
export const sponsors: Sponsor[] = [];

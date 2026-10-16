// Add benefits to any tier's array once the organizers confirm them.
export type Tier = { id: string; name: string; price: string; status: string; benefits: string[]; premium?: boolean };
export const tiers: Tier[] = [
  { id: "title", name: "Title Sponsor", price: "৳4,00,000", status: "Slot open", premium: true, benefits: ["Naming rights: “[Sponsor Name] Presents Carnaval da Chittagong College”", "Naming integration across festival mentions, print, online, and on-ground materials", "Most prominent banner placement", "Top social-media shoutouts", "Promo-video billing", "Logo on T-shirts", "Logo on notebooks", "Logo on gratitude letters"] },
  { id: "power", name: "Power Sponsor", price: "৳3,00,000", status: "Slot open", benefits: [] },
  { id: "platinum", name: "Platinum Sponsor", price: "৳2,00,000", status: "Slot open", benefits: [] },
  { id: "gold", name: "Gold Sponsor", price: "৳1,00,000", status: "Slot open", benefits: [] },
  { id: "co", name: "Co-Sponsor", price: "৳50,000", status: "Slot open", benefits: [] },
];

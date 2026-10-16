// Single source of truth for festival details. Edit here only.
export const site = {
  name: "CARNAVAL da Chittagong COLLEGE ’26",
  edition: "First Edition",
  dates: "11–12 December 2026",
  venue: "Chittagong College, Chattogram, Bangladesh",
  participants: "1,000+",
  institutions: "25+",
  email: "carnavaldactgclg@gmail.com",
  facebook: "https://facebook.com/carnavaldacc",
  ticketUrl: process.env.NEXT_PUBLIC_TICKETIFY_URL ?? "", // empty => ticket button shows fallback
  registrationUrl: process.env.NEXT_PUBLIC_REGISTRATION_URL ?? "",
};
export const routes = [
  { href: "/", label: "The Gates", x: 18, y: 72 },
  { href: "/about", label: "The Chronicle", x: 38, y: 40 },
  { href: "/segments", label: "The Tournament", x: 62, y: 62 },
  { href: "/clubs", label: "The Houses", x: 74, y: 28 },
  { href: "/sponsors", label: "The Treasury", x: 48, y: 82 },
  { href: "/register", label: "The Invitation", x: 86, y: 70 },
];

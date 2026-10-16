import type { Metadata } from "next";
import "./globals.css";
import RoyalNavigation from "@/components/RoyalNavigation";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { site } from "@/data/siteConfig";
export const metadata: Metadata = {
  title: { default: `${site.name} — The Realm of Knowledge`, template: `%s · CARNAVAL ’26` },
  description: "A two-day convergence of language, science, debate and the lens. First edition, 11–12 December 2026, Chittagong College.",
  openGraph: { title: site.name, description: "The Realm of Knowledge — 11–12 December 2026, Chittagong College, Chattogram.", type: "website" },
};
export default function Root({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400&display=swap" />
  </head><body><RoyalNavigation /><main>{children}</main><Footer /><PageTransition /></body></html>);
}

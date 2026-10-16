import type { Metadata } from "next";
import ChapterHeading from "@/components/ChapterHeading";
import SponsorTier from "@/components/SponsorTier";
import SponsorWall, { PartnerList } from "@/components/SponsorWall";
import { tiers } from "@/data/sponsorshipTiers";
import { site } from "@/data/siteConfig";
export const metadata: Metadata = { title: "The Royal Treasury" };
export default function Sponsors() {
  return (<>
    <section className="sec" style={{ paddingTop: 170, background: "radial-gradient(ellipse at 50% 0%,#3a2c14,var(--ob) 65%)" }}><div className="wrap">
      <ChapterHeading label="Chapter IV · Patronage & Partnerships" title="Build your legacy with the gathering.">CARNAVAL da Chittagong COLLEGE ’26 invites organizations and brands to support a national academic festival connecting students through science, language, debate, and visual storytelling.</ChapterHeading>
      <p style={{ margin: "20px 0 26px", maxWidth: 640 }}>Sponsorship offers organizations an opportunity to associate their brands with a student-centered academic gathering.</p>
      <a className="btn solid" href="#tiers">Become a sponsor</a></div></section>
    <section id="tiers" className="sec" style={{ background: "var(--mc)" }}><div className="wrap"><h2 style={{ marginBottom: 32 }}>Sponsorship tiers</h2>
      <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>{tiers.map(t => <SponsorTier key={t.id} t={t} />)}</div>
      <p className="sans" style={{ fontSize: 13, color: "var(--si)", marginTop: 18 }}>Questions? Write to <a href={`mailto:${site.email}`} style={{ textDecoration: "underline" }}>{site.email}</a>.</p></div></section>
    <section className="sec"><div className="wrap"><h2 style={{ marginBottom: 28 }}>Confirmed patrons</h2><SponsorWall /></div></section>
    <section className="sec" style={{ background: "var(--mc)" }}><div className="wrap"><h2 style={{ marginBottom: 12 }}>Community & institutional partners</h2><p style={{ marginBottom: 24, color: "var(--si)" }}>Community and institutional partners are not financial sponsors.</p><PartnerList /></div></section>
  </>);
}

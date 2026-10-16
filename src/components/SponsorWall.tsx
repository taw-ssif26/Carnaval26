"use client";
import Link from "next/link";
import { useState } from "react";
import { sponsors } from "@/data/sponsors";
import { tiers } from "@/data/sponsorshipTiers";
import { partners } from "@/data/partners";
function Logo({ src, name, h }: { src?: string; name: string; h: number }) {
  const [bad, setBad] = useState(false);
  return src && !bad ? /* eslint-disable-next-line @next/next/no-img-element */ <img src={src} alt={name} loading="lazy" onError={() => setBad(true)} style={{ maxHeight: h, maxWidth: "100%", objectFit: "contain" }} /> : <span className="disp" style={{ fontSize: h / 3 }}>{name}</span>;
}
export function PartnerList() {
  const list = partners.filter(p => p.isActive);
  return (<div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>{list.map(p => { const inner = <Logo src={p.logo} name={p.name} h={60} />; return p.url ? <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="stone" style={{ padding: "18px 26px" }}>{inner}</a> : <span key={p.name} className="stone" style={{ padding: "18px 26px" }}>{inner}</span>; })}</div>);
}
export default function SponsorWall() {
  const act = sponsors.filter(s => s.isActive).sort((a, b) => a.displayOrder - b.displayOrder);
  if (!act.length) return (<div className="stone" style={{ padding: "56px 24px", textAlign: "center" }}><h2 style={{ fontSize: "clamp(24px,4vw,40px)" }}>The first seat remains unclaimed.</h2><p style={{ margin: "14px 0 24px" }}>Become one of the founding patrons of Carnaval da Chittagong College ’26.</p><Link className="btn solid" href="#tiers">Explore sponsorship opportunities</Link></div>);
  return (<div style={{ display: "grid", gap: 30 }}>{tiers.map(t => { const m = act.filter(s => s.tier === t.id); if (!m.length) return null; const h = t.premium ? 110 : 70; return (<div key={t.id}><p className="lbl" style={{ marginBottom: 12 }}>{t.name}</p><div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>{m.map(s => { const c = (<><Logo src={s.logo} name={s.name} h={s.isFeatured ? h * 1.4 : h} />{s.description && <p style={{ fontSize: 14 }}>{s.description}</p>}</>); const st = { padding: s.isFeatured ? 36 : 22, flex: s.isFeatured ? "1 1 100%" : "0 1 auto", textAlign: "center" as const }; return s.website ? <a key={s.id} className="stone" style={st} href={s.website} target="_blank" rel="noopener noreferrer" aria-label={s.name}>{c}</a> : <div key={s.id} className="stone" style={st}>{c}</div>; })}</div></div>); })}</div>);
}

"use client";
import { useState } from "react";
import { Tier } from "@/data/sponsorshipTiers";
import { site } from "@/data/siteConfig";
export default function SponsorTier({ t }: { t: Tier }) {
  const [open, setOpen] = useState(!!t.premium); const [copied, setCopied] = useState(false);
  const subject = encodeURIComponent(`Sponsorship inquiry: ${t.name} (${t.price}) — Carnaval da Chittagong College ’26`);
  const body = encodeURIComponent(`Dear Carnaval organizing team,\n\nWe are interested in the ${t.name} tier (${t.price}). Please share the detailed benefits package and next steps.\n\nOrganization:\nContact person:\nPhone:\n\nRegards,`);
  const copy = async () => { try { await navigator.clipboard.writeText(site.email); setCopied(true); } catch { setCopied(false); } };
  return (<article className={t.premium ? "parch" : "stone"} style={{ padding: t.premium ? 40 : 26, gridColumn: t.premium ? "1/-1" : undefined, borderTop: "3px solid var(--go)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}><h3>{t.name}</h3><span className="pill" style={t.premium ? { color: "var(--rd)", borderColor: "var(--rd)" } : undefined}>{t.status}</span></div>
    <p className="sans" style={{ fontSize: t.premium ? 44 : 30, fontWeight: 600, margin: "10px 0", color: t.premium ? "#1b1713" : "var(--go)" }}>{t.price}</p>
    <button className="sans" onClick={() => setOpen(!open)} aria-expanded={open} style={{ fontSize: 13, textDecoration: "underline", cursor: "pointer", minHeight: 44 }}>{open ? "Hide benefits" : "View benefits"}</button>
    {open && (t.benefits.length ? <ul style={{ paddingLeft: 20 }}>{t.benefits.map(b => <li key={b}>{b}</li>)}</ul> : <p style={{ fontSize: 16 }}>The detailed benefits package is available from the organizing team.</p>)}
    <div style={{ marginTop: 14 }}><a className={t.premium ? "btn" : "btn solid"} style={t.premium ? { color: "#1b1713", borderColor: "#1b1713" } : undefined} href={`mailto:${site.email}?subject=${subject}&body=${body}`}>Claim this tier</a>
      <p className="sans" style={{ fontSize: 12, marginTop: 8, opacity: .75 }}>Opens your email app. No email app? <button onClick={copy} style={{ textDecoration: "underline", cursor: "pointer" }}>{copied ? "Copied " + site.email : "Copy " + site.email}</button></p></div>
  </article>);
}

import Link from "next/link";
import Sigil from "./Sigil";
import { site, routes } from "@/data/siteConfig";
import { houses } from "@/data/houses";
export default function Footer() {
  return (<footer style={{ borderTop: "1px solid #3a3731", background: "var(--mc)", padding: "64px 0 32px" }}><div className="wrap">
    <p className="disp" style={{ fontSize: "clamp(20px,3vw,30px)", color: "var(--go)", letterSpacing: ".1em", maxWidth: 700 }}>The chronicle begins with those who dare to enter.</p>
    <hr className="rule" />
    <div style={{ display: "grid", gap: 32, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
      <div><Sigil kind="emblem" size={56} color="#B59A60" /><p className="disp" style={{ margin: "12px 0 4px" }}>{site.name}</p><p className="sans" style={{ fontSize: 14, color: "var(--si)" }}>{site.dates}<br />Chittagong College, Chattogram</p></div>
      <div className="sans" style={{ fontSize: 14, display: "grid", gap: 6 }}><span className="lbl">Destinations</span>{routes.map(r => <Link key={r.href} href={r.href}>{r.label}</Link>)}</div>
      <div className="sans" style={{ fontSize: 14, display: "grid", gap: 6 }}><span className="lbl">Contact</span><a href={site.facebook} target="_blank" rel="noopener noreferrer">facebook.com/carnavaldacc</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
      <div className="sans" style={{ fontSize: 14, display: "grid", gap: 6 }}><span className="lbl">Founding clubs</span>{houses.map(h => <span key={h.id}>{h.club}</span>)}</div>
    </div>
    <p className="sans" style={{ fontSize: 12, color: "var(--si)", marginTop: 40 }}>© 2026 {site.name}. Medieval imagery is fictional art direction; club names are official.</p>
  </div></footer>);
}

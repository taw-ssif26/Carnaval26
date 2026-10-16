"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Sigil from "./Sigil";
import { routes } from "@/data/siteConfig";
import { site } from "@/data/siteConfig";
export default function RoyalNavigation() {
  const p = usePathname(); const [sc, setSc] = useState(false); const [map, setMap] = useState(false); const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { const f = () => setSc(scrollY > 40); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  useEffect(() => { setMap(false); }, [p]);
  useEffect(() => { if (!map) return; closeRef.current?.focus(); const k = (e: KeyboardEvent) => e.key === "Escape" && setMap(false); addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, [map]);
  const cta = site.ticketUrl ? { href: site.ticketUrl, ext: true } : { href: "/register", ext: false };
  return (<>
    <nav className={"nav " + (sc ? "sc" : "")} aria-label="Primary">
      <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68, gap: 12 }}>
        <Link href="/" style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--go)" }} aria-label="Carnaval home"><Sigil kind="emblem" size={36} /><span className="lbl dn" style={{ color: "var(--si)" }}>Carnaval · First Edition</span></Link>
        <div className="dn" style={{ display: "flex", gap: 26 }}>{routes.slice(0, 5).map(r => <Link key={r.href} href={r.href} className={"nl " + (p === r.href ? "on" : "")} aria-current={p === r.href ? "page" : undefined}>{r.label}</Link>)}</div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button className="btn" style={{ padding: "10px 14px" }} onClick={() => setMap(true)} aria-haspopup="dialog">Map</button>
          {cta.ext ? <a className="btn solid dn" href={cta.href} target="_blank" rel="noopener noreferrer">Claim your invitation</a> : <Link className="btn solid dn" href={cta.href}>Claim your invitation</Link>}
        </div>
      </div>
    </nav>
    {map && <div className="modal" role="dialog" aria-modal="true" aria-label="Map of the Realm" onClick={() => setMap(false)}>
      <div className="parch" onClick={e => e.stopPropagation()} style={{ width: "min(960px,100%)", padding: 20, position: "relative" }}>
        <button ref={closeRef} className="btn" style={{ position: "absolute", right: 12, top: 12, color: "#1b1713", borderColor: "#1b1713" }} onClick={() => setMap(false)} aria-label="Close map">Close</button>
        <p className="lbl mono" style={{ color: "var(--rd)" }}>The Realm of Knowledge</p>
        <div className="dn" style={{ position: "relative", height: 420, marginTop: 14, border: "1px solid var(--br)", background: "repeating-linear-gradient(0deg,transparent 0 39px,#79603b30 40px),repeating-linear-gradient(90deg,transparent 0 39px,#79603b30 40px)" }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}><polyline fill="none" stroke="#79603B" strokeWidth=".4" strokeDasharray="1.5 1" vectorEffect="non-scaling-stroke" points={routes.map(r => `${r.x},${r.y}`).join(" ")} /></svg>
          {routes.map(r => <Link key={r.href} href={r.href} style={{ position: "absolute", left: r.x + "%", top: r.y + "%", transform: "translate(-50%,-50%)", textAlign: "center", color: "#1b1713" }}><span style={{ display: "block", width: 16, height: 16, margin: "0 auto 4px", borderRadius: "50%", background: "var(--rd)", border: "2px solid #1b1713", boxShadow: "0 0 0 6px #702d3240" }} /><span className="disp" style={{ fontWeight: 700, fontSize: 14 }}>{r.label}</span></Link>)}
        </div>
        <ul className="mo" style={{ listStyle: "none", padding: 0, margin: "14px 0 0" }}>{routes.map(r => <li key={r.href}><Link href={r.href} className="disp" style={{ display: "block", padding: "14px 4px", borderBottom: "1px solid #79603b66", color: "#1b1713", fontWeight: 700 }}>✦ {r.label}</Link></li>)}</ul>
      </div></div>}
  </>);
}

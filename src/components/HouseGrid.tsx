"use client";
import { useEffect, useRef, useState } from "react";
import Sigil from "./Sigil";
import { houses, House } from "@/data/houses";
export default function HouseGrid() {
  const [open, setOpen] = useState<House | null>(null); const [hot, setHot] = useState<string | null>(null); const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (!open) return; ref.current?.focus(); const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null); addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, [open]);
  const cur = houses.find(h => h.id === hot);
  return (<div style={{ background: cur ? `radial-gradient(ellipse at 50% 0%, ${cur.color}22, transparent 70%)` : undefined, transition: "background .6s" }}>
    <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", alignItems: "start" }}>
      {houses.map((h, i) => (
        <button key={h.id} className="stone sway" onClick={() => setOpen(h)} onMouseEnter={() => setHot(h.id)} onMouseLeave={() => setHot(null)} onFocus={() => setHot(h.id)} onBlur={() => setHot(null)}
          style={{ padding: "34px 22px 54px", marginTop: i % 2 ? 36 : 0, color: "var(--iv)", textAlign: "center", cursor: "pointer", borderTop: `4px solid ${h.color}`, clipPath: "polygon(0 0,100% 0,100% 90%,50% 100%,0 90%)", animationDelay: i * 0.7 + "s" }}>
          <span style={{ color: h.color, display: "inline-block", filter: hot === h.id ? `drop-shadow(0 0 10px ${h.color})` : "none", transition: ".4s" }}><Sigil kind={h.sigil} size={96} /></span>
          <h3 style={{ margin: "16px 0 8px", fontSize: 19 }}>{h.house}</h3>
          <p className="lbl" style={{ color: h.color }}>{h.club}</p>
          <p style={{ fontSize: 16, color: "#cfc4aa", marginTop: 12 }}>{h.about}</p>
        </button>))}
    </div>
    {open && <div className="modal" role="dialog" aria-modal="true" aria-label={open.house} onClick={() => setOpen(null)}>
      <div className="stone" onClick={e => e.stopPropagation()} style={{ maxWidth: 560, padding: 36, borderTop: `4px solid ${open.color}`, textAlign: "center" }}>
        <span style={{ color: open.color }}><Sigil kind={open.sigil} size={140} /></span>
        <h2 style={{ fontSize: 30, margin: "18px 0 6px" }}>{open.house}</h2>
        <p className="lbl" style={{ color: open.color }}>{open.club}</p>
        <p style={{ margin: "18px 0" }}>{open.about}</p>
        <p className="disp" style={{ color: open.color }}>“{open.motto}”</p>
        <p className="sans" style={{ fontSize: 11, color: "var(--si)", margin: "6px 0 20px" }}>Creative motto — art direction, not an official club motto.</p>
        <button ref={ref} className="btn" onClick={() => setOpen(null)}>Close</button>
      </div></div>}
  </div>);
}

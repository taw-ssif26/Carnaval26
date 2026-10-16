"use client";
import { useEffect, useRef, useState } from "react";
import { events, taka, Ev } from "@/data/events";
const hasPrize = (e: Ev) => e.total != null || e.awards.length > 0;
export function PrizePool({ e }: { e: Ev }) {
  if (!hasPrize(e)) return <p className="lbl" style={{ color: "var(--si)" }}>Prize details to be announced</p>;
  return (<div className="sans">{e.total != null && <p style={{ fontSize: 28, fontWeight: 600, color: "var(--go)" }}>{taka(e.total)} <span className="lbl">total pool</span></p>}{e.awards.map(a => <p key={a.label} style={{ margin: "4px 0" }}>{a.label}: <b>{taka(a.amount)}</b></p>)}</div>);
}
export default function TournamentEntry() {
  const [open, setOpen] = useState<Ev | null>(null); const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => { const h = events.find(e => "#" + e.id === location.hash); if (h) setOpen(h); }, []);
  useEffect(() => { if (!open) return; ref.current?.focus(); const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null); addEventListener("keydown", k); return () => removeEventListener("keydown", k); }, [open]);
  const span = ["f", "", "", "w", "w", "", "", "f"];
  return (<>
    <div className="grid8">{events.map((e, i) => (
      <button key={e.id} id={e.id} className={"tile stone " + span[i]} style={{ ["--a" as string]: e.accent, background: `linear-gradient(160deg, ${e.accent}33, #161614 70%)` }} onClick={() => setOpen(e)} aria-haspopup="dialog">
        <span className="mono lbl">Trial {String(i + 1).padStart(2, "0")}</span>
        <h3 style={{ margin: "14px 0 8px" }}>{e.title}</h3>
        {e.club && <p className="lbl" style={{ color: "var(--si)" }}>{e.club}</p>}
        <p style={{ fontSize: 17, color: "#cfc4aa", marginTop: 10 }}>{e.desc}</p>
        <p className="sans" style={{ fontSize: 12, color: "var(--go)", marginTop: 14 }}>View details</p>
      </button>))}</div>
    {open && <div className="modal" role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}>
      <div className="parch" onClick={e => e.stopPropagation()} style={{ maxWidth: 560, padding: 36, borderTop: `6px solid ${open.accent}` }}>
        <p className="lbl mono" style={{ color: open.accent }}>{open.club ?? "Open trial"}</p>
        <h2 style={{ fontSize: 32, margin: "10px 0 14px" }}>{open.title}</h2>
        <p>{open.desc}</p><hr className="rule" /><p className="lbl" style={{ color: "var(--rd)", marginBottom: 8 }}>Prize pool</p>
        <div style={{ color: "#1b1713" }}><PrizePool e={open} /></div>
        {open.rulesUrl ? <p style={{ marginTop: 14 }}><a href={open.rulesUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>Official rules</a></p> : <p className="sans" style={{ fontSize: 13, marginTop: 14 }}>Rules and registration details will be announced by the organizers.</p>}
        <button ref={ref} className="btn" style={{ marginTop: 18, color: "#1b1713", borderColor: "#1b1713" }} onClick={() => setOpen(null)}>Close</button>
      </div></div>}
  </>);
}

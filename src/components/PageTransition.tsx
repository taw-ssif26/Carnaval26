"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Sigil from "./Sigil";
const L: Record<string, string> = { "/": "THE GATES ARE OPENING", "/about": "THE CHRONICLE IS UNSEALED", "/segments": "THE TOURNAMENT BEGINS", "/clubs": "THE FOUR HOUSES GATHER", "/sponsors": "THE TREASURY AWAITS ITS PATRONS", "/register": "THE INVITATION IS SEALED" };
export default function PageTransition() {
  const p = usePathname(); const first = useRef(true); const [on, set] = useState(false);
  useEffect(() => { if (first.current) { first.current = false; return; } set(true); const t = setTimeout(() => set(false), 700); return () => clearTimeout(t); }, [p]);
  return on ? <div className="veil" aria-hidden="true"><Sigil kind="emblem" size={92} /><p className="lbl mono">{L[p] ?? "THE REALM SHIFTS"}</p></div> : null;
}

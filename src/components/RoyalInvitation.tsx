import Sigil from "./Sigil";
import { site } from "@/data/siteConfig";
export default function RoyalInvitation() {
  return (<div className="parch rise" style={{ maxWidth: 640, margin: "0 auto", padding: "44px 34px", textAlign: "center", position: "relative" }}>
    <div style={{ position: "absolute", inset: 10, border: "1px solid #79603b88", pointerEvents: "none" }} />
    <p className="lbl mono" style={{ color: "var(--rd)" }}>Admit one ✦ All access</p>
    <div style={{ color: "var(--rd)", margin: "18px 0 6px" }}><Sigil kind="emblem" size={80} /></div>
    <h2 style={{ fontSize: "clamp(24px,5vw,38px)" }}>{site.name}</h2>
    <hr className="rule" /><p className="disp" style={{ fontSize: 20, letterSpacing: ".18em" }}>11–12 DECEMBER 2026</p>
    <p className="mono" style={{ fontSize: 13, margin: "20px 0 0" }}>PASS SERIAL: NO. 0026 &nbsp;·&nbsp; CODE: CDC-26-ALL</p>
    <p className="sans" style={{ fontSize: 11, opacity: .65, margin: "6px 0 0" }}>Design sample only — not a functioning ticket.</p>
  </div>);
}

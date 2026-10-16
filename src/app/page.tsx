import Link from "next/link";
import Sigil from "@/components/Sigil";
import TicketCTA from "@/components/TicketCTA";
import { site } from "@/data/siteConfig";
import { events } from "@/data/events";
import { houses } from "@/data/houses";
const Fortress = () => (
  <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice" aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
    <defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#090A0C" /><stop offset=".7" stopColor="#1b2229" /><stop offset="1" stopColor="#2a3138" /></linearGradient></defs>
    <rect width="1200" height="600" fill="url(#sky)" />
    <circle cx="930" cy="130" r="34" fill="#cfd6dc" opacity=".55" />
    <path d="M0 430l120-110 100 70 140-150 130 120 120-90 150 140 140-130 130 110 170-100v320H0z" fill="#12171b" />
    <g fill="#0a0c0e"><path d="M430 460V330h30v-40l15-25 15 25v40h30v-60l20-30 20 30v60h30v-50l14-24 14 24v50h20V230l25-40 25 40v230h30v-90h40v90h40V400h30v60z" /><rect x="380" y="440" width="560" height="160" /></g>
    <g fill="#d8b66a" opacity=".85"><rect x="510" y="330" width="4" height="9" /><rect x="636" y="300" width="4" height="9" /><rect x="740" y="270" width="4" height="9" /><rect x="610" y="470" width="4" height="7" /><rect x="700" y="480" width="4" height="7" /></g>
    <g className="sway" fill="#702D32"><path d="M755 190v-30h26l-8 10 8 10h-26z" /></g>
    <path d="M0 600V520l200-20 260 30 300-30 440 20v80z" fill="#050607" />
  </svg>);
export default function Gates() {
  return (<>
    <section style={{ position: "relative", minHeight: "100svh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <Fortress /><div className="mist" style={{ bottom: "12%" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%,transparent 20%,#090A0Cd0 85%)" }} />
      <div className="wrap" style={{ position: "relative", paddingTop: 90 }}>
        <p className="lbl mono rise">The first gathering · Chittagong College</p>
        <h1 className="rise" style={{ animationDelay: ".4s", margin: "20px 0 0" }}>
          <span style={{ display: "block", fontSize: "clamp(52px,12vw,150px)", letterSpacing: ".1em" }}>CARNAVAL</span>
          <span style={{ display: "block", fontFamily: "'Cormorant Garamond',serif", fontStyle: "italic", fontWeight: 500, fontSize: "clamp(34px,6vw,72px)", color: "var(--go)", margin: "-4px 0 4px 6vw" }}>da Chittagong</span>
          <span style={{ display: "block", fontSize: "clamp(28px,6vw,76px)", letterSpacing: ".3em" }}>COLLEGE ’26</span>
        </h1>
        <hr className="rule draw" style={{ width: "min(420px,80%)", margin: "26px 0", background: "var(--go)" }} />
        <p className="sans rise" style={{ animationDelay: "1.2s", fontSize: 13, letterSpacing: ".2em", maxWidth: 560 }}>A TWO-DAY CONVERGENCE OF LANGUAGE, SCIENCE, DEBATE &amp; THE LENS.</p>
        <p className="disp rise" style={{ animationDelay: "1.5s", fontSize: "clamp(22px,3.4vw,38px)", margin: "18px 0 6px", letterSpacing: ".14em" }}>11 — 12 DECEMBER 2026</p>
        <p className="sans rise" style={{ animationDelay: "1.6s", fontSize: 12, letterSpacing: ".2em", color: "var(--si)" }}>CHITTAGONG COLLEGE · CHATTOGRAM, BANGLADESH</p>
        <div className="rise" style={{ animationDelay: "1.8s", display: "flex", gap: 14, flexWrap: "wrap", marginTop: 34 }}><Link className="btn solid" href="/about">Enter the realm</Link><Link className="btn" href="/segments">Explore the tournament</Link></div>
      </div>
      <a href="#scale" className="lbl" aria-label="Scroll down" style={{ position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)", color: "var(--si)" }}>▾ Descend</a>
    </section>

    <section id="scale" style={{ background: "var(--st)", borderBlock: "1px solid #3a3731" }}><div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20, padding: "44px 22px", textAlign: "center" }}>
      {[[site.participants, "Student Participants"], [site.institutions, "Participating Institutions"], ["02", "Days of Competition"]].map(([n, l]) => <div key={l}><p className="disp" style={{ fontSize: "clamp(48px,8vw,88px)", color: "var(--pa)", lineHeight: 1 }}>{n}</p><p className="lbl" style={{ marginTop: 10 }}>{l}</p></div>)}</div></section>

    <section className="sec"><div className="wrap" style={{ display: "grid", gap: 48, gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", alignItems: "center" }}>
      <div><h2>The realm summons its brightest minds.</h2><p style={{ fontSize: 22, marginTop: 22, color: "#cfc4aa" }}>Students from across the country will gather to compete, create, question, reason, and explore — in language, science, debate, and the lens.</p></div>
      <div className="parch" style={{ padding: 34, transform: "rotate(-1.5deg)", textAlign: "center" }}><span style={{ color: "var(--rd)" }}><Sigil kind="emblem" size={70} /></span><p className="disp" style={{ fontSize: 22, margin: "12px 0" }}>A Royal Decree</p><p>Open to eligible SSC and HSC students. The first edition of a national academic festival.</p></div>
    </div></section>

    <section className="sec" style={{ background: "var(--mc)" }}><div className="wrap">
      <p className="lbl mono">The Grand Tournament</p><h2 style={{ margin: "14px 0 36px" }}>Eight trials await.</h2>
      <div className="grid8">{events.map((e, i) => <Link key={e.id} href={`/segments#${e.id}`} className={"tile stone " + (i === 0 || i === 7 ? "f" : i === 3 || i === 4 ? "w" : "")} style={{ ["--a" as string]: e.accent, minHeight: 150 }}><h3>{e.title}</h3><p style={{ fontSize: 16, color: "#cfc4aa", marginTop: 8 }}>{e.desc}</p></Link>)}</div>
    </div></section>

    <section className="sec"><div className="wrap">
      <p className="lbl mono">The Four Houses</p><h2 style={{ margin: "14px 0 36px" }}>Four clubs. One realm.</h2>
      <Link href="/clubs" style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>{houses.map(h => <div key={h.id} className="stone" style={{ padding: 26, textAlign: "center", borderTop: `3px solid ${h.color}`, color: h.color }}><Sigil kind={h.sigil} size={84} /><p className="disp" style={{ color: "var(--iv)", marginTop: 12 }}>{h.club}</p></div>)}</Link>
    </div></section>

    <section className="sec" style={{ background: "var(--mc)" }}><div className="wrap" style={{ display: "grid", gap: 40, gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>
      <div><p className="lbl mono">The Royal Treasury</p><h2 style={{ margin: "14px 0" }}>Stand among the founding patrons.</h2><p style={{ margin: "0 0 22px" }}>Organizations are invited to support a national student gathering.</p><Link className="btn" href="/sponsors">Become a sponsor</Link></div>
      <div className="parch" style={{ padding: 36, textAlign: "center" }}><h2 style={{ fontSize: "clamp(22px,3.4vw,34px)", color: "#1b1713" }}>The gates open on 11 December 2026</h2><div style={{ marginTop: 22, display: "flex", justifyContent: "center" }}><TicketCTA /></div></div>
    </div></section>
  </>);
}

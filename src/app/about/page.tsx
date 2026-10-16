import type { Metadata } from "next";
import Link from "next/link";
import ChapterHeading from "@/components/ChapterHeading";
import Sigil from "@/components/Sigil";
import { site } from "@/data/siteConfig";
import { houses } from "@/data/houses";
export const metadata: Metadata = { title: "The Chronicle" };
const pillars = [["Language and Literature", "The written and spoken word, and the understanding of literature."], ["Physics and scientific inquiry", "Reasoning about the physical world and solving problems with it."], ["Debate and argumentation", "Structured argument and the disciplined exchange of ideas."], ["Photography and visual storytelling", "Observation, composition, and the stories images tell."]];
export default function About() {
  return (<>
    <section className="sec" style={{ paddingTop: 170, background: "radial-gradient(ellipse at 70% 0%,#242321,var(--ob) 70%)" }}><div className="wrap">
      <ChapterHeading label="Chapter I · The Gathering" title="A convergence of minds.">Carnaval da Chittagong College ’26 is the first edition of a national academic festival bringing together students through language, literature, science, debate, photography, and collaborative challenges.</ChapterHeading>
      <p style={{ maxWidth: 680, marginTop: 20 }}>It is a two-day gathering designed around intellectual curiosity, creativity, and the spirit of competition.</p></div></section>
    <section className="sec" style={{ background: "var(--mc)" }}><div className="wrap" style={{ display: "grid", gap: 28, gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>
      <div className="parch" style={{ padding: 34 }}><p className="lbl mono" style={{ color: "var(--rd)" }}>The details</p><ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0", fontSize: 20 }}>{[site.edition, site.dates, site.venue, "Open to eligible SSC and HSC students"].map(x => <li key={x} style={{ padding: "8px 0", borderBottom: "1px solid #79603b55" }}>{x}</li>)}</ul></div>
      <div style={{ display: "grid", gap: 20, alignContent: "center" }}>{[[site.participants, "student participants"], [site.institutions, "participating institutions"]].map(([n, l]) => <p key={l}><span className="disp" style={{ fontSize: 68, color: "var(--pa)" }}>{n}</span> <span className="lbl">{l}</span></p>)}</div>
    </div></section>
    <section className="sec"><div className="wrap"><h2 style={{ marginBottom: 36 }}>Four disciplines, four pillars.</h2>
      <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>{pillars.map(([t, d], i) => <div key={t} className="stone" style={{ padding: 28, borderTop: `3px solid ${houses[i].color}`, color: houses[i].color }}><Sigil kind={houses[i].sigil} size={56} /><h3 style={{ color: "var(--iv)", margin: "14px 0 8px" }}>{t}</h3><p style={{ color: "#cfc4aa", fontSize: 17 }}>{d}</p></div>)}</div></div></section>
    <section className="sec" style={{ background: "var(--mc)" }}><div className="wrap"><h2 style={{ marginBottom: 32 }}>Two days.</h2>
      <ol style={{ listStyle: "none", margin: 0, padding: "0 0 0 28px", borderLeft: "1px solid var(--go)", display: "grid", gap: 30 }}>{[["Day One", "11 December 2026"], ["Day Two", "12 December 2026"]].map(([d, t]) => <li key={d}><p className="lbl mono">{d}</p><p className="disp" style={{ fontSize: 26 }}>{t}</p></li>)}</ol>
      <p style={{ marginTop: 28, color: "var(--si)" }}>The detailed schedule will be announced by the organizers.</p></div></section>
    <section className="sec" style={{ textAlign: "center" }}><div className="wrap"><h2 style={{ marginBottom: 28 }}>Minds will gather. The trials will decide the rest.</h2><Link className="btn solid" href="/segments">Discover the eight trials</Link></div></section>
  </>);
}

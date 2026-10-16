import type { Metadata } from "next";
import ChapterHeading from "@/components/ChapterHeading";
import HouseGrid from "@/components/HouseGrid";
import Sigil from "@/components/Sigil";
import { houses } from "@/data/houses";
export const metadata: Metadata = { title: "The Four Houses" };
export default function Clubs() {
  return (<>
    <section className="sec" style={{ paddingTop: 170 }}><div className="wrap">
      <ChapterHeading label="Chapter III · The Founding Clubs" title="Four houses. Four disciplines. One realm.">The gathering is brought together by four founding clubs of Chittagong College, each contributing a different way of understanding and interpreting the world.</ChapterHeading>
      <div style={{ marginTop: 56 }}><HouseGrid /></div>
      <p className="sans" style={{ fontSize: 12, color: "var(--si)", marginTop: 28 }}>House names and mottos are creative art direction for the festival. Official club names are shown beneath each house.</p></div></section>
    <section className="sec" style={{ background: "var(--mc)", textAlign: "center" }}><div className="wrap"><h2>Four disciplines. One common purpose.</h2>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(10px,3vw,32px)", marginTop: 40, flexWrap: "wrap" }}>{houses.slice(0, 2).map(h => <span key={h.id} style={{ color: h.color }}><Sigil kind={h.sigil} size={80} /></span>)}<span style={{ color: "var(--go)" }}><Sigil kind="emblem" size={130} /></span>{houses.slice(2).map(h => <span key={h.id} style={{ color: h.color }}><Sigil kind={h.sigil} size={80} /></span>)}</div></div></section>
  </>);
}

import type { Metadata } from "next";
import ChapterHeading from "@/components/ChapterHeading";
import TournamentEntry from "@/components/TournamentEntry";
export const metadata: Metadata = { title: "The Tournament" };
export default function Segments() {
  return (<section className="sec" style={{ paddingTop: 170, background: "radial-gradient(ellipse at 20% 0%,#2a1a1c,var(--ob) 60%)" }}><div className="wrap">
    <ChapterHeading label="Chapter II · The Grand Tournament" title="Eight trials. One gathering.">Eight competitions bring together different forms of intelligence, expression, observation, and collaboration.</ChapterHeading>
    <div style={{ marginTop: 56 }}><TournamentEntry /></div></div></section>);
}

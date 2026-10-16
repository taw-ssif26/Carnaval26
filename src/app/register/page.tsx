import type { Metadata } from "next";
import RoyalInvitation from "@/components/RoyalInvitation";
import TicketCTA from "@/components/TicketCTA";
export const metadata: Metadata = { title: "The Royal Invitation" };
export default function Register() {
  return (<section className="sec" style={{ paddingTop: 150, minHeight: "100vh", background: "radial-gradient(ellipse at 50% 30%,#2a2926,var(--ob) 70%)" }}><div className="wrap" style={{ textAlign: "center" }}>
    <p className="lbl mono">Chapter V · The Royal Invitation</p><h1 style={{ fontSize: "clamp(30px,5vw,56px)", margin: "16px 0 44px" }}>You are summoned.</h1>
    <RoyalInvitation /><div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}><TicketCTA /></div></div></section>);
}

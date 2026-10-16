import { site } from "@/data/siteConfig";
export default function TicketCTA({ label = "Claim your ticket" }: { label?: string }) {
  if (!site.ticketUrl)
    return (<div><button className="btn" disabled aria-disabled="true">{label}</button><p className="sans" style={{ fontSize: 13, color: "var(--si)", marginTop: 10 }}>Ticket booking will open here once the official booking link is announced.</p></div>);
  return <a className="btn solid" href={site.ticketUrl} target="_blank" rel="noopener noreferrer">{label}</a>;
}

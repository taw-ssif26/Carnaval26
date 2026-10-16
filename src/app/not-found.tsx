import Link from "next/link";
import Sigil from "@/components/Sigil";
export default function NotFound() {
  return (<section className="sec" style={{ minHeight: "80vh", display: "grid", placeItems: "center", textAlign: "center" }}><div><span style={{ color: "var(--rd)" }}><Sigil kind="emblem" size={110} /></span><h1 style={{ fontSize: "clamp(34px,6vw,64px)", margin: "20px 0" }}>This chamber does not exist.</h1><p style={{ marginBottom: 24 }}>The page you are looking for was never built, or has moved.</p><Link className="btn solid" href="/">Return to the gates</Link></div></section>);
}

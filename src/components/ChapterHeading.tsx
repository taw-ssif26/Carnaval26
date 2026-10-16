export default function ChapterHeading({ label, title, children }: { label: string; title: string; children?: React.ReactNode }) {
  return (<header className="rise" style={{ maxWidth: 820 }}><p className="lbl mono">{label}</p><h2 style={{ margin: "18px 0" }}>{title}</h2><hr className="rule draw" style={{ margin: "0 0 20px", width: 220 }} />{children && <p style={{ fontSize: 22, color: "#cfc4aa" }}>{children}</p>}</header>);
}

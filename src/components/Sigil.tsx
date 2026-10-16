export type Kind = "emblem" | "quill" | "physics" | "debate" | "lens";
export default function Sigil({ kind, size = 64, color = "currentColor" }: { kind: Kind; size?: number; color?: string }) {
  const p = { fill: "none", stroke: color, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={kind + " sigil"} {...p}>
      <circle cx="50" cy="50" r="46" strokeWidth="1" />
      {kind === "emblem" && <><circle cx="50" cy="50" r="38" strokeWidth="1" /><path d="M50 14l9 27 27 9-27 9-9 27-9-27-27-9 27-9z" /><circle cx="50" cy="50" r="6" /></>}
      {kind === "quill" && <><path d="M22 66c10-6 20-6 28 0 8-6 18-6 28 0V34c-10-6-20-6-28 0-8-6-18-6-28 0z" /><path d="M50 34v32" /><path d="M64 18c-8 8-12 20-14 34 10-6 16-18 14-34z" /></>}
      {kind === "physics" && <><path d="M50 12l7 31 31 7-31 7-7 31-7-31-31-7 31-7z" /><ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(30 50 50)" /><ellipse cx="50" cy="50" rx="36" ry="14" transform="rotate(-30 50 50)" /></>}
      {kind === "debate" && <><path d="M24 22l52 40M76 22L24 62" /><path d="M50 56v22M34 78h32M30 66h40M30 66l-6 10h12zM70 66l-6 10h12z" /></>}
      {kind === "lens" && <><circle cx="50" cy="50" r="28" /><path d="M50 22l14 24M78 50L54 64M50 78L36 54M22 50l24-14M64 26L40 40M72 62L60 40" /><circle cx="50" cy="50" r="7" /></>}
    </svg>
  );
}

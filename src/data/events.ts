// Prizes: fill `total` and/or `awards` (amounts in taka, numbers). Empty => "PRIZE DETAILS TO BE ANNOUNCED".
export type Award = { label: string; amount: number };
export type Ev = { id: string; title: string; club?: string; desc: string; look: string; accent: string; total?: number; awards: Award[]; rulesUrl?: string };
export const taka = (n: number) => "৳" + n.toLocaleString("en-IN");
export const events: Ev[] = [
  { id: "debate-fest", title: "Debate Fest", club: "Debating Club", desc: "A competitive arena for argument, reasoning, persuasion, and public speaking.", look: "Council chamber, opposing lecterns", accent: "#702D32", awards: [] },
  { id: "physics-olympiad", title: "Physics Olympiad", club: "Physics Club", desc: "A challenge built around scientific understanding, physical reasoning, and problem-solving.", look: "Celestial diagrams, brass instruments", accent: "#2B3F66", awards: [] },
  { id: "english-olympiad", title: "English Olympiad", club: "Language & Literature Club", desc: "A competition celebrating English language proficiency and literary understanding.", look: "Manuscripts, fountain pens", accent: "#79603B", awards: [] },
  { id: "treasure-hunt", title: "Treasure Hunt", desc: "Uncover clues, connect discoveries, and follow a trail toward the answer.", look: "Weathered maps, sealed clues", accent: "#334C40", awards: [] },
  { id: "team-quiz", title: "Team Quiz", desc: "A collaborative test of knowledge, quick thinking, and coordination.", look: "Strategy table, map fragments", accent: "#8D949B", awards: [] },
  { id: "macro-photography", title: "Macro Photography", club: "Photography Club", desc: "Observe and capture details that often escape the naked eye.", look: "Botanical textures, lens mechanics", accent: "#657F91", awards: [] },
  { id: "physics-auction", title: "Physics Auction", club: "Physics Club", desc: "A physics-themed auction event. Details will be announced by the organizers.", look: "Auction hall, brass, sealed objects", accent: "#B59A60", awards: [] },
  { id: "colour-hunt", title: "Colour Hunt", desc: "A visual exploration of color, observation, and discovery.", look: "Pigments, stained-glass fragments", accent: "#7A4A6B", awards: [] },
];

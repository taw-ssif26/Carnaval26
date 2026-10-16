// Creative identities are fictional art direction; `club` is the official name.
export type House = { id: string; sigil: "quill" | "physics" | "debate" | "lens"; house: string; club: string; color: string; motto: string; about: string };
export const houses: House[] = [
  { id: "quill", sigil: "quill", house: "The House of the Quill", club: "Language & Literature Club", color: "#B59A60", motto: "Words Preserve What Time Attempts to Erase.", about: "Knowledge, language, storytelling, interpretation, and the written word." },
  { id: "forge", sigil: "physics", house: "The House of the Celestial Forge", club: "Physics Club", color: "#8D949B", motto: "Question the Heavens. Measure the Unknown.", about: "Scientific inquiry, mathematical reasoning, experimentation, and the laws of the physical world." },
  { id: "tongue", sigil: "debate", house: "The House of the Iron Tongue", club: "Debating Club", color: "#9A3B42", motto: "Let Every Claim Stand Before Reason.", about: "Reasoning, rhetoric, argumentation, and the disciplined exchange of ideas." },
  { id: "raven", sigil: "lens", house: "The House of the Raven Lens", club: "Photography Club", color: "#5E8A74", motto: "What the Eye Discovers, Time Cannot Reclaim.", about: "Observation, composition, visual storytelling, and the preservation of fleeting moments." },
];

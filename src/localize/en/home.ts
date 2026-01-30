export const home = {
  mainTitle: {
    line1: "EVOLVE",
    line2: "BATTLEFIELD",
    line3: "TECHNOLOGIES",
  },
  tagline: "Electronic Warfare · Counter-UAS · NC Detection\nIntegrated System Design Specialists",
  features: [
    "Proven Systems with Military and Civilian Track Record",
    "All-Domain Operational",
    "Mission-Ready Systems",
  ],
  paragraphs: [
    "EBT Co., Ltd. specializes in Electronic Warfare, Counter-UAS, and NC Detection.",
    "Our company name stands for Evolve Battlefield Technologies - a reflection of our core belief that as battlefields evolve, so too must the technologies that protect them.",
    "We deliver mission-ready systems that respond to today's complex and rapidly changing threat environments.",
    "EBT Co., Ltd. collaborates with leading international technology providers to deliver world-class defense solutions.",
  ]
} as const;

export type HomeStrings = typeof home;

export const solution = {
  label: "Solution",
  title: "Problem-driven defense systems",
  description:
    "Each solution addresses specific operational challenges with integrated hardware and software designed for real-world deployment.",
  learnMore: "Learn more",
  electronicWarfare: {
    label: "EW",
    title: "Electronic Warfare",
    summary:
      "Signal processing and spectrum management for complex electromagnetic environments.",
  },
  chemicalWarfare: {
    label: "NC",
    title: "Chemical Warfare",
    summary:
      "Detection, identification, and monitoring systems for chemical agents in hazardous operational environments.",
  },
  counterUAS: {
    label: "C-UAS",
    title: "Counter-UAS",
    summary:
      "Early detection, identification, and neutralization of unmanned aerial threats to protect critical assets and personnel.",
  },
} as const

export type SolutionStrings = typeof solution

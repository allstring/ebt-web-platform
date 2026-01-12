export const solution = {
  label: "Solution",
  title: "Problem-driven defense systems",
  description:
    "Each solution addresses specific operational challenges with integrated hardware and software designed for real-world deployment.",
  learnMore: "Learn more",
  electronicWarfare: {
    title: "Electronic Warfare",
    summary:
      "Signal processing and spectrum management for complex electromagnetic environments.",
  },
  chemicalWarfare: {
    title: "Chemical Warfare",
    summary:
      "Detection, identification, and monitoring systems for chemical agents in hazardous operational environments.",
  },
  biologicalWarfare: {
    title: "Biological Warfare",
    summary:
      "High-sensitivity detection and analysis systems for early identification of biological threats.",
  },
} as const

export type SolutionStrings = typeof solution

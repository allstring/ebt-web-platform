export const deceive = {
  title: "EM-Vis Deceive®",
  subtitle: "TACTICAL ELECTRONIC DECEPTION SYSTEM",
  tagline: "Disrupt enemy perception across the electromagnetic spectrum",

  whatIs: {
    title: "WHAT IS EM-Vis Deceive®?",
    description: "EM-Vis Deceive® is a tactical electronic deception solution designed to confuse enemy surveillance, reconnaissance, and target acquisition systems in the electromagnetic spectrum environment. Modern battlefields are rapidly evolving with multi-sensor and network-centric surveillance systems, making the ability to distort enemy perception and judgment increasingly important beyond simple detection evasion.",
  },

  features: {
    title: "KEY Features",
    items: [
      {
        title: "Full Situational Awareness",
        description: "Provides battlefield situational awareness based on wideband SIGINT.",
      },
      {
        title: "Electronic Deception Operations",
        description: "Disrupts enemy sensors by generating fake signals and targets.",
      },
      {
        title: "Precision Geolocation",
        description: "High-precision detection and position estimation of electronic signals.",
      },
      {
        title: "Software-Centric Design",
        description: "Mission-based function expansion and rapid updates.",
      },
      {
        title: "Lightweight Design",
        description: "Portable manpack form factor ensures mobility.",
      },
      {
        title: "Real-Time Operations",
        description: "Provides electromagnetic spectrum information in real-time.",
      },
      {
        title: "Integrated Interoperability",
        description: "Operates in conjunction with C2 and tactical assets.",
      },
      {
        title: "Military-Grade Reliability",
        description: "Combat-proven stability and reliability.",
      },
    ],
  },

  contact: {
    text: "To learn more about EM-Vis Deceive® and how it can benefit your organization, please contact us at",
    suffix: ".",
  },
} as const

export type DeceiveStrings = typeof deceive

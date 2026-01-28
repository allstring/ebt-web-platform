export const about = {
  // Hero Section
  hero: {
    sectionLabel: "Company Overview",
    tagline: "Evolve Battlefield Technologies",
    title: "Making the Invisible",
    titleAccent: "Visible",
    description:
      "Hostile RF emissions. Unmanned aerial threats. Chemical and radiological hazards. The deadliest threats on the battlefield are the ones you can't see.",
    subtitle:
      "EBT Co., Ltd. builds systems that detect them, identify them, and neutralize them.",
  },

  // Value Propositions Section
  valueProps: {
    sectionLabel: "Why EBT",
    title: "What Sets Us Apart",
    items: [
      {
        title: "From Components to Complete Systems",
        description:
          "We provide individual sensors or complete integrated solutions—whatever the mission requires. A standalone detector. A multi-sensor network. Full C2 integration. We adapt our scope to match your operational needs.",
      },
      {
        title: "Environment-Driven Design",
        description:
          "Same technology. Different system. We configure solutions from military operations to civilian security—each environment gets what it needs.",
      },
      {
        title: "Proven Track Record",
        description:
          "We've successfully delivered advanced systems to military and government clients. Our technology performs in real operational environments, and those results have built strong partnerships based on trust and consistent performance.",
      },
    ],
  },

  // Core Capabilities Section
  capabilities: {
    sectionLabel: "Core Capabilities",
    title: "We operate in three domains",
    items: [
      {
        title: "Electronic Warfare",
        description:
          "We intercept and analyze electromagnetic signatures from adversary communications, radars, and unmanned systems. We locate signals and neutralize them with jamming.",
      },
      {
        title: "Counter-UAS",
        description:
          "We detect and classify UAS threats in real time, distinguish hostile platforms from authorized traffic, and enable rapid response.",
      },
      {
        title: "NC Detection",
        description:
          "We deliver early warning for chemical agents and radiological materials. Our systems protect naval vessels, submarines, forward units, and critical facilities.",
      },
    ],
  },

  // System Integration Section
  systemSection: {
    sectionLabel: "End-to-End",
    title: "From Detection to Action",
    description:
      "A sensor detects a threat. Then what? Data must be analyzed, correlated with other sources, and fed into command systems. Response must be immediate and coordinated.",
    highlight: "We engineer that complete chain.",
    stepLabels: ["Sensor selection", "Data fusion", "C2 integration", "Operator training"],
    conclusion: "End-to-end operational capability.",
    steps: [
      {
        title: "Sensor Selection",
        description: "Choose the right sensors for the mission",
      },
      {
        title: "Data Fusion",
        description: "Correlate data from multiple sources",
      },
      {
        title: "C2 Integration",
        description: "Feed into command and control systems",
      },
      {
        title: "Operator Training",
        description: "Ensure effective system operation",
      },
    ],
  },

  // Scalability Section
  scalability: {
    sectionLabel: "Our Approach",
    title: "Rapid. Proven. Scalable.",
    description:
      "Threats don't wait. New drones appear. Protocols change. Unknown compounds emerge.",
    keyword: "We keep pace.",
    subtitle:
      "Military-proven technology adapts to civilian security needs.\n Same technical core, different operational context. We reconfigure systems to fit your specific environment.",
  },

  // Contact CTA Section
  contact: {
    sectionLabel: "Get in Touch",
    title: "Need a custom solution?",
    description: "Contact us to start the conversation.",
    email: "info@ebtech.kr",
    phone: "+82 31 721 6380",
    cta: "Contact Us",
  },
} as const

export type AboutStrings = typeof about

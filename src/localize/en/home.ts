export const home = {
  hero: {
    title: "Defense Technology for Mission-Critical Operations",
    description1: "System integration and precision engineering for electronic warfare,",
    description2: "chemical warfare, and counter-UAS operations.",
    exploreSolutions: "Explore Solutions",
    contactUs: "Contact Us",
  },

  radar: {
    systemActive: "SYSTEM ACTIVE",
    tracking: "TRACKING",
    scanning: "SCANNING...",
    viewDetails: "View Details",
  },

  solutions: {
    sectionLabel: "Solutions",
    sectionTitle: "Integrated Defense Systems",
    learnMore: "Learn more",
    items: [
      {
        label: "EW",
        title: "EW (Electronic Warfare)",
        description:
          "Advanced signal processing and spectrum management systems for complex operational environments.",
      },
      {
        label: "NC",
        title: "NC (Chemical Warfare)",
        description:
          "Advanced detection, identification, and monitoring systems for chemical agents in contested and hazardous environments.",
      },
      {
        label: "C-UAS",
        title: "C-UAS (Counter-UAS)",
        description:
          "Early detection, identification, and neutralization of unmanned aerial threats to protect critical assets and personnel.",
      },
    ],
  },

  featured: {
    label: "RESOLVE",
    sectionLabel: "Featured Product",
    title: "RESOLVE",
    description:
      "Combining advanced sensor fusion with real-time threat analysis and response coordination.",
    features: [
      "Multi-domain threat detection",
      "Real-time data integration",
      "Scalable architecture",
    ],
    viewSpecs: "View Specifications",
    imageAlt: "RESOLVE defense platform interface",
  },

  capabilities: {
    sectionLabel: "Why EBTech",
    sectionTitle: "Engineering Excellence",
    sectionDescription:
      "We combine cutting-edge technology with proven engineering practices to deliver mission-critical solutions that exceed expectations. Our commitment to excellence drives everything we do.",
    items: [
      {
        title: "End-to-End System Design",
        description:
          "Comprehensive system design and integration services that ensure seamless operation across all components and platforms.",
      },
      {
        title: "Field-Proven Deployment",
        description:
          "Battle-tested solutions with extensive field deployment experience and reliable support infrastructure.",
      },
      {
        title: "Continuous R&D",
        description:
          "Ongoing research and development to stay ahead of emerging threats and evolving operational requirements.",
      },
      {
        title: "Mission-Critical Reliability",
        description:
          "Engineered for the highest standards of reliability and performance in demanding operational environments.",
      },
      {
        title: "Expert Engineering Team",
        description:
          "Dedicated team of engineers with deep expertise in defense technologies and system integration.",
      },
      {
        title: "Custom Solutions",
        description:
          "Tailored solutions designed to meet specific operational needs and integration requirements.",
      },
    ],
  },

  cta: {
    title: "Ready to discuss your requirements?",
    description: "Connect with our engineering team.",
    contactUs: "Contact Us",
  },
} as const

export type HomeStrings = typeof home

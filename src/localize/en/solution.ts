export const solution = {
  label: "Solution",
  title: "Problem-driven defense systems",
  description:
    "Each solution addresses specific operational challenges with integrated hardware and software designed for real-world deployment.",
  learnMore: "Learn more",
  backToSolutions: "All Solutions",
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

  // NC Page
  ncPage: {
    header: {
      label: "Solution",
      title: "NC Defense",
      description: "Comprehensive nuclear and chemical threat detection with integrated monitoring systems for rapid identification, alerting, and coordinated response.",
    },
    architecture: {
      label: "System Architecture",
      title: "Integrated Detection Network",
      description: "Seamless integration of detection sensors, alarm units, and control systems for comprehensive monitoring and rapid response.",
      hoverTitle: "View Product Lineup",
      hoverSubtitle: "Click to explore components",
      footer: "Integration example",
    },
    products: {
      label: "Product Lineup",
      title: "Detection Systems",
      chemproX: "HANDHELD CHEMICAL DETECTOR",
      ncMonitoring: "INTEGRATED DETECTION & CONTROL PLATFORM",
      biobats: "SMART BIOLOGICAL DETECTION & EARLY WARNING SYSTEM",
    },
    protection: {
      label: "Protection Concept",
      title: "Integrated NC Defense Chain",
      items: [
        {
          name: "Early Detection",
          description: "Multi-sensor detection for nerve, blister, choking agents with continuous air and surface sampling.",
        },
        {
          name: "Threat Identification",
          description: "Agent library correlation and automatic alerting for known/unknown chemical signatures.",
        },
        {
          name: "Containment & Isolation",
          description: "Hot/warm/cold zone establishment, ventilation isolation, and personnel routing to reduce exposure.",
        },
        {
          name: "Decontamination & Recovery",
          description: "Guided decon workflows, neutralization tracking, and clearance criteria for safe re-entry.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "NC Defense Solutions",
      description: "Explore our integrated NC detection and monitoring solutions. Contact us for technical specifications and deployment options.",
      button: "Request Information",
    },
  },
} as const

export type SolutionStrings = typeof solution

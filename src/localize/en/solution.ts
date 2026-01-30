export const solution = {
  label: "Solution",
  title: "SOLUTIONS",
  description:
    "Each solution addresses specific operational challenges with integrated hardware and software designed for real-world deployment.",
  learnMore: "Learn more",
  backToSolutions: "All Solutions",
  electronicWarfare: {
    label: "EW",
    title: "Electronic Warfare",
    summary:
      "We intercept adversary communications, radars, and drone signals. We locate sources and deploy jamming.",
  },
  nuclearChemical: {
    label: "NC",
    title: "NC Detection",
    summary:
      "We detect and classify chemical agents and radiological materials early, enabling rapid response.",
  },
  counterUAS: {
    label: "C-UAS",
    title: "Counter-UAS",
    summary:
      "We detect and classify hostile drones, enabling immediate countermeasures.",
  },

  // NC Page
  ncPage: {
    header: {
      label: "Solution",
      title: "NC Detection",
      description: "We detect and classify chemical agents and radiological materials early, enabling rapid response.",
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
      ranidx: "SYSTEM COMPATIBLE RADIATION DETECTOR",
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

  // EW Page
  ewPage: {
    header: {
      label: "Solution",
      title: "Electronic Warfare",
      description: "We intercept adversary communications, radars, and drone signals. We locate sources and deploy jamming.",
    },
    categories: {
      es: {
        label: "ES (Electronic Support)",
        title: "Electronic Support",
      },
      ea: {
        label: "EA (Electronic Attack)",
        title: "Electronic Attack",
      },
      integration: {
        label: "Integration & Software",
        title: "Integration & Software",
      },
    },
    products: {
      label: "Product Lineup",
      title: "Product Lineup",
      goldenBatEws: "Mobile Electronic Warfare Solution",
      ebtPes: "Portable RF Scanner",
      perceive: "Integrated Wideband Sensor",
      resolve: "Tactical Electronic Support System",
      microGoldenBat: "Low-SWaP RESM System",
      phobosM4: "Multi-Channel Electronic Support System",
      deceive: "Electronic Deception System",
      mapview: "EW Integration Software",
      locateT: "Strategic HF Monitoring & Direction Finding",
    },
    systemConfig: {
      label: "System Configuration",
      title: "Core Components",
      items: [
        {
          name: "Signal Intelligence",
          description: "Real-time collection and analysis of electromagnetic signals across operational spectrum.",
        },
        {
          name: "Electronic Attack",
          description: "Directed energy and jamming capabilities for threat neutralization.",
        },
        {
          name: "Electronic Protection",
          description: "Defensive measures to ensure friendly system integrity and communication continuity.",
        },
        {
          name: "Spectrum Management",
          description: "Dynamic allocation and coordination of electromagnetic resources.",
        },
      ],
    },
    relatedProduct: {
      label: "Related Product",
      title: "RESOLVE Platform",
      description: "Our integrated defense platform provides seamless electronic warfare capabilities with real-time sensor fusion and command coordination.",
      button: "Request Information",
    },
  },
  // C-UAS Page
  cuasPage: {
    header: {
      label: "Solution",
      title: "Counter-UAS",
      description: "We detect and classify hostile drones, enabling immediate countermeasures.",
    },
    products: {
      label: "Product Lineup",
      title: "Product Lineup",
      ebtPesDetector: "Drone Detection System",
      ebtPesJammer: "Drone Jamming System",
      spectraC2: "Mobile UAS Detection & Jamming C2",
    },
    capabilities: {
      label: "System Capabilities",
      title: "Integrated Counter-UAS Defense",
      items: [
        {
          name: "Detection & Tracking",
          description: "Multi-sensor detection and tracking of unmanned aerial systems across operational airspace.",
        },
        {
          name: "Identification & Classification",
          description: "Automated threat assessment and classification with real-time alerting and confidence scoring.",
        },
        {
          name: "Neutralization",
          description: "Integrated countermeasures for drone neutralization including RF jamming and directed energy.",
        },
        {
          name: "Command & Control",
          description: "Centralized C2 interface for coordinated response and multi-site management.",
        },
      ],
    },
    relatedProduct: {
      label: "Related Product",
      title: "Counter-UAS Suite",
      description: "Integrated counter-drone detection, tracking, and neutralization with real-time situational awareness and coordinated response capabilities.",
      button: "Request Information",
    },
  },
} as const

export type SolutionStrings = typeof solution

export const microGoldenBat = {
  title: "Micro-GoldenBat",
  subtitle: "ULTRA-COMPACT TACTICAL RADAR ELECTRONIC SUPPORT SYSTEM",
  tagline: "Tactical Intelligence. Deployed Anywhere.",

  highlights: {
    type: "RESM",
    weight: "< 2 kg",
    frequency: "2.0 – 18.0 GHz",
    coverage: "360°",
  },

  overview: {
    title: "Product Overview",
    description:
      "Micro-GoldenBat is an ultra-compact, fully automatic radar ESM system designed to overcome the limitations of conventional RESM systems that relied on large platforms.\nWeighing less than 2 kg, Micro-GoldenBat passively detects and identifies radar signals across the 2–18 GHz band with full 360° coverage.\nThe system can be deployed on soldier-portable configurations, fixed coastal surveillance sites, UAVs, and ground or maritime vehicles.",
    configurationsTitle: "Available in Two Configurations",
    configurations: [
      {
        name: "Micro-GoldenBat 1t",
        description: "Tablet-based interface",
      },
      {
        name: "Micro-GoldenBat 1l",
        description: "Laptop-based interface",
      },
    ],
  },

  features: {
    title: "Key Features",
    items: [
      {
        title: "Ultra-Compact & Lightweight",
        description:
          "Main unit weight under 2 kg with compact dimensions of 180 × 180 × 96 mm, enabling rapid integration across multiple platforms.",
        icon: "feather",
      },
      {
        title: "Wideband Radar Detection",
        description:
          "Wideband frequency coverage from 2.0 to 18.0 GHz with 360° azimuth coverage using four antennas and bearing accuracy of 7° RMS.",
        icon: "radar",
      },
      {
        title: "Advanced Signal Processing",
        description:
          "Processes up to 200,000 pulses per second with simultaneous tracking of over 100 emitters and a scalable defense Mode Library.",
        icon: "cpu",
      },
      {
        title: "Flexible Power Options",
        description:
          "Supports LIPS 14 battery for 3 hours or BB 2590 battery for up to 12 hours. Operates at under 20 W in full mode with swappable battery packs.",
        icon: "battery",
      },
      {
        title: "Data Logging & Storage",
        description:
          "Continuous pulse data logging with real-time streaming or local storage, supporting both internal and external storage devices.",
        icon: "database",
      },
      {
        title: "Passive & Covert Operation",
        description:
          "Passive radar interception only with no active emissions, ensuring covert operation and a low heat signature.",
        icon: "eyeOff",
      },
    ],
  },

  configurations: {
    title: "Configurations",
    tablet: {
      name: "Micro-GoldenBat 1t",
      subtitle: "Tablet-Based",
      bestFor: "Best For",
      items: [
        "Tactical field operations",
        "Individual soldier deployment",
        "Mobile reconnaissance",
        "Quick deployment scenarios",
      ],
    },
    laptop: {
      name: "Micro-GoldenBat 1l",
      subtitle: "Laptop-Based",
      bestFor: "Best For",
      items: [
        "Extended mission analysis",
        "Command post integration",
        "Enhanced processing capability",
        "Detailed data analysis",
      ],
    },
  },

  specs: {
    title: "Specifications",
    categories: {
      performance: {
        title: "Performance",
        items: [
          { label: "Frequency Range", value: "2.0 – 18.0 GHz" },
          { label: "Detection Method", value: "Passive Detection & Auto Identification" },
          { label: "Bearing Accuracy", value: "7° RMS" },
          { label: "Azimuth Coverage", value: "360° (4 antennas)" },
          { label: "Sensitivity", value: "-55 dBm (bearing) / -70 dBm (CW)" },
          { label: "Pulse Processing", value: "Up to 200,000 pulses/sec" },
          { label: "Emitter Library", value: "200 mode lines (expandable)" },
          { label: "Simultaneous Tracking", value: "Up to 100 emitters" },
          { label: "Dynamic Range", value: "50 dB" },
        ],
      },
      physical: {
        title: "Physical Specifications",
        headers: ["Parameter", "Micro-GoldenBat 1t", "Micro-GoldenBat 1l"],
        items: [
          { label: "Main Unit", tablet: "< 2 kg", laptop: "< 2 kg" },
          { label: "Display", tablet: "1 kg (tablet)", laptop: "~1.5 kg (laptop)" },
          { label: "Dimensions", tablet: "180 × 180 × 96 mm", laptop: "180 × 180 × 96 mm" },
          { label: "Environment", tablet: "IP68 (main) / IP65 (tablet)", laptop: "IP68 (main)" },
          { label: "Operating Temperature", tablet: "-20°C to +48°C", laptop: "-20°C to +48°C" },
        ],
      },
    },
  },

  useCases: {
    title: "Use Cases",
    items: [
      {
        title: "Tactical Field Operations",
        subtitle: "Person-portable MANPACK deployment",
        icon: "users",
        applications: [
          "Frontline reconnaissance units",
          "Light Electronic Warfare Troops (LEWTs)",
          "Special operations forces",
          "Border patrol and surveillance",
        ],
        benefits: [
          "Deploy in minutes by untrained operators",
          "Operate in transit with no mobility restrictions",
          "Battery-powered operation for 3–12 hours",
          "Passive covert operation",
        ],
      },
      {
        title: "Coastal Surveillance",
        subtitle: "Fixed installation for 24/7 monitoring",
        icon: "anchor",
        applications: [
          "Coastal border monitoring",
          "Harbor and port security",
          "Maritime domain awareness",
          "Critical infrastructure protection",
        ],
        benefits: [
          "24/7 unattended continuous operation",
          "External power for unlimited runtime",
          "Remote wireless control",
          "Multi-sensor network capability",
        ],
      },
      {
        title: "UAV & Vehicle Integration",
        subtitle: "Multi-platform deployment",
        icon: "plane",
        applications: [
          "UAV/drone payload integration",
          "Small vessel installation",
          "Ground vehicle mounting",
          "Unmanned system integration",
        ],
        benefits: [
          "Ultra-low weight under 2 kg",
          "Multiple mounting options",
          "Extended detection range",
          "Coordinated sensor networks",
        ],
      },
      {
        title: "Distributed Sensor Networks",
        subtitle: "Area coverage with multiple sensors",
        icon: "network",
        applications: [
          "Perimeter security networks",
          "Regional surveillance arrays",
          "Geolocation with two or more sensors",
          "Command and control system integration",
        ],
        benefits: [
          "Scalable architecture",
          "Wireless networking",
          "Coordinated tracking",
          "C2 system integration via API",
        ],
      },
    ],
  },

  contact: {
    text: "To learn more about Micro-GoldenBat and how it can benefit your organization, please contact us at",
    suffix: ".",
  },

  disclaimer: {
    manufacturer: "Micro-GoldenBat is manufactured by ESROE Limited, UK.",
    reseller: "EBT Co., Ltd. is an authorized reseller providing sales and technical support in South Korea.",
    specs: "All specifications are subject to the manufacturer's official documentation.",
  },
} as const

export type MicroGoldenBatStrings = typeof microGoldenBat

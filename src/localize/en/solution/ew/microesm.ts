export const microesm = {
  title: "MicroESM",
  subtitle: "ULTRA-COMPACT TACTICAL ELECTRONIC SUPPORT SYSTEM",
  tagline: "Tactical Radar Electronic Support",

  whatIs: {
    title: "WHAT IS MicroESM?",
    description: "MicroESM is an ultra-compact, distributed tactical electronic warfare solution designed to enhance Electronic Support Measures (ESM) and Electronic Intelligence (ELINT) capabilities. Built on a low-SWaP (Small Size, Weight and Power) platform, MicroESM overcomes the limitations of conventional RESM systems that have relied on large platforms. It can be mounted on various platforms including soldier-portable systems, Unmanned Aerial Vehicles (UAVs), and ground/maritime unmanned systems, passively detecting and identifying radar signals while calculating bearings to support tactical decision-making.",
  },

  features: {
    title: "KEY Features",
    items: [
      {
        title: "Wideband Electromagnetic Surveillance",
        description: "Detects signals to provide comprehensive SIGINT situational awareness",
      },
      {
        title: "Accurate Position & Bearing Calculation",
        description: "Multi-antenna based bearing measurement for tactical threat positioning",
      },
      {
        title: "Tactical ESM Specialization",
        description: "Real-time ELINT acquisition through radar detection, identification, and tracking",
      },
      {
        title: "Ultra-lightweight Portable Design",
        description: "MANPACK configuration under 2kg for individual soldier operation",
      },
      {
        title: "Fully Automated Operation",
        description: "Automatic signal analysis and identification usable by non-specialist personnel",
      },
      {
        title: "Low Detectability & Low Power",
        description: "Low power consumption and heat emission for covert tactical operations",
      },
      {
        title: "Multi-Platform Integration",
        description: "Supports mounting on soldier-portable, UAV, vehicle, and unmanned systems",
      },
      {
        title: "Distributed Network Scalability",
        description: "Integrated electromagnetic situational awareness across the battlefield through multi-sensor networking",
      },
    ],
  },

  specs: {
    title: "Specifications",
    categories: {
      performance: {
        title: "Performance",
        items: [
          { label: "Operational Concept", value: "Tactical ESM / ELINT" },
          { label: "Frequency", value: "2.0 ~ 18.0 GHz" },
          { label: "Detection Method", value: "Passive Detection & Auto Identification" },
          { label: "Bearing Measurement", value: "360° / 7° rms" },
          { label: "Sensitivity", value: "-55 dBm (with bearing) / -70 dBm (CW)" },
          { label: "Signal Processing", value: "Up to 200,000 pulses/sec" },
          { label: "Library", value: "200 mode lines (expandable)" },
          { label: "Simultaneous Tracking", value: "Up to 100" },
        ],
      },
      physical: {
        title: "Physical Characteristics",
        items: [
          { label: "Power", value: "< 20 W (max)" },
          { label: "Power Supply", value: "10 ~ 18 V DC" },
          { label: "Battery", value: "Up to 12 hours" },
          { label: "Size", value: "180 × 180 × 96 mm" },
          { label: "Weight", value: "< 2 kg" },
          { label: "Environment", value: "IP68" },
        ],
      },
      platform: {
        title: "Platform",
        value: "Soldier-portable, UAV, Vehicle, Unmanned Systems",
      },
    },
  },

  contact: {
    text: "To learn more about MicroESM and how it can benefit your organization, please contact us at",
    suffix: ".",
  },
} as const

export type MicroesmStrings = typeof microesm

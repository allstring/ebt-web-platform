export const phobosm4 = {
  title: "Phobos M4",
  subtitle: "WIDEBAND RADAR-BASED TACTICAL ELECTRONIC SUPPORT SYSTEM",
  tagline: "Tactical Radar Electronic Support System",

  whatIs: {
    title: "WHAT IS PHOBOS M4?",
    description: "Phobos M4 is a radar ESM/RWR solution designed for real-time detection and identification of electromagnetic threats in modern battlefield environments. Through passive omnidirectional radar signal detection and analysis capabilities, Phobos M4 rapidly identifies the presence and characteristics of enemy radars, providing covert yet reliable Electronic Support (ESM) capabilities across various military platforms. With combat-proven compact and lightweight design, it effectively enhances tactical decision-making and survivability.",
  },

  features: {
    title: "KEY Features",
    items: [
      {
        title: "Omnidirectional Situational Awareness",
        description: "Comprehensive electromagnetic threat assessment through 360° detection",
      },
      {
        title: "Wideband Reception Capability",
        description: "Response to various radar signals through wide frequency band detection",
      },
      {
        title: "Precision Direction & Position Measurement",
        description: "Threat position estimation based on azimuth analysis",
      },
      {
        title: "Integrated SIGINT Provision",
        description: "Comprehensive SIGINT situational information through real-time signal analysis",
      },
      {
        title: "Passive Operation",
        description: "Covert surveillance without signal transmission",
      },
      {
        title: "Lightweight & Compact Design",
        description: "SWaP-optimized structure for easy portability and mounting",
      },
      {
        title: "MANPACK Operation Capable",
        description: "Portable configuration for individual soldier operation",
      },
      {
        title: "Platform Scalability",
        description: "Applicable to various platforms including vehicles, ships, and unmanned systems",
      },
    ],
  },

  specs: {
    title: "Specifications",
    concept: {
      label: "Operational Concept",
      value: "Passive radar-based tactical electronic support (ESM / SIGINT) system",
    },
    freqRange: {
      label: "Frequency Range",
      value: "2 ~ 18 GHz (Wideband continuous coverage)",
    },
    detectionMethod: {
      label: "Detection Method",
      value: "Omnidirectional (360°) passive reception",
    },
    aoaAccuracy: {
      label: "AOA Accuracy",
      value: "≤ 3° rms (typ.)",
    },
    freqAccuracy: {
      label: "Frequency Measurement Accuracy",
      value: "< 4.5 MHz rms",
    },
    minPulseWidth: {
      label: "Minimum Pulse Width",
      value: "≥ 70 ns (conditional 50 ns)",
    },
    pulseProcessing: {
      label: "Pulse Processing Capability",
      value: "Up to 1,000,000 pulses/sec",
    },
    simultaneousTracking: {
      label: "Simultaneous Tracking Capability",
      value: "Up to 500 simultaneous signal tracking",
    },
    emitterLibrary: {
      label: "Emitter Library",
      value: "≥ 5,000 emitter modes stored",
    },
    responseTime: {
      label: "System Response Time",
      value: "< 1 sec (input → display)",
    },
    power: {
      label: "Power Input",
      value: "9–36 V DC (24 V DC nominal), AC option available",
    },
    consumption: {
      label: "Power Consumption",
      value: "Approx. 80 W (normal operation)",
    },
    temperature: {
      label: "Operating Temperature",
      value: "-40 °C ~ +55 °C",
    },
    weight: {
      label: "Weight",
      value: "Approx. 12 kg main unit (MANPACK capable)",
    },
    deployment: {
      label: "Deployment Mode",
      value: "Fixed / Vehicle / Ship / Portable (MANPACK)",
    },
  },

  contact: {
    text: "To learn more about Phobos M4 and how it can benefit your organization, please contact us at",
    suffix: ".",
  },
} as const

export type Phobosm4Strings = typeof phobosm4

export const ews = {
  title: "GoldenBat-EWS",
  subtitle: "Your Mobile Electronic Warfare Solution",
  tagline: "Dominate the Electromagnetic Spectrum from Anywhere",

  whatIs: {
    title: "WHAT IS GoldenBat-EWS?",
    description: "GoldenBat-EWS is a vehicle-mounted electronic warfare (EW) system designed to provide you with unparalleled situational awareness and control over the electromagnetic spectrum, right where you need it. Combining electronic support (ES) and electronic attack (EA) capabilities, GoldenBat-EWS empowers your forces with the intelligence needed to gain a decisive advantage on the battlefield, regardless of location.",
  },

  features: {
    title: "KEY Features",
    items: [
      {
        title: "Vehicle-Mounted Mobility",
        description: "Deploy GoldenBat-EWS to any location, providing you with the flexibility to respond to evolving threats and seize opportunities.",
      },
      {
        title: "Comprehensive Electronic Warfare",
        description: "Offers a complete suite of ES, EA, and signal monitoring capabilities.",
      },
      {
        title: "Advanced Signal Processing",
        description: "Employs cutting-edge algorithms for accurate signal analysis and threat identification.",
      },
      {
        title: "Wideband Coverage",
        description: "Covers a broad range of frequencies, ensuring comprehensive detection and monitoring.",
      },
      {
        title: "High-Performance Hardware",
        description: "Features powerful hardware components for optimal performance and reliability.",
      },
      {
        title: "User-Friendly Interface",
        description: "Provides an intuitive and easy-to-use interface for operators.",
      },
      {
        title: "Scalable Architecture",
        description: "Can be easily customized and expanded to meet your specific requirements.",
      },
    ],
  },

  specs: {
    title: "Specifications",
    es: {
      title: "ES",
      cesm: {
        title: "CESM",
        items: [
          "30MHz - 6GHz (Optional up to 18GHz)",
          "Direction Finding against hoppers of up to 1000 hops per second",
        ],
      },
      resm: {
        title: "RESM",
        items: [
          "2GHz - 18GHz",
          "Full 360° Azimuth Coverage",
        ],
      },
    },
    ea: {
      title: "EA",
      rxAntenna: {
        title: "Rx Antenna",
        items: [
          "30MHz - 6GHz",
          "6-18GHz(Option)",
        ],
      },
      txAntenna: {
        title: "Tx Antenna",
        items: [
          "30MHz - 6GHz",
        ],
      },
      jammingMode: {
        title: "Jamming Mode",
        items: [
          "Brute Force Mode(Tone, Noise, Multi Tone, Seep, AM modulation)",
          "Barrage Mode",
          "Response Mode",
          "Sequential Brute Mode",
        ],
      },
    },
    sw: {
      title: "SW",
      signalMonitoring: {
        title: "Signal Monitoring",
        description: "Monitoring communication signals with a broadband spectrum",
      },
      signalIdentification: {
        title: "Signal Identification/Signal Classification",
        description: "Accurate signal identification and classification by linking with database and map",
      },
      missionPlanning: {
        title: "Mission Planning/Signal Analysis",
        description: "Workflow-based mission planning, execution, and reporting functions advanced signal analysis functions",
      },
    },
  },

  contact: {
    text: "To learn more about GoldenBat-EWS and how it can benefit your organization, please contact us at",
    suffix: ".",
  },
} as const

export type EwsStrings = typeof ews

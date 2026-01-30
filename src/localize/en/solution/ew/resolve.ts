export const resolve = {
  title: "Resolve",
  subtitle: "TACTICAL ELECTRONIC SUPPORT SYSTEM",
  tagline: "For direction finding and interception",

  whatIs: {
    title: "WHAT IS RESOLVE?",
    description: "RESOLVE is an integral solution for advancing electronic warfare and surveillance. In an increasingly complex and congested electromagnetic spectrum, the need for a highly accurate and operationally proven system to assist military operations is vital. As the world's leading supplier of EW systems, we have developed the highly successful RESOLVE for the military to locate, find and fix adversaries' positions.",
  },

  features: {
    title: "KEY Features",
    items: [
      {
        title: "Whole Picture",
        description: "Entire SIGINT picture with wideband geolocation.",
      },
      {
        title: "Lightweight",
        description: "Easily used as portable manpacks.",
      },
      {
        title: "Effective",
        description: "User friendly human interfaces.",
      },
      {
        title: "Transitional",
        description: "Modular system for short, medium and long haul.",
      },
      {
        title: "Mobile",
        description: "Tablet interface for detailed mobile assessment.",
      },
      {
        title: "Unified",
        description: "Integrates with latest electronic attack equipment.",
      },
      {
        title: "Secure",
        description: "Uses IP-based networking effective data-sharing.",
      },
      {
        title: "Versatile",
        description: "Soldier-portable or vehicle mounted.",
      },
    ],
  },

  specs: {
    title: "Specifications",
    frequency: {
      label: "Frequency",
      value: "40MHz intercept bandwidth (3 MHz to 3 GHz)",
    },
    software: {
      label: "Software",
      value: "Prefix for laptop or Tacfix for tablet",
    },
    scalability: {
      label: "Scalability",
      value: "Mounted or dismounted configurations",
    },
    compatibility: {
      label: "Compatibility",
      value: "A wide range of third-party software for reporting and specialist signals analysis",
    },
    dfAccuracy: {
      label: "Direction Finding Accuracy",
      items: [
        "≤3° RMS 30MHz to 2200MHz",
        "≤10° RMS 2200MHz to 2500MHz",
        "≤20° RMS > 2500MHz",
      ],
    },
  },

  contact: {
    text: "To learn more about RESOLVE and how it can benefit your organization, please contact us at",
    suffix: ".",
  },
} as const

export type ResolveStrings = typeof resolve

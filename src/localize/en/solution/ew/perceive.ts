export const perceive = {
  title: "PERCEIVE Multi-Role (MR)®",
  subtitle: "THE NEXT GENERATION IN INTEGRATED WIDEBAND SENSOR",
  tagline: "The next generation in integrated wideband sensor",

  whatIs: {
    title: "WHAT IS PERCEIVE MR®?",
    description: "PERCEIVE MR® is a Small Form Factor Antenna Head, developed for use at the cutting edge of Electronic Surveillance. It is the first tactical wideband integrated antenna head to utilise both Adaptive Beamforming and Super Resolution Direction Finding technologies in such a small sensor. This approach allows operators to 'see' through the clutter and report pinpoint position fixes with the highest degree of accuracy and the smallest sensor profile.",
  },

  features: {
    title: "KEY Features",
    items: [
      {
        title: "100MHz Instantaneous Bandwidth",
        description: "Covering 2MHz to 6GHz for comprehensive signal detection and analysis.",
      },
      {
        title: "Super Resolution Direction Finding",
        description: "Separates multiple signals on the same channel with precision.",
      },
      {
        title: "32 Digital Drop Channels",
        description: "Multiple simultaneous channel monitoring and analysis capabilities.",
      },
      {
        title: "Adaptive Digital Beamforming",
        description: "Increases sensitivity and reduces co-adjacent channel interference.",
      },
      {
        title: "2°RMS DF Accuracy",
        description: "Azimuth and Elevation direction finding (30MHz - 6GHz).",
      },
      {
        title: "Fast Hopper Intercept",
        description: "Effective intercept of frequency-hopping signals.",
      },
      {
        title: "Dual GNSS Compassing",
        description: "With MEMS inertial sensor data and magnetic compass for accurate positioning.",
      },
      {
        title: "PREFIX/VIPER Software",
        description: "For laptop or screen use with intuitive interface.",
      },
    ],
  },

  specs: {
    title: "Specifications",
    interceptFreq: {
      label: "Intercept Frequency Range",
      value: "2MHz to 6GHz",
    },
    dfFreq: {
      label: "Direction Finding Frequency Range",
      value: "30MHz to 6GHz",
    },
    dfAccuracy: {
      label: "Direction Finding Accuracy",
      items: [
        "30MHz to 500MHz: 2.5 degrees RMS",
        "500MHz to 6GHz: 1.2 degrees RMS",
      ],
    },
    scanSpeed: {
      label: "Scan Speed",
      items: [
        "Fast Scan: 3GHz/sec",
        "DF Scan: 150MHz/sec",
      ],
    },
    lpiPerformance: {
      label: "LPI Performance",
      value: "Up to 1000 Hops/sec",
    },
    systemWeight: {
      label: "System Weight",
      value: "23Kg (Manportable excle batteries)",
    },
    radioheadWeight: {
      label: "Radiohead Weight",
      value: "10Kg",
    },
    systemVolume: {
      label: "System Volume (Radiohead)",
      value: "0.28m × 0.46m",
    },
    software: {
      label: "Software",
      value: "Prefix for laptop or Tacfix for tablet",
    },
  },

  contact: {
    text: "To learn more about PERCEIVE MR® and how it can benefit your organization, please contact us at",
    suffix: ".",
  },
} as const

export type PerceiveStrings = typeof perceive

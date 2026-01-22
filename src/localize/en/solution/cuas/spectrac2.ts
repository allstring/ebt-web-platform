export const spectrac2 = {
  title: "Spectra-C2",
  subtitle: "Mobile UAS Detection & Jamming Command System",
  tagline: "Portable Counter-UAS Solution for Mobile Devices",

  whatIs: {
    title: "WHAT IS Spectra-C2?",
    description: "Spectra-C2 is a next-generation mobile command and control system for UAS detection and jamming. Simply connect detection or jamming devices to your smartphone or tablet to gain real-time situational awareness. With Windows desktop support, you can monitor and control operations from anywhere, making counter-drone operations more accessible than ever.",
  },

  features: {
    title: "KEY Features",
    items: [
      {
        title: "Real-time UAS Detection & Visualization",
        description: "Detect unmanned aerial systems in real-time with visual markers on the map. GPS-based detection radius display (1km/5km/10km) with automatic threat level classification.",
      },
      {
        title: "Threat Level Classification",
        description: "Automatic threat categorization by distance - Critical (red): within 1km, Warning (orange): 1-5km, Monitoring (green): 5-10km, Distant (gray): beyond 10km.",
      },
      {
        title: "Real-time Location Tracking",
        description: "Automatic updates of UAS distance and bearing when GPS position changes. Detection range circles follow your position in real-time with precise distance and bearing calculations.",
      },
      {
        title: "UAS Management",
        description: "View detailed UAS information including ID, location, altitude, and detection time. Track individual UAS through marker clicks with various actions: details/tracking/jamming/delete.",
      },
      {
        title: "Multi-Protocol Communication",
        description: "CoT (Cursor on Target) protocol for receiving UAS information from detectors. Protobuf-based communication for jammer device control.",
      },
      {
        title: "Cross-Platform Support",
        description: "Available on Android smartphones and tablets for mobile operations. Windows desktop support enables comprehensive monitoring and control from command centers.",
      },
    ],
  },

  specs: {
    title: "Technical Specifications",
    items: [
      { label: "Jammer Communication", value: "Protobuf-based bidirectional control" },
      { label: "Detector Protocol", value: "CoT (Cursor on Target) real-time messaging" },
      { label: "Path Prediction", value: "UAS trajectory tracking and prediction algorithm" },
      { label: "Multi-Device Control", value: "Simultaneous control of multiple jammer units" },
      { label: "Logging System", value: "Complete UAS detection history and event logs" },
      { label: "Alert System", value: "Multi-level alarm and push notifications" },
    ],
  },

  platforms: {
    title: "Supported Platforms",
    items: [
      { name: "Android", description: "Mobile app for smartphones and tablets (API 21-34, Android 5.0 Lollipop to Android 14)" },
      { name: "Windows", description: "Desktop application for command center operations and monitoring" },
    ],
  },

  contact: {
    text: "To learn more about Spectra-C2 and how it can enhance your counter-UAS capabilities, please contact us at",
    suffix: ".",
  },
} as const

export type SpectraC2Strings = typeof spectrac2

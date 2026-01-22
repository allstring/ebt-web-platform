export const deceive = {
  title: "EM-Vis Deceive®",
  subtitle: "PERSON-BORNE MULTI-FUNCTION CEMA PLATFORM",
  tagline: "Next-generation tactical electronic warfare system providing electronic deception and SIGINT-based situational awareness in tactical environments",

  whatIs: {
    title: "WHAT IS EM-Vis Deceive®?",
    description: "EM-Vis Deceive® is a person-borne tactical electronic deception and electronic support (CEMA) platform developed by Roke. It is a multi-function tactical electronic warfare system designed to deceive enemy surveillance, reconnaissance, and target acquisition systems in complex and congested electromagnetic spectrum environments while simultaneously providing SIGINT-based situational awareness. Based on modular open architecture, it can flexibly configure frequency settings, RF output, and payload modules according to mission requirements, maximizing mobility and survivability in tactical environments through its lightweight manpack form factor operable by dismounted infantry.",
  },

  features: {
    title: "KEY Features",
    items: [
      {
        title: "Full Situational Awareness",
        description: "Provides battlefield situational awareness based on wideband SIGINT.",
      },
      {
        title: "Electronic Deception Operations",
        description: "Disrupts enemy sensor judgment by generating fake signals and targets.",
      },
      {
        title: "Multi-Function CEMA Platform",
        description: "Simultaneous Electronic Support (ES) and Electronic Deception (ED) mission execution.",
      },
      {
        title: "Modular Open Architecture",
        description: "Mission-tailored configuration based on SOSA™ / OpenVPX™.",
      },
      {
        title: "Lightweight Design",
        description: "Person-borne manpack operation capable.",
      },
      {
        title: "High-Power RF Operations",
        description: "Up to 20W RF output per radiohead.",
      },
      {
        title: "Real-Time Operations Support",
        description: "Real-time data processing based on high-speed network.",
      },
      {
        title: "Scalability & Interoperability",
        description: "Integrated operation with C2 and other tactical systems.",
      },
    ],
  },

  specifications: {
    title: "Specifications",
    note: "※ Subject to change based on system configuration and payload modules",
    general: {
      title: "General",
      items: [
        { label: "Form Factor", value: "Person-Borne" },
        { label: "System Type", value: "Multi-Function CEMA Platform" },
        { label: "Size", value: "< 300 × 300 × 100 mm" },
        { label: "Weight", value: "< 10 kg (excluding Payload)" },
        { label: "Power Input", value: "18–36 V DC (Battery / Vehicle Power Options)" },
        { label: "Power Consumption", value: "Dependent on application and Payload" },
      ],
    },
    rf: {
      title: "RF / EW Performance",
      items: [
        { label: "RF Configuration", value: "2 × Radiohead" },
        { label: "RF Distribution Band", value: "20 MHz – 6 GHz" },
        { label: "RF Bandwidth", value: "2 × 100 MHz (SDR Payload basis)" },
        { label: "Output Amplification", value: "2 × 20 W" },
        { label: "Antenna Interface", value: "N-Type" },
      ],
    },
    processing: {
      title: "Processing & Network",
      items: [
        { label: "Payload Slots", value: "2 × SOSA™ aligned 3U OpenVPX" },
        { label: "Network", value: "Up to 40 GbE" },
        { label: "SDR", value: "Pre-validated SDR or customer OpenCPI application support" },
      ],
    },
    pnt: {
      title: "PNT / Sensors",
      items: [
        { label: "Position & Time", value: "Integrated GNSS" },
        { label: "Options", value: "CSAC, Inertial Navigation Unit (INU)" },
      ],
    },
    environmental: {
      title: "Environmental & Standards",
      items: [
        { label: "Operating Temperature", value: "-32 ~ +55 ℃" },
        { label: "Storage Temperature", value: "-40 ~ +70 ℃" },
        { label: "Cooling", value: "Conduction Cooled Payload / Forced Air Cooling" },
        { label: "Standards Alignment", value: "VITA 46.0 / 65.0 / 67.3, STICS" },
        { label: "Military Standards", value: "AECTP 300 / 400 / 500 (Environmental / Mechanical / EMC)" },
      ],
    },
  },

  contact: {
    text: "To learn more about EM-Vis Deceive® and how it can benefit your organization, please contact us at",
    suffix: ".",
  },
} as const

export type DeceiveStrings = typeof deceive

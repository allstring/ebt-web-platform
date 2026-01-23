export const ncm = {
  title: "NC MONITORING SYSTEM",
  subtitle: "DETECTION SYSTEM COMPATIBLE CHEMICAL DETECTOR",
  tagline: "ONE DETECTOR TO BIND THEM ALL",

  whatIs: {
    title: "WHAT IS NC MONITORING SYSTEM?",
    descriptions: [
      "One detector to bind them all. NC MONITORING SYSTEM is a chemical detector for fixed installations, which allows for both independent usage and system integration, featuring a local display with full CBRN system status.",
      "Designed and developed for being a resourceful instrument, NC MONITORING SYSTEM permanently monitors, detects and classifies CWA's and TIC's, while it can serve as a network melting pot for other system components communication.",
      "NC MONITORING SYSTEM combines chemical detector performance and CBRN System Monitoring capabilities. All connected CBRN System network devices' statuses can be checked in ChemProX-DS user interface. Featuring industry-leading sensitivity and false alarm rejection, NC MONITORING SYSTEM is the most user friendly and low-maintenance package of its class.",
    ],
  },

  features: {
    title: "KEY FEATURES",
    items: [
      "24/7 chemical detection (CWA/TICs)",
      "Gamma-ray and Neutron detection",
      "Versatile communication and connectivity",
      "Local display with full system status",
      "Built-in maintenance & instruction tools for operator guidance",
      "Robust design for indoor & outdoor applications",
      "Integrate to 3rd party systems (Modbus interface)",
      "Automatic relay control",
      "Compatible with previous Environics systems",
      "Online software updates available",
    ],
  },

  systemConfig: {
    title: "System Configuration",
  },

  specs: {
    title: "Specifications",
    chemproDS: {
      title: "(ChemPro-X DS)",
      size: { label: "Size", value: "Approx. 240 x 230 x 78 mm (9.4\"L x 9\"W x 3\"D)" },
      weight: { label: "Weight", value: "Approx. 2.5 kg (88.9 oz)" },
      detection: {
        label: "Detection Technology",
        description: "Orthogonal detection using:",
        items: [
          "Open-loop (aspirated) IMS cell",
          "Multiple semiconductor sensors",
          "Under exemption limit Ni-63 (90MBq) radiation source",
        ],
      },
      modes: { label: "Detection Modes", value: "CWA, TIC" },
      power: { label: "Power", value: "9-33 VDC (MIL-STD-1275)" },
      interface: {
        label: "Interface Protocol",
        items: ["Modbus TCP/IP (Ethernet)", "Modbus RTU (RS-485/RS-422)"],
      },
    },
    radioactive: {
      title: "(Radioactive detector)",
      gamma: {
        title: "Sensor (Gamma-Ray)",
        type: { label: "Type", value: "NaI(Tl) Scintillator(Low Range) Temperature Compensated 5 level Energy Compensated Semiconductor(High Range)" },
        range: { label: "Range", value: "0.001 uSv/h ~ 4 Sv/h", error: "error <15%" },
        sensitivity: { label: "Sensitivity", value: "> 30000 cpm/uSv/h" },
        energyRange: { label: "Energy Range", value: "50 keV ~ 3000 keV" },
        responseTime: { label: "Response Time", value: "< 2s" },
      },
      neutron: {
        title: "Sensor (Neutron)",
        type: { label: "Type", value: "6LiF + ZnS:Ag Scintillator" },
        range: { label: "Range", value: "0~ 1,000,000 CPM" },
        efficiency: { label: "Efficiency", thermal: "Thermal N : > 55%", fast: "Fast N : >1%" },
        rangeAlt: { label: "Range", value: "1 uSv/h ~ 10 Sv/h" },
        energy: { label: "Energy", value: "0.025 eV ~ 10 Mev" },
      },
      other: {
        title: "Other",
        power: { label: "Power", value: "DC 9~ 18V Power <3W" },
        communication: { label: "Communication", value: "RS485, RS232, 9600 bps, 8bit, 1stop, No" },
        size: {
          label: "Size",
          body: "Body : dia 51mm X h 187 mm ~ 1200 g",
          stand: "Stand : dia 150 mm x h 133mm ~150 g",
        },
        material: {
          label: "Material",
          body: "Body : SUS304 (2mm thickness)",
          stand: "Stand : ABS(black) - 3d printed",
        },
        misc: {
          label: "Miscellaneous",
          startTime: "Start Time : < 30 sec",
          protection: "Protection : IP67",
          operationTemp: "Operation Temp : -30 ~ 50 'C",
          shelfTemp: "Shelf Temp : -40 ~70 'C",
        },
      },
    },
  },

  application: {
    title: "Application",
    description: "NC Monitoring System is designed in a rugged housing to endure harsh and demanding environmental conditions, making it suitable for mobile and stationary detection systems. This includes platforms such as vessels, military vehicles, and critical infrastructures.",
    items: [
      "Naval & Maritime CBRN Monitoring",
      "Armoured CBRN Reconnaissance",
      "Armoured CBRN Monitoring",
      "Light CBRN Reconnaissance",
      "Building CBRN Monitoring",
      "Shelter CBRN Monitoring",
      "Unmanned CBRN Monitoring",
      "USV CBRN Monitoring",
    ],
  },

  contact: {
    text: "To learn more about NC MONITORING SYSTEM and how it can benefit your organization, please contact us at",
    suffix: ".",
  },
} as const

export type NcmStrings = typeof ncm

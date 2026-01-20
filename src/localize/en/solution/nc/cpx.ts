export const cpx = {
  title: "CHEMPRO X",
  subtitle: "HANDHELD CHEMICAL DETECTOR",
  tagline: "XPAND YOUR SAFETY",

  whatIs: {
    title: "WHAT IS CHEMPRO X?",
    description: "ChemProX belongs to a new generation of chemical detectors, so, it allows for full situational awareness during field operations. It features a built-in simulation training mode and an embedded chemical database with operational instructions. As a result, ChemProX enables any team to detect and classify CWA's and TIC's.",
  },

  benefits: {
    title: "KEY Benefits",
    items: [
      "Wide Range of Detectable CWAs & TICs",
      "Wireless Network Connectivity",
      "Built-in GPS and Group Location",
      "Simulation Training Mode",
      "Chemical Database and Instructions",
      "Optimized Usability",
      "Lowest Maintenance Costs in Its Class",
      "UAV & UGV Use Without Integration",
      "Optional Full CBRN Detection Capability",
    ],
  },

  specs: {
    title: "Specifications",
    size: {
      label: "Size",
      value: "Approx. 160 x 100 x 50 mm (6.3\"L x 3.9\"W x 2\"D)",
    },
    weight: {
      label: "Weight",
      value: "Approx. 770 g (27 oz.) (w/Li-Ion battery)",
    },
    detection: {
      label: "Detection Technology",
      description: "Orthogonal detection using:",
      items: ["Open-loop (aspirated) IMS cell", "Multiple semiconductor sensors"],
    },
    modes: {
      label: "Detection Modes",
      value: "CWA/TICs",
    },
    training: {
      label: "Training",
      value: "Built-in training mode",
    },
    connectivity: {
      label: "Connectivity",
      items: [
        "WLAN, WPAN, Radio Data",
        "USB memory stick",
        "Ethernet (optional accessory)",
        "Up to 10 device per group with radio data",
      ],
    },
    milStandard: {
      label: "MIL Standard Compliance",
      items: ["MIL-STD-810G", "MIL-STD-461G", "MIL-STD-1275D"],
      note: "(full list of conducted tests available on request)",
    },
    dustWater: {
      label: "Dust & Water Resistance",
      value: "IP67, MIL-STD-810G",
    },
  },

  application: {
    title: "Application",
    description: "ChemProX is a versatile chemical detector therefore, it can be used both as a handheld equipment, or as stand-off component, as part of a field deployable network. ChemProX chemical detection performance is proven to be effective many different applications. For example, in single use (when the device is used as a conventional chemical detector), group use, perimeter monitoring network use, unmanned ground and air vehicles use, among others.",
    items: [
      "First Responders",
      "Military",
      "Mounting on Drone",
      "Border CBRN Monitoring",
      "Armoured CBRN Reconnaissance",
      "Light CBRN Reconnaissance",
    ],
  },

  contact: {
    text: "To learn more about CHEMPRO X and how it can benefit your organization, please contact us at",
    emailLabel: "email",
    phoneLabel: "phone",
    suffix: ".",
  },
} as const

export type CpxStrings = typeof cpx

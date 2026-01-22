export const ranidx = {
  title: "RanidX",
  subtitle: "SYSTEM COMPATIBLE RADIATION DETECTOR",
  tagline: "WE SENSE & DETECT FOR A SAFER WORLD",

  whatIs: {
    title: "Reliable Radiation Monitoring",
    description: "The RanidX allows real-time gamma and X-ray radiation monitoring in mobile and fixed applications, detecting and measuring radiation down to low levels (L.L.R). The RanidX provides dose rate and status readings through the software interface. When connected to the ChemProX-DS, the current dose rate, accumulated dose readings and alarms are indicated on the user interface. By using two or more RanidX detectors in a system, it is also possible to monitor the radiation direction on the ChemProX-DS or CBRN Monitoring Software. The RanidX is fully tested against relevant MIL-standards and IACS UR E10. The mechanical design and small size allows flexible integration to multiple application solutions such as vehicles, vessels, UAVs/UGVs and critical infrastructures.",
  },

  benefits: {
    title: "KEY FEATURES",
    items: [
      "Continuous use 24/7/365",
      "Easy and flexible installation to different applications",
      "Compact for installation",
      "No consumables",
      "Fast response time",
      "Many communication options and software interface for 3rd party system integration",
      "Compact & flexible design for seamless integration",
      "Fast Gamma & X-ray radiation detection",
      "High reliability, tested against MIL & IACS UR E10",
    ],
  },

  specs: {
    title: "Technical Data",
    size: {
      label: "Size",
      value: "Approx. 160 x 120 x 44 mm (6.3\"L x 4.7\"W x 1.7\"H)",
    },
    weight: {
      label: "Weight",
      value: "Approx. 1.2 kg (42.3 oz)",
    },
    material: {
      label: "Material",
      value: "Stainless Steel (AISI316), powder coat, color RAL7035 (light grey)",
    },
    detection: {
      label: "Detection Technology",
      value: "Geiger-Müller tube",
    },
    detectedRadiation: {
      label: "Detected Radiation",
      value: "Gamma and X-ray radiation",
    },
    doseRate: {
      label: "Dose Rate",
      value: "0.01µSv/h to 10Sv/h",
    },
    energyRange: {
      label: "Energy Range",
      value: "50KeV to 3MeV (50KeV to 1.3MeV tested)",
    },
    communication: {
      label: "Communication",
      items: ["Ethernet", "RS-485", "PoE", "USB"],
    },
    powerInput: {
      label: "Power Input",
      value: "9-33 VDC, Power over Ethernet (PoE)",
    },
    tempOperating: {
      label: "Temperature (Operating)",
      value: "-32°C to 55°C (-25.6°F to 131°F), MIL-STD-810G*",
    },
    tempStorage: {
      label: "Temperature (Storage)",
      value: "-46°C to 85°C (-50.8°F to 185°F), MIL-STD-810G*",
    },
    humidity: {
      label: "Humidity",
      value: "0-100%, MIL-STD-810G*",
    },
    dustWater: {
      label: "Dust & Water Resistance",
      value: "IP67",
    },
    shockResistance: {
      label: "Shock Resistance",
      value: "MIL-STD-810G*, MIL-DTL-910E",
    },
    vibrationResistance: {
      label: "Vibration Resistance",
      value: "MIL-STD-810G* and IACS UR E10*",
    },
    emcOther: {
      label: "EMC & Other",
      value: "MIL-STD-461G*, IACS UR E10 / DNV-CG-0339*, MIL-STD-1275E*",
    },
    chemproXDS: {
      label: "Additional with ChemProX-DS UI",
      items: [
        "Dose rate and dose readings",
        "Alarm history functions",
        "Data logging",
        "Trend display",
        "Modbus interface to the 3rd party systems",
      ],
    },
    warranty: {
      label: "Warranty",
      value: "1-year standard warranty. Extended and comprehensive warranties available.",
    },
    optionalAccessories: {
      label: "Optional Accessories",
      value: "MIL connector, Cable interface through to surface",
    },
    milNote: "* Tested against relevant parts. Full list of conducted tests available on request.",
  },

  application: {
    title: "Application",
    description: "The RanidX's compact design and robust construction make it suitable for a wide range of radiation monitoring applications. Its flexible integration capabilities allow deployment in vehicles, vessels, UAVs/UGVs, and critical infrastructure protection systems.",
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
    text: "To learn more about RanidX and how it can benefit your organization, please contact us at",
    emailLabel: "email",
    phoneLabel: "phone",
    suffix: ".",
  },
} as const

export type RanidxStrings = typeof ranidx

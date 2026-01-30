export const nav = {
  home: "HOME",
  about: "ABOUT US",
  solution: "SOLUTIONS",
  rnd: "R&D with Technology",
  contact: "CONTACT",
  selectLanguage: "Select language",
  switchToDark: "Switch to dark mode",
  switchToLight: "Switch to light mode",
  openMenu: "Open menu",
  solutionDropdown: {
    viewAll: "All Solutions",
    ew: {
      title: "Electronic Warfare",
      items: {
        goldenBatEws: "GoldenBat-EWS",
        perceive: "Perceive",
        resolve: "Resolve",
        microGoldenBat: "Micro-GoldenBat",
        phobosM4: "Phobos M4",
        deceive: "Deceive",
        mapview: "MapView",
      },
    },
    nc: {
      title: "NC Detection",
      items: {
        chemproX: "ChemPro-X",
        ncMonitoring: "NC Monitoring System",
        ranidX: "RanidX",
      },
    },
    cuas: {
      title: "Counter-UAS",
      items: {
        ebtPes: "eBT-PES",
        spectraC2: "Spectra-C2",
      },
    },
  },
} as const

export type NavStrings = typeof nav

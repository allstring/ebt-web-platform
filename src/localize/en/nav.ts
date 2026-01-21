export const nav = {
  home: "Home",
  about: "About Us",
  solution: "Solution",
  rnd: "R&D with Technology",
  contact: "Contact & Career",
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
        perceive: "PERCEIVE",
        resolve: "RESOLVE",
        microEsm: "MicroESM",
        phobosM4: "PHOBOS M4",
        deceive: "DECEIVE",
        mapview: "MAPVIEW",
      },
    },
    nc: {
      title: "NC Defense",
      items: {
        chemproX: "CHEMPRO-X",
        ncMonitoring: "NC Monitoring System",
      },
    },
    cuas: {
      title: "Counter-UAS",
      items: {
        ebtPes: "eBT-PES",
      },
    },
  },
} as const

export type NavStrings = typeof nav

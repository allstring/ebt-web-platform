export const nav = {
  home: "홈",
  about: "회사 소개",
  solution: "솔루션",
  rnd: "R&D 및 기술",
  contact: "연락처 및 채용",
  selectLanguage: "언어 선택",
  switchToDark: "다크 모드로 전환",
  switchToLight: "라이트 모드로 전환",
  openMenu: "메뉴 열기",
  solutionDropdown: {
    viewAll: "전체 솔루션",
    ew: {
      title: "전자기전",
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
      title: "화학/방사능 탐지",
      items: {
        chemproX: "ChemPro-X",
        ncMonitoring: "NC Monitoring System",
        ranidX: "RanidX",
      },
    },
    cuas: {
      title: "대드론",
      items: {
        ebtPes: "eBT-PES",
        spectraC2: "Spectra-C2",
      },
    },
  },
} as const

export type NavStrings = typeof nav

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
        perceive: "PERCEIVE",
        resolve: "RESOLVE",
        microEsm: "MicroESM",
        phobosM4: "PHOBOS M4",
        deceive: "DECEIVE",
        mapview: "MAPVIEW",
      },
    },
    nc: {
      title: "NC 방어",
      items: {
        chemproX: "CHEMPRO-X",
        ncMonitoring: "NC 모니터링 시스템",
      },
    },
    cuas: {
      title: "대드론 방어",
      items: {
        ebtPes: "eBT-PES",
      },
    },
  },
} as const

export type NavStrings = typeof nav

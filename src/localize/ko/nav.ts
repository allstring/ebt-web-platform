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
} as const

export type NavStrings = typeof nav

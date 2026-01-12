export const nav = {
  home: "ホーム",
  about: "会社概要",
  solution: "ソリューション",
  rnd: "R&D・技術",
  contact: "お問い合わせ・採用",
  selectLanguage: "言語を選択",
  switchToDark: "ダークモードに切替",
  switchToLight: "ライトモードに切替",
  openMenu: "メニューを開く",
} as const

export type NavStrings = typeof nav

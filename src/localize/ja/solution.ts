export const solution = {
  label: "ソリューション",
  title: "課題解決型の防衛システム",
  description:
    "各ソリューションは、実戦配備向けに設計された統合ハードウェアとソフトウェアで、特定の作戦課題に対応します。",
  learnMore: "詳細を見る",
  electronicWarfare: {
    title: "電子戦",
    summary:
      "複雑な電磁環境に対応する信号処理およびスペクトラム管理システム。",
  },
  chemicalWarfare: {
    title: "化学戦",
    summary:
      "危険な作戦環境における化学剤の検知・識別・監視システム。",
  },
  biologicalWarfare: {
    title: "生物戦",
    summary:
      "生物学的脅威の早期識別のための高感度検知・分析システム。",
  },
} as const

export type SolutionStrings = typeof solution

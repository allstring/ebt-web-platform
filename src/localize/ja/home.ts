export const home = {
  hero: {
    title: "ミッションクリティカルな作戦のための防衛技術",
    description1: "電子戦、化学戦、生物戦のための",
    description2: "システム統合と精密エンジニアリング。",
    exploreSolutions: "ソリューションを見る",
    contactUs: "お問い合わせ",
  },

  radar: {
    systemActive: "システム稼働中",
    tracking: "追跡中",
    scanning: "スキャン中...",
    viewDetails: "詳細を見る",
  },

  solutions: {
    sectionLabel: "ソリューション",
    sectionTitle: "統合防衛システム",
    learnMore: "詳細を見る",
    items: [
      {
        label: "EW",
        title: "電子戦",
        description:
          "複雑な作戦環境向けの高度な信号処理およびスペクトラム管理システム。",
      },
      {
        label: "NC",
        title: "化学戦",
        description:
          "紛争および危険環境における化学剤の高度な検知、識別、監視システム。",
      },
      {
        label: "C-UAS",
        title: "生物戦",
        description:
          "生物学的脅威を特定し、迅速な対応作戦を支援するために設計された高感度検知・分析システム。",
      },
    ],
  },

  featured: {
    label: "RESOLVE",
    sectionLabel: "主力製品",
    title: "RESOLVE",
    description:
      "リアルタイムの脅威分析と対応調整を組み合わせた高度なセンサーフュージョンを提供する、当社の主力統合防衛プラットフォーム。",
    features: [
      "マルチドメイン脅威検知",
      "リアルタイムデータ統合",
      "スケーラブルなアーキテクチャ",
    ],
    viewSpecs: "仕様を見る",
    imageAlt: "RESOLVE防衛プラットフォームインターフェース",
  },

  capabilities: {
    sectionLabel: "EBTechを選ぶ理由",
    sectionTitle: "エンジニアリングエクセレンス",
    sectionDescription:
      "最先端技術と実績あるエンジニアリング手法を組み合わせ、期待を超えるミッションクリティカルなソリューションを提供します。卓越性への取り組みがすべてを推進します。",
    items: [
      {
        title: "エンドツーエンドシステム設計",
        description:
          "すべてのコンポーネントとプラットフォームにわたるシームレスな運用を保証する包括的なシステム設計と統合サービス。",
      },
      {
        title: "実戦検証済み展開",
        description:
          "豊富なフィールド展開経験と信頼性の高いサポートインフラストラクチャを備えた実戦検証済みソリューション。",
      },
      {
        title: "継続的なR&D",
        description:
          "新たな脅威と進化する作戦要件に先んじるための継続的な研究開発。",
      },
      {
        title: "ミッションクリティカルな信頼性",
        description:
          "厳しい作戦環境で最高水準の信頼性とパフォーマンスを実現するよう設計。",
      },
      {
        title: "専門エンジニアリングチーム",
        description:
          "防衛技術とシステム統合に関する深い専門知識を持つ専任エンジニアチーム。",
      },
      {
        title: "カスタムソリューション",
        description:
          "特定の作戦ニーズと統合要件を満たすように設計されたカスタマイズソリューション。",
      },
    ],
  },

  cta: {
    title: "ご要件についてご相談されますか？",
    description: "エンジニアリングチームにご連絡ください。",
    contactUs: "お問い合わせ",
  },
} as const

export type HomeStrings = typeof home

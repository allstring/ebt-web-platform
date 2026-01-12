export const contact = {
  hero: {
    sectionLabel: "お問い合わせ・採用",
    title: "お問い合わせ",
    description: "お問い合わせ、パートナーシップ、または採用機会について私たちのチームにご連絡ください。",
  },

  location: {
    sectionLabel: "所在地",
    title: "アクセス",
    description: "オフィスへのご訪問または道順をご確認ください。",
    companyName: "EBT株式会社",
    addressLabel: "住所",
    address: "大韓民国 京畿道 城南市 寿井区 創業路54, 504号",
    phoneLabel: "電話",
    phone: "+82-31-721-6375",
    emailLabel: "メール",
    emailDescription: "一般的なお問い合わせ - EBTechと私たちの能力についてのご質問",
    email: "info@ebtech.kr",
  },

  career: {
    sectionLabel: "採用",
    title: "EBTに参加する",
    description: "グローバルリーダーに成長する人材をお待ちしています。",
    applicationDocs: "応募書類",
    download: "ダウンロード",
    docs: [
      {
        title: "応募フォーム (HWP)",
        description: "韓国語HWPファイル",
      },
      {
        title: "応募フォーム (WORD)",
        description: "Wordファイル",
      },
      {
        title: "応募フォーム (PDF)",
        description: "PDFファイル",
      },
    ],
    resumeText: "履歴書を送信してください",
  },
} as const

export type ContactStrings = typeof contact

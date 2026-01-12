export const notFound = {
  title: "ページが見つかりません",
  description: "お探しのページは存在しないか、移動された可能性があります。",
  goHome: "ホームへ",
  goBack: "戻る",
} as const

export type NotFoundStrings = typeof notFound

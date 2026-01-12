export const notFound = {
  title: "페이지를 찾을 수 없습니다",
  description: "요청하신 페이지가 존재하지 않거나 이동되었습니다.",
  goHome: "홈으로",
  goBack: "뒤로 가기",
} as const

export type NotFoundStrings = typeof notFound

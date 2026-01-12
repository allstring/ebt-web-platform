export const solution = {
  label: "솔루션",
  title: "문제 해결 중심의 국방 시스템",
  description:
    "각 솔루션은 실전 배치를 위해 설계된 통합 하드웨어 및 소프트웨어로 특정 작전 과제를 해결합니다.",
  learnMore: "자세히 보기",
  electronicWarfare: {
    title: "전자전",
    summary:
      "복잡한 전자기 환경을 위한 신호 처리 및 주파수 관리 시스템.",
  },
  chemicalWarfare: {
    title: "화학전",
    summary:
      "위험한 작전 환경에서 화학작용제를 탐지, 식별 및 모니터링하는 시스템.",
  },
  biologicalWarfare: {
    title: "생물전",
    summary:
      "생물학적 위협의 조기 식별을 위한 고감도 탐지 및 분석 시스템.",
  },
} as const

export type SolutionStrings = typeof solution

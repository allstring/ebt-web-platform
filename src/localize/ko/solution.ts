export const solution = {
  label: "솔루션",
  title: "현장의 문제를 해결하는 국방 시스템",
  description:
    "EBT의 모든 솔루션은 실제 작전 현장의 까다로운 요구사항을 반영합니다. 실전 투입을 위해 설계된 하드웨어와 소프트웨어의 완벽한 통합을 경험해 보십시오.",
  learnMore: "자세히 보기",
  electronicWarfare: {
    title: "전자전 대응",
    summary:
      "복잡한 전자기 환경에서의 정밀한 신호 처리 및 효율적인 주파수 대역 관리 솔루션을 제공합니다.",
  },
  chemicalWarfare: {
    title: "화학전 대응",
    summary:
      "고위험 작전 환경 내 화학 작용제를 실시간으로 탐지하고 식별하며 모니터링하는 첨단 시스템입니다.",
  },
  biologicalWarfare: {
    title: "생물학전 대응",
    summary:
      "생물학적 위협을 조기에 발견하고 신속히 대응할 수 있도록 돕는 고감도 탐지 및 정밀 분석 시스템입니다.",
  },
} as const

export type SolutionStrings = typeof solution
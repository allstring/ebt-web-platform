export const solution = {
  label: "솔루션",
  title: "현장의 문제를 해결하는 국방 시스템",
  description:
    "EBT의 모든 솔루션은 실제 작전 현장의 까다로운 요구사항을 반영합니다. 실전 투입을 위해 설계된 하드웨어와 소프트웨어의 완벽한 통합을 경험해 보십시오.",
  learnMore: "자세히 보기",
  electronicWarfare: {
    label: "EW",
    title: "전자전 대응",
    summary:
      "복잡한 전자기 환경에서의 정밀한 신호 처리 및 효율적인 주파수 대역 관리 솔루션을 제공합니다.",
  },
  chemicalWarfare: {
    label: "NC",
    title: "화학전 대응",
    summary:
      "고위험 작전 환경 내 화학 작용제를 실시간으로 탐지하고 식별하며 모니터링하는 첨단 시스템입니다.",
  },
  counterUAS: {
    label: "C-UAS",
    title: "대드론전 대응",
    summary:
      "무인 항공기 위협을 조기에 탐지하고, 식별 및 무력화하여 핵심 자산과 인원을 보호합니다.",
  },
} as const

export type SolutionStrings = typeof solution
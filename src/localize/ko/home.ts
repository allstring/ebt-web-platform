export const home = {
  mainTitle: {
    line1: "EVOLVE",
    line2: "BATTLEFIELD",
    line3: "TECHNOLOGIES",
  },
  tagline: "전자기전 · 대드론 · 화학/방사능 탐지\n통합 시스템 설계 전문 이비티㈜",
  features: [
    "민·군 실적 보유 검증된 시스템",
    "다양한 운용 환경 적용 가능",
    "현장 즉시 배치 가능",
  ],
  paragraphs: [
    "이비티(주)는 전자기전, 대드론, 화학방사능 탐지 분야를 전문으로 합니다.",
    "EBT는 Evolve Battlefield Technologies의 약자로, \n전장이 진화하면 이를 보호하는 기술 역시 진화해야 한다는\n우리의 핵심 철학을 담고 있습니다.",
    "복잡하고 빠르게 변화하는 오늘날의 위협 환경에 대응하는\n즉시 투입 가능한 시스템을 공급합니다.",
    "이비티(주)는 글로벌 선도 기술 파트너들과 협력하여\n세계 수준의 방어 솔루션을 제공합니다.",
  ]
} as const;

export type HomeStrings = typeof home;
export const deceive = {
  title: "EM-Vis Deceive®",
  subtitle: "전술 전자정보·기만 지원 체계",
  tagline: "전자기 스펙트럼에서 적의 인식을 교란",

  whatIs: {
    title: "EM-Vis Deceive®란?",
    description: "EM-Vis Deceive®는 전자기 스펙트럼 환경에서 적의 감시·정찰 및 표적획득 체계를 혼란시키기 위한 전술 전자기만(Electronic Deception) 솔루션입니다. 현대 전장은 다중 센서와 네트워크 중심의 감시 체계로 빠르게 발전하고 있으며, 이에 따라 단순한 탐지 회피를 넘어 적의 인식과 판단을 왜곡하는 능력이 점점 더 중요해지고 있습니다.",
  },

  features: {
    title: "주요 특징",
    items: [
      {
        title: "전체 상황 파악",
        description: "광대역 SIGINT 기반 전장 상황 인식 제공.",
      },
      {
        title: "전자기만 운용",
        description: "가짜 신호·표적 생성으로 적 센서 교란.",
      },
      {
        title: "정밀 위치 산출",
        description: "전자신호 고정밀 탐지 및 위치 추정.",
      },
      {
        title: "소프트웨어 중심",
        description: "임무 기반 기능 확장 및 신속한 업데이트.",
      },
      {
        title: "경량화 설계",
        description: "휴대용 맨팩 형태로 기동성 확보.",
      },
      {
        title: "실시간 운용",
        description: "전자기 스펙트럼 정보 실시간 제공.",
      },
      {
        title: "통합 연동",
        description: "C2 및 전술 자산과 연동 운용.",
      },
      {
        title: "군 운용 신뢰성",
        description: "실전 검증된 안정성과 신뢰성.",
      },
    ],
  },

  contact: {
    text: "EM-Vis Deceive®에에 대해 더 알아보고 조직에 어떤 이점이 있는지 확인하시려면",
    suffix: "로 문의해 주세요.",
  },
} as const

export type DeceiveStrings = typeof deceive

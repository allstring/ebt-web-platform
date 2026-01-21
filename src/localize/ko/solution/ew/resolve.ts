export const resolve = {
  title: "RESOLVE",
  subtitle: "전술 전자지원 시스템",
  tagline: "방향 탐지 및 감청을 위한 솔루션",

  whatIs: {
    title: "RESOLVE란?",
    description: "RESOLVE는 전자전 및 감시 능력 향상을 위한 통합 솔루션입니다. 점점 복잡해지고 혼잡해지는 전자기 스펙트럼 환경에서, 군사 작전을 지원하기 위한 고정밀의 실전 검증된 시스템의 필요성이 중요해지고 있습니다. 세계 최고의 EW 시스템 공급업체로서, 우리는 적의 위치를 탐지, 발견 및 고정하기 위한 군용 RESOLVE를 성공적으로 개발했습니다.",
  },

  features: {
    title: "주요 특징",
    items: [
      {
        title: "전체 상황 파악",
        description: "광대역 위치 측정을 통한 전체 SIGINT 상황 제공.",
      },
      {
        title: "경량화",
        description: "휴대용 맨팩으로 쉽게 사용 가능.",
      },
      {
        title: "효율성",
        description: "사용자 친화적인 인터페이스.",
      },
      {
        title: "전환성",
        description: "단거리, 중거리 및 장거리용 모듈식 시스템.",
      },
      {
        title: "기동성",
        description: "상세한 모바일 평가를 위한 태블릿 인터페이스.",
      },
      {
        title: "통합성",
        description: "최신 전자공격 장비와 통합 가능.",
      },
      {
        title: "보안성",
        description: "IP 기반 네트워킹을 통한 효과적인 데이터 공유.",
      },
      {
        title: "다용도성",
        description: "병사 휴대용 또는 차량 탑재용.",
      },
    ],
  },

  specs: {
    title: "제원",
    frequency: {
      label: "주파수",
      value: "40MHz 감청 대역폭 (3 MHz ~ 3 GHz)",
    },
    software: {
      label: "소프트웨어",
      value: "노트북용 Prefix 또는 태블릿용 Tacfix",
    },
    scalability: {
      label: "확장성",
      value: "탑재형 또는 휴대형 구성",
    },
    compatibility: {
      label: "호환성",
      value: "보고 및 전문 신호 분석을 위한 다양한 서드파티 소프트웨어 지원",
    },
    dfAccuracy: {
      label: "방향 탐지 정확도",
      items: [
        "≤3° RMS 30MHz ~ 2200MHz",
        "≤10° RMS 2200MHz ~ 2500MHz",
        "≤20° RMS > 2500MHz",
      ],
    },
  },

  contact: {
    text: "RESOLVE에 대해 더 알아보고 조직에 어떤 이점이 있는지 확인하시려면",
    suffix: "로 문의해 주세요.",
  },
} as const

export type ResolveStrings = typeof resolve

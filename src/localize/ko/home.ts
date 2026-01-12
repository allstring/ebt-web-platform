export const home = {
  hero: {
    title: "완벽한 작전 수행을 위한 최첨단 국방 기술",
    description1: "전자전부터 화생방 위협까지, 정밀 공학 기반의",
    description2: "완벽한 시스템 통합 솔루션을 제공합니다.",
    exploreSolutions: "솔루션 보기",
    contactUs: "도입 문의",
  },

  solutions: {
    sectionLabel: "솔루션",
    sectionTitle: "차세대 통합 국방 시스템",
    learnMore: "자세히 보기",
    items: [
      {
        title: "전자전 (Electronic Warfare)",
        description:
          "복잡한 전장 환경에서도 우위를 점할 수 있는 첨단 신호 처리 및 주파수 관리 시스템을 구축합니다.",
      },
      {
        title: "화학전 대응",
        description:
          "적대적 환경 및 위험 지역 내 화학 작용제를 실시간으로 탐지하고 정밀하게 식별합니다.",
      },
      {
        title: "생물학전 대응",
        description:
          "고감도 분석 시스템을 통해 생물학적 위협을 조기에 발견하고 신속한 대응 체계 구축을 지원합니다.",
      },
    ],
  },

  featured: {
    label: "대표 제품",
    title: "RESOLVE",
    description:
      "EBTech의 기술력이 집약된 통합 국방 플랫폼입니다. 첨단 센서 융합 기술을 통해 위협을 실시간으로 분석하고 최적의 대응 전략을 수립합니다.",
    features: [
      "전 영역 위협 탐지 및 식별",
      "실시간 데이터 통합 처리",
      "유연한 시스템 확장성",
    ],
    viewSpecs: "상세 제원 보기",
    imageAlt: "RESOLVE 국방 플랫폼 인터페이스 이미지",
  },

  capabilities: {
    sectionLabel: "Why EBTech",
    sectionTitle: "독보적인 엔지니어링 기술력",
    sectionDescription:
      "우리는 단순한 기술 공급을 넘어, 검증된 공학 설계와 최첨단 기술의 결합으로 현장의 기대를 뛰어넘는 솔루션을 실현합니다.",
    items: [
      {
        title: "포괄적인 엔드 투 엔드 통합 설계",
        description:
          "설계부터 구축까지 모든 단계가 유기적으로 연결되어 어떤 플랫폼에서도 중단 없는 운영을 보장합니다.",
      },
      {
        title: "실전에서 검증된 신뢰성",
        description:
          "수많은 현장 배치 경험과 강력한 지원 인프라를 바탕으로, 실제 작전 환경에서 그 가치를 입증했습니다.",
      },
      {
        title: "끊임없는 R&D 혁신",
        description:
          "내일의 위협에 미리 대비하기 위해 연구 개발을 멈추지 않고 운영 효율을 끊임없이 개선합니다.",
      },
      {
        title: "한계가 없는 구동 안정성",
        description:
          "가장 가혹하고 까다로운 운영 환경에서도 흔들림 없는 성능과 최고의 신뢰성을 유지하도록 설계되었습니다.",
      },
      {
        title: "분야별 기술 전문가 그룹",
        description:
          "국방 시스템 통합 및 엔지니어링 분야에서 수년간 숙련된 최고의 전문가들이 최상의 결과를 만듭니다.",
      },
      {
        title: "현장 맞춤형 솔루션",
        description:
          "고객의 특수한 작전 요구 사항을 정확히 파악하여 각 현장에 가장 최적화된 시스템을 제안합니다.",
      },
    ],
  },

  cta: {
    title: "귀하의 프로젝트에 최적화된 솔루션을 제안해 드립니다",
    description: "지금 바로 EBTech의 엔지니어링 전문가와 상담해 보세요.",
    contactUs: "문의하기",
  },
} as const

export type HomeStrings = typeof home
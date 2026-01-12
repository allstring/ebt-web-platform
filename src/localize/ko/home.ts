export const home = {
  hero: {
    title: "중요 작전을 위한 국방 기술",
    description1: "전자전, 화학전, 생물학전을 위한",
    description2: "시스템 통합 및 정밀 엔지니어링.",
    exploreSolutions: "솔루션 살펴보기",
    contactUs: "문의하기",
  },

  solutions: {
    sectionLabel: "솔루션",
    sectionTitle: "통합 방위 시스템",
    learnMore: "자세히 보기",
    items: [
      {
        title: "전자전",
        description:
          "복잡한 작전 환경을 위한 고급 신호 처리 및 스펙트럼 관리 시스템.",
      },
      {
        title: "화학전",
        description:
          "분쟁 및 위험 환경에서 화학 작용제의 고급 탐지, 식별 및 모니터링 시스템.",
      },
      {
        title: "생물학전",
        description:
          "생물학적 위협을 식별하고 신속한 대응 작전을 지원하도록 설계된 고감도 탐지 및 분석 시스템.",
      },
    ],
  },

  featured: {
    label: "주력 제품",
    title: "RESOLVE",
    description:
      "실시간 위협 분석 및 대응 조정과 결합된 고급 센서 융합을 제공하는 당사의 대표 통합 방위 플랫폼.",
    features: [
      "다중 도메인 위협 탐지",
      "실시간 데이터 통합",
      "확장 가능한 아키텍처",
    ],
    viewSpecs: "사양 보기",
    imageAlt: "RESOLVE 방위 플랫폼 인터페이스",
  },

  capabilities: {
    sectionLabel: "EBTech를 선택하는 이유",
    sectionTitle: "엔지니어링 우수성",
    sectionDescription:
      "최첨단 기술과 검증된 엔지니어링 관행을 결합하여 기대를 뛰어넘는 미션 크리티컬 솔루션을 제공합니다. 우수성에 대한 우리의 헌신이 모든 것을 이끕니다.",
    items: [
      {
        title: "엔드투엔드 시스템 설계",
        description:
          "모든 구성 요소와 플랫폼에서 원활한 운영을 보장하는 종합적인 시스템 설계 및 통합 서비스.",
      },
      {
        title: "실전 검증 배치",
        description:
          "광범위한 현장 배치 경험과 신뢰할 수 있는 지원 인프라를 갖춘 실전 검증 솔루션.",
      },
      {
        title: "지속적인 R&D",
        description:
          "새로운 위협과 진화하는 작전 요구 사항에 앞서가기 위한 지속적인 연구 개발.",
      },
      {
        title: "미션 크리티컬 신뢰성",
        description:
          "까다로운 작전 환경에서 최고 수준의 신뢰성과 성능을 위해 설계.",
      },
      {
        title: "전문 엔지니어링 팀",
        description:
          "방위 기술 및 시스템 통합에 대한 깊은 전문 지식을 갖춘 전담 엔지니어 팀.",
      },
      {
        title: "맞춤형 솔루션",
        description:
          "특정 작전 요구 사항과 통합 요구 사항을 충족하도록 설계된 맞춤형 솔루션.",
      },
    ],
  },

  cta: {
    title: "요구 사항을 논의할 준비가 되셨습니까?",
    description: "엔지니어링 팀과 연결하세요.",
    contactUs: "문의하기",
  },
} as const

export type HomeStrings = typeof home

export const about = {
  // Hero Section
  hero: {
    sectionLabel: "회사 소개",
    tagline: "Evolve Battlefield Technologies",
    title: "보이지 않는 것을",
    titleAccent: "보는 기술",
    description:
      "적의 전파, 드론의 신호, 공기 중 화학물질.\n전장에서 가장 위험한 것은 보이지 않는 것들입니다.",
    subtitle:
      "이비티(주)는 이런 위협을 탐지하고, 식별하고, 대응하는 시스템을 만듭니다.",
  },

  // Value Propositions Section
  valueProps: {
    sectionLabel: "왜 EBT인가",
    title: "우리가 다른 이유",
    items: [
      {
        title: "통합 시스템 설계",
        description:
          "각기 다른 센서를 연결하고, 기존 체계와 엮어 하나의 작전 시스템으로 만듭니다. 단품 공급부터 전체 솔루션 설계까지, 고객의 요구에 맞춰 대응합니다.",
      },
      {
        title: "운용 환경에 맞춘 설계",
        description:
          "같은 기술도 환경에 따라 다른 시스템이 됩니다. 군부터 민간까지 모든 영역을 아우르는 폭넓은 라인업을 바탕으로 각 환경에 꼭 맞는 최적의 솔루션을 제안합니다.",
      },
      {
        title: "검증된 기술력",
        description:
          "기대를 뛰어넘는 혁신 기술을 성공적으로 개발 및 공급해 온 풍부한 실적을 보유하고 있으며, 이를 통해 파트너들과 공고한 신뢰 관계를 구축하고 있습니다.",
      },
    ],
  },

  // Core Capabilities Section
  capabilities: {
    sectionLabel: "핵심 역량",
    title: "우리는 세 가지 영역에서 일합니다",
    items: [
      {
        title: "전자기전",
        description:
          "적의 통신, 레이더, 드론 등이 내보내는 전파를 수집합니다. 신호의 출처를 정확히 찾아내 무력화까지 수행합니다.",
      },
      {
        title: "대드론",
        description:
          "위협이 되는 드론을 탐지하고 식별합니다. 아군 드론과 적 드론을 구분하고, 즉각 대응할 수 있게 합니다.",
      },
      {
        title: "화학/방사능 탐지",
        description:
          "화학작용제와 방사능 물질을 조기에 발견하여 대응할 수 있게 합니다. 함정, 잠수함, 부대, 주요 시설에 탐지 체계를 구축합니다.",
      },
    ],
  },

  // System Integration Section
  systemSection: {
    sectionLabel: "엔드 투 엔드",
    title: "센서를 넘어 시스템으로",
    description:
      "센서가 데이터를 쏟아내면, 누군가는 그 데이터를 해석해야 합니다. 센서끼리 연결되어야 하고, C2 체계와 통합되어야 합니다. 경보가 울리면 다음 행동이 정해져 있어야 합니다.",
    highlight: "우리는 이 전체 과정을 설계합니다.",
    stepLabels: ["센서 선정", "데이터 융합", "체계 통합", "운용 지원까지"],
    conclusion: "부품이 아닌 완성된 시스템을 공급합니다.",
    steps: [
      {
        title: "센서 선정",
        description: "임무에 적합한 센서 선택",
      },
      {
        title: "데이터 융합",
        description: "다양한 소스의 데이터 통합",
      },
      {
        title: "체계 통합",
        description: "지휘통제 시스템과 연동",
      },
      {
        title: "운용 지원",
        description: "효과적인 시스템 운용 보장",
      },
    ],
  },

  // Scalability Section
  scalability: {
    sectionLabel: "우리의 접근",
    title: "빠르게. 정확하게. 더 폭넓게.",
    description:
      "위협은 계속 진화합니다. 새로운 드론, 새로운 통신 방식, 새로운 위협물질.",
    keyword:"우리는 변화에 빠르게 대응합니다.",
    subtitle:
      "군 작전 환경에서 검증한 기술은 민간에도 적용됩니다. \n같은 기술, 다른 환경. 요구사항에 맞춰 시스템을 조정합니다.",
  },

  // Contact CTA Section
  contact: {
    sectionLabel: "문의하기",
    title: "맞춤형 솔루션이 필요하신가요?",
    description: "문의 사항이 있으시면 연락해주세요.",
    email: "info@ebtech.kr",
    phone: "+82 31 721 6380",
    cta: "문의하기",
  },
} as const

export type AboutStrings = typeof about

export const solution = {
  label: "솔루션",
  title: "현장의 문제를 해결하는 국방 시스템",
  description:
    "EBT의 모든 솔루션은 실제 작전 현장의 까다로운 요구사항을 반영합니다. 실전 투입을 위해 설계된 하드웨어와 소프트웨어의 완벽한 통합을 경험해 보십시오.",
  learnMore: "자세히 보기",
  backToSolutions: "전체 솔루션",
  electronicWarfare: {
    label: "EW",
    title: "전자기전 대응",
    summary:
      "복잡한 전자기 환경에서의 정밀한 신호 처리 및 효율적인 주파수 대역 관리 솔루션을 제공합니다.",
  },
  nuclearChemical: {
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

  // NC 페이지
  ncPage: {
    header: {
      label: "솔루션",
      title: "NC 방어",
      description: "핵 및 화학 위협에 대한 종합적인 탐지 시스템으로, 신속한 식별, 경보 및 대응을 위한 통합 모니터링 솔루션을 제공합니다.",
    },
    architecture: {
      label: "시스템 구성",
      title: "통합 탐지 네트워크",
      description: "탐지 센서, 경보 장치, 제어 시스템의 원활한 통합으로 포괄적인 모니터링과 신속한 대응을 지원합니다.",
      hoverTitle: "제품 라인업 보기",
      hoverSubtitle: "클릭하여 구성품 확인",
      footer: "통합 구성 예시",
    },
    products: {
      label: "제품 라인업",
      title: "탐지 시스템",
      chemproX: "휴대용 화학 탐지기",
      ncMonitoring: "통합 탐지 및 제어 플랫폼",
      biobats: "스마트 생물학적 탐지 및 조기 경보 시스템",
      ranidx: "시스템 호환 방사선 검출기",
    },
    protection: {
      label: "방어 개념",
      title: "통합 NC 방어 체계",
      items: [
        {
          name: "조기 탐지",
          description: "신경, 수포, 질식 작용제에 대한 다중 센서 탐지 및 지속적인 공기/표면 샘플링.",
        },
        {
          name: "위협 식별",
          description: "알려진/미지의 화학 시그니처에 대한 작용제 라이브러리 상관분석 및 자동 경보.",
        },
        {
          name: "격리 및 차단",
          description: "고온/온열/저온 구역 설정, 환기 격리, 노출 감소를 위한 인원 경로 지정.",
        },
        {
          name: "제독 및 복구",
          description: "안전한 재진입을 위한 제독 워크플로우 가이드, 중화 추적 및 허가 기준.",
        },
      ],
    },
    contact: {
      label: "문의",
      title: "NC 방어 솔루션",
      description: "통합 NC 탐지 및 모니터링 솔루션을 살펴보세요. 기술 사양 및 배치 옵션에 대해 문의해 주세요.",
      button: "문의하기",
    },
  },

  // EW 페이지
  ewPage: {
    header: {
      label: "솔루션",
      title: "전자기전",
      description: "적대적 환경에서 탐지, 보호 및 대응을 위한 포괄적인 전자기 스펙트럼 작전.",
    },
    categories: {
      es: {
        label: "ES (Electronic Support)",
        title: "전자지원",
      },
      ea: {
        label: "EA (Electronic Attack)",
        title: "전자공격",
      },
      integration: {
        label: "Integration & Software",
        title: "통합 및 소프트웨어",
      },
    },
    products: {
      label: "제품 라인업",
      title: "제품 라인업",
      goldenBatEws: "이동형 전자기전 솔루션",
      ebtPes: "휴대용 RF 스캐너",
      perceive: "통합 광대역 센서",
      resolve: "전술 전자지원 시스템",
      microEsm: "소형 전자지원 측정 시스템",
      phobosM4: "다중 채널 전자지원 시스템",
      deceive: "전자 기만 시스템",
      mapview: "전자전 통합 소프트웨어",
      locateT: "전략 HF 모니터링 및 방향 탐지",
    },
    systemConfig: {
      label: "시스템 구성",
      title: "핵심 구성 요소",
      items: [
        {
          name: "신호 정보",
          description: "작전 스펙트럼 전반에 걸친 전자기 신호의 실시간 수집 및 분석.",
        },
        {
          name: "전자 공격",
          description: "위협 무력화를 위한 지향성 에너지 및 재밍 기능.",
        },
        {
          name: "전자 보호",
          description: "아군 시스템 무결성 및 통신 연속성을 보장하기 위한 방어 조치.",
        },
        {
          name: "스펙트럼 관리",
          description: "전자기 자원의 동적 할당 및 조정.",
        },
      ],
    },
    relatedProduct: {
      label: "관련 제품",
      title: "RESOLVE 플랫폼",
      description: "통합 방어 플랫폼은 실시간 센서 융합 및 지휘 조정을 통한 원활한 전자기전 기능을 제공합니다.",
      button: "정보 요청",
    },
  },
  // C-UAS 페이지
  cuasPage: {
    header: {
      label: "솔루션",
      title: "대드론 방어",
      description: "무인 항공기 위협에 대한 탐지, 추적, 식별 및 무력화를 위한 종합 대드론 솔루션.",
    },
    products: {
      label: "제품 라인업",
      title: "제품 라인업",
      ebtPesDetector: "드론 탐지 시스템",
      ebtPesJammer: "드론 재밍 시스템",
    },
    capabilities: {
      label: "시스템 기능",
      title: "통합 대드론 방어",
      items: [
        {
          name: "탐지 및 추적",
          description: "작전 공역 전반에 걸친 무인 항공 시스템의 다중 센서 탐지 및 추적.",
        },
        {
          name: "식별 및 분류",
          description: "실시간 경보 및 신뢰도 점수를 통한 자동 위협 평가 및 분류.",
        },
        {
          name: "무력화",
          description: "RF 재밍 및 지향성 에너지를 포함한 드론 무력화를 위한 통합 대응 수단.",
        },
        {
          name: "지휘 통제",
          description: "조정된 대응 및 다중 사이트 관리를 위한 중앙 집중식 C2 인터페이스.",
        },
      ],
    },
    relatedProduct: {
      label: "관련 제품",
      title: "대드론 솔루션",
      description: "실시간 상황 인식 및 조정된 대응 기능을 갖춘 통합 대드론 탐지, 추적 및 무력화 솔루션.",
      button: "정보 요청",
    },
  },
} as const

export type SolutionStrings = typeof solution
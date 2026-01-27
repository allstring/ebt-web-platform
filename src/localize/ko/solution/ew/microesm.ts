export const microesm = {
  title: "MicroESM",
  subtitle: "초소형 전술 레이더 전자지원 시스템",
  tagline: "신속 전개 가능한 휴대형 전술 정보 시스템",

  highlights: {
    type: "RESM",
    weight: "< 2kg",
    frequency: "2-18 GHz",
    coverage: "360°",
  },

  overview: {
    title: "제품 개요",
    description:
      "MicroESM은 기존 대형 플랫폼 기반 RESM 시스템의 한계를 극복하기 위해 개발된 초소형 레이더 전자지원 시스템입니다.\n2kg 미만의 초경량 시스템으로 2-18 GHz 대역의 레이더 신호를 360° 전방위로 수동 탐지 및 식별합니다.\n개인 휴대형 구성, 고정식 해안 감시, 무인기(UAV), 무인수상정(USV), 지상/해상 및 차량 등 다양한 플랫폼에 배치 가능합니다.",
    configurationsTitle: "두 가지 구성",
    configurations: [
      { name: "MicroESM 1t", description: "태블릿 기반 인터페이스" },
      { name: "MicroESM 1l", description: "노트북 기반 인터페이스" },
    ],
  },

  features: {
    title: "주요 특징",
    items: [
      {
        title: "초소형 경량 설계",
        description: "본체 중량 2kg 미만, 크기 180×180×96mm로 다양한 플랫폼 통합 가능",
        icon: "feather",
      },
      {
        title: "광대역 레이더 탐지",
        description: "주파수 대역 2.0-18.0 GHz, 360° 방위각 커버리지 (안테나 4개), 방위각 정확도 7° RMS",
        icon: "radar",
      },
      {
        title: "고급 신호처리",
        description: "초당 최대 200,000 펄스 처리, 100개 이상 방사체 동시 추적, 확장 가능한 방산 모드 라이브러리",
        icon: "cpu",
      },
      {
        title: "유연한 전원 옵션",
        description: "LIPS 14 배터리 3시간, BB 2590 배터리 12시간, 20W 미만 저전력 소비, 교환 가능한 배터리 팩",
        icon: "battery",
      },
      {
        title: "데이터 로깅 및 저장",
        description: "연속 펄스 데이터 로깅, 실시간 스트리밍 또는 저장, 내부/외부 저장장치 지원",
        icon: "database",
      },
      {
        title: "수동 은밀 운용",
        description: "수동 레이더 탐지만 수행, 능동 방사 없음, 낮은 열 신호로 은밀한 작전 수행",
        icon: "eyeOff",
      },

    ],
  },

  configurations: {
    title: "구성",
    tablet: {
      name: "MicroESM 1t",
      subtitle: "태블릿 기반",
      bestFor: "최적 용도",
      items: [
        "전술 야전 작전",
        "개인 병사 배치",
        "이동 정찰",
        "신속 배치 시나리오",
      ],
    },
    laptop: {
      name: "MicroESM 1l",
      subtitle: "노트북 기반",
      bestFor: "최적 용도",
      items: [
        "장기 임무 분석",
        "지휘소 통합",
        "향상된 처리 능력",
        "상세 데이터 분석",
      ],
    },
  },

  specs: {
    title: "사양",
    categories: {
      performance: {
        title: "성능",
        items: [
          { label: "주파수 범위", value: "2.0 - 18.0 GHz" },
          { label: "탐지 방식", value: "수동 탐지 및 자동 식별" },
          { label: "방위각 정확도", value: "7° RMS" },
          { label: "방위각 커버리지", value: "360° (안테나 4개)" },
          { label: "감도", value: "-55 dBm (방위각) / -70 dBm (CW)" },
          { label: "펄스 처리", value: "초당 최대 200,000 펄스" },
          { label: "방사체 라이브러리", value: "200개 모드 라인 (확장 가능)" },
          { label: "동시 추적", value: "최대 100개 방사체" },
          { label: "동적 범위", value: "50 dB" },
        ],
      },
      physical: {
        title: "물리적 사양",
        headers: ["항목", "MicroESM 1t", "MicroESM 1l"],
        items: [
          { label: "본체", tablet: "2kg 미만", laptop: "2kg 미만" },
          { label: "디스플레이", tablet: "1kg (태블릿)", laptop: "약 1.5kg (노트북)" },
          { label: "크기", tablet: "180×180×96 mm", laptop: "180×180×96 mm" },
          { label: "환경 보호", tablet: "IP68 (본체) / IP65 (태블릿)", laptop: "IP68 (본체)" },
          { label: "작동 온도", tablet: "-20°C ~ +48°C", laptop: "-20°C ~ +48°C" },
        ],
      },
    },
  },

  useCases: {
    title: "활용 사례",
    items: [
      {
        title: "전술 야전 작전",
        subtitle: "개인 휴대형 MANPACK 배치",
        icon: "users",
        applications: [
          "최전선 정찰 부대",
          "경전자전 부대 (LEWTs)",
          "특수 작전 부대",
          "국경 순찰 및 감시",
        ],
        benefits: [
          "비전문 운용자도 수분 내 배치 가능",
          "기동 중에도 제한 없이 운용",
          "배터리 구동으로 3-12시간 운용",
          "수동 은밀 작전",
        ],
      },
      {
        title: "해안 감시",
        subtitle: "고정 설치 24/7 모니터링",
        icon: "anchor",
        applications: [
          "해안 국경 감시",
          "항만 및 항구 보안",
          "해양 영역 인식",
          "주요 기반시설 보호",
        ],
        benefits: [
          "24/7 무인 연속 운용",
          "외부 전원으로 무제한 가동",
          "무선 원격 제어",
          "다중 센서 네트워크 구성 가능",
        ],
      },
      {
        title: "U*V 및 차량 통합",
        subtitle: "다중 플랫폼 배치",
        icon: "plane",
        applications: [
          "UAV/드론 탑재",
          "USV/소형 선박 설치",
          "지상 차량 장착",
          "무인 시스템 통합",
        ],
        benefits: [
          "초경량 설계 (2kg 미만)",
          "다양한 장착 옵션",
          "탐지 범위 확장",
          "협력 센서 네트워크 구성",
        ],
      },
      {
        title: "분산 센서 네트워크",
        subtitle: "다중 센서를 통한 지역 커버리지",
        icon: "network",
        applications: [
          "경계 보안 네트워크",
          "지역 감시 어레이",
          "2개 이상 센서로 위치 측정",
          "지휘통제 시스템 통합",
        ],
        benefits: [
          "확장 가능한 구조",
          "무선 네트워킹",
          "협력 추적",
          "API를 통한 C2 시스템 통합",
        ],
      },
    ],
  },

  contact: {
    text: "MicroESM에 대해 더 알아보고 조직에 어떤 이점이 있는지 확인하시려면",
    suffix: "로 문의해 주세요.",
  },

  disclaimer: {
    manufacturer: "본 제품은 ESROE Limited(영국)가 제조하며,",
    reseller: "EBT는 한국 내 공식 리셀러로서 판매 및 기술 지원을 제공합니다.",
    specs: "제품 사양 및 성능은 제조사의 공식 문서를 기준으로 합니다.",
  },
} as const

export type MicroesmStrings = typeof microesm

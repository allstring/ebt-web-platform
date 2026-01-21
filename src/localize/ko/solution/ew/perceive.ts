export const perceive = {
  title: "PERCEIVE Multi-Role (MR)®",
  subtitle: "차세대 통합 광대역 센서",
  tagline: "차세대 통합 광대역 센서",

  whatIs: {
    title: "PERCEIVE MR®란?",
    description: "PERCEIVE MR®는 전자 감시의 최첨단에서 사용하기 위해 개발된 소형 안테나 헤드입니다. 이러한 소형 센서에서 적응형 빔포밍과 초고해상도 방향 탐지 기술을 모두 활용하는 최초의 전술용 광대역 통합 안테나 헤드입니다. 이 접근 방식을 통해 운용자는 클러터를 '투시'하고 가장 높은 정확도와 가장 작은 센서 프로파일로 정밀한 위치 고정을 보고할 수 있습니다.",
  },

  features: {
    title: "주요 특징",
    items: [
      {
        title: "100MHz 순시 대역폭",
        description: "포괄적인 신호 탐지 및 분석을 위한 2MHz~6GHz 커버리지.",
      },
      {
        title: "초고해상도 방향 탐지",
        description: "동일 채널의 다중 신호를 정밀하게 분리.",
      },
      {
        title: "32개 디지털 드롭 채널",
        description: "다중 동시 채널 모니터링 및 분석 기능.",
      },
      {
        title: "적응형 디지털 빔포밍",
        description: "감도 향상 및 인접 채널 간섭 감소.",
      },
      {
        title: "2°RMS DF 정확도",
        description: "방위각 및 고각 방향 탐지 (30MHz - 6GHz).",
      },
      {
        title: "고속 호퍼 감청",
        description: "주파수 도약 신호의 효과적인 감청.",
      },
      {
        title: "듀얼 GNSS 컴패싱",
        description: "정확한 위치 측정을 위한 MEMS 관성 센서 데이터 및 자기 나침반 탑재.",
      },
      {
        title: "PREFIX/VIPER 소프트웨어",
        description: "직관적인 인터페이스로 노트북 또는 화면에서 사용.",
      },
    ],
  },

  specs: {
    title: "제원",
    interceptFreq: {
      label: "감청 주파수 범위",
      value: "2MHz ~ 6GHz",
    },
    dfFreq: {
      label: "방향 탐지 주파수 범위",
      value: "30MHz ~ 6GHz",
    },
    dfAccuracy: {
      label: "방향 탐지 정확도",
      items: [
        "30MHz ~ 500MHz: 2.5도 RMS",
        "500MHz ~ 6GHz: 1.2도 RMS",
      ],
    },
    scanSpeed: {
      label: "스캔 속도",
      items: [
        "고속 스캔: 3GHz/초",
        "DF 스캔: 150MHz/초",
      ],
    },
    lpiPerformance: {
      label: "LPI 성능",
      value: "최대 1000 홉/초",
    },
    systemWeight: {
      label: "시스템 중량",
      value: "23Kg (휴대용, 배터리 제외)",
    },
    radioheadWeight: {
      label: "라디오헤드 중량",
      value: "10Kg",
    },
    systemVolume: {
      label: "시스템 부피 (라디오헤드)",
      value: "0.28m × 0.46m",
    },
    software: {
      label: "소프트웨어",
      value: "노트북용 Prefix 또는 태블릿용 Tacfix",
    },
  },

  contact: {
    text: "PERCEIVE MR®에 대해 더 알아보고 조직에 어떤 이점이 있는지 확인하시려면",
    suffix: "로 문의해 주세요.",
  },
} as const

export type PerceiveStrings = typeof perceive

export const ews = {
  title: "GoldenBat-EWS",
  subtitle: "이동형 전자전 솔루션",
  tagline: "어디서든 전자기 스펙트럼을 장악하십시오",

  whatIs: {
    title: "GoldenBat-EWS란?",
    description: "GoldenBat-EWS는 차량 탑재형 전자전(EW) 시스템으로, 필요한 곳 어디에서든 전자기 스펙트럼에 대한 탁월한 상황 인식과 제어 능력을 제공합니다. 전자지원(ES)과 전자공격(EA) 기능을 결합하여, 위치에 관계없이 전장에서 결정적인 우위를 점하는 데 필요한 정보를 제공합니다.",
  },

  features: {
    title: "주요 특징",
    items: [
      {
        title: "차량 탑재형 기동성",
        description: "GoldenBat-EWS를 원하는 위치에 배치하여 변화하는 위협에 유연하게 대응하고 기회를 포착하십시오.",
      },
      {
        title: "종합적인 전자전 능력",
        description: "ES, EA 및 신호 모니터링 기능의 완전한 제품군을 제공합니다.",
      },
      {
        title: "첨단 신호 처리",
        description: "정확한 신호 분석과 위협 식별을 위한 최첨단 알고리즘을 적용합니다.",
      },
      {
        title: "광대역 커버리지",
        description: "광범위한 주파수를 커버하여 포괄적인 탐지 및 모니터링을 보장합니다.",
      },
      {
        title: "고성능 하드웨어",
        description: "최적의 성능과 신뢰성을 위한 강력한 하드웨어 구성 요소를 탑재합니다.",
      },
      {
        title: "사용자 친화적 인터페이스",
        description: "운용자를 위한 직관적이고 사용하기 쉬운 인터페이스를 제공합니다.",
      },
      {
        title: "확장 가능한 아키텍처",
        description: "특정 요구 사항에 맞게 쉽게 맞춤화하고 확장할 수 있습니다.",
      },
    ],
  },

  specs: {
    title: "제원",
    es: {
      title: "ES",
      cesm: {
        title: "CESM",
        items: [
          "30MHz - 6GHz (옵션: 최대 18GHz)",
          "초당 최대 1000홉의 호퍼에 대한 방향 탐지",
        ],
      },
      resm: {
        title: "RESM",
        items: [
          "2GHz - 18GHz",
          "전방위 360° 방위각 커버리지",
        ],
      },
    },
    ea: {
      title: "EA",
      rxAntenna: {
        title: "수신 안테나",
        items: [
          "30MHz - 6GHz",
          "6-18GHz(옵션)",
        ],
      },
      txAntenna: {
        title: "송신 안테나",
        items: [
          "30MHz - 6GHz",
        ],
      },
      jammingMode: {
        title: "재밍 모드",
        items: [
          "Brute Force 모드(톤, 노이즈, 멀티 톤, 스윕, AM 변조)",
          "Barrage 모드",
          "Response 모드",
          "Sequential Brute 모드",
        ],
      },
    },
    sw: {
      title: "SW",
      signalMonitoring: {
        title: "신호 모니터링",
        description: "광대역 스펙트럼으로 통신 신호 모니터링",
      },
      signalIdentification: {
        title: "신호 식별/신호 분류",
        description: "데이터베이스 및 지도와 연동하여 정확한 신호 식별 및 분류",
      },
      missionPlanning: {
        title: "임무 계획/신호 분석",
        description: "워크플로우 기반 임무 계획, 실행, 보고 기능 및 고급 신호 분석 기능",
      },
    },
  },

  contact: {
    text: "GoldenBat-EWS에 대해 더 알아보고 조직에 어떤 이점이 있는지 확인하시려면",
    suffix: "로 문의해 주세요.",
  },
} as const

export type EwsStrings = typeof ews

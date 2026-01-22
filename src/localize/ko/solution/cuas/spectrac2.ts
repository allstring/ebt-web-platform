export const spectrac2 = {
  title: "Spectra-C2",
  subtitle: "모바일 UAS 탐지 및 재밍 지휘 시스템",
  tagline: "모바일 기기를 위한 휴대용 대드론 솔루션",

  whatIs: {
    title: "Spectra-C2란?",
    description: "Spectra-C2는 UAS 탐지 및 재밍을 위한 차세대 모바일 지휘통제 시스템입니다. 스마트폰이나 태블릿에 탐지기 또는 재밍 장비를 연결하여 실시간 상황 인식 기능을 제공합니다. Windows 데스크톱 지원으로 어디서든 작전을 모니터링하고 제어할 수 있어, 대드론 작전이 그 어느 때보다 쉬워집니다.",
  },

  features: {
    title: "주요 기능",
    items: [
      {
        title: "실시간 UAS 탐지 및 시각화",
        description: "무인항공기(UAS)를 실시간으로 탐지하고 맵 상에 마커로 표시합니다. GPS 기반 탐지 범위 원 표시(1km/5km/10km) 및 자동 위협 레벨 분류 시스템을 제공합니다.",
      },
      {
        title: "위협 레벨 분류",
        description: "거리별 자동 위협 분류 - Critical(빨강): 1km 이내, Warning(주황): 1-5km, Monitoring(초록): 5-10km, Distant(회색): 10km 이상.",
      },
      {
        title: "실시간 위치 추적",
        description: "GPS 위치 변경 시 UAS 거리 및 방위각이 자동으로 업데이트됩니다. 탐지 범위 원이 사용자 위치를 따라 실시간으로 이동하며 정확한 거리 및 방위각을 계산합니다.",
      },
      {
        title: "UAS 관리",
        description: "ID, 위치, 고도, 탐지 시간 등 상세 UAS 정보를 확인할 수 있습니다. 마커 클릭으로 개별 UAS 추적, 상세보기/추적/재밍/삭제 등 다양한 액션을 수행할 수 있습니다.",
      },
      {
        title: "다중 프로토콜 통신",
        description: "CoT(Cursor on Target) 프로토콜로 탐지기로부터 UAS 정보 수신. Protobuf 기반 통신으로 재머 장비 제어가 가능합니다.",
      },
      {
        title: "크로스 플랫폼 지원",
        description: "Android 스마트폰 및 태블릿에서 모바일 작전 수행 가능. Windows 데스크톱 지원으로 지휘소에서 종합적인 모니터링 및 제어가 가능합니다.",
      },
    ],
  },

  specs: {
    title: "기술 사양",
    items: [
      { label: "재머 통신", value: "Protobuf 기반 양방향 제어" },
      { label: "탐지기 프로토콜", value: "CoT (Cursor on Target) 실시간 메시징" },
      { label: "경로 예측", value: "UAS 궤적 추적 및 예측 알고리즘" },
      { label: "다중 장비 제어", value: "복수 재머 장비 동시 제어" },
      { label: "로깅 시스템", value: "완전한 UAS 탐지 이력 및 이벤트 로그" },
      { label: "알림 시스템", value: "다단계 경보 및 푸시 알림" },
    ],
  },

  platforms: {
    title: "지원 플랫폼",
    items: [
      { name: "Android", description: "스마트폰 및 태블릿용 모바일 앱 (API 21-34, Android 5.0 Lollipop ~ Android 14 지원)" },
      { name: "Windows", description: "지휘소 운용 및 모니터링을 위한 데스크톱 애플리케이션" },
    ],
  },

  contact: {
    text: "Spectra-C2에 대해 더 알아보고 대드론 역량을 강화하는 방법에 대해 문의하시려면",
    suffix: "로 연락해 주세요.",
  },
} as const

export type SpectraC2Strings = typeof spectrac2

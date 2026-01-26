export const mapview = {
  title: "MAP VIEW",
  subtitle: "전술 상황인식 디스플레이",
  tagline: "즉각적인 상황인식을 위한 실시간 전장 시각화",

  whatIs: {
    title: "MAP VIEW란?",
    description: "MAP VIEW는 전장 상황을 지리적 인터페이스에 시각화하는 전술 디스플레이입니다. 실제 지형 위에 아군, 적군, 중립, 위협, 센서, 플랫폼 정보를 겹쳐서 '지금 어디에서 무슨 일이 벌어지고 있는가'를 즉시 파악할 수 있게 합니다. C2/C4I 시스템의 중심 화면으로서, 지휘관에게 즉각적인 상황인식과 정보에 기반한 의사결정을 지원합니다."
  },

  elements: {
    title: "표시 요소",
    items: [
      {
        title: "지도 레이어",
        description: "위성 영상, 군사용 벡터 지도, 고도 정보(DEM), 군사 좌표계(MGRS, UTM, WGS84)."
      },
      {
        title: "트랙 표시",
        description: "아군 장비, 적 추정 위치, 미확인 신호, 식별 구분이 표시된 민간 객체."
      },
      {
        title: "센서 오버레이",
        description: "레이더 탐지 범위, SIGINT/ELINT 탐지 방향선(LOB), 추적 상태(Track quality)."
      },
      {
        title: "위협 표시",
        description: "미사일 사거리 원, 위협 등급 색상, 예상 궤적."
      }
    ]
  },

  features: {
    title: "통합 기능",
    items: [
      "통신 / 비통신 신호 분류",
      "ES (전자지원) 데이터 테이블",
      "실시간 트랙 관리",
      "전술 오버레이 도시"
    ]
  },

  contact: {
    text: "MAP VIEW에 대해 더 알아보기",
    suffix: "전술 작전을 위한"
  }
};

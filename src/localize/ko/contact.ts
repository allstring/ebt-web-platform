export const contact = {
  hero: {
    sectionLabel: "연락처 및 채용",
    title: "문의하기",
    description: "문의, 파트너십 또는 채용 기회에 대해 저희 팀과 연결하세요.",
  },

  location: {
    sectionLabel: "위치",
    title: "오시는 길",
    description: "저희 사무실을 방문하시거나 위치 안내를 받으세요.",
    companyName: "주식회사 이비티",
    addressLabel: "주소",
    address: "경기도 성남시 수정구 창업로 54, 504호",
    phoneLabel: "전화",
    phone: "+82-31-721-6375",
    emailLabel: "이메일",
    emailDescription: "일반 문의 - EBTech 및 역량에 대한 질문",
    email: "info@ebtech.kr",
  },

  career: {
    sectionLabel: "채용",
    title: "EBT와 함께하세요",
    description: "글로벌 리더로 성장할 인재를 기다립니다.",
    applicationDocs: "지원 서류",
    download: "다운로드",
    docs: [
      {
        title: "입사지원서 (HWP)",
        description: "한글 파일",
      },
      {
        title: "입사지원서 (WORD)",
        description: "워드 파일",
      },
      {
        title: "입사지원서 (PDF)",
        description: "PDF 파일",
      },
    ],
    resumeText: "이력서를 보내주세요",
  },
} as const

export type ContactStrings = typeof contact

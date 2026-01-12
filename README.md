<div align="center">

# EBT Web Platform

### EBTech 기업 홈페이지 프론트엔드

[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

EBTech의 핵심 기술 역량인 **드론 전장 시스템(Drone Warfare)** 및 **전자전(Electronic Warfare, EW) 기술**을 소개하는 웹 플랫폼입니다.

[Getting Started](#-getting-started) · [Features](#-features) · [Project Structure](#-project-structure) · [Scripts](#-scripts)

</div>

---

## ✨ Features

| 기능 | 설명 |
|:---:|:---|
| **다국어 지원** | 한국어, 영어, 일본어, 프랑스어 지원 (i18n) |
| **반응형 디자인** | 모바일/태블릿/데스크톱 대응 |
| **솔루션 소개** | EW, CW, BW 솔루션 및 제품 라인업 |
| **기업 정보** | 회사 소개, R&D, 뉴스, 문의 페이지 |

---

## 🛠 Tech Stack

### Core
| 기술 | 버전 | 설명 |
|:---:|:---:|:---|
| **React** | 19.2.3 | Vite 기반의 최신 React |
| **TypeScript** | 5.5 | 정적 타입으로 안정성 확보 |
| **Vite** | 7.3 | 빠른 개발 서버 및 빌드 |
| **React Router** | 6.26 | SPA 라우팅 |

### Styling & UI
| 기술 | 설명 |
|:---:|:---|
| **Tailwind CSS 4** | 유틸리티 퍼스트 스타일링 |
| **shadcn/ui** | Radix UI 기반 컴포넌트 라이브러리 |
| **Lucide React** | 아이콘 라이브러리 |

### DevOps
| 기술 | 설명 |
|:---:|:---|
| **Docker** | 일관된 개발 환경 |
| **Vercel** | 배포 플랫폼 |
| **ESLint** | 코드 품질 관리 |

---

## 📂 Project Structure

```
ebt-web-platform/
│
├── 📂 src/
│   ├── 📂 assets/              # 정적 리소스
│   │   ├── 📂 images/          # 이미지 파일
│   │   └── 📂 videos/          # 비디오 파일
│   │
│   ├── 📂 components/          # 재사용 컴포넌트
│   │   ├── 📂 ui/              # shadcn/ui 기본 컴포넌트
│   │   ├── navigation.tsx      # 네비게이션 바
│   │   ├── footer.tsx          # 푸터
│   │   ├── contact-form.tsx    # 문의 폼
│   │   └── ...
│   │
│   ├── 📂 pages/               # 페이지 컴포넌트
│   │   ├── Home.tsx            # 메인 페이지
│   │   ├── About.tsx           # 회사 소개
│   │   ├── Rnd.tsx             # R&D 페이지
│   │   ├── News.tsx            # 뉴스 페이지
│   │   ├── Contact.tsx         # 문의 페이지
│   │   └── 📂 Solution/        # 솔루션 페이지
│   │       ├── Solution.tsx    # 솔루션 메인
│   │       ├── 📂 EW/          # Electronic Warfare
│   │       ├── 📂 CW/          # Cyber Warfare
│   │       └── 📂 BW/          # Bio Warfare
│   │
│   ├── 📂 localize/            # 다국어 번역 파일
│   │   ├── 📂 ko/              # 한국어
│   │   ├── 📂 en/              # 영어
│   │   ├── 📂 ja/              # 일본어
│   │   └── 📂 fr/              # 프랑스어
│   │
│   ├── 📂 hooks/               # 커스텀 훅
│   ├── 📂 lib/                 # 유틸리티 & 설정
│   │   ├── utils.ts            # 유틸리티 함수
│   │   ├── i18n.ts             # 다국어 설정
│   │   └── fetcher.ts          # API 요청 함수
│   │
│   ├── 📂 styles/              # 스타일 파일
│   │   └── global.css          # 전역 스타일 (Tailwind)
│   │
│   ├── App.tsx                 # 루트 컴포넌트
│   ├── layout.tsx              # 레이아웃 컴포넌트
│   └── main.tsx                # 앱 진입점
│
├── 📂 public/                  # 정적 파일 (favicon 등)
├── 📂 .devcontainer/           # VS Code Dev Container 설정
│
├── index.html                  # HTML 템플릿
├── package.json                # 의존성 & 스크립트
├── vite.config.ts              # Vite 설정
├── tsconfig.json               # TypeScript 설정
├── eslint.config.js            # ESLint 설정
├── postcss.config.js           # PostCSS 설정
├── Dockerfile                  # Docker 이미지 설정
├── docker-compose.yml          # Docker Compose 설정
└── vercel.json                 # Vercel 배포 설정
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 22.12.0 이상
- **npm** 10.9.4 이상
- (선택) **Docker** & **Docker Compose**

### 방법 1: 로컬 개발

```bash
# 1. 의존성 설치
npm install

# 2. 개발 서버 실행
npm run dev
```

> 브라우저에서 http://localhost:5173 접속

### 방법 2: Docker 개발 환경

```bash
# 컨테이너 빌드 및 실행
docker-compose up --build

# 종료
docker-compose down
```

### 방법 3: VS Code Dev Container (권장)

Docker 환경에서 TypeScript / ESLint 오류 없이 개발하려면 Dev Container 사용을 권장합니다.

1. **Extension 설치**: `Dev Containers` (Microsoft)
2. **컨테이너 열기**: `Ctrl + Shift + P` → `Dev Containers: Reopen in Container`

---

## 📜 Scripts

| 명령어 | 설명 |
|:---|:---|
| `npm run dev` | 개발 서버 실행 (HMR 지원) |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과물 미리보기 |
| `npm run lint` | ESLint 코드 검사 |

---

## 🎨 UI 컴포넌트 추가 (shadcn/ui)

새로운 UI 컴포넌트가 필요할 때 shadcn/ui CLI를 사용합니다.

```bash
# 예시: Button 컴포넌트 추가
npx shadcn@latest add button

# 예시: Dialog 컴포넌트 추가
npx shadcn@latest add dialog
```

> 추가된 컴포넌트는 `src/components/ui/` 폴더에 생성됩니다.

---

## 🌐 다국어 지원

프로젝트는 4개 언어를 지원합니다. 번역 파일은 `src/localize/` 폴더에 있습니다.

| 언어 | 폴더 |
|:---:|:---:|
| 한국어 | `localize/ko/` |
| English | `localize/en/` |
| 日本語 | `localize/ja/` |
| Français | `localize/fr/` |

---

## ⚠️ Troubleshooting

### Docker 환경에서 Git 파일 변경 표시 문제

<details>
<summary>클릭하여 펼치기</summary>

**증상**: Docker 컨테이너에서 VS Code로 열면 모든 파일이 "변경됨"으로 표시됨

**원인**: Windows(CRLF)와 Linux(LF) 간 줄바꿈 문자 차이

**해결**: `.gitattributes` 파일로 줄바꿈 설정 통일
```
* text=auto eol=lf
```

</details>

---

## 📋 Roadmap

- [x] Docker 개발 환경 구축
- [x] 다국어 지원 (i18n)

- [ ] 테스트 코드 작성

---

<div align="center">

**© EBTech. All rights reserved.**

</div>
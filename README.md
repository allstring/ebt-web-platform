# 🚀 ebt-web-platform

**EBTech 기업 홈페이지 프론트엔드 프로젝트** 본 저장소는 EBTech의 핵심 기술 역량인 **드론 전장 시스템(Drone Warfare)** 및 **전자전(Electronic Warfare, EW) 기술**을 대외적으로 소개하기 위한 웹 플랫폼 프론트엔드 소스 코드를 포함합니다.

---

## 🛠 Tech Stack

| 기술 | 설명 |
|------|------|
| ![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react) | Vite 기반의 React 19 |
| ![TypeScript](https://img.shields.io/badge/TypeScript-✔-blue?logo=typescript) | 정적 타입 시스템을 통한 안정성 확보 |
| ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-✔-purple?logo=redux) | 효율적인 전역 상태 관리 |
| ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-✔-teal?logo=tailwindcss) | 유틸리티 퍼스트 프레임워크를 이용한 스타일링 |
| ![Docker](https://img.shields.io/badge/Docker-✔-blue?logo=docker) | 일관된 개발 및 배포 환경 제공 |
| ![Node.js](https://img.shields.io/badge/Node.js-22.21.1-green?logo=node.js) | 런타임 환경 |
| ![npm](https://img.shields.io/badge/npm-10.9.4-red?logo=npm) | 패키지 매니저 |


## 📂 Project Structure
```
📦 프로젝트 루트
├── 📂 src
│   ├── 📂 assets         # 🎨 정적 파일 (이미지, 폰트 등)
│   ├── 📂 components     # 🧩 재사용 가능한 UI 컴포넌트
│   ├── 📂 pages          # 📄 주요 페이지 컴포넌트
│   ├── 📂 store          # 🗄 Redux 상태 관리 관련 파일
│   ├── 📂 hooks          # 🔗 커스텀 훅
│   ├── 📂 utils          # 🛠 유틸리티 함수 모음
│   ├── 📂 styles         # 🎨 Tailwind 관련 스타일 파일
│   ├── 📂 api            # 🔗 백엔드 API 요청 관련 함수
│   ├── 📂 router         # 🚦 React Router 관련 파일
│   ├── 📜 main.tsx       # 🚀 애플리케이션 진입점
│   ├── 📜 App.tsx        # 🏠 루트 컴포넌트
├── 📜 index.html         # 📝 기본 HTML 파일
├── 📜 package.json       # 📦 패키지 정보 및 스크립트
├── 📜 tsconfig.json      # ⚙ TypeScript 설정 파일
├── 📜 vite.config.ts     # ⚡ Vite 설정 파일
├── 📜 eslint.config.js   # 🛠 ESLint 설정 파일
└── ... 기타 설정 파일
```


## 🐳 Development Environment (Docker)

본 프로젝트는 개발자 간의 개발 환경 일관성을 유지하기 위해 **Docker** 기반의 개발 환경을 지원합니다.

### Requirements
- [Docker](https://www.docker.com/) 설치
- [Docker Compose](https://docs.docker.com/compose/) 설치

### Run Development Server
Docker 컨테이너를 빌드하고 실행합니다.
```sh
docker-compose up --build
```
Accessing the Web
브라우저를 열고 아래 주소로 접속하세요:

🔗 http://localhost:5173

Stop Server
```sh
docker-compose down
```
### 🧩 VSCode Dev Container (권장)

Docker 환경에서 TypeScript / ESLint / JSX 오류 없이 개발하기 위해 VSCode Dev Container 사용을 권장합니다.

#### 사용 방법

1. VSCode Extension 설치
```
Dev Containers (Microsoft)
```
2. 컨테이너 실행 상태에서 VSCode 명령 실행

```
Ctrl + Shift + P
Dev Containers: Reopen in Container
```
## 💻 Local Development (Without Docker)
Docker 없이 로컬 환경에서 직접 실행하는 방법입니다. (Node.js 22.12.0 이상 권장)

1. 패키지 설치
```bash
npm install
```
2. 개발 서버 실행

```bash
npm run dev
```
## shadcn UI 컴포넌트 사용

`shadcn`로 컴포넌트 추가 하는 방법입니다. 필요의 경우 사용하세요.

```bash
npx shadcn@latest add button
```

## 📝 Notes
```
Docker 파일이 추가 될 에정입니다.
개발자 페이지가 계획에 추가 될 예정입니다.
```
© EBTech. All rights reserved.
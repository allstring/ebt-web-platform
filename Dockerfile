

# 1. Node.js 공식 이미지 사용
FROM node:22-alpine

RUN apk add --no-cache bash


# 2. 컨테이너 내부 작업 디렉토리 설정
WORKDIR /app

# 3. 패키지 정보만 먼저 복사 (의존성 캐시 활용)
COPY package.json package-lock.json* ./

# 4. 의존성 설치
RUN npm install

# 5. 애플리케이션 소스 코드 복사
COPY . .

# 6. Vite 개발 서버 포트 노출
EXPOSE 5173

# 7. 개발 서버 실행
CMD ["npm", "run", "dev"]
